import { useEffect, useState } from "react";
import DataGrid from "./components/DataGrid";
import NewProduct from "./components/NewProduct";
import { getAllProducts } from "./services/product.service";
import "./css/ProductManager.css";


export default function ProductManager() {

    let [products,setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
        .then(data => setProducts(data));
    }, []);

    function addProductHandler(newProduct){
        setProducts(list => [...list,newProduct]);
    }

    return (
        <div className="product-manager">
            <NewProduct addProduct={addProductHandler}/>
            <DataGrid title = "Produits en Stock" data = {products}/>
        </div>
    )
}