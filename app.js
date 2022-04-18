console.log("## FACTORIAL ##");
console.log("Fonction itérative d'un nombre factoriel: computeFactorialIt(5))");
const computeFactorialIt = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(computeFactorialIt(5))
console.log("             ")

console.log("Fonction récusive d'un nombre factoriel: computeFactorialRec(5)");
const computeFactorialRec = (n) => {
    if (n === 1) { return 1;} 
    return n * computeFactorialRec(n - 1);
}
console.log(computeFactorialRec(5))
console.log("             ")
console.log("#######################################")




console.log("## PUISSANCE ##");
console.log("fonction itérative qui retourne son premier argument à la puissance p, où p est le second argument. En cas d'erreur, la fonction doit retourner 0 : computePowerIt(5, 2)");
const computePowerIt = (n, p) => {
    let power = 1;
    for (let i = 1; i <= p; i++) {
        power *= n;
    }
    return power;
}
console.log(computePowerIt(5, 2));
console.log("             ")

console.log("fonction récursive qui retourne son premier argument à la puissance p, où p est le second argument. En cas d'erreur, la fonction doit retourner 0 : computePowerRec(5, 2)");
const computePowerRec = (n, p) => {
    if (p === 0) { return 1;} 
    return n * computePowerRec(n, p - 1);
}
console.log(computePowerRec(5, 2));
console.log("             ")

console.log("Utilisationde Math.pow(n, p)");
console.log(Math.pow(5, 2));
console.log("             ")
console.log("#######################################")
 



console.log("## RACINE CARRE ##");
console.log("fonction qui retourne la racine carrée d'un nombre : computeSquareRoot(25, 5)");
const computeSquareRoot = (n, p) => {
    let squareRoot = n;
    for (let i = 1; i <= p; i++) {
        squareRoot = (squareRoot + n / squareRoot) / 2;
    }
    return squareRoot;
}
console.log(computeSquareRoot(25, 5));
console.log("             ")

console.log("Utilisation de Math.sqrt(n)");
console.log(Math.sqrt(25));
console.log("             ")
console.log("#######################################")




console.log("## NOMBRE PREMIER ##");
console.log("fonction qui retourne true si un nombre est premier, false sinon : isPrimeNumber(5) && isPrimeNumber(16)");
const isPrimeNumber = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(5),  "Pour 5");
console.log(isPrimeNumber(16), "Pour 16");
console.log("             ")

console.log("fonction qui va retourner le plus petit nombre premier supérieur ou égal à n : findSubPrime(10)");
const findSubPrime = (n) => {
    for (let i = n; i < Number.MAX_SAFE_INTEGER; i++) {
        if (isPrimeNumber(i)) { return i }
    }
}
console.log(findSubPrime(10));
console.log("             ")
console.log("#######################################")



console.log("## NOMBRE PARFAIT ## (bonus");
console.log("fonction qui retourne true si un nombre est parfait, false sinon : isPerfectNumber(6) && isPerfectNumber(28) && isPerfectNumber(35)");
const isPerfectNumber = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
console.log(isPerfectNumber(6),  "Pour 6");
console.log(isPerfectNumber(28), "Pour 28");
console.log(isPerfectNumber(35), "Pour 35");
