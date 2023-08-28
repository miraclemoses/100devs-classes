//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
const fighter = {}

fighter.name = 'joan'
fighter.age = 47
fighter.sex = 'male'
fighter.skill = 'shadow kick'

fighter.sayname = function() {
    return fighter.name
}

fighter.gender = function() {
    return fighter.sex
}

fighter.makeup = function() {
    return fighter.skill
}

