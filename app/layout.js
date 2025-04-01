import './globals.css' 

export const metadata = {
  title: 'Innovation Brindes 🟢',
  description: 'Teste NextJS para Vaga FrontEnd!',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  ) 
}