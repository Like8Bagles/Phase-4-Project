import React from 'react'
import UpdateShow from './UpdateShow'

const UpdateButton = (props) => {
    return (
        <div>
            {formFlag ? <UpdateShow updateShow={props.updateShow} /> : <button onClick={() => setFormFlag(true)}>Update Show</button>}
        </div>
    )
}

export default UpdateButton