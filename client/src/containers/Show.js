import React, { useState, useEffect } from 'react'

const Show = () => {
    const [show, setShow] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`/shows/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data){
                if (data.error){
                    setError(data.error)
                } else {
                    setShow(data)
                }
            } else {
                setError("Not Authorized")
            }
        })
    }, [])

    // show.genre

    if (error === ""){
        return (
        <div>
            <ul>
                <h2>{show.name}</h2>
                <h3>{show.genre}</h3>
                <h3>{show.studio}</h3>
                <h3>{show.rating}</h3>
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