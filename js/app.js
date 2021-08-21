function extraCost(extraItem){
    const extraMemory8GbInnerText = 200;
    const extraMemory16GbInnerText = 400;
    const extraStorage256GbInnerText = 500;
    const extraStorage512GbInnerText = 600;
    const extraStorage1TbInnerText = 700;
    const freeDelivery = 00;
    const notFreeDelivery = 500;
    if(extraItem == "extraMemory8GB"){
        document.getElementById("extraMemory8GB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraMemoryCost");
            gettingObjet.innerText = extraMemory8GbInnerText;
        });
    }
    else if(extraItem == "extraMemory16GB"){
        document.getElementById("extraMemory16GB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraMemoryCost");
            gettingObjet.innerText = extraMemory16GbInnerText;
        });
    }
    else if(extraItem == "ssd256GB"){
        document.getElementById("ssd256GB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraStorageCost");
            gettingObjet.innerText = extraStorage256GbInnerText;
        });
    }
    else if(extraItem == "ssd516GB"){
        document.getElementById("ssd516GB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraStorageCost");
            gettingObjet.innerText = extraStorage512GbInnerText;
        });
    }
    
}
    
    
