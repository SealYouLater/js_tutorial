let states = ["Kansas", "Nebraska", "North Dakota", "Delware"];

//returns a url friendly verison of a string

function urlify(string){
    return string.toLowerCase().split(/\s+/).join("-")
}


// urls: imperative version

function imperativeUrls(elements){
    let urls= [];
    elements.forEach(function(element){
        urls.push(urlify(element));
    })
    return urls;
}

console.log(imperativeUrls(states));

// functional version

function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));



//singles: Imperative version 

function imperativeSingles(elements){
 let singles = []
 elements.forEach(function(element) {
     if (element.split(/\s+/).length ===1){
         singles.push(element);
     }
 });
 
 return singles;   
}



//singles: Functional version 

function functionalSingles(elements){
    return elements.filter(element => element.split(/\s+/).length ===1);
    
    
}

console.log(functionalSingles(states))

// sum imperative solution

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function imperativeSum(elements){
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    })

    return total;
}
console.log(imperativeSum(numbers));

// sum functional solution


function functionalSum(elements){
  return elements.reduce((total, n) => { return total += n;});
}
console.log(functionalSum(numbers));



//  length imperative soluytion

function imperativeLengths(elements){
    let lengths = {};
    
    elements.forEach(function(element){
        lengths[element] = element.length;
    });
    return lengths;
}

//  length functional soluytion

function functionalLengths(elements){
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));