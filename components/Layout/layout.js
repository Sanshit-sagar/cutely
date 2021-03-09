import Head from 'next/head' 
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

const name = 'cur.ly' 
export const siteTitle = 'NEXT.JS SAMPLE SITE'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
        <Head> 
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}> 
            {home ? (
                <> 
                    {/* <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    /> */}
                      <Link href="/">
                            <a className={utilStyles.colorInherit}>
                               <h1> {name} </h1> 
                            </a>
                    </Link>
                </> 
            ) : (
                <> 
                <header className="flex flex-col items-center justify-center flex-1 text-center"> 
                
                    {/* <Link href="/">
                        <a>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={36}
                            width={36}
                            alt={name}
                        />
                        </a>
                    </Link> */}
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>
                               <h1> {name} </h1> 
                            </a>
                        </Link>
                    </h2>

                </header>
                </> 
            )}
        </header> 

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">  
            {children}
        </main>
        

        <footer className={styles.footer}>
            <div className="flex flex-col items-center justify-center flex-1 text-center">
                <h2 style={{ color: 'white' }}> 
                    FOOTER          
                </h2>
            </div> 
        </footer>
          
    </div>

  )
}