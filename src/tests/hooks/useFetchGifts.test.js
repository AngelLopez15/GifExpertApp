import {useFetchGifs} from '../../hooks/useFetchGifs'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'



describe('Pruebas en el hook useFetchGifts', () => {

    test('debe de retornar el estado inicial', async() => {
        // configurando la libreria para testar custom hooks
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch'))
        const {data, loading} = result.current

        await waitForNextUpdate()

        expect((data)).toEqual([])
        expect(loading).toBe(true)
    })
    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch'))
        await waitForNextUpdate()

        const {data, loading} = result.current

        expect((data.length)).toBe(10)
        expect(loading).toBe(false)
    })
    
})
