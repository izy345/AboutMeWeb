import React from 'react'
import * as Devicons from 'devicons-react'

function DevIcon({ type, variant = '', className = '', ...props }) {
    // If type already ends with the variant, use it directly; otherwise append the variant.
    const iconName = type.endsWith(variant) ? type : `${type}${variant}`
    const IconComponent = Devicons[iconName]

    if (!IconComponent) {
        return <span>Icon "{iconName}" not found</span>
    }

    return <IconComponent className={className} {...props} />
}

export default DevIcon