import cartIcon from "../../assets/img/cart.png"

function CartWidget () {
    return (
        <div className="cartWidget">
            <img className="imgCart"  src={cartIcon} alt="cart icon" /><p>3</p>
            
        </div>
    )
}

export default CartWidget