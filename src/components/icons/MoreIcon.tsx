import { IconProps } from './types'

export function MoreIcon ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 16.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
        fill={ color }
      />
    </svg>
  )
}
