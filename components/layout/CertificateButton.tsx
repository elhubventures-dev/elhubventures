"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";

export function CertificateButton({
  label = "View certificate",
  variant = "link",
}: {
  label?: string;
  variant?: "link" | "button";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "button" ? (
        <Button type="button" variant="secondary" onClick={() => setOpen(true)}>
          {label}
        </Button>
      ) : (
        <button
          type="button"
          className="text-sm font-semibold text-ink underline-offset-4 hover:text-gold hover:underline"
          onClick={() => setOpen(true)}
        >
          {label}
        </button>
      )}
      <Dialog open={open} title="CAC certificate" onClose={() => setOpen(false)}>
        <img
          src="/assets/images/certifications/cac-certificate-el-hub-ventures.png"
          alt="EL-HUB VENTURES CAC certificate"
          className="w-full border border-rule"
        />
      </Dialog>
    </>
  );
}
