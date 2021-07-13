import React from 'react'

const DeleteShow = (props) => {
    return (
        <div>
            <button onClick={() => props.delete(props.show.id)}>X</button>
        </div>
    )
}

export default DeleteShow