export class Person {
    public sureName: string;
    public age: number;
    private adress: string;

    constructor(sureName: string, age: number, adress: string) {
        this.sureName = sureName;
        this.age = age;
        this.adress = adress;
    }

    public printName(){
         console.log(this.sureName);
    }

    public yearBirth(currentYear: number): number{
         return currentYear - this.age
         
    }

    public setAdress(adress: string){
        this.adress = adress
    }

    public getAdress(): string{
        return this.adress
        
    }

}