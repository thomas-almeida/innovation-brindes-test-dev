const baseUrl = "https://apihomolog.innovationbrindes.com.br/api/innova-dinamica"

async function getProducts(token) {
  try {
    const res = await fetch(
      `${baseUrl}/produtos/listar`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    )

    if (!res.ok) throw new Error("Falha ao buscar produtos")
    return await res.json()
  } catch (error) {
    console.error("Erro:", error)
  }
}

async function filterProducts(token, payload) {
  try {

    const res = await fetch(
      `${baseUrl}/produtos/listar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) throw new Error("Erro ao buscar produtos")

    return await res.json()

  } catch (error) {
    console.error("Erro:", error)
  }
}

async function getProductById(token, id) {
  try {
    const res = await fetch(
      `${baseUrl}/produtos/listar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ codigo_produto: id }),
      }
    )

    if (!res.ok) return null
    return await res.json()

  } catch (error) {
    console.error(error)
  }
}


export default {
  getProducts,
  filterProducts,
  getProductById
}