let number=17
function checkprime(number){
    let count=0;
    for(let i=1;i<=number;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count==0){
        console.log("prime")
    }else{
        console.log("not prime")
    }
}