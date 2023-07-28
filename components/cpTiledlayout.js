import IndustryFooter from "./IndustryFooter"
import Head from 'next/head'


export default function cpTiledLayout({ children }) {
    return (
    <div className='cp-container'>
        {children}
        <IndustryFooter />
      </div>
    )
  }