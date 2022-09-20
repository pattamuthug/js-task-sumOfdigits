var num = document.getElementById('num');
var btn = document.getElementById('button');
var result = document.getElementById('result');

btn.addEventListener('click',()=>{
        let number = num.value;
        result.innerText = output(number)
})

function output(number) {
    let temp = number;
    let rem = 0;
    while (temp>0) {
        lastDegit = temp % 10;
    temp = temp - lastDegit;
    temp = temp / 10;
     rem = lastDegit + rem;
    }
    return rem;
}
