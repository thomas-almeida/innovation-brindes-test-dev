'use client'
import { useForm } from 'react-hook-form'
import { LockOpen, Person } from 'react-ionicons'

export default function LoginForm({ onSubmit, error }) {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold mb-6 text-primary-500">Bem-vindo à Innovation Brindes</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-primary-500 p-12 rounded-lg shadow-md w-full"
        >


          <div className="mb-4 px-6 p-2 rounded-full bg-white flex justify-start items-center">
            <Person
              color={'#585858'}
              width="20px"
              heigth="20px"
            />
            <input
              {...register('email', { required: true })}
              className="w-full px-2 py-2 outline-none placeholder:text-[#585858] font-semibold"
              placeholder='Usuário'
            />
          </div>

          <div className="mb-4 px-6 p-2 rounded-full bg-white flex justify-start items-center">
            <LockOpen
              color={'#585858'}
              width="20px"
              heigth="20px"
            />
            <input
              type='password'
              {...register('senha', { required: true })}
              className="w-full px-2 py-2 outline-none placeholder:text-[#585858] font-semibold"
              placeholder='Senha'
            />
          </div>



          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className='flex justify-center'>
            <button
              type="submit"
              className="w-full lg:w-[60%] bg-white py-2 px-4 mt-4 rounded-full hover:bg-slate-200 cursor-pointer transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>

  )
}