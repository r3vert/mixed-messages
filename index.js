const _ = require('lodash')
const beginningArray = ["You should", "You shouldn't", "You could", "You can", "You cannot"]
const thingsArray = ["code", "bike", "swim", "walk", "run", "play", "work"]
const whenArray = ["now", 'later', 'soon', 'everyday', 'for a day', 'for a month', 'for a year']
const finnishedString = `${_.sample(beginningArray)} ${_.sample(thingsArray)} ${_.sample(whenArray)}`
console.log(finnishedString)