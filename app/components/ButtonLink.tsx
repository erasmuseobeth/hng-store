import Link from "next/link";


export default function ButtonLink({ label, className, href }) {
    return (
      <Link href={href} className={className}>
      {label}
      </Link>
    );
  }
  