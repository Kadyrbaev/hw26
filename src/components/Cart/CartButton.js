import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {  uiActions } from '../../store/slices/uiSlice';

const CartButton = (props) => {
  const totalQuantity = useSelector((state)=> state.cart.totalQuantity)

  const dispatch = useDispatch()

  const toggleHandler = ()=>{
    dispatch(uiActions.toggle()) //{type: 'reuhgogkfngmfn}
    console.log(2);
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
