import React from 'react';
import Grid from '@material-ui/core/Grid'
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from '@material-ui/core/styles';
import Section from './section';
import aboutImage from '../../../assets/img/Aidlife.jpg';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'calc(100% - 40px)',
      justifyContent:"center",
      display: 'flex',
      flexWrap: 'wrap',
    marginBottom: 50,
    marginTop: '20vh',
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
     
     aboutImg:{
        width: "70%",
        maxHeight: '300px',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginLeft: 100,
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
                    AID-LIFE Foundation
                    </p>
            </Grid>
                <Grid item xs={12} sm={6} >
                        <p className={classes.Courseheader}>
                        WHO WE ARE
                        <div className={classes.Textline}/>
                        </p>
                        <div >
                             <img src={aboutImage} alt ="Chief Joe Ajah" className={classes.aboutImg}/>
                        </div>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                    <CardContent className={classes.header2} >
                        <span >
                &nbsp;Aid-Life Foundation Distributes Paliatives to Masses, and Relief Packages to IDPs<br /><br />

                &nbsp;Aid-Life Foundation (ALF), a non-profitble organisation, in her charity outreach, has today, 08: 06: 2020 distributed relief packages to the Internally Displaced Persons (IDPs) over the recent Itakpa-Ito attack by the suspected Fulani herdsmen and loved ones who are suffering from Covid-19 pandemic to at least ease the consequences ravaging the lives of beloved brothers and sisters.<br /><br />

                &nbsp;The foundation Managing Director (MD), Rev. Iji Jairus in his introductory speech, briefed that, he has two messages: One is Paliatives to help reduce the fallouts of Covid-19 pandemic; and secondly, Relief Packages to support the IDPs who are under distress over the recent Itakpa attack by the suspected herdsmen.<br /><br />

                The MD of the foundation; in his speech on behalf of the foundation President, 
                &nbsp;Chief Joe Ajah Onah, the Ojikpururu 1 of Amono Kingdom and Assomoli of Ivory Coast, said, after deep reflection on the consequences of human displacement and Covid-19 pandemic to include but not limited insecurity; threats to peace and livelihood, the President of the foundation saw the need to offer some relief packages.<br /><br />

                &nbsp;Adding that, as an organisation with a vision and mission of supporting the needy to promote inclusive society, the donation became necessary to assist the vulnerable groups through charity services and outreach.<br /><br />

                &nbsp;On behalf of his President and his entourage deeply commiserated with Itakpa citizens while presenting the relief packages praying that, peace and good health will be restored to the land.<br /><br />

                &nbsp;The first presentation which was done at the palace of Ad'Obi was warmly accepted by the Chairman of Obi Local Local Government Council, Hon Joe Ipenyi. While lavishing words of appreciation and blessings, the Chairman summarised his speech as "A generous person will always prosper; whoever refreshes others will be refreshed", this is according to the Book of Proverbs 11: 25 NIV.<br /><br />

                &nbsp;The Ad'Obi, HRH, Chris Ijale who crowned the the speech of his Chairman, also showered Royal blessings and prayers on the founder of the foundation, petitioning God to bless him more in order to give more.<br /><br />

                &nbsp;In the second phase of the presentation which was done in the scene of the attack at Itakpa community, HRH Chief Jerry Ola, the Ward Head of Okpokwu Council Ward expressed that, the foundation was one of its kind to have shown a direct concern to the IDPs. He also bathed the foundation, her President and the team who delivered the message to them with multiplicities of good prayers and spells of blessings.<br /><br />

                &nbsp;The relief packages distributed were 100 bags of rice to IDPs and 60 bags of rice with other items such as tomatoes, seasoning and salt as paliatives to the same Obi Local Government Area.<br /><br />

                &nbsp;At the height of the presentation, the event was more flamboyant with the arrival of HRH, Chief Daniel Ulegede-the 3rd Class Chief, Igede Central, Members of Igede Consultative Forum led by Barr Ocha Ulegede and Mrs Comfort Agogo, among others. In short, today's event was a near absolute coloration of Traditional Chiefs and important personalities.<br /><br />

                &nbsp;Watch out, in a few days, more in form of paliatives are underway to Oju from the same foundation.<br /><br />

                The team who delivered the message include:
                Rev. Iji Jairus - Chairman
                Rev. Onah Edwin
                Mr Sunny Ogbor
                Hon Victor Uhana
                James Ibechi
                Rev. Abel Ode
                Dr (Mrs) Susan Ogbaji
                Hon Martins Obaike Ode
                Mr Peter Ogbaji
                Mr Onah Job Adikpe
Benson Egbodo</span>
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
                            Our motto is charity for all
                             </span>
                    
                </CardContent>
                
                </Grid>

                <Grid item xs={12} sm={3} >
                    <p className={classes.Courseheader}>
                    OUR VISION
                    <div className={classes.Textline}/>
                    </p>
                                    
                    <CardContent>
                    <span className={classes.header2}  >
                            AidLife is a global movement of people working together
                             to further human rights for all and defeat poverty.
                             
                             </span>
                    
                </CardContent>                
                </Grid>
                <Grid item xs={12} sm={3} >
                    <p className={classes.Courseheader}>
                    What We Do
                    <div className={classes.Textline}/>
                    </p>
                                    
                    <CardContent>
                    <span className={classes.header2}  >
                            AidLife is a global movement of people working together
                             to further human rights for all and defeat poverty.
                             </span>
                    
                </CardContent>
                
                </Grid>
            </Grid>
    
    
            
        </div>
        </Section>
            
  );
};

export default About;