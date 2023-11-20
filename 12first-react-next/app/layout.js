import Header from '@/Components/Header'
import './globals.css'
import Footer from '@/Components/Footer'


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer/>
      </body> 
    </html>
  )
}
