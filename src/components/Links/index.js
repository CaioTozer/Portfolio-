import React from 'react'
import './Links.css'

const Links = () => {
    return (
        <div className='links'>
            <p className='pais'><div>Brasil</div></p>
            <p className='trabalho'><div>UFRPE/Pagô</div></p>
            <p className='github'><a href='https://github.com/CaioTozer' target='blank'>CaioTozer</a></p>
            <p className='insta'><a href='https://www.instagram.com/caio_tozer/' target='blank'>Caio_Tozer</a></p>
            <p className='linkedin'><a href='https://www.linkedin.com/in/caio-tozer-a77366263/' target='blank'>Caio Tozer</a></p>
            <p className='email'><a href='mailto:caiotozer@gmail.com' target='blank'>caiotozer592@gmail.com</a></p>
        </div>
    )
}

export default Links