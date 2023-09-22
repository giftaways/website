import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export default function DefaultLayout( { children } : { children: ReactNode }){
    return(          
    <div className='min-h-screen flex flex-col bg-gray-950'>
      <div className='flex grow'>
        {children}
      </div>
      <Footer/>
  </div>
  )
}