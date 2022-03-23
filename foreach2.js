const color =["red","blue","green","yellow","pink"];

Array.prototype.foreach2 = function(callback){
    for (let index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index],index,this);
        }
    }
};

color.foreach2(function (course, index, array){
    console.log(course, index, array);
});