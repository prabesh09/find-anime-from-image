import React from 'react'
import '../styles/style.css'

const Content = ({ image }) => {
    return (
        <div className='content-container'>
            {image.map((item, index) => (
                <div key={index} className='content-card'>
                    <div className='content-info'>
                        <h1><span>Anilist:</span> {item.anilist}</h1>
                        <h1><span>File:</span> {item.filename}</h1>
                        <h1><span>Episode:</span> {item.episode || "NULL"}</h1>
                        <h1><span>Similarity:</span> {(item.similarity * 10).toFixed(2)}</h1>
                        <h1><span>From:</span> {item.from}s</h1>
                        <h1><span>To:</span> {item.to}s</h1>
                    </div>
                    <img src={item.image} />
                </div>
            ))
            }
        </div >
    )
}

export default Content