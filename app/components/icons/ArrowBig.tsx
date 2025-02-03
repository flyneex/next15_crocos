import React from 'react';

const ArrowBig = ({className}:{className?:string}) => {
    return (
        <>
            <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 25L25 1M25 1H7M25 1V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </>
    );
};

export default ArrowBig;