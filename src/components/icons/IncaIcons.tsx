interface IconProps {
  className?: string
  color?: string
}

export const ChakanaIcon = ({ className, color = 'currentColor' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="9" y="3" width="6" height="6" />
    <rect x="3" y="9" width="6" height="6" />
    <rect x="15" y="9" width="6" height="6" />
    <rect x="9" y="15" width="6" height="6" />
  </svg>
)

export const IntiIcon = ({ className, color = 'currentColor' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
)

export const TextileIcon = ({ className, color = 'currentColor' }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4h16M4 10h16M4 16h16M4 22h16" />
  </svg>
)
