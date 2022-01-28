import twitter from '@/components/icons/twitter.svg'
import instagram from '@/components/icons/instagram.svg'
import youtube from '@/components/icons/youtube.svg'
import facebook from '@/components/icons/facebook.svg'


const ICONS = {
    twitter,
    instagram,
    youtube,
    facebook
};

export default function Icon({ icon, ...props }) {
  const Icon = ICONS[icon]
  return (
    <Icon {...props} />
  )
}
