function Cart({cartItems,removeFromCart}) {
    return (
        <div>

            <div>
                <ol class="list-group list-group-numbered">
                    {cartItems.map((items) => {
                        return <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">{items.name}</div>
                               Rs.{items.price}
                            </div>
                            <button onClick={()=>{
                                removeFromCart(items);
                            }}class="badge bg-primary rounded-pill">Remove</button>
                        </li>
                    })
                    }
                </ol>
                {cartItems.length === 0 ? <h4>No Items in Cart</h4> : <h3 style={{ marginTop: "10px" }}>Total Rs:{
                    cartItems.reduce((prev,cur) =>{
                        return prev = prev + cur.price;
                    },0)
                } </h3>
                }
            </div>

        </div>




    )



}

export default Cart;