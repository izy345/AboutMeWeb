import React from 'react'
import styles from './Card.module.css'

function Card({children, style, onClick = null}) {

    const cardClassName = onClick 
        ? `${styles.cardContainer} ${styles.clickable}` 
        : styles.cardContainer;

    return (
    <div
        className={cardClassName} 
        style={style}
        {...(onClick !== null && onClick !== undefined ? { onClick: () => onClick() } : {})}
    >
        {children}
    </div>
    ) 
}

export default Card