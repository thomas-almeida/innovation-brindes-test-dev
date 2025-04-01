import { notFound, redirect } from "next/navigation"
import { cookies } from "next/headers"
import ContainerComposition from "@/components/Compositions/ContainerComposition"
import Breadcrumb from "@/components/ui/Breadcrumb"
import TopBar from "@/components/ui/TopBar"
import ImageViewer from "@/components/ui/ImageViewer"
import convertCurrency from "@/utils/convertCurrency"
import CtaButton from "@/components/ui/CtaButton"
import Link from "next/link"
import service from "@/service"

async function getProduct(id, token) {
  try {

    const res = await service.getProductById(token, id)
    const data = await res

    return Array.isArray(data) ? data[0] : data
    
  } catch (error) {
    console.error("Erro ao buscar produto:", error)
    return null
  }
}

export async function generateMetadata({ params }) {
  const id = params?.id || "Produto"
  return {
    title: `Detalhes do Produto ${id}`,
    description: "Confira os detalhes desse produto incrível!",
  }
}

export default async function ProductPage({ params }) {

  const id = params?.id
  if (!id) return notFound()

  const cookieStore = cookies()
  const token = JSON.parse(cookieStore.get("token")?.value )
  console.log(token)
  if (!token) redirect("/login")

  const product = await getProduct(id, token)

  if (!product) return notFound()

  return (
    <>
      <TopBar />
      <ContainerComposition>
        <Breadcrumb currentPage={product.nome} />
        <div className="lg:flex justify-around lg:gap-10 my-8">
          <div className="">
            <ImageViewer
              image={product.imagem}
              description={product.nome}
            />
          </div>
          <div className="sm:mt-10 md:w-[50%]">
            <h1 className="text-3xl mb-2 font-bold">{product.nome}</h1>
            <div className="my-4">
              <h2 className="text-xl font-semibold">Descrição do Produto</h2>
              <p className="mt-2 text-xl text-gray-600">{product.descricao}</p>
            </div>
            <div className="mt-6 flex justify-start items-center gap-2">
              <p>Por</p>
              <h3 className="text-5xl font-semibold">
                {convertCurrency.convertToBRL(product.preco)}
              </h3>
              <p>Unidade</p>
            </div>
            <div className="flex justify-start">
              <p className="my-4 text-lg border px-4 rounded-full border-slate-400">
                Total (min. 5) <b className="font-semibold">
                  {convertCurrency.convertToBRL(product.preco * 5)}
                </b>
              </p>
            </div>
            <div>
              <Link href='https://nubank.com.br/cobrar/517l3/67eab1ae-675b-4d1b-bcb5-9b1503a3c671'>
                <CtaButton text='Comprar Via PIX' />
              </Link>
            </div>
          </div>
        </div>
      </ContainerComposition>
    </>
  )
}