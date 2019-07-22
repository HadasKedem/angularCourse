    

function Person(name, age = 1, password = 1, gender = 'woman',car = 'volvo',haveBike = true)
{
    this.name = name
    this.age = age
    this.password = password
    this.gender = gender
    this.car = car
    this.haveBike = haveBike
}
// import Person from './person.js'

function clicked()
{
    //alert(document.getElementById("nameTxt").value)
    //call new Person with values from input boxes
    const name = document.getElementById("nameTxt").value
    const age = document.getElementById("ageTxt").value
    const pass = document.getElementById("passTxt").value
    const genderform = document.getElementById('gender')

    let gender = ""
    let i = 0
    while(i < genderform.length && gender === ""){
        if( genderform[i].checked){
             gender = genderform[i].value
        }
        i++
    }
    const carSelect = document.getElementById('car').value
    const bike = document.getElementById('haveBike').checked
    
    //-- create Person
    const person = new Person(name, age,pass, gender,carSelect,bike)
    console.log(person)
    // -- use class


}