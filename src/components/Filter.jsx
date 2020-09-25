import React from 'react'

const Filter = ({ setFilter }) => {
    return (
        <input className="filter"
            type="text"
            placeholder ="Search recipes..."
            onChange={(e) => {
                setFilter(e.target.value)
            }}      
        />
    )
}

export default Filter