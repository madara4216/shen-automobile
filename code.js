class Computers {
constructor(name,model,specs,year) {
this.name = name,
this.model = model,
this.specs = specs,
this.year = year

}

}
let laptop = new Computers('razer','razer blade 16',{ram : 'DDR4',gpu : 'nvidia RTx 4090TI',chasis : 'aluminium'},2024)
console.log(`${laptop.model} has an ${laptop.specs.chasis} build and uses a ${laptop.specs.gpu} GPU`)
console.log(laptop)
const {name ,model} = laptop
console.log(`${name} is a monster of a machine`)

function Book(name,author,year,publisher) {
this.id = name,
this.author = author,
this.year = year,
this.publisher = publisher

}
let productivity = new Book('molecular habits','James Clear','2019','New York best seller')
console.log(productivity.id + ' writtn by ' + productivity.author)

function Language(name,uses) {
this.identity = name,
this.uses = uses

}
const webDev = new Language('javascript',['web dev',
    'machine learning',
    'game development'])
    console.log(...webDev.uses)

function courses() {
this.name = 'anatomy'
this.type = 'gross anatomy'
return  [this.name , this.type]
}
console.log(...courses())




