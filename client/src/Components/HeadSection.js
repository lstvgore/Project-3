import React from 'react'
import '../App.css'
import './HeadSection.css'


function HeadSection() {
    return (
        <div className='Head-container'>
            <video src="/Videos/" autoPlay loop muted />
            <h1 className="GroovIn">GroovIn</h1>
            <p>The Musicia'n Social Media</p>
        
        </div>
    );
}

export default HeadSection;