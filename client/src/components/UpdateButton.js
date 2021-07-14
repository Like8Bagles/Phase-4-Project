import React, {useState} from 'react'
import UpdateShow from './UpdateShow'


const UpdateButton = (props) => {
    
    const [formFlag, setFormFlag] = useState(false)

    return (
        <div>
            {props.updateFormFlag ? <UpdateShow updateShow={props.updateShow} s={props.show}/> : <button onClick={() => props.setUpdateFormFlag(true)}>Update Show</button>}
        </div>
    )
}

export default UpdateButton