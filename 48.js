let  myObj = { 
    one : "once",
    two : "twice",
    three : "..."
}

function checkObj(obj) {
    if(obj.hasOwnProperty("one")){
      return  console.log(obj.one);
    }
    else{ 
       return console.log("not found");
    }    
}
console.log(checkObj(myObj));



