function BulletPoint({ children, style = {} }) {
    const baseStyles = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
        borderRadius: '12px',
        padding: '8px',
        margin: '10px 2px',
    };

    return (
        <div style={{ ...baseStyles, ...style }}>
            {children}
        </div>
    );
}

export default BulletPoint;