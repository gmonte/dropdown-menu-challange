import { IconProps } from './types'

export function MenuIcon ({
  color = 'currentColor',
  size = 24,
  ...rest
}: IconProps) {
  return (
    <svg
      width={ size }
      height={ size }
      viewBox="0 0 24 24"
      fill="none"
      { ...rest }
    >
      <path
        fill={ color }
        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
      />
    </svg>
  )
}
