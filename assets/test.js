function noPrimes(array){
    const primeChecker = (num) => {
        for(let i=2; num>i; i++){
            if(num % i === 0){
                return false;
            }
        }
        return num >1;
    }

    return(array.filter(primeChecker));
}


console.log(noPrimes([1,2,45,3,5,7]))


const isPrime = (array) => {
    let primes = [];
    array.forEach(element => {
        return element % 2 === 0 ? '' : primes.push(element);
    });
    return primes
}

console.log(isPrime([20, 4, 5, 7, 6, 8])); 



const isPrime2 = (array) => {
    return array.filter(elem => elem %2 !== 0 && elem > 1);
}

const result = isPrime2([-2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);