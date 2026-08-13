import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  size?: "header" | "footer";
  priority?: boolean;
};

const sizeMap = {
  header: {
    width: 168,
    height: 56,
    className: "h-10 w-auto sm:h-11",
  },
  footer: {
    width: 196,
    height: 64,
    className: "h-12 w-auto",
  },
};

export function BrandLogo({ size = "header", priority = false }: BrandLogoProps) {
  const s = sizeMap[size];
  const shared = `${s.className} max-w-[11rem] object-contain object-left sm:max-w-[13rem]`;

  return (
    <Link href="/" aria-label="EL-HUB VENTURES home" className="inline-flex items-center">
      <Image
        src="/assets/images/logo.png"
        alt="EL-HUB VENTURES"
        width={s.width}
        height={s.height}
        sizes={`${s.width}px`}
        className={`brand-logo-light ${shared}`}
        priority={priority}
      />
      <Image
        src="/assets/images/logo-dark.png"
        alt=""
        width={s.width}
        height={s.height}
        sizes={`${s.width}px`}
        className={`brand-logo-dark ${shared}`}
        priority={priority}
      />
    </Link>
  );
}
