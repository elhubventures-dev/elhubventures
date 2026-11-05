import fs from "fs";
import path from "path";
import { Resend } from "resend";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const submissionStore = new Map<string, number[]>();

const SERVICE_LABELS: Record<string, string> = {
  web: "Web Development",
  mobile: "Mobile App Development",
  uiux: "UI/UX Design",
  strategy: "Digital Strategy",
  cloud: "Cloud & DevOps",
  seo: "Search Engine Optimization",
  other: "Other",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-5k": "Under $5,000",
  "5k-15k": "$5,000 - $15,000",
  "15k-40k": "$15,000 - $40,000",
  "40k-plus": "$40,000+",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "1-2-months": "1-2 months",
  "3-6-months": "3-6 months",
  flexible: "Flexible timeline",
};

export type ContactPayload = {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  companyWebsite?: string;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

function getSenderEmail() {
  const configured = process.env.RESEND_FROM || "EL-HUB VENTURES <contact@elhubventures.com>";
  const match = configured.match(/<([^>]+)>/);
  return (match?.[1] || configured).trim();
}

function formatFrom(displayName: string) {
  return `${displayName} <${getSenderEmail()}>`;
}

function getAdminEmail() {
  return process.env.CONTACT_EMAIL || "contact@elhubventures.com";
}

function applyTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (html, [key, value]) => html.split(`{{${key}}}`).join(value),
    template
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function isRateLimited(clientIp: string) {
  const now = Date.now();
  const recent = (submissionStore.get(clientIp) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  recent.push(now);
  submissionStore.set(clientIp, recent);
  return false;
}

export async function sendContactEmails(payload: ContactPayload) {
  const templatesDir = path.join(process.cwd(), "email-templates");
  let adminTemplate = fs.readFileSync(path.join(templatesDir, "admin-notification.html"), "utf8");
  let userTemplate = fs.readFileSync(path.join(templatesDir, "user-autoresponder.html"), "utf8");

  const serviceText = SERVICE_LABELS[payload.service] || payload.service;
  const budgetText = BUDGET_LABELS[payload.budget] || payload.budget;
  const timelineText = TIMELINE_LABELS[payload.timeline] || payload.timeline;
  const firstName = payload.name.split(" ")[0] || payload.name;
  const messagePreview =
    payload.message.length > 100 ? `${payload.message.slice(0, 100)}...` : payload.message;

  adminTemplate = applyTemplate(adminTemplate, {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    service: escapeHtml(serviceText),
    budget: escapeHtml(budgetText),
    timeline: escapeHtml(timelineText),
    message: escapeHtml(payload.message),
  });

  userTemplate = applyTemplate(userTemplate, {
    firstName: escapeHtml(firstName),
    service: escapeHtml(serviceText),
    budget: escapeHtml(budgetText),
    timeline: escapeHtml(timelineText),
    messagePreview: escapeHtml(messagePreview),
  });

  const resend = getResendClient();
  const adminEmail = getAdminEmail();

  const adminResult = await resend.emails.send({
    from: formatFrom("EL-HUB VENTURES System"),
    to: adminEmail,
    bcc: adminEmail,
    subject: `New Lead: ${payload.name} - ${serviceText}`,
    html: adminTemplate,
    replyTo: payload.email,
  });

  if (adminResult.error) {
    throw new Error(adminResult.error.message || "Failed to send admin notification");
  }

  const userResult = await resend.emails.send({
    from: formatFrom("EL-HUB VENTURES"),
    to: payload.email,
    bcc: adminEmail,
    subject: "Request Received - EL-HUB VENTURES",
    html: userTemplate,
  });

  if (userResult.error) {
    throw new Error(userResult.error.message || "Failed to send user confirmation");
  }
}
