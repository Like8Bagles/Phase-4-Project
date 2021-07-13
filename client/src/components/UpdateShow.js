import React from 'react'

const UpdateShow = (props) => {
    const [name, setName] = useState("")
    const [studio, setStudio] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.updateShow({
            name: name,
            studio: studio, 
            genre: genre,
            rating: rating
        })
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
                <label>Genre:  </label>
                <input
                    type="text"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <br/>
                <label>Studio:  </label>
                <input 
                    type="text"
                    id="studio"
                    value={studio}
                    onChange={(e) => setStudio(e.target.value)}
                />
                <br/>
                <label>Rating (0-10):  </label>
                <input 
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <br/>
                <input 
                    type="submit"
                />
            </form>
        </div>
    )
}

export default UpdateShow