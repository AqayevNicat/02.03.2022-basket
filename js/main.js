var myBtn = document.querySelectorAll(".btn");

if(localStorage.getItem("basket") === null){
    localStorage.setItem("basket",JSON.stringify([]));
}
sc();

for(let btn of myBtn){
    btn.addEventListener("click",function(e){
        e.preventDefault();
        // Localstorage and add product
        if(JSON.parse(localStorage.getItem("basket")) === null){
            localStorage.setItem("basket",JSON.stringify([]))
        }
        let basket = JSON.parse(localStorage.getItem("basket"));

        let id = this.parentElement.getAttribute("data-id");
        let name = this.parentElement.firstElementChild.innerText;
        let img = this.parentElement.previousElementSibling.getAttribute("src");
        let price = Number(this.parentElement.querySelector(".price").innerText);
        let exist = basket.find(n => n.id == id);
        if(exist === undefined){
            basket.push({
                id: id,
                name: name,
                img: img,
                price: price,
                count: 1
            })
        }
        else{
            exist.count += 1;
        }
        localStorage.setItem("basket",JSON.stringify(basket));
        sc();
    })
}

function sc(){
    let basket2 = JSON.parse(localStorage.getItem("basket"));
    document.querySelector(".sc").innerText = basket2.length;
}

