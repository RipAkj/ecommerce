import React from "react";
import './styles.css';
const maxLength = 50;
const Description = ({ text }) => {
    const isTruncated = text.length > maxLength;

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                cursor: 'pointer',
            }}
            title={isTruncated ? text : ''}
        >
            <span>
                {isTruncated ? `${text.slice(0, maxLength)}...` : text}
            </span>

            {isTruncated && (
                <div
                    style={{
                        visibility: 'hidden',
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: '#fff',
                        padding: '8px',
                        borderRadius: '4px',
                        whiteSpace: 'pre-wrap',
                        maxWidth: '300px',
                        top: '110%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000,
                    }}
                    className="tooltip-content"
                >
                    {text}
                </div>
            )}
            <style>
                {`
                div:hover .tooltip-content {
                    visibility: visible;
                    opacity: 1;
                }
                `}
            </style>
        </div>
    );
};

export default Description;