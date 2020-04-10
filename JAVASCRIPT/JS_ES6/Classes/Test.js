class MainClass {
    constructor(name){
        this.name = name
    }

    greeting(){
        console.log('Hello friend!')
    }
}

class MySubClass extends MainClass {
    constructor(name){
        super(name)
    }
    greeting(){
        super.greeting();
        console.log('This is from ChildClass')
        
    }
}

let test1 = new MySubClass('Robot');
test1.greeting()