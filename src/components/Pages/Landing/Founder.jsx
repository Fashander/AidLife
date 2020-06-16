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
        textAlign: 'justify',          
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
       }
    
  }));
  
const Founder = () => {
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
                        THE FOUNDER
                        <div className={classes.Textline}/>
                        </p>
                        <div style={{textAlign: 'center'}} >
                            <img src={aboutImage} alt ="Chief Joe Ajah" className={classes.aboutImg}/>
                        </div>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                    <CardContent className={classes.header2} >
                        <span >
                              &nbsp;Chief Joe Ajah Onah, an abroad-based Business Director, is a patriotic, philantrophic, dedicated and unifying administrator of the contemporary who rested his philosophy of life on community development, unity, empowerment, philanthropism and liberation of the indigents.<br /><br />
                &nbsp;He was born in the late 70s into the family of late Mr. Aaron Onah Okwa of Ochodu-Ukpa, Oju LGA, Benue State, Nigeria. In 1986, he attended his rudimentary education at Ukpa North Primary School, Ochodu-Ukpa and obtained his First School Leaving Certificate (FSLC) in 1991.
                Without wasting time, he immediately enrolled for his secondary education at the Government Secondary School, Oju in 1992 and grasped his West African School Certificate Examination (WASCE) in 1998 with flying colours.<br />
                &nbsp; As a lover of education who believes in knowledge as an indispensable illuminating factor that liberates a man from shackles of ignorance and poverty, Chief Joe Onah forged ahead to the Plateau State Polytechnic in 2002 where he read and bagged his National Diploma in the discipline of Accountancy in 2004.
                Owing to his determination and perseverance to acquire professional knowledge, he struggled further and gained admission into the prestigious Fidei Polytechnic, Gboko in 2010 where he read Accountancy and graduated in 2012 with excellent result in the Higher National Diploma (HND) in Accountancy. As a dedicated personality who makes hey while the Sun shines, he was without delayed mobilised for his mandatory National Youth Service Corps in the same 2012 but was exempted due to his engagements with the International Company, West Africa Francophone.<br/><br/>
                &nbsp;Chief Joe Onah started his professional working career in different companies as an Independent Marketing Agent, between 1999 and 2001. He later got appointment with Coca-cola Company, Jos in 2003 where he served as an assistant accountant and afterward transferred to Coca-Cola Company, Makurdi from 2004 - 2005 and was promoted to the rank of Assistant Warehouse.
                Because of his appetite to make life better for himself and the people around him through hard work, he got an appointment with Total Success World Ltd, an International Marketing Company in Jos as a Marketing Agent in 2005, and was elevated to the position of the Branch Manager, Yola in 2006 as a reward of his faithfulness, dedication, tenacity and commitment to the assigned duties.
                In 2007, he rouse to the height of the General Manager in Republic of Gambia in recognition and appreciation of his wealth of experience, humility, self-discipline and doggedness capped with sterling leadership qualities and skilful role provided to the company especially in fast-tracking development and progress.<br/><br/>
                &nbsp;To foster the companys progress and actualisation of her goals through quality management, Chief Joe Ajah was transferred to the Republic of Senegal in 2008 with retention of his position as General Manager, and afterward transferred in 2009 to Ivory Coast as General Manager.
                As reward of his hard work, in 2013, he got another juicy appointment with the company as the Regional Director, West African Francophone where he works till date.
                He has been consistently bagged awards for outstanding performance every year in the company. This has been the force for his upward mobility from zero to hero echelon where he is hitherto in the company.
                In his contribution to human resource and community building, he has been given succours, scholarships, and benevolent hands to indigents, downtrodden and less privileged ones at home and in diaspora.
                With his role played for the growth of the company in Ivory Coast where he engaged many Youths in the Nation, the philanthropist was recognised by the Mudema and Niambly Communities in Ivory Coast where he was honoured in November 24, 2018 with a chieftaincy title, "ASSOMOLI", meaning "Lion of the Young People of Ivory Coast".<br/><br/>
                &nbsp;Chief Joe Onah's sustained acceleration in his professional career and awards is rooted in the Biblical injunction in the Book of Proverbs 12:14, which says that a man will be rewarded with good by using the work of his hands as evaluation tools! This necessitates the value of hard-work, uphill struggle, tenacity, diligence, self-discipline, humility, dedication and commitment to a given task,  be it personal or public service which are added recompenses of a man.
                As the saying goes all work and no play, makes Jack a dull boy Chief Joe Ajah Onah loves reading, socialising, swimming and traveling as his hobbies.
                He believes in the supremacy of Almighty God who protects and elevates him from nowhere to somewhere; and prays unceasingly for longevity and significant impacts at home and abroad.
He is happily married to Vivian Ogugua Onah and blessed with 3 children.</span>
                    </CardContent>
                    </Grid>
            </Grid>
        </div>
        </Section>
  );
};

export default Founder;