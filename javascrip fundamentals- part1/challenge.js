var mweight1=78;
var jweight1=92;
var mheight1=1.69;
var jheight1=1.95;

var mweight2=95;
var jweight2=1.88;
var mheight2=85;
var jheight2=1.76;

MassBMI=mweight1/mheight1**2;
JohnBMI=jweight1/(jheight1*jheight1);


MassBMI1=mweight2/mheight2**2;
JohnBMI1=jweight2/(jheight2*jheight2);

console.log("MassBMI1:: "+MassBMI);
console.log("JohnBMI1:: "+JohnBMI);

console.log("MassBMI2:: "+MassBMI1);
console.log("JohnBMI2:: "+JohnBMI1);

if(MassBMI>JohnBMI)
{
    console.log("MAssBMI1 is higher than JohnBMI1:: "+MassBMI);
}
else{
    console.log("JohnBMI1 is higher than MassBMI1::  "+JohnBMI);
}


if(MassBMI1>JohnBMI1)
{
    console.log("MAssBMI2 is higher than JohnBMI1:: "+MassBMI1);
}
else{
    console.log("JohnBMI2 is higher than MassBMI1::  "+JohnBMI1);
}