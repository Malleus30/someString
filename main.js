let someString="m2345678910";


function showVerticalMessage(obj){

 let check = (!obj || typeof obj !== 'string' || obj === undefined || obj === " ");

  if(check){
    console.log('ERROR');
    return;
  }

  obj = obj.slice(0, 10);

  if(obj[0]==='m'){
    obj = (obj[0].toUpperCase() + obj.slice(1));
  }

  for(let char of obj){
      console.log(char);
    }
  }

  showVerticalMessage(someString);
 