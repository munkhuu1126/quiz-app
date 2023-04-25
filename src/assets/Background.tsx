import React from 'react'

export default function Background({ className = "", onClick = () => { } }) {
    return (
        <svg viewBox="0 0 606 606" className={className} onClick={onClick}>
            <circle cx="302.616" cy="302.616" r="302.616" fill="url(#paint0_radial_2337_42733)" />
            <defs>
                <radialGradient id="paint0_radial_2337_42733" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(303 412) rotate(-90) scale(540)">
                    <stop offset="0.602538" stop-color="white" stop-opacity="0" />
                    <stop offset="0.830902" stop-color="#0DCB81" />
                </radialGradient>
            </defs>
        </svg>
    )
}
