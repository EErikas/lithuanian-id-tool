// Value sets of weights that are used for respective digit of ID code
const valueSets = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2, 3]
];
const genderCodes = ['gender.male', 'gender.female'];

const getSumMod = (idCode, valueSet) => {
    let s = 0;
    for (let i = 0; i < 10; i++) {
        s += idCode[i] * valueSet[i];
    }
    return s % 11;
};


// Recursive function to calculate the check digit
const getCheckDigit = (idCode, valueSetID = 0) => {
    // If both runs completed then the value of check digit is 0
    if (valueSetID === 2){
        return 0;
    }
    let checkDigit = getSumMod(idCode, valueSets[valueSetID]);
    //  If check digit is not 10, that is the check digit
    if (checkDigit !== 10) {
        return checkDigit;
    }
    // If check digit is 10 and it is the run with the first value set, calculate with the second value set
    return getCheckDigit(idCode, valueSetID + 1);

};

const getRandomInt = (min, max) => {
    let minCeiled = Math.ceil(min);
    let maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const generateRandomID = () => {
    let randomDate = new Date(new Date() - Math.random()*(1e+12));
    let randomIdString= [
        getRandomInt(1,6),
        String(randomDate.getFullYear()%100).padStart(2, '0'),
        String(randomDate.getMonth()).padStart(2, '0'),
        String(randomDate.getDate()).padStart(2, '0'),
        String(getRandomInt(1,999)).padStart(3, '0')
    ].join('');
    let checkDigit = getCheckDigit([...randomIdString].map(Number));
    return randomIdString + String(checkDigit);
};

export const checkID = (idString) => {
    if (idString.length !== 11) {
        return {error: 'error.wrongLength'};
    }
    if (isNaN(idString)) {
        return {error: 'error.notNumber'};
    }

    // Convert idString to int array
    let idCodeArr = [...idString].map(Number);

    // Verify that check digit is correct
    let checkDigit = getCheckDigit(idCodeArr);
    if (checkDigit !== idCodeArr[10]){
        return {
            error: 'error.wrongCheckDigit',
            correctAnswer: checkDigit
        };
    }

    // If first digit is odd, it results option 1 (male)
    // if the first digit is odd, it results as option 2 (female)
    let genderCode = Number(idCodeArr[0] % 2 === 0);
    let year = 0;

    switch (idCodeArr[0]){
        case 1:
        case 2:
            year = 1800;
            break;
        case 3:
        case 4:
            year = 1900;
            break;
        case 5:
        case 6:
            year = 2000;
            break;
        default:
            return {error: 'error.wrongFirstDigit'};
    }

    year += Number(idString.slice(1,3));
    let month = idString.slice(3,5);
    let day = idString.slice(5, 7);

    let dob = {
        exceptions: [],
        date: [year, month, day].join('-')
    };

    if (month === '00'){
        dob.exceptions.push('exception.month');
    }
    if (day === '00'){
        dob.exceptions.push('exception.day');
    }
    
    return {
        error: null,
        gender: genderCodes[genderCode],
        dateOfBirth: dob,
        birthOrder: Number(idString.slice(7,10))
    }
};