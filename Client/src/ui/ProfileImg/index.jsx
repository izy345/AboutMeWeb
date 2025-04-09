import React from 'react'

function ProfileImg({img, objectFit='cover'}) {
    return (
    <img
        src={img}
        style={{
            width: '100px',
            height: '100px',
            borderRadius: '12px',//'50%',
            objectFit: objectFit,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '2px solid #fff',
        }}
    />
    )
}

export default ProfileImg