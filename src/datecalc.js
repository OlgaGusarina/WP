import { formatError } from "./utils.js";
import { diffDates, diffToHtml } from "./diffDates.js";
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);


function handleCalcDates(event) {
    dateCalcResult.innerHTML = ""; //обнуляем результат
    event.preventDefault();//тормознуть автоматическую отправку на сервер

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля!!!"); // 5
};