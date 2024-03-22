
import { Button } from '@mui/material'

import './styles.css'
import { useNavigate } from 'react-router-dom'

export function Ranking(){
    const navigate = useNavigate()
    return  (
        
            <div id="startScreen">
                <div className="content"  id="result_ranking">
               
                    <h1>Ranking</h1>
                    <Button 
                        onClick={()=> {navigate('/Login')}}
                        variant="contained"
                    >
                        Sair
                    </Button>
                </div>
            </div>
        
    )
}