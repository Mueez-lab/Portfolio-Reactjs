import React from 'react'
import '../Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'

export default function Content() {
    return (
        <>
            <div className='info'>
                <div className='info-subdiv'>

                    <h1>Hi, It's <span>Mueez</span></h1>
                    <h3>I'm a <span>Web developer</span></h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quis iste expedita soluta voluptatibus facere fugiat quo? Dolore quas minus explicabo ipsa, delectus temporibus dolorem commodi doloribus, sed itaque eum!</p>
                    <div className='icons-div'>
                        <a href="/">
                            <FontAwesomeIcon className="icon-brand" icon={faLinkedin} size="2xl" style={{ color: "#ff61ff", }} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon className="icon-brand" icon={faSquareGithub} size="2xl" style={{ color: "#ff61ff", }} />
                        </a>
                        <a href="/">

                            <FontAwesomeIcon className="icon-brand" icon={faInstagram} size="2xl" style={{ color: "#ff61ff", }} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon className="icon-brand" icon={faXTwitter} size="2xl" style={{ color: "#ff61ff", }} />
                        </a>
                    </div>
                    <button className='hire-button' type='button'> HIRE
                    <FontAwesomeIcon className='hire-icon' icon={faBriefcase} />
                    </button>
                </div>
            </div>
            <div className='image'>
            <div className='image-subdiv'>
                <img src="./eran.png" alt="" />
            </div>
            </div>
        </>
    )
}
