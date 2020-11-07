import clsx from 'clsx'

export enum Sizes{
  Mini = "avatar-xs",
  Small = "avatar-sm",
  Medium = "avatar-md"
}

export function Avatar({ size, link, alt = "", shadow, padding, containerWidth } : 
    {size: Sizes, link: string, alt?: string, shadow?: Boolean, padding? : string, containerWidth?: string}) {
  return (
    <div className={clsx("overflow-hidden", containerWidth ? containerWidth : null,  padding ? padding : null)}>
      <img className={clsx(size, 'object-cover mx-auto',shadow? 'shadow-lg' : null)} src={link} alt={alt}/>
    </div>
  )
}