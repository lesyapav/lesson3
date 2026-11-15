rounded.addEventListener ('change', () => { 
    radius.disabled = !rounded.checked;
});
form.addEventListener('submit', evt => {
    evt.preventDefault();
    let s = `border: ${width.value} ` + 
            `${style.options[style.selectedIndex].value} ` + 
            `${color.value};`;
    if(rounded.checked)
        s += `\nborder-radius: ${radius.value};`;
    output.style=s;
    output.textContent=s;
});
const units = ['px','pt','mm','cm','%','in','pc'];
function isUnitPresents(val){
    for (let u of units){
        if (val.endsWith(u))
            return true;
    }
    return false;
}
width.addEventListener('change', () => {
    if (width.validity.customError)
        width.setCustomValidity('');
    if (width.validity.valid){
        if (!isUnitPresents(width.value))
            width.setCustomValidity('Задайте единицу измерения после' + 'значения толщины');
    } else if (width.validity.valueMissing)
        width.setCustomValidity('Введите толщину');
});