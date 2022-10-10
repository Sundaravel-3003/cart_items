function Card({product,addToCart,cartItems}){
    return (
        <div className='col-lg-4 mt-1 border'>
        <div className='row'>
            <div className='col-lg-12'>
                <img src="https://picsum.photos/250/200" />
                <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
                <h4 style={{ marginTop: "10px",marginBottom: "10px" }}>Rs.{product.price}</h4>
                <button disabled={cartItems.some(obj => obj.id === product.id)} onClick={()=>{
                    addToCart(product);
                }} type='button' className='btn btn-primary mb-2'>
                    {cartItems.some(obj => obj.id === product.id) ? "Added to Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    </div>
    );
};

export default Card;


