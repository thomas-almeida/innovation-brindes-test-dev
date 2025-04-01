import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, senha } = await request.json();

  try {
    const res = await fetch('https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/login/acessar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (data.status === 1) {
      const response = NextResponse.json(
        { success: true, data: data },
        { status: 200 }
      );

      response.headers.append(
        'Set-Cookie',
        `token=${JSON.stringify(data.token_de_acesso)}; Path=/; Max-Age=86400; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
      );

      response.headers.append(
        'Set-Cookie',
        `user=${JSON.stringify(data.dados_usuario)}; Path=/; Max-Age=86400; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
      );

      return response;
    }

    return NextResponse.json({ error: data.message }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro na autenticação' }, { status: 500 });
  }
}