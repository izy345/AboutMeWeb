import React from 'react';
import { FaGithub } from 'react-icons/fa';

function GithubButton({ url, text='View source code', style = {}, ...props }) {
    const handleClick = (e) => {
        // Prevent default behavior of the link
        e.stopPropagation();
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                ...style,
            }}
            {...props}
        >
            <FaGithub style={{ marginRight: '8px' }} />
            <span>{text}</span>
        </a>
    );
}

export default GithubButton;