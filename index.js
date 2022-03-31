let count= 0;

function CountPrime(x,y){
    for(let i = x; i <= y; i++){
    if(i % !i !== 0 ){
        count+=1
    }
    return count
    }
}
