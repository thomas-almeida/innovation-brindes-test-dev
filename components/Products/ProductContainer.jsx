"use client"

import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import ProductFilters from "@/components/Products/ProductFilters"
import ProductList from "@/components/Products/ProductList"

export default function ProductContainer({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts)
  const [token, setToken] = useState("")

  const productColors = [
    '#7d2e27',
    '#33629d',
    '#4a5e75',
    '#5b9fc1',
    '#7fbb02',
    '#434343',
    '#eeeeee',
    '#8a2a0d',
    '#64f635',
    '#0fe9b9',
    '#5a9ec1',
    '#ff6000',
    '#ffaf01',
    '#2e1e41',
  ]

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
