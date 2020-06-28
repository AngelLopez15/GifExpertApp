import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'One Punch', 'Dragon Ball'])
    // const handleAdd = () => {
    //     setCategories([...categories,'X-Hunter'])
    //     // otra forma de hacerlo es con un callback
    //     // setCategories(categories => [...categories, 'X-hunter'])
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={()=>handleAdd()}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return <li
                            key={category}
                        >
                            {category}
                        </li>
                    })
                }
            </ol>
        </Fragment>
    )
}


