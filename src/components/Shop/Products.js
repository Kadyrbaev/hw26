import { useState } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book i ever wrote ",
  },
  {
    id: "p2",
    price: 2,
    title: "My Second Book",
    description: "The first book i ever wrote ",
  },
];

const Products = (props) => {

  const[arr, setArr]=useState([])
  const [data,setData]=useState({
    description: '',
    title: '',
    price: ''
  })

  function inpHand(e){
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]:value
    })
    console.log(data);
  }

  function submitHandler(e){
    e.preventDefault()

    setArr(prev=>[...prev,{...data,id:Math.random()}])

    setData({
      description: '',
      title: '',
      price: ''
    })

  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <form onSubmit={submitHandler} className={classes.formdiv}>
        <div className={classes.formsecond}>
        <h3>Form</h3>
        <input name='description' placeholder='description' onChange={inpHand}></input>
        <input name='title' placeholder='title' onChange={inpHand}></input>
        <input type='number' name='price' placeholder='price' onChange={inpHand}></input>
        <button type='submit'>Add Cart</button>
        </div>
      </form>
      
      <ul>
        {arr.map((el)=>(
          <ProductItem
          id={el.id} key={el.id}
          title={el.title} price={el.price}
          description={el.description} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
