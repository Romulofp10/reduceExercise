import cartActionTypes from "./actionType"


const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_PRODUCT:
            //verify if  product exist
            const productIsAlreadyInCart =  state.products.find((product)=> product.id  === action.payload.id)
            
            //if products exists qtd +1 
            if(productIsAlreadyInCart){
                return{
                    ...state,
                    products:state.products.map((product)=>
                        product.id === action.payload.id ? {...product,quantity: product.quantity + 1}
                    : product    
                ),
                };
            }
            //se ele nao estiver,adiciona-lo
            return {
                ...state,
                products:[...state.products, {...action.payload,quantity: 1}]
            };
        case cartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id  !== action.payload )
            };

        case cartActionTypes.INCREMENT_PRODUCT:
            return{
                ...state,
                products: state.products.map((product) =>
                 product.id === action.payload ? 
                {...product, quantity: product.quantity + 1} 
                :product),
            }

            case cartActionTypes.DECREMENT_PRODUCT:
                //diminui a quantidade e logo em seguida ele exclui do carrinho com o filtro, caso ele seja menor que 0.
                return{
                    ...state,
                    products: state.products.map((product) =>
                     product.id === action.payload ? 
                    {...product, quantity: product.quantity - 1} 
                    :product)
                    .filter((product)=> product.quantity > 0),
                }
        default: return state
    }

}

export default  cartReducer;