import { AppBar, Container, Toolbar, Typography} from "@mui/material";
import { useParams } from "react-router-dom";



/*
const useStyles=makeStyles({

    root:{
        
        marginBottom:30,
    
    },
    title: {
        flex:1,
    },


}); fallo en la interfaz, se torna a blanco*/



function Header() {

    const {user} = useParams();
   

    

    /*const classes = useStyles();lo mismo*/

    return (


        <div /*className={classes.root} lo mismo*/>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6">Lista de Etiquetas del usuario: {user}</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
} 

export default Header;