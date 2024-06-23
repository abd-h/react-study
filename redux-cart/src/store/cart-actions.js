
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) =>  { 
        const fetchData = async  () => {
          const response = await fetch(
            "https://basket-3c7ef-default-rtdb.firebaseio.com/basket.json"
          );
            if (!response.ok) {
                throw new Error('Could not fetch basket data!')
            }
            const data = await response.json();
            return data;
        }; 

        try {
            const basketData = await fetchData();

            dispatch(
              cartActions.replaceCart({
                items: basketData.items || [],
                totalQuantity: basketData.totalQuantity,
              })
            );
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching basket data failled!'
            }))
        }
        
        }

    
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending basket data!",
      })
    );

    const sendReqest = async () => {
      const response = await fetch(
        "https://basket-3c7ef-default-rtdb.firebaseio.com/basket.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending basket data failed");
      }
    };

    try {
     await sendReqest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent basket data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending basket data failed",
        })
      );
    }
  };
};
