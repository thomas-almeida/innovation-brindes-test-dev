import './globals.css' 

export const metadata = {
  title: 'Innovation Brindes',
  description: 'Sistema de gerenciamento de produtos',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">{children}</body>
    </html>
  ) 
}