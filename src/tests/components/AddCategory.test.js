import React from 'react'
// para importar las autoayudasde jest
import '@testing-library/jest-dom'
import { AddCategory } from '../../components/AddCategory'

const { shallow } = require("enzyme")

describe('Pruebas en  <AddCategory />', () => {
    // funcion simulada con jest
    const setCategories = jest.fn()

    let wrapper

    beforeEach(()=>{
        // para limpiar los eventos
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('Se debe de mostar correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola'

        input.simulate('change', {target:{value}})
    })
    // test para simular el submit del formulario
    test('NO debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('debe de llamar el set categories y limpiar la caja de texto', () => {
        const value = 'Hola mundo'
        
        //simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}})
        
        // simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}})

        // setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()

        // el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('')
        
    })
    
})
