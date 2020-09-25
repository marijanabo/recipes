import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({title, image}) => {
    return(
        <div className="recipe-container">
                <span className="recipe-box">
                
                        <div className="recipe-image" >
                            <Link to={`/${title}`}>
                                <img style={{ width: '300px' }} src={image} alt="slika recepta"></img>
                            </Link>
                        </div>
                        <div className="recipe-title">
                            {title}
                        </div>
                
                </span>
        </div>
    )
}

export default Recipe