function extraCost(extraItem){
    const extraMemory8GbInnerText = 200;
    const extraMemory16GbInnerText = 400;
    const extraStorage256GbInnerText = 500;
    const extraStorage512GbInnerText = 600;
    const extraStorage1TbInnerText = 700;
    const freeDelivery = 00;
    const notFreeDelivery = 500;
    const bestPrice = 1299;
    let newTotalSum = 0;
    /*  extra memory Part's calculation */
    if(extraItem == "extraMemory8GB"){
        document.getElementById("extraMemory8GB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraMemoryCost");
            gettingObjet.innerText = extraMemory8GbInnerText;
            newTotalSum = bestPrice + extraMemory8GbInnerText;

        });
    }
    else if(extraItem == "extraMemory16GB"){
        document.getElementById("extraMemory16GB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraMemoryCost");
            gettingObjet.innerText = extraMemory16GbInnerText;
        });
    }
    /*  extra storage Part's calculation */
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
    else if(extraItem == "ssd1TB"){
        document.getElementById("ssd1TB").addEventListener("click", function(){
            let gettingObjet = document.getElementById("extraStorageCost");
            gettingObjet.innerText = extraStorage1TbInnerText;
        });
    }
    /*  delivery option Part's calculation */
    else if(extraItem == "freeDelivery"){
        document.getElementById("freeDelivery").addEventListener("click", function(){
            let gettingObjet = document.getElementById("deliveryChargeCalculation");
            gettingObjet.innerText = freeDelivery;
        });
    }
    else if(extraItem == "paidDelivery"){
        document.getElementById("paidDelivery").addEventListener("click", function(){
            let gettingObjet = document.getElementById("deliveryChargeCalculation");
            gettingObjet.innerText = notFreeDelivery;
        });
    }
    let totalPriceCalc = parseInt(document.getElementById("initialBestPrice").innerText) + parseInt(document.getElementById("extraMemoryCost").innerText) + parseInt(document.getElementById("extraStorageCost").innerText) + parseInt(document.getElementById("deliveryChargeCalculation").innerText);
    const totalPriceCalculationText = document.getElementById("totalPrice");
    totalPriceCalculationText.innerText = totalPriceCalc;
    const updatedTotalPriceText = document.getElementById("updatedTotal");
    updatedTotalPriceText.innerText = totalPriceCalc;
    
}
    
    
