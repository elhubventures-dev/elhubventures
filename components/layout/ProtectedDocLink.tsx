"use client";

export function ProtectedDocLink({
  href,
  children,
  className = "text-ink-muted hover:text-ink",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const encodeAccessCode = (value: string) => {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash << 5) - hash + value.charCodeAt(i);
      hash |= 0;
    }
    return btoa(String(hash));
  };

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const providedCode = window.prompt("Enter access code to view partnership document:");
    if (!providedCode) return;
    const isValid = encodeAccessCode(providedCode.trim()) === "MTUwOTQ0Mg==";
    if (!isValid) {
      window.alert("Invalid code. Access denied.");
      return;
    }
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
