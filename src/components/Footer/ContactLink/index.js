import './ContactLink.css';

export const ContactLink = ({ link, icon, alt }) => {
  return (
    <a className='link-contato' href={link} target='_blank' rel='noreferrer'>
      <img src={icon} alt={alt} />
    </a>
  )
}