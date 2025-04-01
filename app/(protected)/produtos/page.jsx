import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import ProductContainer from "@/components/Products/ProductContainer"
import ContainerComposition from "@/components/Compositions/ContainerComposition"
import TopBar from "@/components/ui/TopBar"
import service from "@/service"

export const dynamic = "force-dynamic"

async function getProducts() {
  const cookieStore = await cookies()
  const token = JSON.parse(cookieStore.get("token")?.value)

  if (!token) {
    console.error("Token não encontrado!")
    redirect("/login")
  }

  try {
    const res = await service.getProducts(token)
    return res
  } catch (error) {
    console.error("Erro:", error)
    redirect("/login")
  }
}

export default async function ProdutosPage() {
  const products = await getProducts()

  return (
    <>
      <TopBar />
      <ContainerComposition>
        <ProductContainer initialProducts={products} />
      </ContainerComposition>
    </>
  )
}
