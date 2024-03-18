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

// Calculation for the Adjacency List for each Coordinate
function knightPaths(knightCoordinates){
    const valueToAddOrSubtract = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
    const arrayKnightsPath = []
    for(const operations of valueToAddOrSubtract){
        const [a , b] = operations
        const value1 = knightCoordinates[0] + a;
        const value2 = knightCoordinates[1] + b;
        const tempArray1 = [];
        if(value1 > -1 && value1 < 8 && value2 > -1 && value2 < 8){
            tempArray1.push(value1);
            tempArray1.push(value2);
            arrayKnightsPath.push(tempArray1)
        }
    }
    knightGraph.set(knightCoordinates,arrayKnightsPath)
}

// console.log(knightGraph)


//Traverse graph to check if traversed node === nodetoReach
// Managed to push in distance but how would i get the shortest path by default the bottom will increment distance by +1 for every value being pushed into the queue. With counter i know the shortest required amount
// but how to translate it to the mentioned output


function breadthFirstTraversal(source,destination){
    const hackQueue = [[source,0]];
    const arrayKnightCoordinates = []
    while(hackQueue.length !== 0){
        let arrayValues = hackQueue.shift();
        let currentNode = arrayValues.shift();
        let counter = arrayValues.shift();
        arrayKnightCoordinates.push([currentNode,counter]);
        if(destinationPresent(currentNode,destination)){
            return arrayKnightCoordinates;
        }
        for (const getKey of knightGraph.get(currentNode)){
            let counterForPaths = counter;
            const keyCoordinates = findCoordinatesOnMap(getKey)
            hackQueue.push([keyCoordinates,counterForPaths+=1]);
        }
    }
    return false;
    
}

function destinationPresent(source,destination){
    for (const getKey of knightGraph.get(source)){
        const keyCoordinates = findCoordinatesOnMap(getKey)
        if(keyCoordinates === destination){
            return true;
        }
    }
}


// find coordinateKey which is the array on the map for reference to key
function findCoordinatesOnMap(findKey){
    const keyList = knightGraph.keys();
    for(const coordinateKey of keyList){
        const [index0, index1] = coordinateKey;
        if(findKey[0] === index0 && findKey[1] === index1){
            return coordinateKey
        }
    }
    return 'Coordinate not present on Map';
}

const source = findCoordinatesOnMap([0,0]);
const destination = findCoordinatesOnMap([1,6]);

const knightTraversalCoordinates = breadthFirstTraversal(source,destination);

console.log(knightTraversalCoordinates)
console.log(knightGraph.get(...knightTraversalCoordinates[3]));






