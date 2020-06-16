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
    fontWeight: 'bold',
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
              Emergencies
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CardContent>
                <Typography variant='body1' component='p' align='justify' >
                  For about fifteen years, Aidlife Foundation has spent about
                  $5,400,000 (Five million Four hundred thousand Dollars)
                  in humanitarian interventions, and it has done path breaking
                  work across Nigeria, especially in places that are ‘hard 
                  to reach’ .It has a special interest in the lives of women
                  and children in these ‘hard to reach’ spots. Aidlife Foundation
                  has worked in locations where disasters, floods, conflicts 
                  and emergencies have occurred, and it has made giant strides
                  in the effort to strengthen systems, empowering small scale
                  female farmers, promoting girl-child education, and 
                  building capacity of local groups. Aidlife Foundation
                  functions at the community level with an array of local partners,
                  to promote human rights with the goal of checking poverty. 
                  It aims at tripling its humanitarian interventions in the next few years,
                  by expanding its funds drive, so that the absence of funding 
                  does not hinder its work. With additional donor support, 
                  innovative humanitarian interventions across Nigeria by
                  Aidlife Foundation will play a golden role in the effort to roll back poverty, 
                  allowing women to reclaim their voices in the process.
              </Typography>
          </CardContent>
        </Grid>
      </Grid>
      </div>
    </Section>
  );
};

export default Emergencies;