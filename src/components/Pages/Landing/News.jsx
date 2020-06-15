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
      justifyContent:"center",
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 50,
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(150),
        
        
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
        marginLeft: 20,
        background: 'transparent'
     },

    
  }));
  
const News = () => {
    const classes=useStyles();
  return (
    <Section id='news'>
        <div className={classes.root}>
            <Grid container  spacing={3}>
                <Grid item xs={12} sm={12} >
                    
                        <p className={classes.Courseheader}>
                        Updates
                        
                            <p className={classes.Textline}/>
                        
                        
                            <p className={classes.Textline2}/>
                        
                        
                        
                        </p>
                  
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Card className={classes.grid}>
                        <CardHeader
                       avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                        </Avatar>
                       }
                       />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Card className={classes.grid}>
                        <CardHeader
                       avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                        </Avatar>
                       }
                       />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                    <Card className={classes.grid}>
                        <CardHeader
                       avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                        </Avatar>
                       }
                       />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                    <Card className={classes.grid}>
                        <CardHeader
                       avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                        </Avatar>
                       }
                       />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        
                    </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                
                
            
    
    
            
        </div>
        </Section>
            
  );
};

export default News;
