import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = { children: ReactNode; className?: string }

export function Reveal({ children, className = '' }: Props) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`rv ${className}`.trim()}>
      {children}
    </div>
  )
}
