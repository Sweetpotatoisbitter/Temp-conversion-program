const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;
function convert(){
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp= temp * 9 / 5 + 32;
        result.textContent = "temp. is  "+  temp.toFixed(1)  + "°F✌️"

    }else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp-32) * (5/9);

        result.textContent = "temp. is  "+ temp.toFixed(1)  + "°C👍"

    }else{
        result.textContent = "Select a unit,dawg!😎"
    }

}




