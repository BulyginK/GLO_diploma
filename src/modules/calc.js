const calc = () => {
    const calc = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcInput = document.querySelector('#calc-input');
    const calcTotal = document.querySelector('#calc-total');

    

    calcInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    });
    
    const countCalc = () => {
        calcTotal.disabled = false;
        let valueTypeMaterial = 1;

        if (calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value > 0) {
            valueTypeMaterial = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
        }

        calcTotal.value = Math.round(calcType.options[calcType.selectedIndex].value * calcInput.value * valueTypeMaterial);
    }

    calc.addEventListener('input', (e) => {
        if (calcType.options[calcType.selectedIndex].value > 0 && calcInput.value > 0) {
            countCalc();
        } 
        // else {
        //     // calcType.options[calcType.selectedIndex] = calcType.options[0];
        //     // calcInput.value = '';
        //     // calcTypeMaterial.options[calcTypeMaterial.selectedIndex] = calcTypeMaterial.options[0];
        // }

    })
}

export default calc