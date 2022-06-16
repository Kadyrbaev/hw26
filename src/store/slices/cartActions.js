import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const sendCartData =(cart)=>{
    return(dispatch)=>{
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending data to cart !",
        })
      );
      fetch('https://toolkit-87a4f-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body:JSON.stringify(cart)
      })
      .then(response=>{
        if(!response.ok){
          throw new Error('Sending cart data failed')
        }
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Sent Cart data successfully !",
          })
        );
        return response.json()
      })
      .then((data)=>{
        console.log(data);
      }).catch((error)=>{
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error.!",
            message: "Sending Cart data failed !",
          })
        );
      })
  
    }
  }


  export const getCartData =()=>{
    return(dispatch)=>{
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending data to cart !",
        })
      );
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((data)=>{
        dispatch(cartActions.zapros(data))
       console.log(data);
        if(!data.ok){
          throw new Error('Sending cart data failed')
        }
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error.s!",
            message: "Sending Cart data failed !",
          })
        );
        return data.json()
      }).catch(()=>{
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Sent Cart data successfully !",
          })
          
        );
      })
  
    }
  }


