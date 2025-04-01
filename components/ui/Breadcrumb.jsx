'use client'

import Link from "next/link"
import { ChevronForward, Home } from "react-ionicons"

export default function Breadcrumb({ currentPage }) {
  return (
    <>
      <div className="flex justify-start items-center gap-2 py-4">
        <div>
          <Link href={'/produtos'}>
            <div className="flex justify-center items-center gap-1">
              <Home
                width="15px"
                heigth="15px"
              />
              <p>Página Inicial</p>
            </div>
          </Link>
        </div>
        <ChevronForward
          width="15px"
          heigth="15px"
        />
        <Link href={`/produtos/${currentPage}`}>
          <p className="text-primary-500 font-semibold">{currentPage}</p>
        </Link>
      </div>
    </>
  )
}