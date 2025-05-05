import HeaderItem from '../HeaderItem/HeaderItem.js'
import './Header.css';

export default function Header(){
    return(
        <div className="Header">
            <HeaderItem altText={'LinkedIn'} link={'https://www.linkedin.com/in/evan-krainess/'} imagePath={'/images/LI-In-Bug.png'}></HeaderItem>
            <HeaderItem altText={'GitHub'} link={'https://github.com/EvanKrainess'} imagePath={'/images/github-mark.png'}></HeaderItem>
            <HeaderItem altText={'Google Scholar'} link={'https://scholar.google.com/citations?user=jIylneQAAAAJ&hl=en&oi=ao'} imagePath={'/images/icons8-google-scholar-48.png'}></HeaderItem>
            <a href="mailto:krainessevan@gmail.com">
                <img src="/images/mail.png" alt="Email Evan" style={{ width: '30px', height: '100%' }} />
            </a>
        </div>
    );   
}
