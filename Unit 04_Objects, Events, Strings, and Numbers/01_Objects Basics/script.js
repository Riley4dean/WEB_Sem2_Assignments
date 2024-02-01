const building = {
    window: "1",
    door: "2",
    room: "3",
    id: 21341,
    buildingHas: function (){
        return this.window + " " + this.door + " " + this.room ;
    }
};


console.log(building.window)
console.log(building.door)
console.log(building.room)
console.log(building.id)
console.log(building.buildingHas)

