import React, { useState, useLayoutEffect } from 'react'


function Icon({ type, ...props }) {
    const [IconComponent, setIconComponent] = useState(null)

    useLayoutEffect(() => {
        const loadIcon = async () => {
            let lib = null
            if (type.startsWith("Lu")) {
                lib = await import("react-icons/lu")
            } else if (type.startsWith("Fa")) {
                lib = await import("react-icons/fa")
            } else if (type.startsWith("Gi")) {
                lib = await import("react-icons/gi")
            } else if (type.startsWith("Gr")) {
                lib = await import("react-icons/gr")
            } else if (type.startsWith("Ai")) {
                lib = await import("react-icons/ai")
            } else if (type.startsWith("Wi")) {
                lib = await import("react-icons/wi")
            } else if (type.startsWidth('Fi')){
                lib = await import("react-icons/fi")
            } else if (type.startsWith('Md')){
                lib = await import("react-icons/md")
            }
            
            if (lib && lib[type]) {
                setIconComponent(() => lib[type])
            } else {
                setIconComponent(() => null)
            }
        }
        loadIcon()
    }, [type])

    if (!IconComponent) {
        return <span>Icon "{type}" not found</span>
    }
    return <IconComponent {...props} />
}

export default Icon