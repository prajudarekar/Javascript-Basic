/*

//const day='saturday';
const day=prompt("enter a day!!!! ");
switch(day)
{
case 'monday':
console.log('plan to course structure');
break;

case 'tuesday':
console.log('go to the coding ');
break;

case '2':
    console.log("it is second case:: ");
    break;

default:
 console.log("it is default stmt ");
 break;

}
*/

/*

//statement and expression
3+4
1991

if(23>10)
{
    const str='23 is bigger';
}

const me='jonas';
console.log(`I'm ${2037-1991} years old ${me}`);
*/

//conditional operator / ternary 

const age=23;

age>18 ? console.log("i like to drink wine ") :console.log("i like to drink water ")


const drink= age>=18 ? 'wine' : 'water'
console.log(drink);

let drink2;
if(age>= 18)
{
    drink2 = 'wine';
}
else{
    drink2='water';
}
console.log("drink2:: "+drink2);
console.log(`i like to drink ${age>18 ? 'wine' : 'water'}`);