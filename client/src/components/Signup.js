import React, { useState } from 'react'

const Signup = (login) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, 
                password: password, 
                confirmation: confirmation
            })
        }) 
        .then(res => res.json())
        .then(user => login(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:  </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <br/>
                <label>Password:  </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <label>Re-enter Password:  </label>
                <input 
                    type="password"
                    id="confirmation"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                />
                <br/>
                <input 
                    type="submit"
                />
            </form>
        </div>
    )
}

export default Signup