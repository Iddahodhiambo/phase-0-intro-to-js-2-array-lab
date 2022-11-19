var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    

     cats.push(name)
     return cats
}
destructivelyAppendCat("Ralph")
cats = ["Milo", "Otis", "Garfield"]

function destructivelyPrependCat(name) {
 cats.unshift(name)
    return cats

}
destructivelyPrependCat("Bob")
cats = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}
destructivelyRemoveLastCat("Garfield")
cats =  ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstCat(name) {
cats.shift(name)
return cats
}
destructivelyRemoveFirstCat("Milo")
cats =  ["Milo", "Otis", "Garfield"]

function appendCat(name) {
    var newArr = [...cats]
    newArr.push(name)

    return newArr

}
appendCat("Broom")


function prependCat(name) {
    var newArr = [name, ...cats]
    return newArr
}
prependCat("Arnold")

function removeLastCat(name) {
    
    var newArray = cats.slice();
    newArray.pop();
    return newArray ;  
}
removeLastCat("Garfield")


function removeFirstCat(name) {
    var newArray = cats.slice();
    newArray.shift();
    return newArray;
}
removeFirstCat("Milo");














     




