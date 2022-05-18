const calc = () => {
    if (document.querySelector('#calc')) {
        const calc = document.querySelector('#calc');
        const calcType = document.querySelector('#calc-type');
        const calcTypeMaterial = document.querySelector('#calc-type-material');
        const calcInput = document.querySelector('#calc-input');
        const calcTotal = document.querySelector('#calc-total');

        const countCalc = () => {
            calcTotal.disabled = false;
            let valueTypeMaterial = 1;

            if (calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value > 0) {
                valueTypeMaterial = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
            }

            calcTotal.value = Math.round(calcType.options[calcType.selectedIndex].value * calcInput.value * valueTypeMaterial);
        }

        calc.addEventListener('input', () => {
            calcInput.value = calcInput.value.replace(/\D/, "");
            if (calcType.selectedIndex != 0 && calcInput.value > 0) {
                countCalc();
            }
            else if (calcType.selectedIndex == 0 || calcInput.value == 0 || calcTypeMaterial.selectedIndex == 0) {
                calcTotal.value = '';
            }
        })
    }
}

export default calc