let someString="marafone4t4t43t";


function showVerticalMessage(){

if(!someString){

    console.log('ERROR');

}else if(someString[0]==='m' ){

  let newstring = someString[0].toUpperCase() + someString.slice(1);

  newstring = newstring.slice(0,10);


  for(let char of newstring) {
    
    console.log(char);
    
  } 

}else {

 someString = someString.slice(0,10);

  for( let char of someString){

    console.log(char);

  }
}

}


  showVerticalMessage();

 
 





