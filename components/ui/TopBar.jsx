'use client'

import ContainerComposition from "../Compositions/ContainerComposition"
import Cookies from "js-cookie"
import UserInfo from "./userInfo"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function TopBar() {
  const [user, setUser] = useState(null)

  useEffect(() => {

    const userCookie = Cookies.get("user")

    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie)
        setUser(parsedUser)
      } catch (error) {
        console.error("Erro ao analisar cookie do usuário:", error)
      }
    }
  }, [])

  return (
    <div className="p-6 bg-primary-500 text-white">
      <ContainerComposition>
        <div className="flex justify-between items-center">
          <Image
            src={'/logo-white.png'}
            width={200}
            height={200}
            alt="logo"
          />
          <div>
            <UserInfo userData={user} />
          </div>
        </div>
      </ContainerComposition>
    </div>
  )
}