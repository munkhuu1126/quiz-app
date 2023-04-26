import React from 'react'

export default function IncorrectIcon({ className = "", onClick = () => { } }) {
    return (
        <svg viewBox="0 0 64 64" className={className} onClick={onClick}>
            <path d="M41.415 25.415L34.8275 32L41.415 38.585C41.6008 38.7708 41.7482 38.9914 41.8488 39.2342C41.9494 39.477 42.0011 39.7372 42.0011 40C42.0011 40.2628 41.9494 40.523 41.8488 40.7658C41.7482 41.0086 41.6008 41.2292 41.415 41.415C41.2292 41.6008 41.0086 41.7482 40.7658 41.8488C40.523 41.9494 40.2628 42.0011 40 42.0011C39.7372 42.0011 39.477 41.9494 39.2342 41.8488C38.9914 41.7482 38.7708 41.6008 38.585 41.415L32 34.8275L25.415 41.415C25.2292 41.6008 25.0086 41.7482 24.7658 41.8488C24.523 41.9494 24.2628 42.0011 24 42.0011C23.7372 42.0011 23.477 41.9494 23.2342 41.8488C22.9914 41.7482 22.7708 41.6008 22.585 41.415C22.3992 41.2292 22.2518 41.0086 22.1512 40.7658C22.0507 40.523 21.9989 40.2628 21.9989 40C21.9989 39.7372 22.0507 39.477 22.1512 39.2342C22.2518 38.9914 22.3992 38.7708 22.585 38.585L29.1725 32L22.585 25.415C22.2097 25.0397 21.9989 24.5307 21.9989 24C21.9989 23.4693 22.2097 22.9603 22.585 22.585C22.9603 22.2097 23.4693 21.9989 24 21.9989C24.5307 21.9989 25.0397 22.2097 25.415 22.585L32 29.1725L38.585 22.585C38.7708 22.3992 38.9914 22.2518 39.2342 22.1512C39.477 22.0506 39.7372 21.9989 40 21.9989C40.2628 21.9989 40.523 22.0506 40.7658 22.1512C41.0086 22.2518 41.2292 22.3992 41.415 22.585C41.6008 22.7708 41.7482 22.9914 41.8488 23.2342C41.9494 23.477 42.0011 23.7372 42.0011 24C42.0011 24.2628 41.9494 24.523 41.8488 24.7658C41.7482 25.0086 41.6008 25.2292 41.415 25.415ZM58 32C58 37.1423 56.4751 42.1691 53.6182 46.4448C50.7613 50.7205 46.7007 54.053 41.9498 56.0209C37.1989 57.9887 31.9712 58.5036 26.9277 57.5004C21.8842 56.4972 17.2514 54.0209 13.6152 50.3848C9.97907 46.7486 7.50281 42.1159 6.49959 37.0723C5.49638 32.0288 6.01127 26.8011 7.97914 22.0502C9.94702 17.2994 13.2795 13.2387 17.5552 10.3818C21.8309 7.52487 26.8577 6 32 6C38.8934 6.00728 45.5024 8.74889 50.3767 13.6233C55.2511 18.4976 57.9927 25.1066 58 32ZM54 32C54 27.6488 52.7097 23.3953 50.2923 19.7775C47.875 16.1596 44.439 13.3398 40.419 11.6747C36.3991 10.0095 31.9756 9.57385 27.708 10.4227C23.4404 11.2716 19.5204 13.3669 16.4437 16.4437C13.3669 19.5204 11.2716 23.4404 10.4227 27.708C9.57386 31.9756 10.0095 36.3991 11.6747 40.419C13.3398 44.439 16.1596 47.8749 19.7775 50.2923C23.3953 52.7097 27.6488 54 32 54C37.8327 53.9934 43.4247 51.6734 47.5491 47.549C51.6734 43.4247 53.9934 37.8327 54 32Z" fill="#FF3A30" />
        </svg>
    )
}