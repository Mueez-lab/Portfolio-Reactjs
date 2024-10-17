import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import '../Service.css'

export default function Sevice() {
    return (
        <>
            <div className='heading-div'>
                <h1>Service</h1>
            </div>
            <div className='services-box-div'>
                <div className='box-div'>
                    <FontAwesomeIcon className='box_icon' icon={faPalette} size='2xl' style={{ color: "#ff61ff", }} />
                    <h1>Web Design</h1>
                    <div className='para-div'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta non consequatur doloremque doloribus. Magni quas illo amet consequuntur, minima maxime incidunt libero doloremque tempore sint laboriosam blanditiis, nobis autem dolor.</p>
                    </div>
                    <button type='button'>Learn More</button>
                </div>
                <div className='box-div'>
                    <FontAwesomeIcon className='box_icon' icon={faServer} size='2xl' style={{ color: "#ff61ff", }} />
                    <h1>Backend Developement</h1>
                    <div className='para-div'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta non consequatur doloremque doloribus. Magni quas illo amet consequuntur, minima maxime incidunt libero doloremque tempore sint laboriosam blanditiis, nobis autem dolor.</p>
                    </div>
                    <button type='button'>Learn More</button>
                </div>
                <div className='box-div'>
                    <FontAwesomeIcon className='box_icon' icon={faCode} size='2xl' style={{ color: "#ff61ff", }} />
                    <h1>Frontend Developement</h1>
                    <div className='para-div'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta non consequatur doloremque doloribus. Magni quas illo amet consequuntur, minima maxime incidunt libero doloremque tempore sint laboriosam blanditiis, nobis autem dolor.</p>
                    </div>
                    <button type='button'>Learn More</button>
                </div>
            </div>
        </>
    )
}
