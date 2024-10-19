var x0 = '';
var fromValue = 'km';
var toValue = 'km';
const numberBefore = document.querySelector('.number-before');
const buttons = document.querySelectorAll(".button");
const resultSpan = document.querySelector('.result');
const convertBtn = document.querySelector('.transform-btn');
const fromSelect = document.querySelector('.from-select');
const toSelect = document.querySelector('.to-select');
const btnAc = document.querySelector('.btn-Ac');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const number = event.target.innerHTML;
        console.log(number);
        x0 += number;
        console.log(x0)
        numberBefore.innerHTML = x0;
        return x0;
    })
})
fromSelect.addEventListener('change', function (event) {
    console.log(this.value);
    fromValue = this.value;
})
toSelect.addEventListener('change', function (event) {
    console.log(this.value);
    toValue = this.value;
})
convertBtn.addEventListener('click', function () {
    console.log(true);
    console.log(fromValue);
    console.log(toValue);
    if (fromValue == 'km' && toValue == 'm') {
        resultSpan.innerHTML = numberBefore.innerHTML * 1000 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'm' && toValue == 'km') {
        resultSpan.innerHTML = numberBefore.innerHTML / 1000 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'm' && toValue == 'cm') {
        resultSpan.innerHTML = numberBefore.innerHTML * 100 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'cm' && toValue == 'm') {
        resultSpan.innerHTML = numberBefore.innerHTML / 100 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'km' && toValue == 'cm') {
        resultSpan.innerHTML = numberBefore.innerHTML * 100000 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
        console.log(resultSpan.innerHTML);
    }
    else if (fromValue == 'cm' && toValue == 'km') {
        resultSpan.innerHTML = numberBefore.innerHTML / 100000 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'dm' && toValue == 'm') {
        resultSpan.innerHTML = numberBefore.innerHTML / 10 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'm' && toValue == 'dm') {
        resultSpan.innerHTML = numberBefore.innerHTML * 10 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'cm' && toValue == 'dm') {
        resultSpan.innerHTML = numberBefore.innerHTML / 10 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'dm' && toValue == 'cm') {
        resultSpan.innerHTML = numberBefore.innerHTML * 10 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'dm' && toValue == 'km') {
        resultSpan.innerHTML = numberBefore.innerHTML / 10000 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else if (fromValue == 'km' && toValue == 'dm') {
        resultSpan.innerHTML = numberBefore.innerHTML * 10000 + "-" + toValue;
        numberBefore.innerHTML += '-' + fromValue;
        console.log(numberBefore.innerHTML);
    }
    else {
        resultSpan.innerHTML = numberBefore.innerHTML + "-" + toValue;
    }
})
btnAc.addEventListener('click', function () {
    /*location.reload();*/
    x0 = '';
    resultSpan.innerHTML = '';
    numberBefore.innerHTML = '';
})
