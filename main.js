let someString="sarafon";


function showVerticalMessage(obj){

  if(!obj){
  
      console.log('ERROR');
  
  }else if(obj[0]==='m' ){
  
    let newstring = obj[0].toUpperCase() + obj.slice(1);
  
    newstring = newstring.slice(0,10);
  
  
    for(let char of newstring) {
      
      console.log(char);
      
    } 
  
  }else {
  
   obj = obj.slice(0,10);
  
    for( let char of obj){
  
      console.log(char);
  
    }
  }
  
  }

  showVerticalMessage(someString);
