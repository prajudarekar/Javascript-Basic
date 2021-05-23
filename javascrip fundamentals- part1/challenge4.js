let bill=275;
let tip=41.25;
var total;

if(bill>=50 || bill<=300)
{
    tip=15;
    
}
else{
    tip=20;
}

total=(bill+tip);

console.log("Total:: "+total);
console.log("tip: "+tip);

const tip1=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2

console.log(`the bill was ${bill} ,the tip was ${tip1} ,and total value ${bill+tip1}`);
console.log(bill+tip1);
console.log("tip :: "+tip1);