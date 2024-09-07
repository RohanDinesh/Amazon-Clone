export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    price: 0
},{
    id: '2',
    deliveryDays: 3,
    price: 49
},{
    id: '3',
    deliveryDays: 1,
    price: 99
}];


export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;

    deliveryOptions.forEach((i) => {
        if (i.id === deliveryOptionId){
            deliveryOption = i;
        }
    })

    return deliveryOption || deliveryOptions[0];  // setting a default deliveryOption to first one 
}