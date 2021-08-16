const _ = require('lodash')
const beginningArray = ["You should", "You shouldn't", "You could", "You can", "You cannot"]
const thingsArray = ["code", "bike", "swim", "walk", "run", "play", "work"]
const whenArray = ["now", 'later', 'soon', 'everyday', 'for a day', 'for a month', 'for a year']
const randomArrayString = (array1, array2, array3) => {
    return `${_.sample(array1)} ${_.sample(array2)} ${_.sample(array3)}`
}
console.log(randomArrayString(beginningArray,thingsArray,whenArray))