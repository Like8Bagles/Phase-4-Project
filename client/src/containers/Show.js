import React, { useState, useEffect } from 'react'

const Show = (props) => {
    const [show, setShow] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`/shows/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error){
                setError(data.error)
            } else {
                setShow(data)
            }
        })
    }, [props.match.params.id])

    // show.genre

    if (error === ""){
        return (
        <div>
            <ul>
                <h2>Show Name: {show.name}</h2>
                <h3>Genre: {show.genre}</h3>
                <h3>Studio: {show.studio}</h3>
                <h3>Rating: {show.rating}</h3>
            </ul>
        </div>
        )
    } else {
        return (
            <h1>Oops! Gotta log in to see this!</h1>
        )
    }
    
}

export default Show