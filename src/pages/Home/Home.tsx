import Footer from 'components/Footer'
import Header from 'components/Header'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>
                Зарабатывайте больше <span>с WELBEX</span>
              </h1>
              <p>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className={styles.info}>
              <h2>
                Вместе с <span>бесплатной</span> <span>консультацией</span>{' '}
                мы дарим:
              </h2>
              <div className={styles.infoContent}>
                <div className={styles.infoContentOne}>
                  <div className={styles.infoContentItem}>
                    <h3>Виджеты</h3>
                    <p>30 готовых решений</p>
                  </div>
                  <div className={styles.infoContentItem}>
                    <h3>Dashboard</h3>
                    <p>с показателями вашего бизнеса</p>
                  </div>
                </div>
                <div className={styles.infoContentOne}>
                  <div className={styles.infoContentItem}>
                    <h3>Skype Аудит</h3>
                    <p>отдела продаж и CRM системы</p>
                  </div>
                  <div className={styles.infoContentItem}>
                    <h3>35 дней</h3>
                    <p>использования CRM</p>
                  </div>
                </div>
              </div>
              <button>Получить консультацию</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
