import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/layout'

export default function Home() {
  return (
    <Layout> 
   
     
      <main className="flex flex-col items-center justify-center flex-1 text-center">
       
          <h1 className="text-6xl font-bold">
            Hi There 
          </h1>
          <Link href="/posts/first-post">
            <a> 
              Check out the first post 
            </a>
          </Link>  
     
      </main> 
    </Layout>
  )
}