// OOP - Practice exercise

class Vehicle {
    constructor(speed, action) {
        this.speed = speed;
        this.action = action;
    } // action = left/right/backward/forward


    move(actionType) {
        this.action = actionType
        this.speed += 5;
        console.log(`Action:${this.action}\nVehicleType:${this.vehicletype}\nSpeed:${this.speed}mph`)
    }

    run() {

        switch (this.action) {
            case 'left':
                this.move('Turn Left')
                break;
            case 'right':
                this.move('Turn Right')
                break;
            case 'forward':
                this.move('Forward')
                break;
            case 'backward':
                this.move('Backward')
                break;
            case 'break':
                this.move('Break!')
                break;
        }


    }


}

class CyberTruck extends Vehicle {
    constructor(speed, action, vehicletype) {
        super(speed, action)
        this.vehicletype = vehicletype
    }

    hide() {
        console.log('default method')
    }
}

// MainApp 

let EventListener = document.body.addEventListener('keydown', (e) => {
    //console.log(e.key)
    /*
    ArrowUp
    ArrowLeft
    ArrowRight
    ArrowDown
    */
   if(e.key == 'ArrowRight'){
       console.log('Turn Right')
       let truck = new CyberTruck('50','right','CyberTruck');
       truck.run();
   }
   if(e.key == 'ArrowLeft'){
       console.log('Turn Left')
       let truck = new CyberTruck('50','right','CyberTruck');
       truck.run();
   }
   if(e.key == 'ArrowUp'){
       console.log('Forward')
       let truck = new CyberTruck('50','right','CyberTruck');
       truck.run();
   }
   if(e.key == 'ArrowDown'){
       console.log('Backward')
       let truck = new CyberTruck('50','right','CyberTruck');
       truck.run();
   }
   if(e.key == 'Control'){
       console.log('Stop Auto')
       let truck = new CyberTruck('0','right','CyberTruck');
       truck.run();
   }
})