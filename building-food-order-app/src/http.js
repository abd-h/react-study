

export async function fetchAvailableMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to fetch meals...');
    }
     
    return resData;
}

export async function mealsOrdered(order) {
 console.log(order.items);
 console.log(order.customer);
    const response = await fetch("http://localhost:3000/orders", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order: {
                items: order.items,
                customer: order.customer
            }
        }),
    });

    const resData = await response.json();
  
    if (!response.ok) {
        throw new Error('Fail to Post')
    }
 
    return resData.message;
}

