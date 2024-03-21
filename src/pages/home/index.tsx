
import './styles.css'
import { Button } from '@mui/material'
export function Home(){
    return( 
        
            <div id="startScreen">
                <div className="content">
                    <h1>Jornada Binária - Quiz Game</h1>
                    <Button>Start</Button>
                    <Button>Ranking</Button>
                    <Button>Sair</Button>
                </div>
            </div>
        
    )
}