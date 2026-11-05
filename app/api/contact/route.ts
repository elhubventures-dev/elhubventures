import { NextResponse } from "next/server";
import { isRateLimited, sendContactEmails, type ContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIp = (forwarded?.split(",")[0] || "unknown").trim();

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const { name, email, service, message, budget, timeline, companyWebsite } = body;

    if (companyWebsite) {
      return NextResponse.json({ success: true, message: "Submission accepted" });
    }

    if (!name || !email || !service || !message || !budget || !timeline) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await sendContactEmails({ name, email, service, message, budget, timeline });
    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send email right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
