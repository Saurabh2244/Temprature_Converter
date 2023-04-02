let cel = document.getElementById("cel");
let far = document.getElementById("far");

cel.addEventListener("input", function () {
    let c = this.value;
    let f = (c * (9 / 5)) + 32;

    
    if(!Number.isInteger(f)){
        far.value=f.toFixed(4);
    }
    else{
        far.value=f;
    }
});

far.addEventListener("input", function () {
    let f = this.value;
    let c = (f - 32) * (5 / 9);


    if(!Number.isInteger(c)){
        cel.value=c.toFixed(4);
    }
    else{
        cel.value = c;
    }
})