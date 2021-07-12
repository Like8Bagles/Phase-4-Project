import React, { useState, useEffect } from 'react'

const Shows = () => {
    const [shows, setShows] = useState([])
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch('/shows')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data){
                if (data.error){
                    setError(data.error)
                } else {
                    setShows(data)
                }
            } else {
                setError("Not Authorized")
            }
        })
    }, [])

    const addShow = (show) => {
        fetch("/shows", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(show)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShows([...shows, data])
            setFormFlag(false)
        })
    }

    const showList = shows.map(s => <div><li key={s.id}>{s.name}</li><br/></div>)

    if (error === ""){
        return (
        <div>
            <ul>
                {showList}
                {formFlag ? <ShowForm addShow={addShow} /> : <button onClick={() => setFormFlag(true)}>Add Show</button>}
            </ul>
        </div>
        )
    } else {
        return (
            <h1>Oops! Gotta log in to see this!</h1>
        )
    }
    
}

export default Shows