import Link from 'next/link'
import Layout from '../../components/Layout/layout'

export default function FirstPost() {
  return (
    <Layout> 
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Hi There 
        </h1>
        <Link href="/posts/first-post">
          <a> 
            Go Back Home
          </a>
        </Link>  
      </main> 
    </Layout>
  )
}
