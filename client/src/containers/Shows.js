import React, { useState, useEffect } from 'react'
import ShowForm from '../components/ShowForm'
import ShowLink from '../components/ShowLink'
import DeleteShow from '../components/DeleteShow'
// import UpdateShow from '../components/UpdateShow'

const Shows = () => {
    const [shows, setShows] = useState([])
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false) 

    useEffect(() => {
        fetch('/shows')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.errors){
                setError(data.errors)
            } else {
                setShows(data)
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

    const deleteShow = (id) => {
        fetch(`/shows/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            const newShows = shows.filter(d => d.id !== id)
            setShows(newShows)
        })
    }

    // const updateShow = (newShow, id) => {
    //     fetch(`/shows/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(() => {
    //         const newShows = shows.map((s) => {s.id === newShow.id ? newShow : s;});
    //         setShows(newShows);
    //     })
    //   }

    const showList = shows.map(s => <li><ShowLink key={s.id} show={s} /><DeleteShow delete={deleteShow} show={s} id={s.id}/>
    {/* <UpdateShow updateShow={updateShow} id={id}/> */}
    </li>)

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