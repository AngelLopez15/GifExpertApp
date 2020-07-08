// otra forma de importar 
const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas en el helper getGifs Fetch', () => {
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10)
    })
    
})
