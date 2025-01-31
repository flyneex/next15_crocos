import React from 'react';

const ArrowIcon = ({className}:{className?:string}) => {
    return (
        <>
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16L16 8M16 8H10M16 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </>
    );
};

export default ArrowIcon;