import React from 'react';
import Grid from '@material-ui/core/Grid'
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from '@material-ui/core/styles';
import Section from './section';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'calc(100% - 40px)',
    justifyContent:"center",
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 50,
    marginTop: '50px',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      backgroundColor: 'transparent',
    },
    container: {
      alignItems: 'stretch',
      justifyItems: 'center',
      align:'center',
      backgroundColor: 'transparent',
      [theme.breakpoints.down('md')]: {
          justifyItems: 'space-evenly',
      },
    },
  },
  mui_heading:{
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
  },
  underlineWrapper: {
    display: 'flex',
    alignContent: 'center',
  },
  underlineWrapper_inner: {
    display:'flex',
    flexDirection: 'column',
    alignContent: 'left',
  },
  underline: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: 'calc(100% - 40px)',
    marginTop: '0.4rem',
    height: '0.4rem',
    borderRadius: '30%',
  },
}));
  
const Emergencies = () => {
  const classes=useStyles();

  return (
    <Section id='emergencies'>
      <div className={classes.root}>
        <Grid container>
        <Grid item xs={12} sm={12} >
            <Typography className={classes.mui_heading} variant='h4' align='center' >
              ABOUT AID-LIFE FOUNDATION
              <div className={classes.underlineWrapper}>
                <div className={classes.underlineWrapper_inner}>
                  <span className={classes.underline} ></span>
                  <span className={classes.underline} ></span>
                </div>
              </div>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CardContent>
            <Typography variant='body1' component='p' align='justify' >
              Aid-life foundation is a non-profit organisation whose primary objectives anchored on providing philanthropic services, community development and social well-being of the vulnerables tailored the promotion of inclusive society.
              Specifically, some of the objectives of the Aid-Life Foundation include but not limited to:
            </Typography>
            <ol>
              <li>
                Be a source of unique charity and philanthropic programmes that would support the vulnerable groups in their personal development.
              </li>
              <li>
                Build healthier communities by investing in the positive development
              </li>
              <li>
                Provide rewarding opportunities and scholarships to indigent youths who distinguish them in academic pursuits and other choosing careers.
              </li>
            </ol>
          </CardContent>
        </Grid>
      </Grid>
      </div>
    </Section>
  );
};

export default Emergencies;