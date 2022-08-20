
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

   

