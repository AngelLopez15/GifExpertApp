import React from 'react';
import '@testing-library/jest-dom'

// traemos el componente por que vamos a simular la peticion de imagenes
import {useFetchGifs} from '../../hooks/useFetchGifs'
// para simular la llamada al archivo
jest.mock('../../hooks/useFetchGifs')

const { shallow } = require("enzyme")
const { GifGrid } = require("../../components/GifGrid")

describe('Pruebas en el <GifGrid />', () => {
    
    //Las pruebas unitarias significa que debemos comprobar los componenetes de 
    // manera aislada

    const category = 'One punch'

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('debe de mostrar items cuando se cargan las imagenes que trae el useFetchGifs', () => {
        
        const gifs = [{
            id:'ABC',
            url:'https://peticion/aalgunlado/cosa.gif',
            title:'titulo'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        })

        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    

})
