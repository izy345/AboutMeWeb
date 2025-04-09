import React from 'react'
import DevIcon from './DevIcon'

function DevIconTag({ type, variant = '', text, iconSize = 16, iconColor = '#000', style = {},className='', ...props }) {
    const containerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 8px',
        borderRadius: '9999px',
        backgroundColor: '#f0f0f0',
        ...style,
    }

    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: iconSize * 2,
        height: iconSize * 2,
        borderRadius: '50%',
        backgroundColor: '#fff',
        marginRight: '8px',
    }

    return (
        <div style={containerStyle} {...props} className={className}>
            <div style={iconContainerStyle}>
                <DevIcon type={type} variant={variant} size={iconSize} color={iconColor} />
            </div>
            <span>{text}</span>
        </div>
    )
}

export default DevIconTag