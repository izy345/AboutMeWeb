import React from 'react'
import styles from './GlowOrb.module.css'

function GlowOrb({ color, size }) {
    const orbStyle = {
        backgroundColor: color,
        width: size,
        height: size,
    }

    return (
        <div className={styles.orbWrapper} style={{ width: size, height: size }}>
            <div className={styles.orb} style={orbStyle} />
            <div className={styles.pulse} style={{ ...orbStyle, animationDelay: '0s' }} />
            <div className={styles.pulse} style={{ ...orbStyle, animationDelay: '0.3s' }} />
            <div className={styles.pulse} style={{ ...orbStyle, animationDelay: '0.6s' }} />
        </div>
    )
}

export default GlowOrb