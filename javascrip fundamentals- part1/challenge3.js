let d1=97,d2=112,d3=101;

let k1=109,k2=95,k3=106;

let dolAvg=(d1+d2+d3)/3;
let koaAvg=(k1+k2+k3)/3;

if(dolAvg===koaAvg)
{
    console.log("no one can win it can Draw");
}
else if(dolAvg> koaAvg && dolAvg>=100)
{
    console.log(`${dolAvg} dolphins avg is higher ....dolphin is winner`);
}
else if(dolAvg < koaAvg && koaAvg>=100)
{
    console.log(`${dolAvg} dolphins avg is higher ....dolphin is winner`);
}