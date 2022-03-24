let Subject = [-900, 5 , 20 , -5 , 30, 90, -100, 312]
let Smallest = []
let Biggest = []
function Array(Array1) {
for(x = 0;x < Array1.length;x++){
    if(Array1[x] < Smallest){
        Smallest = Array1[x]}
    else if(Array1[x] > Biggest){
        Biggest = Array1[x]}
    }
    console.log(Smallest, Biggest)
}
Array(Subject)
