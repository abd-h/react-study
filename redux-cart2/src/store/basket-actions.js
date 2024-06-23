import { basketActions } from "./basket-slice";
import uiSlice, { uiActions } from "./ui-slice"

export const fetchBasketData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://basketitems-169f4-default-rtdb.europe-west1.firebasedatabase.app/basketItems.json"
      );

      if (!response.ok) {
        throw new Error('Could not fetch basket data')
      }

      const data = await response.json();

      return data;
    };

    try {
      const basketData = await fetchData();

      dispatch(basketActions.replaceBasket({
        items: basketData.items || [],
        totalQuantity: basketData
          .totalQuantity,
      }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Failed basket data failed',
      }))
    }
  }
}


export const sendBasketData = (basket) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Pending",
        message: "Request Pending",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://basketitems-169f4-default-rtdb.europe-west1.firebasedatabase.app/basketItems.json", {
        method: 'PUT',
        body: JSON.stringify({
          items: basket.items,
          totalQuantity: basket.totalQuantity
        })
      }
      );

      if (!response.ok) {
        throw new Error('Sending new data failed');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent data successfully",
        })
      );

    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data failed",
        })
      );
    }
  };
};