import React from 'react';

function PauseIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 60 60"
            version="1.1"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"></path>
            <path d="M33 46h8V14h-8v32zm2-30h4v28h-4V16zM19 46h8V14h-8v32zm2-30h4v28h-4V16z"></path>
        </svg>
    );
}

export default PauseIcon;
