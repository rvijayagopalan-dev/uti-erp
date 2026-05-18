import Link from 'next/link'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-slate-600 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && (
            <svg className="w-2.5 h-2.5 text-slate-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.href ? (
            <Link href={item.href} className="hover:text-slate-400 transition-colors duration-150">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-400">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
