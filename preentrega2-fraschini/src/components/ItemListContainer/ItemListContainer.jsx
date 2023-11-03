import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { Link } from "react-router-dom"



function ItemListContainer ({greeting="Bienvenido a MusicCity!"}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        mFetch()
            .then(result => setProducts(result))
            .finally(()=> setLoading(false))
    },[])






    return (
        <>

            <div>
                {greeting}
            </div>

          {  loading ? <h4>Loading...</h4>
            :
            products.map(product => <div className="card w-25">
                                        <img src={product.imageUrl} className="card-img-top"/>
                                        <div className="card-body">
                                        <h3><strong>{product.name}</strong></h3>
                                        <p>{product.category}</p>
                                        <p>Precio: {product.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/item/${product.id}`}><button className="btn">Ver detalles</button></Link>
                                            
                                            
                                        </div>
                                    </div>)}

       
        </>

       
        
    )
}






export default ItemListContainer

