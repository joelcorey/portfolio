import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import Social from '../components/Social'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>joelcorey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
				<div className='sm:flex sm:flex-column lg:flex-row justify-center'>
					<Title />
					<Social />	
				</div>
        

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

			<p>This website is brand spankin' new, please allow it time to grow and evolve if you are just viewing it now.</p>


      <footer className={styles.footer}>
        <a
          href="https://github.com/joelcorey/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/img/emote-slightsmile/android-chrome-192x192.png" alt="Smiley face" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
