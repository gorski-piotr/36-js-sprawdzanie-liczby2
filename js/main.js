function myFunction (num1, num2) {
    if (num1 === 20 || num2 === 20) {
        return true;
    } else if ((num1 + num2) <= 20) {
        return true;
    } else {
        return false;
    }
}

console.log(myFunction(-1,20));