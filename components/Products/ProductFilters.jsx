"use client" 

import service from "@/service"
import { useState } from "react" 

export default function ProductFilters({ onFilter, token }) {
  const [query, setQuery] = useState("") 

  const handleFilterChange = (e) => {
    setQuery(e.target.value) 
  } 

  const handleFilterSubmit = async () => {
    if (!query.trim() || !token) return 

    const isNumeric = /^[0-9]+$/.test(query) 
    const payload = isNumeric
      ? { codigo_produto: query }
      : { nome_produto: query } 

    try {
   
      const res = await service.filterProducts(token, payload)
      const data = await res 
      onFilter(data) 
    } catch (error) {
      console.error("Erro ao filtrar produtos:", error) 
    }
  } 

  const clearFilters = async () => {

    setQuery("")

    try {
      const res = await fetch(
        "https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/produtos/listar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: {},
        }
      ) 

      if (!res.ok) throw new Error("Erro ao buscar produtos") 

      const data = await res.json() 
      onFilter(data) 

    } catch (error) {
      console.error("Erro ao filtrar produtos:", error) 
    }
  }

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Pesquisar por Nome ou Código..."
        className="border border-[#a9ec05] p-2 rounded-lg w-full bg-white outline-none text-lg px-4 placeholder:font-semibold"
        value={query}
        onChange={handleFilterChange}
      />
      <button
        className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-secondary-500 cursor-pointer text-lg"
        onClick={handleFilterSubmit}
      >
        Buscar
      </button>
      <button
        className={query !== "" ? `bg-slate-500 text-white px-6 py-2 rounded-lg hover:bg-slate-600 cursor-pointer text-lg` : `hidden`}
        onClick={clearFilters}
      >
        Limpar
      </button>
    </div>
  ) 
}
