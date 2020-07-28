const simplifications = {NORTH:"SOUTH",SOUTH:"NORTH",EAST:"WEST",WEST:"EAST"}
function simplify(input){
    const copy = [...input]
    for(let i=0;i<copy.length-1;i++){
        if (copy[i+1]===simplifications[copy[i]]){
            copy.splice(i,2)
                    return simplify(copy)
        }
    }
    return input
}

module.exports = simplify