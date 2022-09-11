import styles from '../styles/home.module.scss';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';


export default function Home() {
  return (
    <>
      <Head children={''}>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentConatiner}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>👏 News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span> for $9.90 month</span>
          </p>

          <SubscribeButton/>
        </section>

        <img src='/images/avatar.svg' alt='girl coding'/>
      </main>
    </>
  )
}
