import React from 'react'

export const Badges = ({ label }) => {
    const badges = {
        хит: 'bg-danger',
        советуем: 'bg-warning',
        новинка: 'bg-success',
    }
    return (
        <div className='badge-container'>
            {label.map((e,id)=> <span key={id} className={`badge bg-secondary ${badges[e] || ''}`}>{e}</span>)}
        </div>
    )
}
