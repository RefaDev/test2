import React from 'react'
import telegramm from 'assets/images/telegramm.png'
import phone from 'assets/images/phone.png'
import whatsup from 'assets/images/whatsup.png'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.about}>
            <h3>О компании</h3>
            <ul>
              <li>
                <a href='#'>Партнёрская программа</a>
              </li>
              <li>
                <a href='#'>Вакансии</a>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3>Меню</h3>

            <div className={styles.menuLists}>
						<ul>
              <li>
                <a href='#'>Расчёт стоимости</a>
              </li>
              <li>
                <a href='#'>Услуги</a>
              </li>
              <li>
                <a href='#'>Виджеты</a>
              </li>
              <li>
                <a href='#'>Интеграции</a>
              </li>
              <li>
                <a href='#'>Наши клиенты</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href='#'>Кейсы</a>
              </li>
              <li>
                <a href='#'>Благодарственные письма</a>
              </li>
              <li>
                <a href='#'>Сертификаты</a>
              </li>
              <li>
                <a href='#'>Блог на Youtube</a>
              </li>
              <li>
                <a href='#'>Вопрос / Ответ</a>
              </li>
            </ul>
						</div>
          </div>
          <div className={styles.contacts}>
            <h3>Контакты</h3>
           
                <a href='tel:+75555555555'>+7 555 555-55-55</a>
              
              <div className={styles.contactsSocial}>
							<a href='#'>
                  <img src={telegramm} alt='' />
                </a>
              
                <a href='#'>
                  <img src={phone} alt='' />
                </a>
              
                <a href='#'>
                  <img src={whatsup} alt='' />
                </a>
             
							</div>
            <p>Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>
        <div className={styles.politics}>
          <p>©WELBEX 2022. Все права защищены.</p>
          <a href='#'>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
