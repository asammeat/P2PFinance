import Navbar from './components/Navbar/Navbar';
import './globals.css'; 
import { Nunito } from 'next/font/google';
import { useEffect, useState } from 'react';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import Footer from './components/Footer/Footer';
import getCurrentUser from './actions/getCurrentUser';
const roboto = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'P2P Banking and Credit',
  description: 'P2P Credit',
}





export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  const currentUser = await getCurrentUser();
  return (    
      
      <html>
        <body className={roboto.className}>
          <main className='divide-y-2'>    
          
            
            
            <div className='flex flex-col w-full'>
              
              <RegisterModal/>
              <LoginModal/>
              <Navbar currentUser={currentUser}/>
            </div>
            
            {children}
        
          </main>
          <Footer/>
        </body>
          
        
        
          
      </html>
      
    
  )
}
