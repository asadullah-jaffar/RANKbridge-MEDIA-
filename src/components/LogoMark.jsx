export default function LogoMark({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="logo-mark"
    >
      <rect width="36" height="36" rx="10" fill="url(#logo-bg)" />
      <rect width="36" height="36" rx="10" fill="url(#logo-shine)" fillOpacity="0.3" />
      <path
        d="M10 26V10h4.5c3 0 5 1.6 5 4.2 0 1.7-.9 3-2.4 3.6l3.6 5H16.8l-3.2-4.5H12.5V26H10zm3.2-7.3h1.2c1.3 0 2-.7 2-1.7s-.7-1.7-2-1.7h-1.2v3.4z"
        fill="white"
      />
      <path d="M21 26l5.8-14h3.4L24.2 26H21z" fill="white" fillOpacity="0.9" />
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="logo-shine" x1="0" y1="0" x2="36" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.15" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
