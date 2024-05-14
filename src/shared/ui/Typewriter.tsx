import { useEffect, useState } from 'react'

export interface ITypewriter {
  text: string
  delay?: number
  disableTyping?: boolean
  author?: string
  onTypingFinish?: () => void
}

export const Typewriter = ({ text, delay = 50, disableTyping = false, author, onTypingFinish }: ITypewriter) => {
  const [currentText, setCurrentText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [authorVisible, setAuthorVisible] = useState<boolean>(false)

  if (disableTyping) return text

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (currentIndex <= text.length - 1) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)
    }
    if (currentIndex === text.length - 1) {
      onTypingFinish?.()
      setAuthorVisible(true)
    }
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, delay, text, onTypingFinish])

  return (
    <>
      {authorVisible && author} {currentText}
    </>
  )
}
