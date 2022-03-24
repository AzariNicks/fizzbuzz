// Write your solution below this line:
for(x = 0;x <= 50;x++){
    if((x % 5) === 0 && (x % 3) === 0){
        console.log('fizzbuzz')
    }
    else if((x % 3) === 0){
        console.log('buzz')
    }
    else if((x % 5) === 0){
        console.log('fizz')
    }
    else{console.log(x)}
    }

