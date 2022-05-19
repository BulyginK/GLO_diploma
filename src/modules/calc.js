const calc = () => {
    if (document.querySelector('#calc')) {
        const calc = document.querySelector('#calc');
        const calcType = document.querySelector('#calc-type');
        const calcTypeMaterial = document.querySelector('#calc-type-material');
        const calcInput = document.querySelector('#calc-input');
        const calcTotal = document.querySelector('#calc-total');

        // вывод итогов в окно "итого"
        const countCalc = () => {
            calcTotal.disabled = false;

            // использование типа остекления
            let valueTypeMaterial = 1; 
            if (calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value > 0) {
                valueTypeMaterial = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
            }

            calcTotal.value = Math.round(calcType.options[calcType.selectedIndex].value * calcInput.value * valueTypeMaterial);
        }

        calc.addEventListener('input', () => {
            calcInput.value = calcInput.value.replace(/\D/, "");
            if (calcType.selectedIndex != 0 && calcInput.value > 0) { // поля балкон/лоджия и площадь должны быть заполнены
                countCalc();
            }
            else if (calcType.selectedIndex == 0 || calcInput.value == 0 || calcTypeMaterial.selectedIndex == 0) {
                calcTotal.value = ''; // очищать поле итого, если где то не выбрано значение 
            }
        })
    }
}

export default calc