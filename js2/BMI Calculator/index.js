const form = document.querySelector('form')
// this usecase will give you empty
// const height=parseInt(document.querySelector("#height").value);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const wieght = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");
    if (height ==='' || height < 0 || isNaN(height)) {
        result.innerHTML=`Please give you a valid height ${height}`;
    }
    else if (wieght ==='' || wieght < 0 || isNaN(wieght)) {
        result.innerHTML=`Please give you a valid wieght ${wieght}`;
    }
    else{
        const Bmi=(wieght/((height*height)/10000)).toFixed(2);
        // show the result
        result.innerHTML=`<span>${Bmi}</span>`
    }
})