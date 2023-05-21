import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  makeStyles,
  TextField
} from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

/*
const useStyles = makeStyles((theme) => ({

    fab:{
        position: 'fixed',
        bottom: theme.spacing(2),
        right:theme.spacing(2),
    }


}));fallo en la interfaz, se torna a blanco*/

export default function FormDialog ({ onSubmit }) {
  // TODO: Debes hacer deconstrucción de props o referenciar al objeto props.onSubmit

  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')
  const [specie, setSpecie] = useState('')
  const [date, setDate] = useState('')
  const [catchPhrase, setCatchPhrase]=useState('')
  const [hobbie, setHobbie]=useState('')
  
  /*const classes = useStyles();lo mismo*/

  const handleTitle = event => {
    setOpen(true)
    setTitle(event.target.value)
  }

  const handleClickOpen = event => {
    setOpen(true)
    setNote(event.target.value)
    setSpecie(event.target.value)
    setDate(event.target.value)
    setCatchPhrase(event.target.value)
    setHobbie(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    onSubmit(title, note, specie, date, catchPhrase, hobbie)
    setOpen(false)
  }

  return (
    <div /*className={classes.fab}lo mismo*/>
      <Fab color='primary' aria-label='add' onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog maxWidth='sm' fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>Añadir una nota</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para añadir una nota, escriba aquí.
          </DialogContentText>

          <div>
            <div>
              <TextField
                  onChange={e => setTitle(e.target.value)} // Se mantiene string, no objeto
                  margin='dense'
                  id='name'
                  fullWidth
                  multiline
                  label='Nombre del personaje'
              ></TextField>
            </div>

            <div>
                <TextField
                  onChange={e => setNote(e.target.value)} // Se mantienes string, no objeto
                  margin='dense'
                  id='especie'
                  label='Especie'
                  fullWidth
                ></TextField>
            </div>
            <div>  
              <TextField
                    onChange={e => setSpecie(e.target.value)} //Se mantiene string, no objeto
                    margin='dense'
                    value={specie}
                    id='pers'
                    label='personalidad'
                    fullWidth
              ></TextField>
           </div>
           <div>  
              <TextField
                    onChange={e => setDate(e.target.value)} //Se mantiene string, no objeto
                    margin='dense'
                    value={date}
                    id='dt'
                    label='date'
                    fullWidth
              ></TextField>
           </div>
           <div>  
              <TextField
                    onChange={e => setCatchPhrase(e.target.value)} //Se mantiene string, no objeto
                    margin='dense'
                    value={catchPhrase}
                    id='phrs'
                    label='Lema'
                    fullWidth
              ></TextField>
            </div>
            <div>  
              <TextField
                    onChange={e => setHobbie(e.target.value)} //Se mantiene string, no objeto
                    margin='dense'
                    value={hobbie}
                    id='hb'
                    label='Hobbie'
                    fullWidth
              ></TextField>
            </div>
        </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            cancelar
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            añadir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
