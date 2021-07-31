import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nina Rules.</title>
                <meta name="description" content="NinaMisler.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Nina Rules.
                </h1>
            </main>
        </div>
    )
}
