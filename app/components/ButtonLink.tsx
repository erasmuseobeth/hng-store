// Import Link from next/link
import Link from "next/link";

// Define the ButtonLink component
export default function ButtonLink({ label, className, href }: { label: string; className?: string; href: string }) {
  return (
    <Link href={href}>
      <a className={className}>
        {label}
      </a>
    </Link>
  );
}
