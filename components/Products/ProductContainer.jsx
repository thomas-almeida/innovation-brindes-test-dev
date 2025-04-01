"use client"

import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import ProductFilters from "@/components/Products/ProductFilters"
import ProductList from "@/components/Products/ProductList"
import productColors from "@/utils/productColors"

export default function ProductContainer({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts)
  const [token, setToken] = useState("")

  useEffect(() => {
    const storedToken = Cookies.get("token")
    if (storedToken) setToken(storedToken)
  }, [])

  const handleFilter = (filteredProducts) => {
    setProducts(filteredProducts)
  }

  return (
    <div className="container mx-auto p-6">
      <ProductFilters onFilter={handleFilter} token={token} />
      <ProductList products={products} colorOptions={productColors} />
    </div>
  )
}
