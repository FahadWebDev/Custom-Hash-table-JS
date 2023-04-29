console.log("----- Start ------")

function CustomHashTable(size) {
  const arraySize = size;
  const hashTable = new Array(size)

  const hashingFunction = (key) => {
    let numericKey = 0
    for (let i = 0; i < key.length; i++) {
      numericKey += key.charCodeAt(i)
    }
    return numericKey % arraySize
  }

  const setData = (key, value) => {
    const hashKey = hashingFunction(key)
    hashTable[hashKey] = value
    return hashTable[hashKey]
  }

  const getData = (key) => {
    const hashKey = hashingFunction(key)
    return hashTable[hashKey]
  }

  const removeData = (key) => {
    const hashKey = hashingFunction(key)
    hashTable[hashKey] = undefined
    return "Deleted"
  }

  const getList = () => {
    for (let i = 0; i < hashTable.length; i++) {
      if (hashTable[i]) {
        console.log(i, hashTable[i])
      }
    }
    return null
  }

  return { setData, getData, removeData, getList }
}

const hashTable = new CustomHashTable(10)

// console.log("Adding Data", hashTable.setData("PK", "Pakistan"))
// console.log("Adding Data", hashTable.setData("KP", "KPAK"))
// console.log("Getting Data", hashTable.getData("PK"))
// console.log("Getting List", hashTable.getList())
// console.log("Deleting Data", hashTable.removeData("PK"))
// console.log("Getting Data", hashTable.getData("PK"))



console.log("----- Start Collision Part------")

function CollisionHashTable(size) {
  const arraySize = size;
  const hashTable = new Array(size)

  const hashingFunction = (key) => {
    let numericKey = 0
    for (let i = 0; i < key.length; i++) {
      numericKey += key.charCodeAt(i)
    }
    return numericKey % arraySize
  }

  const setData = (key, value) => {
    const hashKey = hashingFunction(key)
    if (!hashTable[hashKey]) {
      hashTable[hashKey] = [[key, value]]
    }
    else {
      const isExist = hashTable[hashKey].find(item => item[0] === key)
      if (isExist) {
        isExist[1] = value
      } else {
        hashTable[hashKey].push([key, value])
      }
    }
    return hashTable[hashKey]
  }

  const getData = (key) => {
    const hashKey = hashingFunction(key)
    if (hashTable[hashKey]) {
      const find = hashTable[hashKey].find(item => item[0] === key)


      if (find) {
        return find
      }
      return "Not Found"

    }

    return "Not Found"
  }

  const removeData = (key) => {
    const hashKey = hashingFunction(key)
    if (hashTable[hashKey]) {
      const find = hashTable[hashKey].find(item => item[0] === key)
      if (find) {
        return hashTable[hashKey] = hashTable[hashKey].filter(item => item[0] !== key)
      }
      return "Not Found"
    }
          return "Not Found"
  }

  const getList = () => {
    for (let i = 0; i < hashTable.length; i++) {
      if (hashTable[i]) {
        hashTable[i].forEach(item=> console.log(i, item))
      }
    }
  }

  return { setData, getData, removeData, getList }
}

const collisionHashTable = new CollisionHashTable(10)



console.log("Collision Adding Data", collisionHashTable.setData("PK", "PAKISTAN"))
console.log("Collision Adding Data", collisionHashTable.setData("KP", "KPA"))
console.log("Collision Getting Data", collisionHashTable.getData("PK"))
console.log("Collision Deleting Data", collisionHashTable.removeData("PK"))

console.log("Collision Listing Data", collisionHashTable.getList())
