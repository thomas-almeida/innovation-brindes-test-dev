"use client" 

import Cookies from "js-cookie" 
import { useState } from "react" 
import ProductFilters from "@/components/Products/ProductFilters" 
import ProductList from "@/components/Products/ProductList" 

export default function ProductContainer({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts) 
  const token = Cookies.get("token")
  
  const handleFilter = (filteredProducts) => {
    setProducts(filteredProducts) 
  } 

  return (
    <div className="container mx-auto p-6">
      <ProductFilters onFilter={handleFilter} token={token} />
      <ProductList products={products} />
    </div>
  ) 
}
