var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

kittens.slice(0,kittens.length - 1)

function destructivelyPrependKitten(name){
kittens.unshift("Bob")
return kittens
}

kittens.shift()

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

