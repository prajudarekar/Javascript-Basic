/*const age=15;
const isen=age>=18;

if(isen)
{
    console.log("sara have permission for driving licence:: ");
}
else
{
    const yearleft=18-age;
    console.log(`sara has not permission for driving licence::it has ${yearleft} years left `);
}
const byear=1998;
let century;
if(byear <= 2000)
{
    century=20;
}
else{
    century=21;
}
console.log(century);*/

/*

//type conversion
const inputyear=1998;
console.log(Number(inputyear),inputyear);
console.log(Number(inputyear)+2);

console.log(Number('jonas'));
console.log(typeof NaN);

//type coercion
console.log('I am ' +23+ 'years old');
console.log('I am ' +String(23)+ 'years old');

console.log('23'-'10'-3);
console.log('23'*'2');
console.log('23'/'2');
console.log('23'>'18');

let n='1'+1;    //11
n=n-1;
console.log(n);


let n1='1'-1;  //0
n1=n1-1;
console.log(n1);

console.log('10'-'4'-'3'-2+'5');*/


/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money=0;
if(money)
{
    console.log("Don't spend it all");
}
else{
    console.log("You should get a job");
}

let height=123;
if(height)
{
    console.log("height is defined");

}
else{
    console.log("height is undefined");
}*/


//== vs === operator
/*
const age=18;
if(age===18)
{
    console.log("strick mode");
}
if(age==18)
{
    console.log("loose coupled mode")
}

const fav=Number(prompt("whats your fav number"));
console.log("fav:: "+fav);
console.log(typeof fav);

if(fav == 23)    //23==23
{
    console.log("23 is amazing no")
}
if(fav === 23)   //23===23
{
    console.log("23 is more amazing no")
}
else if(fav === 7)
{
    console.log("7 is amazing no");
}
else if(fav === 9)
{
    console.log("9 is amazing no");
}
else{
    console.log("no is not  23 or 7  or 9:: ");
}

if(fav !== 23)console.log("why not 23? ");
*/

let A= true;
let B=true;

console.log(A && B);
console.log(A || B);
console.log(!A);

let c=A && B;
if(c)
{
    console.log("sarah has to drive");
}
else{
    console.log("sarah cannot drive");
}