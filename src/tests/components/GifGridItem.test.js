import React from 'react'

import { shallow } from "enzyme"
import  { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    const title='titulo'
    const url = 'https://localhost/imagen.jpg'

    test('Debe mostar el componente correctamente', () => {
        const wrapper= shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
