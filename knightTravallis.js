//create a graph with its respective nodes 


const tempStartLocation = 0
const tempCountUp = 8

const knightGraph = new Map();

 for(let xAxis = tempStartLocation; xAxis < tempCountUp; xAxis++){
    for(let yAxis = tempStartLocation; yAxis< tempCountUp;yAxis++){
        const knightCoordinates = [];
        knightCoordinates.push(xAxis)
        knightCoordinates.push(yAxis)
        knightPaths(knightCoordinates)
    }
}

function knightPaths(knightCoordinates){
    const valueToAddOrSubtract = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
    const arrayKnightsPath = []
    for(const operations of valueToAddOrSubtract){
        const [a , b] = operations
        const value1 = knightCoordinates[0] + a;
        const value2 = knightCoordinates[1] + b;
        const tempArray1 = [];
        if(value1 > 0 && value1 < 8 && value2 > 0 && value2 < 8){
            tempArray1.push(value1);
            tempArray1.push(value2);
            arrayKnightsPath.push(tempArray1)
        }
    }
    knightGraph.set(knightCoordinates,arrayKnightsPath)
    
    

}

console.log(knightGraph)


// calculation function of what to put in the array which will be associated with the key
//Traverse graph to check if traversed node === nodetoReach
