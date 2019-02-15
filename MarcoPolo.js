//Ask the user for their name.
var yourName=prompt("Please enter your name");
if (yourName==="") alert('please enter your name');
else if (yourName) {
  alert("Hi, "+yourName+". I want us to play a game. The name of the game is Marco Polo.");
  alert("Please enter any number. I will then give you list from 1 up to the number you've chosen.");
  alert("To make it interesting, I will replace any numbers divisible by 7 in our list with 'Marco'.");
  alert("If our list contains any number with a 7, I'll replace that number with 'Polo'.");
  alert("If any number is both divisible by 7 and contains a 7, I'll replace that number with 'Marco Polo'.");
  alert("Interesting, right!! Okey dokey, Let's begin");
  //ask the user to enter the number
  var ourNumber=prompt("Please enter any three-digit number:");
}
else{
  alert("Goodbye");
}
//function to check if the number has 7
function contains7(a){
var strA=a.toString();
if (strA[0]==="7" || strA[1]==="7" || strA[2]==="7")
  return true;
else{
  return false;
}
}
//check if the number is greater than 1
if (ourNumber<1){alert("please enter a number that's greater than 1")}
for (i=1;i<=ourNumber;i++){
    //number contains 7 and is divisible by 7
  if (contains7(i)===true && i%7===0){
    console.log("Marco Polo");
  }
  //number contains 7
  else if (contains7(i)===true){
    console.log("Polo");
  }
  //number is divisible by 7
  else if (i%7===0){
    console.log("Marco"); 
  }
  //number is neither contains a 7 nor divisible by 7
  else {
    console.log(i);
  }
}


