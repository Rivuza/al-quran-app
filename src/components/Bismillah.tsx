import React from 'react'
import './Bismillah.css'

export function Bismillah() {
  return (
    <div className="bismillah">
      <div className="bismillah-text">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <div className="bismillah-translation">
        In the name of Allah, the Most Gracious, the Most Merciful.
      </div>
      <div className="bismillah-decoration">
        <span className="decoration-line"></span>
        <span className="decoration-ornament">✦</span>
        <span className="decoration-line"></span>
      </div>
    </div>
  )
}