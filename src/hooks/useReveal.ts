import { useEffect, useRef } from 'react'

/** Adds the `.in` class when the element scrolls into view.
 *  Content is never hidden permanently: reduced-motion, missing IO
 *  and a 3s safety timeout all fall back to "visible". */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)

    const safety = window.setTimeout(() => {
      if (!el.classList.contains('in') && el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('in')
      }
    }, 3000)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])

  return ref
}
