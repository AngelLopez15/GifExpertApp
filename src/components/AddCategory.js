import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange= (e) => {
        setInputValue(e.target.value)
    }
    const handeleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length>2){
            setCategories(categories => [inputValue, ...categories])
            setInputValue('')
        }
    }
    // como el form ya agrupa los elementos podemos quitar el fragment
    return (
        <form onSubmit={handeleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}