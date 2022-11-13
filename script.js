class com{
    constructor(){
        this.width = 5;
        this.height = 5;
        this.back = 'black'
        this.left = Math.floor(Math.random()*95);
        this.top = Math.floor(Math.random()*95);
    }
}

let arr = [];
for(let i = 0;i < 20;i++){
    arr[i] = new com();
}

arr.forEach((el) => {
    document.querySelector('.wrapper').insertAdjacentHTML('afterbegin',`<div style = "position: absolute; width: ${el.width}%;height: ${el.height}%;top: ${el.top}%;left: ${el.left}%;background: ${el.back};"></div>`)
})

