interface IPerson {
    fullname(): void;
}
class Host {
    private name: string;
    protected age: number;
    public address: string;


    constructor(name: string, age: number, address: string) {

        this.name = name;
        this.age = age;
        this.address = address;
    }
    fullNAme() {
        console.log(`My name is ${this.name} I am ${this.age}years old and live in ${this.address}`)


    }

}

class User extends Host {
    constructor(name: string, age: number, address: string, real:string) {
        super(name, age, address)
    }
}


const host = new Host('Kelechi', 28, 'Lagos');
const user = new User('Brian', 27, 'Ak', 'yes');
host.fullNAme();
user.fullNAme();

