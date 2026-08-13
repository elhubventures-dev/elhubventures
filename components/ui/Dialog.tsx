"use client";

export function Dialog({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="absolute inset-0 bg-ink/50" aria-label="Close dialog" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-auto border border-rule bg-paper p-6 shadow-none">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl text-ink">{title}</h2>
          <button type="button" className="text-ink-muted hover:text-ink" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
