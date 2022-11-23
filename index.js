// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let temp = [...cats]
    temp.push(name)
    return temp
}
function prependCat(name){
    let temp = [...cats]
    temp.unshift(name)
    return temp
}
function removeLastCat(){
    let temp = [...cats]
    temp.pop()
    return temp
}
function removeFirstCat(){
    let temp = [...cats]
    temp.shift()
    return temp
}