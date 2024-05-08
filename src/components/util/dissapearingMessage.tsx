// This component shows a beauty effect when a message dissapear.

export default function dissapearingMessage({
  children,
  timeout=5000
}: DissapearingMessageProps) {
  const [visible, setVisible] = useState(true)
}

useEffect(() => {
  const timer = setTimeout(() => {
    setVisible(false)
}, timeout)
  return () => {
    clearTimeout(timer)
  }
}, [timeout]);

return (
  <div
    className={cn({
      "opacity-0": !visible,
      "transition-opacity": true
    })} 
  >
    {children}
  </div>
  )
}
