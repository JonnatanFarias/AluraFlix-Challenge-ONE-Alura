import './Footer.css'
import LogoMain from './LogoMain.svg'

export default function Footer(){
    return(
        <footer className='footer'>
            <div id='line'></div>
            <img src={LogoMain} alt="Logo" />
            <p>Desenvoldido por Jonnatan Farias</p>
        </footer>
    )
}