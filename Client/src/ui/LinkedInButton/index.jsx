import React from "react";
import { FaLinkedin } from "react-icons/fa";

function LinkedInButton({ url, style = {}, ...props }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                ...style,
            }}
            {...props}
        >
            <FaLinkedin style={{ marginRight: "8px" }} />
            <span>LinkedIn</span>
        </a>
    );
}

export default LinkedInButton;
