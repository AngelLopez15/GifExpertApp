import React from 'react';
import '@testing-library/jest-dom'

const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Pruebas en <GifExpertApp />', () => {
    test('debe de mostarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
