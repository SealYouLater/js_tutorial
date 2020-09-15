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