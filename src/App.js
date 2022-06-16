import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { uiActions } from './store/slices/uiSlice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/slices/cartActions';
import GetZapros from './components/getzapros/GetZapros';

//const BASE_URL = 'https://toolkit-87a4f-default-rtdb.firebaseio.com'

let isInitial = true
function App() {

  const dispatch = useDispatch()
  const isShow = useSelector(state=>state.ui.cartIsVisible)
  const notification = useSelector(state=>state.ui.notification)
  const cart = useSelector(state=>state.cart)
 

  useEffect(()=>{
    let timer 
    if(notification){
      timer = setTimeout(()=>{
        dispatch(uiActions.hideNotification())
      },3000)
    }
    return ()=>{
      clearTimeout(timer)
    }
  }, [notification])

  //----------------------------------------
  useEffect(()=>{
    if(isInitial){
      isInitial = false
      return
    }
    dispatch(sendCartData(cart))
    
  },[cart])
  console.log(isShow);
  return (
    <>
     {notification && <Notification status={notification.status}
    title={notification.title} message={notification.message} />}
    <Layout>
      {isShow && <Cart />}
      <Products />
    </Layout>
    <GetZapros/>
  </>
  );
}

export default App;
