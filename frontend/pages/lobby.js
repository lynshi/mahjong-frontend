import styles from '../styles/PreGame.module.css';

export default function Lobby() {
  return (
    <div className={styles.container}>
        <head>
            <title>Mahjong</title>
            <link rel="icon" href="/favicon.ico" />
        </head>

        <main className={styles.main}>
            <p className={styles.title}>
                Waiting for players to join...
            </p>
            <p className={styles.description}>
                Room code: 
            </p>
            <div className={styles.playerListWrapper}>
                <p className={styles.description}>Players</p>
                <div className={styles.playerGrid}>
                    <p className={styles.player}>Judy</p>
                    <p className={styles.player}>Lyndon</p>
                    <p className={styles.player}>Wew</p>
                    <p className={styles.player}>Pew</p>
                </div>
            </div>
            <button href="/game" class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                Start
            </button>
        </main>

        <footer className={styles.footer}>
            Placeholder footer{' '}
        </footer>
    </div>
  )
}
