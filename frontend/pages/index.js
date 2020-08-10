import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Let's play Mahjong!
        </h1>

        <p className={styles.description}>
          Don't know how to play? Check out the <a href="/rules" className={styles.description}> rules</a> here!
        </p>

        <div className={styles.grid}>
          <a href="/create_room" className={styles.card}>
            <h3>New Room</h3>
          </a>

          <a href="/join_room" className={styles.card}>
            <h3>Join a Room</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Placeholder footer{' '}
      </footer>
    </div>
  )
}
