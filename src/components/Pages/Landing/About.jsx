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
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import Avatar from "@material-ui/core/Avatar"
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
    Courseheader2:{
        fontWeight: 'bold',
        color: '#414141',
        fontSize: 28,
        lineHeight: 1.1,
        textAlign:'center',
        marginLeft: 32,
      },
    Textline: {
        content: '""',
        left: 0,
        width: '35%',
        height: '2px',
        background: '#EC0407',
        transition: '0.3s',
        bottom: '-8px',
     },
     Textline2: {
        content: '""',
        justifyContent: 'center',
        width: '45%',
        height: '2px',
        right: 0,
        background: '#EC0407',
        transition: '0.3s',
        bottom: '-8px',
     },
     grid:{
        marginLeft: 140
     }
    
  }));
  
const About = () => {
    const classes=useStyles();
  return (
    <Section id='about'>
        <div className={classes.root}>

            <Grid container>
            <Grid item xs={12} sm={12} >
                    
                    <p className={classes.Courseheader2}>
                    AidLife Foundation
                    
                        <p className={classes.Textline}/>
                    
                    
                        <p className={classes.Textline2}/>
                    
                    
                    
                    </p>
              
            </Grid>
                <Grid item xs={12} sm={6} >
                    
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
                                          <Button className='btn btn-primary rounded-0'>Read More</Button>
                    </CardContent>
                    
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.grid}>
                    <p className={classes.Courseheader}>
                    OUR MISSION
                    <div className={classes.Textline}/>
                    </p>
                                    
                    <CardContent>
                    <span className={classes.header2}  >
                            ActionAid is a global movement of people working together
                             to further human rights for all and defeat poverty.
                             </span>
                    <Button className='btn btn-primary rounded-0'>Read More</Button>
                </CardContent>
                
                </Grid>

                <Grid item xs={12} sm={3} >
                    <p className={classes.Courseheader}>
                    OUR VISSION
                    <div className={classes.Textline}/>
                    </p>
                                    
                    <CardContent>
                    <span className={classes.header2}  >
                            ActionAid is a global movement of people working together
                             to further human rights for all and defeat poverty.
                             </span>
                    <Button className='btn btn-primary rounded-0'>Read More</Button>
                </CardContent>                
                </Grid>
                <Grid item xs={12} sm={3} >
                    <p className={classes.Courseheader}>
                    What We Do
                    <div className={classes.Textline}/>
                    </p>
                                    
                    <CardContent>
                    <span className={classes.header2}  >
                            ActionAid is a global movement of people working together
                             to further human rights for all and defeat poverty.
                             </span>
                    <Button className='btn btn-primary rounded-0'>Read More</Button>
                </CardContent>
                
                </Grid>
            </Grid>
    
    
            
        </div>
        </Section>
            
  );
};

export default About;
