import { useEffect, useRef, useState } from 'react'

/** Counts from 0 to `to` with an ease-out curve once the element is visible. */
export function useCounter(to: number, duration = 1100) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setValue(to)
      return
    }

    let raf = 0
    const run = () => {
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts
        const p = Math.min((ts - start) / duration, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6 },
    )
    io.observe(el)

    const safety = window.setTimeout(() => setValue((v) => (v === 0 ? to : v)), 4000)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.clearTimeout(safety)
    }
  }, [to, duration])

  return { ref, value }
}
