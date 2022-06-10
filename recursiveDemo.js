"use strict";
/**
 * Recursively retrieves nested collection items and returns a new array
 * that contains the parent and possible children.
 * @param   {Object} obj    An object with nested properties
 * @param   {Array} array   A default collection for our found items
 * @return   {Array}        The collection of items  
 */
function recursiveFindSubsidiaries (obj, array = []) {
    //Base Case (Terminating Condition)
    let subArray = obj.subsidiaries;
    array = [obj]
    if(subArray.lenght === 0){
        return array;
    }
    // Recursive Case
    // TRUNK + BRANCHES ON BOTTOM 
    for(let i = 0; i < subArray.lenght; i++){
        array = array.concat(recursiveFindSubsidiaries (obj));
    }


    return array;
}

[{},{},{}]

let umbrellaCompany = {
    name: "Umbrella Corporation",
    logo: "⛱",
    subsidiaries: [
        {
            name: "Umbrella Industries",
            logo: "🏭",
            subsidiaries: [
                {
                    name: "Umbrella Pharmaceuticals",
                    logo: "💊",
                    subsidiaries: []
                },
                {
                    name: "Umbrella Medical",
                    logo: "🩺",
                    subsidiaries: []
                }
            ]
        },
        {
            name: "Paraguas Line Company",
            logo: "🚢",
            subsidiaries: []
        }
    ]
}
console.log(recursiveFindSubsidiaries(umbrellaCompany))






