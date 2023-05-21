import { Container, Grid } from '@mui/material'
import * as React from 'react'
import CustomCard from '../components/customcard'
import Header from '../components/header'
import FormDialog from '../components/formDialog'
import { Typography } from '@mui/material'
import EditDialog from '../components/editDialog'
import axios from 'axios'
import { useEffect } from 'react'

export default function Notas () {
  const [notas, setNotas] = React.useState([])
  const [editNote, setEditNote] = React.useState(null)
  function getNotas() {
    axios
      .get(`/note/${window.localStorage.getItem('user')}`)
      .then(result => {
        setNotas(result.data)
      })
      .catch(() => {
        alert('Error obteniendo las notas')
      })
  }
  useEffect(() => {
    getNotas()
  }, [])

  const handleAddNote = (title, describe, personality, date, catchPhrase, hobbie) => {
    const newNote = {
      title: title,
      describe: describe,
      personality: personality,
      date:date,
      catchPhrase: catchPhrase,
      hobbie: hobbie,
    }
    const newNoteData = notas.concat(newNote)
    axios
      .post(`/note/${window.localStorage.getItem('user')}`, { nota: newNote })
      .then(result => {
        setNotas(result.data)
      })
      .catch(() => {
        alert('Error añadiendo la nota')
      })
  }

  const handleDeleteNote = id => {
    const noteData = notas.filter(item => item._id != id)
    axios
      .delete(`/note/${window.localStorage.getItem('user')}/${id}`)
      .then(result => {
        if (result.data === 'NOTE DELETED RIGHTLY') {
          alert('Nota borrada correctamente')
          setNotas(noteData)
        }
      })
      .catch(() => {
        alert('Error borrando la nota')
      })
  }

  const handleEditNote = note => {
    setEditNote(note)
    // const newNoteData = notas.filter(item => item.id != id)
    // setnotas(newNoteData)
  }

  const handleUpdateNote =  (title, describe, personality, date, catchPhrase, hobbie) => {

    axios
      .put(`/note/${window.localStorage.getItem('user')}/${editNote._id}`, {
        // notas: updatednotasData
        nota: {
          title,
          describe,
          personality,
          date,
          catchPhrase,
          hobbie,
        }
      })
      .then(result => {
        if (result.status === 200) {
          setNotas(result.data)
          alert('Nota actualizada')
        }
      })
      .catch(() => {
        alert('Error modificando la nota')
      })
  }

  return (
    <div>
      <Header />
      <Container>
        {/* TODO: Duplico este bloque para que veas el error */}
        {/* <Grid Container spacing={3}>
          {(notas.length === 0) ? (
            <div style={{width:'100%', paddingTop: 200}}>
              <Typography variant="h1" color="textSecondary" style={{textAlign:'center'}} component="p">Empieza a escribir tu nota aquí</Typography>
            </div>

          ):
          notas.map((item)=> { // Si usas llaves aquí, debes poner el keyword return o solo usar parentesís para un retorno impícito
            <Grid item md={4} sm={6} xs={12} key={item.id}>
              <CustomCard item={item} onDelete={handleDeleteNote}/>
            </Grid>
          })}
          </Grid> */}

        <Grid>
          {notas.length === 0 ? (
            <div style={{ width: '100%', paddingTop: 200 }}>
              <Typography
                variant='h1'
                color='textSecondary'
                style={{ textAlign: 'center' }}
                component='p'
              >
                Empieza a escribir tu nota aquí
              </Typography>
            </div>
          ) : (
            notas.map((
              item // TODO: Ejemplo con retorno implícito
            ) => (
              <Grid item md={4} sm={6} xs={12} key={item._id}>
                <CustomCard
                  item={item}
                  onDelete={handleDeleteNote}
                  onEdit={handleEditNote} // TODO: Pasa el handler de onEdit
                />
              </Grid>
            ))
          )}
        </Grid>

        <FormDialog onSubmit={handleAddNote} />
        {/* TODO: Pasamos todos los valores de la nota y evaluamos su valor a boolean para mostrar el dialogo o no */}
        {editNote && (
          <EditDialog
            open={!!editNote}
            title={editNote.title}
            describe={editNote.describe}
            personality={editNote.personality}
            date={editNote.date}
            catchPhrase={editNote.catchPhrase}
            hobbie={editNote.hobbie}
            onSubmit={handleUpdateNote}
            onClose={() => setEditNote(null)} // TODO: Para cerrar el dialogo pones editNote en null o algun valor falsy
          />
        )}
        {/* TODO: Crea dialogo de edición */}
      </Container>
    </div>
  )
}
