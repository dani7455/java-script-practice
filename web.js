/*
// Logical oparetors//

const drivelisence = true; //a varable
const goodvishion =true;//b varable

console.log(drivelisence && goodvishion);
console.log(drivelisence||goodvishion);
console.log(!drivelisence);


if(drivelisence && goodvishion){
    console.log("dani you go for a ride");

}else{
    console.log("you can dont drive");

}
if(drivelisence || goodvishion){
    console.log("dani you go for a ride");

}else{
    console.log("dani you can dont drive");
}


const sheistied = false;
console.log(drivelisence && goodvishion && sheistied);

if(drivelisence && goodvishion && !sheistied){
    console.log("dani is able to drive");

}else{
    console.log("some one should drive");

}
/*coding challenge

const scoreA1 =(89+109+30)/3;
const scoreB1 =(89+109+30)/3;
console.log(scoreA1,scoreB1);

if (scoreA1 > scoreB1){
    console.log("A1 win the trophy");

}else if (scoreB1> scoreA1){
    console.log("B1 win the trophy");

} else if(scoreA1 === scoreB1){
    console.log("both are win the trophy");
}

//switch statement//

   const day ="thursday";

   switch (day){
    case "monday":
        console.log("plan couse struture");
        console.log("go to coding meet up");
        break;
        case "tuesday":
            console.log("prepare theory videos");
            break;
            case "wednesday":
                case "thursday":
                    console .log("write code examples");
                    break;
                   case "friday":
                    console.log("record videos");
                    break;
                    case "saturday":
                        case "sunday":
                            console.log("enjoy the weekend" );
                            
                            break;
                            default:
                                console.log("not a valid day");

 }

 if (day==="monday"){
    console.log("plan couse struture");
    console.log("go to coding meet up");

 }else if(day==="tuesday" ){
    console.log("prepare theory videos");

 }else if(day==="thursday" || (day==="wednesday")){
    console .log("write code examples");

 }

 else if(day==="friday"){
    console.log("record videos");

 }else if(day==="saturday" ||(day==="sunday")){
    console.log("enjoy the weekend" );
                            

 }
 else  {
    console.log("not a valid day");
 } /////////end
 


 // The conditional operator//


 const age = 22;
 age >=18 ? console.log("i like to drink"):
 console.log("i like to water");

 const drink = age>=18 ? "wine":"water";
 console.log(drink);

 let drink2 ;


 if(age >=18){
    drink2 = "wine";

 }else{
    drink2 ="water";
 }
 console.log(drink2);
 console.log(`i like to drink ${age>=18 ? "wine":"water"}`
  

 ); /////////end
 
//////// functions //////


  function logger(){
    console.log('this is dani');
    //calling /  running / invoking//


  }
  logger();
  logger();



  function fruit(apples,greps){
    const juice=`juice with ${apples} apples and ${greps} greps`;
    return juice;


  }
  const applesjuice=fruit(7,8);
  console.log(applesjuice);
  

  const applesgrapesjuice=fruit(3,7);
  console.log(applesgrapesjuice);

 const num= Number('21'); ///////////end


 


// function declaration vs/ expressions///////////


//  this is the function declaration//////
 function age (birthyear){
    return  2022-birthyear;
    
 }
 const age1 = age(1999);
 console.log(age1);

// this is  function expression ////////

 const age2 = function(birthyear){
    return 2022 - birthyear;

 }
 const prasentage = age2(1999);
 console.log(prasentage,'years old');



// arrow fiunctions///////

 const calcage3 = birthyeah => 2037-birthyeah;
 const age3 = calcage3(1991);
 console.log (age3);
 
 const retirement =(birthyeah,firstname)=>{
    const age =2037-birthyeah;
    const retirement =65 -age;
    return `${firstname} retirement in${retirement}years`;
 }
 console.log(retirement(1999, "nandu"));


///// function calling other functions//////

 
 function fruit(apples,greps){
    const juice=`juice with ${apples} apples and ${greps} greps`;
    return juice;


  } ;


  const cutpieces =  function (fruit){
    return fruit * 2;

  };

  const fruitprocessor = function (apples,greps){
    const  applepices = cutpieces(apples);
    const grepspices =cutpieces(greps);
    const juice =`apples with ${applepices} piceces  greps with ${grepspices} pices`
    return juice;


  };    
      console.log(fruitprocessor(2,3));


      // practice function calling another function/////

 function age (nandu,subbu){

    const age1 =`nandu age ${nandu}years old and subbu age is ${subbu}years old `;
    return age1 ;
 };
 const age2 = function(age){
    return age *4;

 }
    const doubleage = function(nandu,subbu){
        const nanduage = age2(nandu);
        const subbuage =age2(subbu);
        const age1 =`nandu age ${nanduage}years old and subbu age is ${subbuage}years old `;
        return age1;

    }
        console.log(doubleage(5,6));
*/




// review fumctions ///////
const calcage = function  (birth) {
    return 2037-birth;

}
const yearsleftretirement = function(birth, firstname){
    const age = calcage(birth);
    const retirement =65 -age;

    if (retirement >0){
        console.log(`${firstname} retires in ${retirement}years`);
        return retirement;
    }else {
        console.log(`${firstname} has already retired`);
        return -1;
    }
}
 console.log(yearsleftretirement(1991,"nandu"));
 console.log(yearsleftretirement(1998,"subbu"));

