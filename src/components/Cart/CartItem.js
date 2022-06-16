import { cartActions } from '../../store/slices/cartSlice';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux/es/exports';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  function plusHandler(){
    dispatch(cartActions.addItemToCart({
      id,
      price,
      name: title
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${+price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
