import { useEffect, useState } from 'react'
import { texts } from '../data/texts'

export function useText() {
    const [currentText, setCurrentText] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return texts[currentText]
}
