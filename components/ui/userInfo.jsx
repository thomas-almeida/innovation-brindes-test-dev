import Image from "next/image" 

export default function UserInfo({ userData }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Image
          src={'/user-profile.png'}
          width={60}
          height={60}
          alt="imagem de usuario"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold">{userData?.nome_usuario}</h2>
          <h3 className="px-2 border rounded-full text-lg">{userData?.nome_grupo}</h3>
        </div>
      </div>
    </>
  )
}