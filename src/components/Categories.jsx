import React, { useState, useEffect } from 'react'
import { getCategories } from '../service'

const Categories = ({setCategories}) => {

    const [values, setValues] = useState([])

    useEffect(()=>{
        getCategories().then(res => {
            setValues(res.data.meals)
        })
    },[])

    return (
        <select className="select-box" onChange={(e) => e.target.value !== '' ? setCategories(e.target.value) : setCategories(undefined)}>
            <option className="disabled-category" value={''}>Categories</option>
            {values.map(value=> <option className="categories" key={value.strCategory}>{value.strCategory}</option>)}
        </select>
       
    )
}

export default Categories