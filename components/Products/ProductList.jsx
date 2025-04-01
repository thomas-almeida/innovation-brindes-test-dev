'use client'

import Link from "next/link" 
import CtaButton from "../ui/CtaButton" 

export default function ProductList({ products }) {

  if (!Array.isArray(products)) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Erro na estrutura dos dados</p>
      </div>
    ) 
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Nenhum produto disponível</p>
      </div>
    ) 
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          href={`/produtos/${product.codigo}`}
          key={product.codigo}
          className="group"
        >
          <div className="p-4 bg-white rounded-md h-full border border-slate-200 shadow-sm flex flex-col">
            <div className="text-right">
              <b className="text-blue-500 text-xl">Exclusivo!</b>
            </div>
            <div className="flex-grow">
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-full h-48 object-contain mb-4"
                onError={(e) => e.target.src = '/fallback-image.jpg'}
              />
              <h3 className="font-bold text-lg overflow-clip text-ellipsis whitespace-nowrap">
                {product.nome || 'Nome não disponível'}
              </h3>
              <p className="overflow-clip text-ellipsis whitespace-pre-line line-clamp-3 my-2">
                {product.descricao}
              </p>

              <div className="my-2">
                <p>A partir de:</p>
                <p className="text-3xl text-gray-800 font-semibold">
                  {product.preco ? `R$ ${Number(product.preco).toFixed(2)}` : 'Preço não disponível'}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <CtaButton
                text="Confira !"
                className="w-full transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) 
}