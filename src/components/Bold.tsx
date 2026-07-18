/** Renders a string with **bold** markers as text with <b> elements. */
export function Bold({ text }: { text: string }) {
  const parts = text.split('**')
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : part))}
    </>
  )
}
