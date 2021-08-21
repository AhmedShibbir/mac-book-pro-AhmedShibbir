let clicked = 1;
function extraCost(extraItem){
    const extraMemory8GbInnerText = 0;
    const extraMemory16GbInnerText = 180;
    const extraStorage256GbInnerText = 0;
    const extraStorage512GbInnerText = 100;
    const extraStorage1TbInnerText = 180;
    const freeDelivery = 0;
    const notFreeDelivery = 20;
    const bestPrice = 1299;
    let totalPriceCalc = 0;
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
    const promoValueText = document.getElementById("promoText").value; 
    console.log(promoValueText);
    totalPriceCalc = parseInt(document.getElementById("initialBestPrice").innerText) + parseInt(document.getElementById("extraMemoryCost").innerText) + parseInt(document.getElementById("extraStorageCost").innerText) + parseInt(document.getElementById("deliveryChargeCalculation").innerText);
    const totalPriceCalculationText = document.getElementById("totalPrice");
    totalPriceCalculationText.innerText = totalPriceCalc;
    const updatedTotalPriceText = document.getElementById("updatedTotal");
    updatedTotalPriceText.innerText = totalPriceCalc;
    clicked = 1;
}
//promo part
document.getElementById("promoButton").addEventListener('click', function promoFunc(){
    const receivedPromoInput = document.getElementById("promoText").value;
    if(receivedPromoInput == "stevekaku" && clicked == 1){
        const discount = parseInt(document.getElementById("totalPrice").innerText)/5;
        let afterDiscountTotalCost = parseInt(document.getElementById("totalPrice").innerText) - discount;
        const totalPriceCalculationText = document.getElementById("totalPrice");
        totalPriceCalculationText.innerText = afterDiscountTotalCost;
        const updatedTotalPriceText = document.getElementById("updatedTotal");
        updatedTotalPriceText.innerText = afterDiscountTotalCost;
        document.getElementById("promoText").value = "";
        clicked++;

    }
    else{
        document.getElementById("promoText").value = "";}

});
    
