const simplifications = {NORTH:"SOUTH",SOUTH:"NORTH",EAST:"WEST",WEST:"EAST"}
function simplify(input){
    const copy = [...input]
    for(let i=0;i<copy.length-1;i++){
        if (copy[i+1]===simplifications[copy[i]]){
            copy.splice(i,2)
                    return simplify(copy)
        }
        /*switch(copy[i]){
            case "NORTH":
                if(copy[i+1]==="SOUTH"){
                    copy.splice(i,2)
                    return simplify(copy)
                }
                break
            case "SOUTH":
                if(copy[i+1]==="NORTH"){
                    copy.splice(i,2)
                    return simplify(copy)
                }
                break
            case "EAST":
                if(copy[i+1]==="WEST"){
                    copy.splice(i,2)
                    return simplify(copy)
                }
                break
            case "WEST":
                if(copy[i+1]==="EAST"){
                    copy.splice(i,2)
                    return simplify(copy)
                }
                break
        }*/
    }
    return input
}

module.exports = simplify