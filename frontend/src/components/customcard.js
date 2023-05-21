import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography
} from '@mui/material'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'

const CustomCard = ({ item, onDelete, onEdit }) => {
  // TODO: Desconstrucción o referencia a props
  // TODO: Completa onEdit
  return (
    <Card
      sx={{
        maxWidth: 375,
        backgroundColor: 'lightblue',
        color: 'black',
        marginBottom: 3
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant='h5' flex={1}>
          <b>Nombre</b>:{item.title}
          </Typography>
          <Typography variant='body2'><b>Personalidad</b>:{item.describe}</Typography>
          <Typography variant='body2'><b>Especie</b>:{item.personality}</Typography>
          <Typography variant='body2'><b>Cumpleaños</b>:{item.date}</Typography>
          <Typography variant='body2'><b>Lema</b>:{item.catchPhrase}</Typography>
          <Typography variant='body2'><b>Hobbie</b>:{item.hobbie}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={() => onEdit(item)}>
          editar
        </Button>
        <Button size='small' color='primary' onClick={() => onDelete(item._id)}>
          eliminar
        </Button>
      </CardActions>
    </Card>
  )
}

export default CustomCard
