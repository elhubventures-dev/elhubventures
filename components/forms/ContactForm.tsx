"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { trackEvent } from "@/lib/analytics";
import { CALENDLY_URL } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  timeline: z.string().min(1, "Select a timeline"),
  message: z.string().min(10, "Share a little more about the project"),
  companyWebsite: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "mt-2 w-full border border-rule bg-paper px-3 py-2.5 text-ink outline-none focus-visible:border-gold";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      companyWebsite: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = (await response.json()) as { message?: string };
    if (!response.ok) {
      setStatus("error");
      setStatusMessage(result.message || "Unable to send right now. Please try again shortly.");
      return;
    }
    trackEvent("generate_lead", { method: "contact_form", service: values.service });
    if (window.dataLayer) {
      window.dataLayer.push({ event: "lead_form_submit", service: values.service });
    }
    reset();
    setStatus("success");
    setStatusMessage("Thank you for reaching out. Our team will contact you shortly.");
  };

  const openCalendly = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <form className="relative space-y-4 border border-rule bg-paper-raised p-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name
          </label>
          <input id="name" className={fieldClass} autoComplete="name" {...register("name")} />
          {errors.name ? <p className="form-error mt-1 text-sm text-red-700">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email address
          </label>
          <input id="email" type="email" className={fieldClass} autoComplete="email" {...register("email")} />
          {errors.email ? <p className="form-error mt-1 text-sm text-red-700">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-ink">
            Service needed
          </label>
          <select id="service" className={fieldClass} {...register("service")}>
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="uiux">UI/UX Design</option>
            <option value="strategy">Digital Strategy</option>
            <option value="cloud">Cloud & DevOps</option>
            <option value="seo">Search Engine Optimization</option>
            <option value="other">Other</option>
          </select>
          {errors.service ? <p className="form-error mt-1 text-sm text-red-700">{errors.service.message}</p> : null}
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Estimated budget
          </label>
          <select id="budget" className={fieldClass} {...register("budget")}>
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-40k">$15,000 - $40,000</option>
            <option value="40k-plus">$40,000+</option>
          </select>
          {errors.budget ? <p className="form-error mt-1 text-sm text-red-700">{errors.budget.message}</p> : null}
        </div>
        <div>
          <label htmlFor="timeline" className="text-sm font-medium text-ink">
            Preferred timeline
          </label>
          <select id="timeline" className={fieldClass} {...register("timeline")}>
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-2-months">1-2 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="flexible">Flexible timeline</option>
          </select>
          {errors.timeline ? <p className="form-error mt-1 text-sm text-red-700">{errors.timeline.message}</p> : null}
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Project details
          </label>
          <textarea id="message" rows={4} className={fieldClass} {...register("message")} />
          {errors.message ? <p className="form-error mt-1 text-sm text-red-700">{errors.message.message}</p> : null}
        </div>
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="companyWebsite">Company website</label>
          <input id="companyWebsite" tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
          <Button type="button" variant="secondary" onClick={openCalendly}>
            Book a strategy call
          </Button>
        </div>
      </form>
      <Dialog
        open={status !== "idle"}
        title={status === "success" ? "Message sent successfully" : "Submission failed"}
        onClose={() => setStatus("idle")}
      >
        <p className="text-ink-muted">{statusMessage}</p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")}>Close</Button>
        </div>
      </Dialog>
    </>
  );
}
