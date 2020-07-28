const simplify = require('../lib/directions.js')

describe('simplify function ',()=>{
    const input = [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],["NORTH", "SOUTH", "EAST", "WEST"],["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"],["NORTH", "WEST", "SOUTH", "EAST"]]
    const expectedOutput = [["WEST"],[],["WEST","WEST"],["NORTH", "WEST", "SOUTH", "EAST"]]
    for(let i=0;i<input.length;i++){
        it("works with case "+i,()=>{
            const result = simplify(input[i])
            expect(result).toEqual(expectedOutput[i])
        })
    }

})
