import Icon from "./Icon";

export default function IconLink({href, icon, label="Bağlantıya Git", ...props}) {
  return (
    <a href={href} {...props} target="_blank" rel="noreferrer noopener" aria-label={label}>
      <Icon icon={icon} className="h-7 w-7" />
    </a>
  )
}
