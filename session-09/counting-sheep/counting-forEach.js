function countSheeps(arrayOfSheep) {
    let sheepPresent =0;
    // TODO May the force be with you
    arrayOfSheep.forEach(present =>{
      if(present === true){
        sheepPresent++;
      }
    });
    return sheepPresent
  }