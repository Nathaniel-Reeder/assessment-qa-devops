const {shuffleArray} = require('./utils')

const input = [1, 2]

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', async () => {
        let shuffleReturn = shuffleArray(input)
        expect(Array.isArray(shuffleReturn)).toBe(true)
    } );
    test('contain what is passed to it', async () => {
        let shuffleReturn = shuffleArray(input)
        expect(shuffleReturn).toEqual([1, 2] || [2, 1])
    })
})