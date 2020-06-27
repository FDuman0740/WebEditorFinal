const mySieve = new EratostenesSieve(BELOW_WHAT);
const setOfPrimes = new Set(mySieve.primes);
const setOfWinnerNumbers = new Set();
mySieve.primes.forEach((prime) => {
    if (!setOfWinnerNumbers.has(prime)) {
        const primeCircular = new CircularNumber(prime);
        const primeAllRotations = primeCircular.allRotations();
        // if all rotations of the prime are primes
        // then add all them all to the setOfWinnerNumbers
        if (primeAllRotations.length === primeAllRotations
            .filter((primeRotation) => setOfPrimes
            .has(primeRotation)).length) {
            primeAllRotations
                .map((primeRotation) => setOfWinnerNumbers
                .add(primeRotation));
        }
    }
});
console.log('setOfWinnerNumbers', setOfWinnerNumbers.size);
