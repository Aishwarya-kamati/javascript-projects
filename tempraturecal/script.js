const Celsius=document.querySelector("#celsius"),
fahrenheit=document.querySelector("#fahrenheit");


//when page load that has to focus to celsius input field
window.addEventListener("load",()=>Celsius.focus());

//celsius added it has to be calculate the farhenhit
Celsius.addEventListener("input",()=>{
    fahrenheit.value=((Celsius.value*9)/5+32).toFixed(2);
    if(!Celsius.value) fahrenheit.value=" ";
});
//when a fahrenhit value change to calculate the celsius
fahrenheit.addEventListener("input",()=>{
    Celsius.value=(((fahrenheit.value-32)*5)/9).toFixed(2);
    if(!fahrenheit.value) Celsius.value="";
})


