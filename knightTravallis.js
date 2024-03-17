//create a graph with its respective nodes 


const knightGraph = new Map();

//Try to log out 0,0 till 7,7
const arrayTest = []
 for(let i = 0; i < 8; i++){
    for(let j = i; j<8;j++){
        const tempMiniArray = [];
        tempMiniArray.push(i)
        tempMiniArray.push(j)
        // console.log(tempMiniArray)
        knightGraph.set(tempMiniArray,[]) // for every array it has a value of a empty array
        // arrayTest.push(tempMiniArray)
    }
}
// calculation function of what to put in the array which will be associated with the key

//  knightGraph.forEach((value,key)=>{
//     console.log(`key is ${key}, value is ${value} `)
//  })

const keyCheck = [0, 0]
console.log(knightGraph.get(keyCheck));

const arr = [];
// console.log(arr)


//Traverse graph to check if traversed node === nodetoReach
