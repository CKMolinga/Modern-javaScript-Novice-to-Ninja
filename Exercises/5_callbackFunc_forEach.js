// Callbacks & forEach

let people = ['mario', 'luigi', 'ryu', 'shawn', 'chun-li'];

// callback Function definition

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

// Fuction call

people.forEach(logPerson);