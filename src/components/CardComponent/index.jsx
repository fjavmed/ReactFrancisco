import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
       action={
        <Typography
          className={classes.action}
          variant='h5'
          color='textSecondary'
        >
          {accounting.formatMoney(399990, "$", 0, ".", ",")}
        </Typography>
      }
        title="Sony ILCE 6000"
        subheader="Cámara semiprofesional"
      />
      <CardMedia
        className={classes.media}
        image="https://www.travel.cl/upload/producto/54135g1.jpg"
        title="Sony ILCE 6000"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Cámara de lentes intercambiables, liviana, de gran rendimiento ideal para viajes.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Gracias al enfoque ultrarrápido de 0.06 segundos para lograr tomas precisas. Dale un vistazo a sus funciones: conectividad Wi-Fi / NFC, disparo continuo de 11 fotogramas, visor electrónico Tru-Finder™ y más.
          </Typography>
          <Typography paragraph>
          Crea imágenes de sorprendente belleza con el sensor de imagen APS-C de 24,3 megapíxeles efectivos desarrollado recientemente por Sony. Con el mismo tamaño que los que se encuentran en la mayoría de cámaras DSLR, este sofisticado sensor ofrece alta sensibilidad en entornos con escasa iluminación, así como primeros planos y efectos de fondo desenfocado increíblemente atractivos. Disfrutarás de la mayor eficiencia de acumulación de luz para una estructura de lente en chip sin espacios, un ruido extremadamente bajo en una amplia gama de sensibilidades de ISO 100 a 25.600 y una calidad excepcional en toda la imagen con colores realistas, detalles increíbles y gradaciones de tonos suaves, que revelan todos los matices de la escena.
          </Typography>
          <Typography paragraph>
          Captura continua de 11 fps con seguimiento de enfoque automáticoCuando el sujeto se mueve rápido, el disparo continuo de 11 fps con un rendimiento de seguimiento de enfoque automático superior asegura la captura del momento decisivo. Esta función aprovecha al máximo el excelente rendimiento de seguimiento de los 179 puntos de enfoque automático con detección de fases de zona amplia de Sony para seguir al sujeto de forma precisa en cualquier lugar de la pantalla.
          </Typography>
          <Typography>
          Ahora más preciso que nunca gracias a los avances en el enfoque automático con detección de fases, el enfoque automático con bloqueo mejora el seguimiento de sujetos ajustando el tamaño del fotograma objetivo para adaptarse a las características del sujeto y asegurando en todo momento el uso del punto de enfoque automático óptimo.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
