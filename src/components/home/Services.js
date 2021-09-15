import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
  },
  headingContainer: {
    textAlign: "center",
  },
  cardList: {
    justifyContent: "center",
    // alignItems: "stretch",
   },

  serviceCard: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "15px",
    // justifyContent: "space-around",
    alignContent: "center",
    border: "1px solid #B8BBBD",
    margin: "2rem",
    flexGrow: 1,
    boxShadow: "39px 11px 83px -53px #B8BBBD",
    "&__logo-box": {
      textAlign: "center",
      textWrap: "word-break",
      padding: "1rem"
    },
    "&__heading": {
      textAlign: "center",
    },
    "&__content": {
      padding: "1rem",
      textAlign: "center",
    }
  }
}

));



export default function Services({ state: services }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root} style={{ marginTop: "7%", backgroundImage: `url(${services.backgroundImage})` }}>
      <Heading content={services.content}></Heading>
      <CardList cardsData={services.servicesList}></CardList>
    </Grid>);
}

const CardList = ({ cardsData }) => {
  const classes = useStyles();
  return <Grid container item className={classes.cardList} >
    {cardsData.map(({ imgPath, heading, content }, index) => (
      <Card {...{ imgPath, heading, content }} key={index} />
    ))
    }
  </Grid>
}

const Card = ({ imgPath, heading, content }) => {

  const classes = useStyles();

  return (
    <Grid container item direction="column" className={classes.serviceCard} sm={3}>
      <Grid item className={`${classes.serviceCard}__logo-box`} >
        <img src={imgPath} alt="service" />
        <Typography variant="h5">{heading}</Typography>
      </Grid>

      <Grid item className={`${classes.serviceCard}__content`}>
        <Typography variant="body1" color="textSecondary">{content}</Typography>
      </Grid>
    </Grid>

  );
}

const Heading = ({ content }) => {
  const classes = useStyles();
  return <Grid item className={classes.headingContainer}>
    <Typography
      variant="h3"
      className={classes.heading}>
      The best <span style={{ color: "#3567D6" }}> Patient-Engagement Tool </span> out there
    </Typography>
    <Typography
      variant="h6"
      color="textSecondary"
      className={classes.description}>
      {content.description}
    </Typography>
  </Grid>

}
