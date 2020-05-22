import React from 'react'

const Scroll = (props) => {
    return(
        <div style={{ overflowY:'scroll', height: '1000px', border: '2px solid #111', padding: '5px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;