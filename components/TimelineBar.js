'use client'

import { timelineItems } from './data'

export default function TimelineBar() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {timelineItems.map((item, i) => (
        <div key={item.stage} className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <div className="text-left">
            <p className="text-xs font-bold text-white leading-none">{item.stage}</p>
            <p className="text-xs text-slate-600 leading-none mt-0.5">{item.years}</p>
          </div>
          {i < timelineItems.length - 1 && (
            <span className="text-slate-700 mx-1 text-xs">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
