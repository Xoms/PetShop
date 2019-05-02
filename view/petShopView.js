const petShop = document.querySelector(".petShop");
const aboveAverage = document.querySelector(".aboveAveragePrice");

function showPetsAboveAverage(arr, avPrice){
    let outStr = ``;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].price > avPrice) {
            if (arr[i].name) {
                outStr += `${arr[i].name}: ${arr[i].price}`;
            } else {
                outStr +=`Hamster: ${arr[i].price}`;
            } 
        }
    }
    return outStr;
}