import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from '@material-ui/core/styles';
import Section from './section';
import imge from '../../../assets/img/imge.jpg';
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
          textAlign: 'justify',        
    },
    avatar: {
            backgroundSize: 'cover',
           
            backgroundRepeat: 'no-repeat',
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
  
const Emergencies = () => {
    const classes=useStyles();
  return (
    <Section id='emergencies'>
        <div className={classes.root}>

            <Grid container>
            <Grid item xs={12} sm={12} >
                    
                    <p className={classes.Courseheader2}>
                    Emergencies
                    
                        <p className={classes.Textline}/>
                    
                    
                        <p className={classes.Textline2}/>
                    
                    
                    
                    </p>
              
            </Grid>
                <Grid item xs={12} sm={6}>
                    
                    <CardContent>
                        <span className={classes.header2}  >
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
                                   allowing women to reclaim their voices in the process.</span>
                                    
                    </CardContent>
                    
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.avatar}>
                    
                    </div>
                
                
                </Grid>

                <Grid item xs={12} sm={3} >
                                    
                </Grid>
                <Grid item xs={12} sm={3} >
                    
                
                </Grid>
            </Grid>
    
    
            
        </div>
        </Section>
            
  );
};

export default Emergencies;
