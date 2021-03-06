import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",

    padding: "0.5rem",
  },
  title: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    fontWeight: "700",
    // color: "#3668d6",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    }
  },
  content: {
    justifyContent: "space-evenly",
    alignItems: "left",
    padding: "2rem",
    [theme.breakpoints.up('sm')]: {

      paddingLeft: "5rem",
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
      alignItems: "center",
    }
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
      padding: "1rem"
    }
  },
  buttonSet: {

    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonServicesContainer: {

    "&>button": {
      borderRadius: "20px",
      padding: "0.5rem 2rem",
      textTransform: "none",

    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-evenly",
    }

  },
  buttonWatchVideoContainer: {
    alignItems: "center",
    "&>button": {
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-evenly",
    }
  },
  watchVideoButton: {
    backgroundColor: "transparent",
    textTransform: "none",

    "&:hover": { backgroundColor: "transparent" },
  },

  videoButtonIcon: {
    color: "#102554",
    fontSize: "3rem"
  },
  imageBox: {
    minHeight: "70vh",
    backgroundSize: "contain", backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down('md')]: {
      minHeight: "50vh",

    }
  },
  contentRight: {
    textAlign: "center",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }
}));


export default function HeroSection({ state: heroSection }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="space-evenly">
      <ContentLeft content={heroSection.contentLeft} md={6} />
      <ContentRight content={heroSection.contentRight} md={6} />
    </Grid>
  )

}


const ContentLeft = ({ content, ...props }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.content} {...props}>
    <Grid item style={{ marginBottom: "12%" }}></Grid>
    <Grid item >
      <Heading text={content.heading} />
    </Grid>
    <Grid item>
      {content.descriptions.map((description, index) => <Description key={index} text={description} />)}
    </Grid>
  </Grid>
}

const Heading = ({ text }) => {
  const classes = useStyles();

  return <Grid container item direction="column">
    <Grid item style={{ marginBottom: "1%" }}>
      <Typography
        variant="h3"
        className={classes.title}>
        {text.line1}
      </Typography>
    </Grid>

    <Grid item >
      <Typography
        variant="h3"
        className={classes.title}>
        {text.line2}
      </Typography>
    </Grid>
  </Grid>
}


const Description = ({ text }) => {
  const classes = useStyles();
  return <Grid container item className={classes.text} style={{ marginTop: "1%", marginBottom: "5%" }}>
    <Typography variant="body2" style={{ fontSize: "1rem" }}>
      {text}
    </Typography>
  </Grid>
}


const ContentRight = ({ content, ...props }) => {
  const classes = useStyles();
  const { imagePath, altText = "logo-default" } = content.image;
  return <Grid item className={classes.imageBox} {...props}>
    <img loading="lazy" src={imagePath} alt={altText} width="100%" />
  </Grid>
}
