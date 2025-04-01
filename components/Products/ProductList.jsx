'use client'

import Link from "next/link"
import CtaButton from "../ui/CtaButton"
import convertCurrency from "@/utils/convertCurrency"
import Image from "next/image"

export default function ProductList({ products, colorOptions }) {

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
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <Link
          href={`/produtos/${product.codigo}`}
          key={product.codigo}
          className="group"
        >
          <div className="py-4 rounded-md h-full flex flex-col">
            <div className="my-2">
              <h3 className="font-bold text-center text-sm overflow-clip text-ellipsis whitespace-nowrap">
                {product.nome || 'Nome não disponível'}
              </h3>
              <p className="text-center">{product.codigo}</p>
            </div>
            <div className="border border-slate-200">
              <div className="flex-grow">
                <div className="relative">
                  <div className="text-right bg-slate-100 absolute right-0 px-2 rounded-sm">
                    <b className="text-[#00a6ff] text-md uppercase">Exclusivo!</b>
                  </div>
                  <img
                    src={product.imagem}
                    alt={product.nome}
                    className="w-full h-fit object-cover mb-4"
                    onError={(e) => e.target.src = '/fallback-image.jpg'}
                  />
                  <div className="flex justify-start items-center gap-2 px-2 border border-slate-200 rounded-tr-lg absolute bottom-0 bg-white w-[85%]">
                    <img
                      src="/box.png"
                      alt="embalagem-especial"
                      className="w-[60px] relative top-[-5px]"
                    />
                    <p className="text-gray-600 font-bold leading-4 text-sm">com embalagem especial</p>
                  </div>
                </div>
                <p className="overflow-clip px-4 text-ellipsis text-slate-600 whitespace-pre-line line-clamp-2 my-2">
                  {product.descricao}
                </p>

                <div className="w-[70%] px-4">
                  <p className="text-gray-500 font-semibold">Cores:</p>
                  <div className="grid grid-cols-6 gap-2 py-2">
                    {
                      colorOptions.map((color) => (
                        <div
                          key={color}
                          className="w-[22px] h-[22px] shadow-lg rounded-full border border-slate-500"
                          style={{
                            backgroundColor: color
                          }}
                        >
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="text-right px-4 py-1">
                  <p>A partir de:</p>
                  <p className="text-3xl text-gray-900 font-bold">
                    {product.preco ? `${convertCurrency.convertToBRL(product.preco)}` : 'Preço não disponível'}
                  </p>
                  <p className="">gerado pela melhor oferta</p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton
                text="Confira"
                className="w-full transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}