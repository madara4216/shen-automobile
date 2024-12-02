let text = document.querySelector('#text');


class Car {
constructor(name,model,prodYear) {
this.name = name,
this.model = model,
this.prodYear = prodYear

}
}
let germanMake = new Car('toyota','highlander','2024')
let japaneseMake = new Car('honda','accord','2025')
text.innerHTML = germanMake.name + ' is a beautiful car'

for(info in japaneseMake) {
    console.log(japaneseMake[info])
}

class Worker {
constructor(name , age,annualSalary,pensionFee) {
this.identity = name,
this.age = age,
this.annualSalary = annualSalary
this.pensionFee = pensionFee


}


}
let person = new Worker('lisa','20','$300/h','$5000/m')
for(info in person) {
console.log(person[info])

}

