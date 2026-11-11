import { useState } from "react";

export default function NewProduct({addProduct}){

    let [product,setProduct] = useState({id:0,name:"Designation Produit",price:0,quantity:1});

    function changeHandler(event){
        setProduct(p => ({...p, [event.target.name]: event.target.value}));
    }

    return (
        <div className="new-product">
            <h1>Nouveau Produit</h1>
            {/** Controlled Input Component */}
            <fieldset>
                <legend>Informations sur le produit</legend>
                <div>
                    <label htmlFor="id">Identificateur : </label>
                    <input type="text" size={25} id="id" name="id" value={product.id} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="name">Designation du Produit: </label>
                    <input type="text" size={25} id="name" name="name" value={product.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="price">Prix Unitaire: </label>
                    <input type="text" size={25} id="price" name="price" value={product.price} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="quantity">Quantité : </label>
                    <input type="text" size={25} id="quantity" name="quantity" value={product.quantity} onChange={changeHandler}/>
                </div>
            </fieldset>
            <div>
                <button onClick={() => addProduct(product)}>Ajouter au Stock</button>
            </div>
        </div>
    )
}