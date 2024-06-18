import { ContactLink } from './ContactLink';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='div-contato'>
        <ContactLink 
          link='https://m.facebook.com/'
          icon='/imagens/fb.png'
          alt='Link de contato do facebook'
        />
        <ContactLink 
          link='https://x.com'
          icon='/imagens/tw.png'
          alt='Link de contato do twitter'
        />
        <ContactLink 
          link='https://www.instagram.com'
          icon='/imagens/ig.png'
          alt='Link de contato do instagram'
        />
      </div>
      <img src='/imagens/logo.png' alt='Logo do Organo' />
      <p>Desenvolvido por JoaoAlisonTI</p>
    </footer>
  )
}