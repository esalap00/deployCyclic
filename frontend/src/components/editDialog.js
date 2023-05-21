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
import { useEffect } from 'react'

/*
const useStyles = makeStyles((theme) => ({

    fab:{
        position: 'fixed',
        bottom: theme.spacing(2),
        right:theme.spacing(2),
    }


}));fallo en la interfaz, se torna a blanco*/

export default function EditDialog ({
  // TODO: Debes hacer deconstrucción de props o referenciar al objeto props.onSubmit

  onSubmit,
  open,
  onClose,
  title: noteTitle,
  describe,
  personality,
  date,
  catchPhrase, 
  hobbie
}) {
  const [note, setNote] = useState(describe) // TODO: Define estado con lo que venga por props
  const [title, setTitle] = useState(noteTitle) // TODO: Define estado con lo que venga por props
  const [personalityy, setPersonality] = useState(personality)
  const [datee, setDate] = useState(date)
  const [catchPhrasee, setCatchPhrase]=useState(catchPhrase)
  const [hobbiee, setHobbie]=useState(hobbie)

  /*const classes = useStyles();lo mismo*/

  const handleTitle = event => {
    onClose(true)
    setTitle(event.target.value)
  }

  const handleClose = () => {
    onClose(false)
  }

  const handleSubmit = () => {
    onSubmit(title, note, personalityy, datee, catchPhrasee, hobbiee)
    onClose(false)
  }

  return (
    <Dialog maxWidth='sm' fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle id='form-dialog-title'>Edite la nota</DialogTitle>
      <DialogContent>
        <DialogContentText>Edite los valores de su nota</DialogContentText>

        <div>  
            <div>
              <TextField
                onChange={e => setTitle(e.target.value)} // Se mantiene string, no objeto
                value={title}
                margin='dense'
                id='name'
                label='Nombre del personaje'
              ></TextField>
            </div>
            <div>
              <TextField
                onChange={e => setNote(e.target.value)} //Se mantiene string, no objeto
                margin='dense'
                value={note}
                id='pers'
                label='Personalidad'
              ></TextField>
            </div>
            <div>  
              <TextField
                onChange={e => setPersonality(e.target.value)} //Se mantiene string, no objeto
                margin='dense'
                value={personalityy}
                id='esp'
                label='Especie'
              ></TextField>
            </div>
            <div>  
              <TextField
                onChange={e => setDate(e.target.value)} //Se mantiene string, no objeto
                margin='dense'
                value={datee}
                id='dt'
                label='date'
              ></TextField>
            </div>
            <div>  
              <TextField
                onChange={e => setCatchPhrase(e.target.value)} //Se mantiene string, no objeto
                margin='dense'
                value={catchPhrasee}
                id='phrs'
                label='Lema'
              ></TextField>
            </div>
            <div>  
              <TextField
                onChange={e => setHobbie(e.target.value)} //Se mantiene string, no objeto
                margin='dense'
                value={hobbiee}
                id='hb'
                label='Hobbie'
              ></TextField>
            </div>
          </div>
        
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          cancelar
        </Button>
        <Button onClick={handleSubmit} color='primary'>
          actualizar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
