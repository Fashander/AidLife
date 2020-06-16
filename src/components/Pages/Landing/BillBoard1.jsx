import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BillBoardBgImg from '../../../assets/img/imagei.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1, 2, 3),
        margin: theme.spacing(19, 0, 1),
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
    image: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    img: {
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
        backgroundColor: theme.palette.common.white,
        maxWidth: '500px',
        maxHeight: 'max-content',
        fontWeight: 'bold',
        minWidth: 'min-content',
        [theme.breakpoints.up('sm')]: {
        maxWidth: 'calc(100% - 200px)',
            opacity: 0.8,
            height: 'inherit',
            // background: 'none',
        },
    },
}))


const BillBoard = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root} >
            <Grid item xs={12} sm={1} className={classes.image}>
                <img src={BillBoardBgImg} alt='BillBoardBgImg' className={classes.img} />
            </Grid>
            <Grid item xs={12} sm={9}>
                <Paper elevation={0} display='block' className={classes.paper}>
                    <Typography style={{ fontWeight: 'bold' }} variant='overline' color='primary' >
                        Contributing to Making the world a better place
                    </Typography>
                    <Typography variant='h5' color='textPrimary' >
                        AID-LIFE FOUNDATION
                    </Typography>
                    <Typography className={classes.bodyText} align='justify' variant='body1' color='textPrimary' component='div' >
                        <div>
                            Aid-Life Foundation Distributes Paliatives to Masses, and Relief Packages to IDPs Aid-Life Foundation (ALF), a non-profitble organisation, in her charity outreach, has today, 08: 06: 2020 distributed relief packages to the Internally Displaced Persons (IDPs) over the recent Itakpa-Ito attack by the suspected Fulani herdsmen and loved ones who are suffering from Covid-19 pandemic to at least ease the consequences ravaging the lives of beloved brothers and sisters.
                        </div>
                    </Typography>
                    <Button href={'https://ravesandbox.flutterwave.com/pay/aidlifefoundation'} variant="contained" color="primary">
                        DONATE
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default BillBoard
