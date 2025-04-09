import { useEffect, useRef } from 'react'
import styles from './NatureScroll.module.css'

function NatureScroll({ children }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight ? scrollTop / docHeight : 0
            // Calculate progress from 0 to 100%
            const pos = progress * 100
            if (containerRef.current) {
                containerRef.current.style.setProperty('--bg-pos', `${pos}%`)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div ref={containerRef} className={styles.backgroundWrapper}>
            {children}
        </div>
    )
}

export default NatureScroll