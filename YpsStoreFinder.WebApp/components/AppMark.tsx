import { useId } from 'react';

export default function AppMark({ className = 'h-11 w-11' }: { className?: string }) {
  const id = useId().replace(/:/g, '');
  const faceId = `${id}-face`;
  const busId = `${id}-bus`;
  const shadowId = `${id}-shadow`;

  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="YPS Tap-to-Route">
      <defs>
        <linearGradient id={faceId} x1="10" y1="4" x2="55" y2="57" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7896F1" />
          <stop offset="1" stopColor="#405CC4" />
        </linearGradient>
        <linearGradient id={busId} x1="15" y1="17" x2="38" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFCEB" />
          <stop offset="1" stopColor="#FFE19A" />
        </linearGradient>
        <filter id={shadowId} x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" floodColor="#17296F" floodOpacity="0.34" />
        </filter>
      </defs>
      <g filter={`url(#${shadowId})`}>
        <rect x="3" y="7" width="58" height="54" rx="18" fill="#22378D" />
        <rect x="3" y="3" width="58" height="54" rx="18" fill={`url(#${faceId})`} stroke="#AFC1FF" strokeWidth="1.5" />
        <rect x="6" y="6" width="52" height="47" rx="15" fill="none" stroke="#FFFFFF" strokeOpacity="0.42" strokeWidth="1.5" />
      </g>

      <g filter={`url(#${shadowId})`}>
        <rect x="11" y="16" width="29" height="22" rx="7" fill={`url(#${busId})`} stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M15 21.5h21v7H15z" fill="#4262C5" />
        <path d="M15 31.5h21" stroke="#F4B93F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="17.5" cy="37" r="3" fill="#23398F" stroke="#FFFFFF" strokeWidth="1.4" />
        <circle cx="34" cy="37" r="3" fill="#23398F" stroke="#FFFFFF" strokeWidth="1.4" />
      </g>

      <path d="M27 40v2c0 5.2 4 8.5 9 8.5h5" fill="none" stroke="#FFFFFF" strokeOpacity="0.86" strokeWidth="7" strokeLinecap="round" />
      <path d="M27 40v2c0 5.2 4 8.5 9 8.5h5" fill="none" stroke="#7954D8" strokeWidth="4" strokeLinecap="round" />
      <path d="M56 41.5c0 6.7-8.5 14-8.5 14S39 48.2 39 41.5a8.5 8.5 0 1 1 17 0Z" fill="#9C3155" transform="translate(0 2)" />
      <path d="M56 41.5c0 6.7-8.5 14-8.5 14S39 48.2 39 41.5a8.5 8.5 0 1 1 17 0Z" fill="#EF6B89" stroke="#FFC4D1" strokeWidth="1.5" />
      <circle cx="47.5" cy="41.5" r="3" fill="#FFF9EE" />

      <path d="m50.5 10.5 1.25 2.75 2.75 1.25-2.75 1.25-1.25 2.75-1.25-2.75-2.75-1.25 2.75-1.25Z" fill="#FFFFFF" fillOpacity="0.92" />
    </svg>
  );
}
