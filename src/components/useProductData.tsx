import { useState, useEffect } from "react";
import { Product } from "../ts/interface/global_interfaces";


export default function useProductData() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=20').then(((res) => res.json()))

            setAllProducts(response);
        }

        catch (error) {
            console.error("Error fetching Data:", error)
        }
    }

    return [allProducts]
}