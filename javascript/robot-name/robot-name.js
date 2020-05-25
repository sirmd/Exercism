
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNames = new Set();


export class Robot {
    constructor() {
        this._name = generateRobotName();
    }

    get name() {
        return this._name
    }

    reset() {
        this._name = generateRobotName();
    }

}

Robot.releaseNames = () => { allNames.clear() };


const generateRobotName = () => {
    let robotName = "";
    do {
        robotName = generateRandomLetters() + generateRandomNumber();
    } while (allNames.has(robotName));

    allNames.add(robotName);
    return robotName;
};

const generateRandomLetters = () => {
    var number1 = Math.floor((ALPHABET.length) * Math.random());
    var number2 = Math.floor((ALPHABET.length) * Math.random());
    return ALPHABET.substring(number1, number1 + 1) +
        ALPHABET.substring(number2, number2 + 1);

}

const generateRandomNumber = () => {
    return Math.floor(10 * Math.random()).toString() +
        Math.floor(10 * Math.random()).toString() +
        Math.floor(10 * Math.random()).toString();

}


