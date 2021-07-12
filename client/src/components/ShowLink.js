import React from 'react'
import { Link } from 'react-router-dom'

const ShowLink = (show) => {
    return (
        <Link to={`/shows/${show.id}`} >
            {show.name}
        </Link>
    )
}

export default ShowLink