'use client';
import Navbar from './components/Navbar/Navbar';
import './globals.css' 
import { Nunito } from 'next/font/google';
import { useEffect, useState } from 'react';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import Footer from './components/Footer/Footer';
const roboto = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'P2P Banking and Credit',
  description: 'P2P Credit',
}





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [hydrated, setHydrated]= useState(false)

  useEffect(()=>{
    setHydrated(true)
  },[])

  return (    
      
      <html>
        <body className={roboto.className}>
          <main className='divide-y-2'>    
            {hydrated &&
            <div className='flex flex-col w-full'>
              <ToasterProvider/>
              <RegisterModal/>
              <LoginModal/>
              <Navbar/>
            </div>
            }
            {children}
          </main>
          {hydrated&&<Footer/>}
        </body>
          
        
        
          
      </html>
      
    
  )
}
