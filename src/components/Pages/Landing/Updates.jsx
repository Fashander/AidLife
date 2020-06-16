import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import RiceDonation3 from '../../../assets/img/rice-donation3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Updates = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            J I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ALF EXTENDS CHARITY OUTREACHES TO OJU, DONATES OVER 200 BAGS OF RICE, FOOD ITEMS"
        subheader="By James Ibechi"
      />
      <CardMedia
        className={classes.media}
        image={RiceDonation3}
        title="Rice Donation"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Five days after a nonprofit organisation, Aid-Life Foundation (ALF), donated 160 bags of rice and food items to Obi LGA of Benue State, the group has replicated the gesture in Oju.
The donations were parts of ALF's 2020 charity outreaches to cushion the effects of Fulani herdsmen attacks on displaced persons and covid-19 pandemic on the less privileged in the two communities.
At the first leg of the presentation in Oju on Monday, ALF provided 50 bags of rice packaged with seasoning cubes and other food items to 50 retired clerics (Reverends) of the Assemblies of God Church with a cash donation to enable the retirees transport home.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Five days after a nonprofit organisation, Aid-Life Foundation (ALF), donated 160 bags of rice and food items to Obi LGA of Benue State, the group has replicated the gesture in Oju.
The donations were parts of ALF's 2020 charity outreaches to cushion the effects of Fulani herdsmen attacks on displaced persons and covid-19 pandemic on the less privileged in the two communities.
At the first leg of the presentation in Oju on Monday, ALF provided 50 bags of rice packaged with seasoning cubes and other food items to 50 retired clerics (Reverends) of the Assemblies of God Church with a cash donation to enable the retirees transport home.
          </Typography>
          <Typography paragraph>
            To the Igede intermediate traditional council and all the Council Wards in Oju, ALF also distributed a total of 160 bags of rice and other food items.
The ALF Founder/President, Chief Joe Ajah Onah, represented by the managing director of the organization, Rev. Iji Ogede Jarius alongside with his team members, stated during the presentation of the items that "the donation was borne out of the need to support the worldwide struggles to enable the less privileged and vulnerable people cope with the effects of COVID-19 by reaching out to them directly."
The Ojikpururu 1 of Amono Kingdom and Assomoli of Ivory Coast who added that the outreach was purely humanitarian said it was an act of love and charity.
In a reaction, District Superintendent,  Assemblies of God Church, Igede, Rev (Dr) Issac Igwe, expressed appreciation to the foundation for the gesture.
He prayed that the foundation would grow in leap and bounds.
At the Palace of Adirahu Ny'Igede, Chief Oga Ero in his reaction to the presentation of the food by the foundation,  showered royal blessings on the financier of the organisation, urging other Igede sons and daughters to take a cue from Chief Onah and similar gestures for the overall development of Igede Nation.
Mrs Alicia Eru, caretaker committee chairman of Oju LGC who was represented by Mr James Otor applauded the the foundation, saying the good Lord would continue to bless the foundation and its founder.
Other chiefs who took turns to react to the donation commended Chief Onah for the gesture.
District heads and clans presidents received the donations for onward distributions to the people who were targeted to be the beneficiaries.
          </Typography>
          <Typography paragraph>
            Rev. Jarius while informing that for now the foundation was being funded solely by the philanthropist Chief Onah, said that the public could trust it to contribute to its growth and also reach the society through the organisation with similar succor.
Chief Onah said that ALF had been in existent for years and that he was inspired into setting up the foundation by love for giving and sharing to help humanity.
The foundation would continue to Ukpa the hometown of Chief Onah to distribute  additional palliatives to the less privileged and other people in the communities today.
          </Typography>
          {/* <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Updates