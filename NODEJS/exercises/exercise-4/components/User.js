module.exports = class User {
    constructor(id,name){
        this.id=id;
        this.name = name;
    }

    getAll(){
        let displayUser = `UserID= ${this.id}\nUsername= ${this.name}`
        console.log(displayUser)
    }
}