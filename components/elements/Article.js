export default function Article({ children, className }) {
  
  return (
    <article className={`prose max-w-full ${className}`}>
      {children}
    </article>
  )
}