
'use client'
import { useState } from 'react'
import LoginForm from '@/components/Auth/LoginForm'
import ContainerComposition from '@/components/Compositions/ContainerComposition'

export default function LoginPage() {
  const [error, setError] = useState('')

  const handleLogin = async (credentials) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })

      const data = await res.json()

      if (data.success) {
        window.location.href = '/produtos'
      } else {
        setError(data.error || 'Erro na autenticação')
      }
    } catch (error) {
      setError('Erro de conexão com o servidor')
    }
  }

  return (
    <div className='bg-[url(/bg-login.png)] bg-cover'>
      <ContainerComposition>
        <div className="min-h-screen flex items-center justify-center">
          <LoginForm onSubmit={handleLogin} error={error} />
        </div>
      </ContainerComposition>
    </div>

  )
}