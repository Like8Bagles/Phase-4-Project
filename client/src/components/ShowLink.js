import React from 'react'
import { Link } from 'react-router-dom'

const ShowLink = (props) => {
    return (
        <Link to={`/shows/${props.show.id}`} >
            <h3>
                {props.show.name}
            </h3>
        </Link>
    )
}

export default ShowLink