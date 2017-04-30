{
    init: function(elevators, floors) {
        //Used for both elevators.
        elevators.forEach(function(elevator, index){
            //Picks up passengers when they request a pickup.
            elevator.on("floor_button_pressed", function(floorNum) {
                //Picks up the passenger while the elevator is moving if the elvevator isn't overloaded.
                if (elevator.destinationQueue.indexOf(floorNum) == -1) { elevator.goToFloor(floorNum); }
            });
            //Brings elevator back to ground floor where most passengers start if elevator is idle.
            elevator.on("idle", function(floor){
                elevator.goToFloor(0, true);
            });
            // Stop at the floor first if it is in the queue.
            elevator.on("passing_floor", function(floorNum, direction) {
                if (elevator.destinationQueue.indexOf(floorNum) != -1) { 
                    elevator.goToFloor(floorNum, true); 
                }
            });
            // Stops for passengers going the same direction as the elevator.
            elevator.on("passing_floor", function(floorNum, direction) { 
                if(direction == "down" && floors[floorNum] == true){elevator.goToFloor(floorNum, true)}
                else if(direction == "up" && floors[floorNum] == true){ elevator.goToFloor(floorNum, true)}
            });
        })
        // Created this method to be able to stop at floors that have waiting passengers.
        // Used for all floors.
        floors.forEach(function(floor, index){
            floor.passengersWaiting = false;
            floor.on("down_button_pressed", function(){
                floor.passengersWaiting == true;
            })
            floor.on("up_button_pressed", function(){
                floor.passengersWating == true;
            })
        });
        
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}