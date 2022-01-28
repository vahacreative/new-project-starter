import Image from 'next/image'

export default function Img({ src, layout = "fill", objectFit = "cover", alt = "", quality = 100 , className=""}) {
  return (
   <Image src={src} layout={layout} objectFit={objectFit} alt={alt} objectPosition="center" quality={quality} className={`flex-shrink-0 ${objectFit === 'contain' ? ' transform top-1/2 left-1/2 ' : ''} ${className}`} />
  )
}
