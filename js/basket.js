
let basket = JSON.parse(localStorage.getItem("basket"));


    Add();
function Add(){
    for(let product of basket){
        let prodList = document.querySelector(".tbody1")
        let prodEl = document.createElement("tr");
        prodEl.innerHTML = `<i class="fa-solid fa-xmark close"></i>`;
    
        let prodId = document.createElement("td");

        let prodImg = document.createElement("td");
        let image = document.createElement("img");
        let price = document.createElement("span");
        price.setAttribute("class","pprice")

        let prodName = document.createElement("td");
        let prodCount = document.createElement("td");
        let prodTotal = document.createElement("td");

        let ptotal = document.createElement("span");
    
        price.innerText = product.price;
        prodId.innerText = product.id;
        prodImg.append(image,price);
        image.setAttribute("src",product.img);
        prodName.innerText = product.name;
        prodCount.innerText = product.count;
        
        // Calc total price
        ptotal.innerHTML = Number(product.count*product.price);
        prodTotal.append(ptotal)
    
        prodEl.append(prodId,prodImg,prodName,prodCount,prodTotal);
        prodList.append(prodEl)
        
        
    }
    var pri = 0;
    let gentotal = document.querySelector(".prices");
    for(let i = 0;i<basket.length;i++){
        pri += Number(basket[i].count*basket[i].price);
        
        gentotal.innerText = pri;
    }
    
    // close
    let close = document.querySelectorAll(".close");
    for(let icon of close){
        icon.addEventListener("click",function(){
    
            for( var i = 0; i < basket.length; i++){ 
                if ( basket[i].id == this.nextElementSibling.innerText) { 
                    basket.splice(i, 1); 
                    localStorage.setItem("basket",JSON.stringify(basket));
                    window.location.reload();
                }
            }
        })
    }
    err();
}

function err(){
    if(document.querySelector(".tbody1").children.length == 0){
        let err = document.createElement("div");
        let errmsg = document.createElement("h3");
        errmsg.innerText = "Sebet bosdur";
        err.append(errmsg);
        document.querySelector(".tbody1").append(err)
    }
}