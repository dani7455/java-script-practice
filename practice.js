
/*

const items ={
    firstnam:'dani',
    lastname: 'paidi',
    firends:['nandu','nandu'],
    age :1991,
   calcage: function(){
    return 2020-this.age
   }

};

console.log(items['lastname']);
console.log(items. calcage());

*/


const mark={
    fullname :'mark miller',
    mass :78,
    hight :1.69,
    calcbmi:function(){
        this.bmi =this.mass/this.hight**2;
        return this.bmi;
    }

};




const john = {
    fullname:'john smith',
    mass :92,
    hight :1.95,
    calcbmi:function(){
        this.bmi =this.mass/this.hight**2;
        return this.bmi;
    }
};

mark.calcbmi();
john.calcbmi();
console.log(mark.bmi, john.bmi);


if(mark.bmi> john.bmi){
    console.log('mark bmi higher than jhon');
}
else{
    console.log('john bmi higher than mark');
}