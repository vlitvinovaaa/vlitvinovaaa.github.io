import { useEffect, useRef } from 'react'

export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      if (ref.current && max > 0) {
        ref.current.style.width = `${(h.scrollTop / max) * 100}%`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div ref={ref} className="progress" aria-hidden="true" />
}
