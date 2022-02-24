import Link from "next/link"

export default function ButtonLink({ href, children, ...props }) {
  
  return (
    <Link href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </Link>
  )
}
