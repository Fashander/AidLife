import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BillBoardBgImg from '../../../assets/img/imagei.jpg';
import AccessImg from '../../../assets/img/image2.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(8,4,3),
        margin: theme.spacing(9,0,1),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            backgroundImage: `url(${BillBoardBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // width: '100%',
            height: '400px',
        },
    },
    image:{
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        }
    },
    img:{
        maxWidth: '100%',
    },
    bodyText: {
        padding: theme.spacing(3, 2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(5, 2),
        }
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        maxWidth: '500px',
        fontWeight: 'bold',
        [theme.breakpoints.up('sm')]: {
            opacity: 0.9,
            height: 'inherit',
            // background: 'none',
        },
    },
}))

const tutorialSteps=[
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
          'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
      },
]
const BillBoard = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Grid container spacing={0} className={classes.root} >
            <Grid item xs={12} sm={1} className={classes.image}>
            <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
            </Grid>
            <Grid item xs={12} sm={7}>
                <Paper elevation={0} display='block' className={classes.paper}>
                    <Typography style={{fontWeight: 'bold'}} variant='overline' color='primary' >
                        Contributing to Making the world a better place
                    </Typography>
                    <Typography variant='h3' color='textPrimary' >
                        Be informed of the latest news
                    </Typography>
                    <Typography className={classes.bodyText} align='left' variant='body1' color='textPrimary' component='div' >
                        <div>{tutorialSteps[activeStep].label}</div>
                    </Typography>
                    <Button variant="contained" color="primary">
                        DONATE
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default BillBoard
