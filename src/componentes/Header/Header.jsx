import { Button } from '@mui/material'
import LogoMain from './LogoMain.svg'
import './Header.css'

export default function Header(props) {
    return (
        <header className='header'>
            <img src={LogoMain} alt="LogoMain"/>

            {props.btnInicial === 1 && (
                <Button variant="contained" color='inherit' onClick={props.pagina}>Novo vídeo</Button>
            )}
        </header>
    )
}
