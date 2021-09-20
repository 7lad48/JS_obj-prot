function Car(name, year) {
    this.name = name
    this.year = year
}

let ford = new Car('ford', 2015)
var bmw = new Car('bmw', 2017)

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'

bmw.color = 'red'
console.log(bmw)
console.log(ford)

/*function Car(name, year) {
    this.name = name
    this.year = year
    this.color = 'black'
}
var bmw = new Car('bmw', 2017)*/  //-----зачем в прототип если можно ч/з метод объекта дополнительным свойством?