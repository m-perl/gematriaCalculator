const calBtn = document.getElementById('calBtn');

const input = document.getElementById('input');

let breakDownArray = [];

const letters = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 10,
    כ: 20,
    ך: 20,
    ל: 30,
    מ: 40,
    ם: 40,
    נ: 50,
    ן: 50,
    ס: 60,
    ע: 70,
    פ: 80,
    ף: 80,
    צ: 90,
    ץ: 90,
    ק: 100,
    ר: 200,
    ש: 300,
    ת: 400
};

calBtn .onclick = () => {

    breakDownArray = [];

    let theValue = input.value;

    let split = theValue.split('');

    let results = 0;

    let el = document.getElementById('letter');

    for (let i = 0; i < split.length; i++) {

        results += letters[split[i]];

        breakDownArray .push(split[i] + ' = ' + letters[split[i]])

        let newPara = document.createElement('p');

        newPara .innerHTML = breakDownArray[i]

        el.appendChild(newPara);
    }

    //result 
    document.getElementById('results') .innerHTML = 'Result: ' + results

    //breakdown
    document.getElementById('breakDown') .style = 'display: block';

    console.log(breakDownArray)
}
