import Image from "next/image"
import { Mail, Call } from "react-ionicons"

export default function UserInfo({ userData }) {

  function getDayDate() {
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const date = new Date();
    const dayName = days[date.getDay()];
    const formattedDate = date.toLocaleDateString("pt-BR");
    return `${dayName}, ${formattedDate}`;
  }

  return (
    <>
      <div className="px-2">
        <div className="flex items-center justify-center gap-4">
          <div className="sm:hidden flex justify-around items-center gap-4">
            <div className="relative">
              <div>
                <Call
                  color={'#FFFFFF'}
                  width="50px"
                  height="30px"
                />
              </div>
              <p className="bg-white text-primary-500 text-center rounded-full p-1 w-[25px] text-[8pt] absolute top-[-10px] right-[-10px]">11</p>
            </div>
            <div className="relative">
              <div>
                <Mail
                  color={'#FFFFFF'}
                  width="50px"
                  height="30px"
                />
              </div>
              <p className="bg-white text-primary-500 text-center rounded-full p-1 w-[25px] text-[8pt] absolute top-[-10px] right-[-10px]">11</p>
            </div>
          </div>
          <div className="border-4 rounded-full">
            <Image
              src={'/user-profile.png'}
              width={50}
              height={50}
              alt="imagem de usuario"
            />
          </div>
          <div>
            <h2 className="text-xl">{userData?.nome_usuario}</h2>
            <h3 className="text-lg">
              <p>{getDayDate()}</p>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}