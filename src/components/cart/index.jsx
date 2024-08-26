// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item/index";
import { selectProductTotalPrice } from "../../redux/cart/cartSelector";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const {products} = useSelector((rootReducer)=> rootReducer.cartReducer)
  const productTotal = useSelector(selectProductTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((product)=> (<CartItem product={product}/>))}
        <Styles.CartTotal>Total: R$ {productTotal}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
