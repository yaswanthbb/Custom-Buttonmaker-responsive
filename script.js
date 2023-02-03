function buttonChange(){
    let button1 = document.getElementById("customButton");
    let buttonBackground = document.getElementById("backGround").value;
    let buttonFontSize = document.getElementById("fontSize").value;
    let buttonFontColor = document.getElementById("fontColor").value;
    let buttonFontWeight = document.getElementById("fontWeight").value;
    let buttonPadding = document.getElementById("padding").value;
    let buttonborderRadius = document.getElementById("borderRaadius").value;
    button1.style.backgroundColor = buttonBackground;
    button1.style.fontSize = buttonFontSize;
    button1.style.color = buttonFontColor;
    button1.style.fontWeight = buttonFontWeight;
    button1.style.borderRadius = buttonborderRadius;
    button1.style.padding = buttonPadding;
}