const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
let lowestMark = 10;
let bigestMark = 0;
let averageMarksList = [];

for (const { name, marks } of data) {
    let sum = 0;
    for (const number of marks) {

        sum += number;

        if (number < lowestMark) {
            lowestMark = number;
        } else if (number > bigestMark) {
            bigestMark = number;
        }
    }

    averageMarksList.push(sum / marks.length)

    if (marks.includes(lowestMark)) {
        console.log(`Maziausia pazymi ${lowestMark} turi mokinys:`, name);
    }

    if (marks.includes(bigestMark)) {
        console.log(`Didziausia pazymi ${bigestMark} turi mokinys:`, name);
    }
}

// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

// let bigestMark = 0;
// for (const { name, marks } of data) {
//     for (const number of marks) {

//         if (number > bigestMark) {
//             bigestMark = number;
//         }
//     }
//     if (marks.includes(bigestMark)) {
//         console.log(`Didziausia pazymi ${bigestMark} turi mokinys:`, name);

//     }
// }

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
let lowestAverage = 10;
let highestAverage = 0;

for (let i = 0; i < averageMarksList.length; i++) {
    const average = averageMarksList[i];

    if (average > highestAverage) {
        highestAverage = average;
    }

    if (average < lowestAverage) {
        lowestAverage = average;
    }
}

for (let i = 0; i < averageMarksList.length; i++) {
    const average = averageMarksList[i];

    if (average === lowestAverage) {
        console.log(`Maziausia vidurki ${lowestAverage} turi ${data[i].name}`);
    }
    if (average === highestAverage) {
        console.log(`Didziausia vidurki ${highestAverage} turi ${data[i].name}`);
    }
}



// Isspausdinti mokinio varda, jei jis turi pazymi 8
for (const { name, marks } of data) {

    for (const number of marks) {

        if (number === 8) {
            console.log(`Astuoneta turi: ${name}`);
        }
    }
}
// Isspausdinti mokinio varda, jei jis neturi pazymio 7
for (const { name, marks } of data) {

    for (const number of marks) {

        if (marks.includes(7) === false) {
            console.log(`Septyneto neturi: ${name}`);
            return
        }
    }
}