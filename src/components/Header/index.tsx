import Logo from 'assets/images/logo.png'
import telegramm from 'assets/images/telegramm.png'
import phone from 'assets/images/phone.png'
import whatsup from 'assets/images/whatsup.png'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.contantMobile}>
        <ul>
          <li>
            <Link to='/services'>Услуги</Link>
          </li>
          <li>
            <Link to='/vidgets'>Виджеты</Link>
          </li>
          <li>
            <Link to='/integration'>Интеграции</Link>
          </li>
          <li>
            <Link to='/case'>Кейсы</Link>
          </li>
        </ul>
      </div>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.nav}>
            <a href='#'>
              <img src={Logo} alt='logo' />
            </a>

            <ul>
              <li>
                <Link to='/services'>Услуги</Link>
              </li>
              <li>
                <Link to='/vidgets'>Виджеты</Link>
              </li>
              <li>
                <Link to='/integration'>Интеграции</Link>
              </li>
              <li>
                <Link to='/case'>Кейсы</Link>
              </li>
              <li>
                <Link to='/certification'>Сертификаты</Link>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <ul>
              <li>
                <a href='tel:+75555555555'>+7 555 555-55-55</a>
              </li>
              <li>
                <a href='#'>
                  <img src={telegramm} alt='' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={phone} alt='' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={whatsup} alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.subtitle}>
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
      </div>
    </header>
  )
}

export default Header
