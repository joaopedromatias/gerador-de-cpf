
var button = document.querySelector('button.run-button');

button.addEventListener('mouseover', () => { 
    button.style.background = 'rgb(27, 133, 204)';
})

button.addEventListener('mouseout', () => { 
    button.style.background = 'rgb(15, 120, 190)';
})

var output = document.querySelector('div.output');

button.addEventListener('click', () => {
    
    while (true) { 
        var random = Math.random();
        if (random >= 0.1) { 
            break
        }
    }
  
    let cpfBase = Math.ceil(random*(10**9));
    let cpfBaseSplited = cpfBase.toString().split('');
    let firstSumOfProducts = 0;
    let secondSumOfProducts = 0;
    let firstDigit = 0;
    let secondDigit = 0;

    for (let i = 10; i > 1; i--) { 
        let j = 10 - i 
        firstSumOfProducts += cpfBaseSplited[j] * i; 
    }

    let firstRemainder = firstSumOfProducts%11;

    function getDigit (firstRemainder) { 
        if (firstRemainder == 0 || firstRemainder == 1) { 
           return 0
        } else { 
            return 11 - firstRemainder;
        }
    }

    firstDigit = getDigit(firstRemainder);
    cpfBaseSplited.push(firstDigit);
    
    for (let i = 11; i > 1; i--) { 
        let j = 11 - i 
        secondSumOfProducts += cpfBaseSplited[j] * i; 
    }

    let secondRemainder = secondSumOfProducts%11;
        
    secondDigit = getDigit(secondRemainder);

    cpfBaseSplited.push(secondDigit);

    cpfBaseSplited.splice(3, 0, '.');
    cpfBaseSplited.splice(7, 0, '.');
    cpfBaseSplited.splice(11, 0, '-');

    finalCpf = cpfBaseSplited.join('');
    output.innerHTML = finalCpf;
});