
const printStar = (num) => {
    let i = 0;
    let string = "";
    do {
      string = string + "*";
      i++;
    } while (i < num);
    console.log(string);
    return string;
  };
  
  //printStar(2);