const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

div1.addEventListener("click", ()=>{
    for(let item = 0; item < 3; item++){
        const colorCode = Math.random() * 255;
        const rgbCode = Math.floor(colorCode);
        div1.style.backgroundColor = rgbCode;
    };
});

div2.addEventListener("click", ()=>{
    for(let item = 0; item < 3; item++){
        const colorCode = Math.random() * 255;
        const rgbCode = Math.floor(colorCode);
        div2.style.backgroundColor = rgbCode;
    };
});

div3.addEventListener("click", ()=>{
    for(let item = 0; item < 3; item++){
        const colorCode = Math.random() * 255;
        const rgbCode = Math.floor(colorCode);
        div3.style.backgroundColor = rgbCode;
    };
});