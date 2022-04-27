import React from 'react';
export default function Logout(){
    return <a className="arrow-btn" style={{cursor:"pointer"}}
        onClick = { e => {
            e.preventDefault()
            e.stopPropagation()
            alert('로그아웃 버튼 누름')
            localStorage.clear(e)
            window.location.href="/"
        }}> 로그아웃
    </a>}