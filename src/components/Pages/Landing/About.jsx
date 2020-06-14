import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from '@material-ui/core/styles';
import Section from './section';
import aboutImage from '../../../assets/img/uku.jpg';
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'calc(100% - 40px)',
      justifyContent:"center",
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(150),
        height: theme.spacing(40),
        backgroundColor: 'transparent'
      },
      
      container: {
          alignItems: 'stretch',
          justifyItems: 'center',
          [theme.breakpoints.down('md')]: {
              justifyItems: 'space-evenly',
          },
          align:'center',
          backgroundColor: 'transparent'
      }
  
    },
    header:{
      color: '#414141',
          fontSize: 20,
          fontWeight: 900,
          lineHeight: 1.5,
          textAlign: 'left',
          marginBottom: 8,
          
          
    },
    header2:{
      color: '#414141',
          fontSize: 14,
          lineHeight: 1.1,
          textAlign: 'left',          
    },
  
    Courseheader:{
      fontWeight: 'bold',
      color: '#414141',
      fontSize: 14,
      lineHeight: 1.1,
      textAlign:'left',
      marginLeft: 32,
    },
    Textline: {
        content: '""',
        
        left: 0,
        width: '40%',
        height: '2px',
        background: '#EC0407',
        transition: '0.3s',
        bottom: '-8px',
     }
    
  }));
  
const About = () => {
    const classes=useStyles();
  return (
    <Section id='about'>
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={12} >
                    
                        <p className={classes.Courseheader}>
                        WHO WE ARE
                        <div className={classes.Textline}/>
                        </p>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                    <CardContent>
                        <span className={classes.header2}  >
                                ActionAid is a global movement of people working together
                                 to further human rights for all and defeat poverty. We 
                                 prioritise works with the poor and excluded, promoting
                                  values and commitment in civil society, institutions and
                                   governments with the aim of achieving structural changes 
                                   to eradicate injustices and poverty in the world.
                                    ActionAid Nigeria is a member of ActionAid global federation.
                                     We maintain a strong relationship of interdependence and 
                                     mutual accountability within the international federation
                                      while ensuring a strong balance between self-rule and 
                                      shared-rule. Registered in Nigeria in 1999 as a Country
                                       Programme of ActionAid International, we have
                                        transformed into an autonomous national organisation 
                                        with a strong national governance structure –
                                         a Board and a General Assembly -
                                          consisting of reputable Nigerians providing 
                                          strategic oversight.</span>
                    </CardContent>
                    
                </Grid>
      
      <Grid item xs={12} sm={6}>
      <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
              <Button className='btn btn-primary rounded-0'>Read More</Button>
      </Grid>
    </Grid>
            
        </div>
        </Section>
            
  );
};

export default About;
