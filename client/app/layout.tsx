import localFont from "next/font/local";
import './global.css'

export const metadata = {
  title: 'Radin Style',
  description: 'Mohammad Hossein Majidi Barbershop',
}


const iranSans = localFont({
src:"../public/assets/fonts/IRANSansWeb.ttf",
display:'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body 
      className={`${iranSans.className} bg-dark text-right` }>{children}</body>
    </html>
  )
}
