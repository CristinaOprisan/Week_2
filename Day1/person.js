class Person {
    constructor (sureName, firstName, yearOfBirth, height, weight, hobbies){
        this.sureName = sureName;
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.height = height;
        this.weight = weight;
        this.hobbies = hobbies
    }

    calculateIMC() {
        let imc = this.weight / (this.height * this.height);
        return imc;
    }

    calculateAge () {
        let actualYear = new Date().getFullYear()
        let age = actualYear - this.yearOfBirth
        return age
    }

    printAll () {
        console.log("Person attributes:");
         for (let key in this) {
            if (this.hasOwnProperty(key)) {
              console.log(`${key}- ${this[key]}`);
            }

        }
    }

    printHobbies () {
        this.hobbies = [this.hobbies]
        return this.hobbies
    }
}



module.exports = Person