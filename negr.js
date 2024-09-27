const input = document.getElementById('input')
const ota = document.getElementById('boxOta')
const btn = document.getElementById('btn')

const err = document.getElementById('err')

 err.style='display:none';

let p=[]
fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
    .then(res => res.json())
    .then(json => productsAll(json));

btn.addEventListener("click", ()=>{
    let q=p.filter(e=> e.name==input.value);
 if (q.length==0) {
    err.style='display:block';
    ota.innerHTML="";
}else{
     err.style='display:none';
     productsAll(q)

 }
})


function productsAll(produktalar) {
    p=produktalar;
    for (let i = 0; i < produktalar.length; i++) {



        const div = document.createElement("div")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const img = document.createElement("img")


        h2.textContent = "Name: " + produktalar[i].name
        h3.textContent = "Price: " + produktalar[i].price+'$'
        p.textContent = "Description: " + produktalar[i].fulldesc
        img.src =  produktalar[i].pic

        div.classList.add("box")
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(p)
        ota.appendChild(div)

    }


}