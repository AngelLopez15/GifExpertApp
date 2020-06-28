import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import {GifGrid} from './components/GifGrid' 

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['one punch'])

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
                    categories.map(category => (
                        // return <li
                        //     key={category}
                        // >
                        //     {category}
                        // </li>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </Fragment>
    )
}


