const switcher = document.getElementById('switcher');
const timer = document.getElementById('timer');
const datecalc = document.getElementById('datecalc');

switcher.addEventListener('click', changeBlock)
function changeBlock(event) {
    if (event.target.id == 'calc') {
        if (datecalc.classList.contains('hidden')) { datecalc.classList.remove('hidden') }
        else { datecalc.classList.add('hidden') }
    } if (event.target.id == 'time') {
        if (timer.classList.contains('hidden')) { timer.classList.remove('hidden') }
        else { timer.classList.add('hidden') }
    }
};