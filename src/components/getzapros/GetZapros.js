import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCartData } from "../../store/slices/cartActions";
import { uiActions } from "../../store/slices/uiSlice";
import styled from './GetZapros.module.css'

let isInitial = true
const GetZapros=()=>{
    const dispatch=useDispatch()
    const data = useSelector(state=>state.cart.array)
    const isValid = useSelector(state=>state.ui.isGetValid)
    console.log(isValid);
    const notification = useSelector(state=>state.ui.notification)
   
     let timer 
    useEffect(()=>{
   
      if(notification){
        timer = setTimeout(()=>{
          dispatch(uiActions.hideNotification())
        },3000)
      }
      return ()=>{
        clearTimeout(timer)
      }
    }, [notification])
  
    useEffect(()=>{
      if(isInitial){
        isInitial = false
        return
      }
      dispatch(getCartData())
      
    },[isValid])


    function getzaprosHandler(){
        dispatch(getCartData())
    }
    return(
        <div className={styled.btnname}>
          <button onClick={getzaprosHandler}>GET ZAPROS</button>
          {data.map((el)=>(
            <div className={styled.div2}>
              <span>{el.name}</span>
            </div>
          ))}
          
        </div>
    )
}
export default GetZapros