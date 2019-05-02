function getAveragePrice(arr){
    let avPrice = 0;
    for (let i = 0; i < arr.length; i++){
        avPrice += arr[i].price;
    } 
    avPrice = avPrice / (arr.length - 1);
    return avPrice;
}

function 