
import { useNavigate } from 'react-router-dom';
import './styles.css'
import { Button } from '@mui/material'

export function Home(){
    const navigate = useNavigate();
    return( 
        
            <div id="startScreen">
                <div className="content">
                    <h1>Jornada Binária - Quiz Game</h1>
                    <Button onClick={() => {navigate('/Game')}} >Start</Button>
                    <Button onClick={() => {navigate('/ranking')}}>Ranking</Button>
                    <Button onClick={() => {navigate('/login')}}>Sair</Button>
                </div>
            </div>
        
    )
}