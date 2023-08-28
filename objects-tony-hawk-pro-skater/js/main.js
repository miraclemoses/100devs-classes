//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater(name,taunt,superPower,punch) {
    this.name = name
    this.taunt = taunt
    this.superPower = superPower
    this.punch = punch
    this.sayPower = function() {
        console.log(`${this.name} super power is ${this.superPower}`)
    }
    this.kick = function() {
        console.log(`${this.name} can beat his opponent with ${this.punch} punches`)
    }
    this.catchPhrase = function() {
        console.log(`${this.name} kicks ${this.taunt}`)
    }
}
let spiderman = new TonyHawkProSkater('clara','ebooooo','spider web',5)