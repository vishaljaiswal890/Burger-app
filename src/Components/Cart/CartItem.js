import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `${parseFloat(props.price).toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div style={{display:"flex"}}>
        <div style={{display:"flex"}}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
        </div>
        <div style={{marginLeft: "15rem"}}>
          <div className={classes.actions}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;