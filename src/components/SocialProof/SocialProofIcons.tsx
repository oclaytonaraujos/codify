const PROPS = {
  width:           22,
  height:          22,
  viewBox:         '0 0 24 24',
  fill:            'none',
  stroke:          'currentColor',
  strokeWidth:     1.5,
  strokeLinecap:   'round' as const,
  strokeLinejoin:  'round' as const,
}

export function IconShield() {
  return (
    <svg {...PROPS}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconProcess() {
  return (
    <svg {...PROPS}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.2 7.2L11 16M15.8 7.2L13 16M8.3 6h7.4" />
    </svg>
  )
}

export function IconHeadset() {
  return (
    <svg {...PROPS}>
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <rect width="4" height="7" x="3" y="13" rx="1.5" />
      <rect width="4" height="7" x="17" y="13" rx="1.5" />
      <path d="M19 20a3 3 0 01-3 2h-2" />
    </svg>
  )
}

export function IconChat() {
  return (
    <svg {...PROPS}>
      <path d="M4 5h16v11H8l-4 4V5z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  )
}
