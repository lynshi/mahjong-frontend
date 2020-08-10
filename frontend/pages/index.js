import styles from '../styles/PreGame.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <head>
            <title>Mahjong</title>
            <link rel="icon" href="/favicon.ico" />
        </head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Let's play Mahjong!
            </h1>

            <p className={styles.description}>
                Don't know how to play? Check out the <a href="/rules" className={styles.description}> rules</a> here!
            </p>

            <div className={styles.grid}>
                <button href="/create_room" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    New Room
                </button>
                <button href="/join_room" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Join a Room
                </button>
            </div>
        </main>

        <footer className={styles.footer}>
            Placeholder footer
        </footer>
    </div>
  )
}
