import React, {Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {
    // con el ":" renombramos el nombre data por images para una mejor comprension 
    const {data:images, loading} = useFetchGifs(category)

    return (
        <Fragment>
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            {/* se ocupa un perador logico && para evitar el ternario
            ya que si es false en el teernario hay que null y con el &&
            solo no ponemos nada si es false */}
            {loading && <p className="animate__animated animate__flash">loading</p> }
            <div className="card-grid">
                {
                    images.map(img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}
