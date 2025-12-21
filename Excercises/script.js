let numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 29]; 

function numberstest(numbers) {

    if(Array.isArray(numbers) !== true) {
        throw new Error("Kein Array vorhanden"); 
    }

    let newnumbers = []; 

    for(i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 == 0) {
            newnumbers.push(numbers[i]);
        }

    }

    if (newnumbers.length === 0) {
        throw new Error("Leeres Array"); 
    } else {
        return newnumbers;
    }

}

