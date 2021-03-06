import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "2rem",
        paddingBottom: "0.5rem",
        textAlign: "center",
    },
    headingstyle:{
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: 700,
        fontSize: "2.25rem",
        // lineHeight: "1.4em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "32px",

        }
    }
}));

export default function HeadingWithText({ content, ...props }) {
    const classes = useStyles();


    return <Grid container item className={classes.root} justifyContent="center" alignItems="center" {...props}>
        <Grid item sm={10} md={8}>
            <Typography
                variant="h3" gutterBottom
                className={classes.headingstyle}>
                {
                    content.heading.map(
                        ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || `${text} `)
                    )}
            </Typography>
            {content?.description && <Typography
                variant="body1"
                color="textSecondary"
                style={{
                    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                    padding: "0rem 0.5rem 0.5rem 0.5rem",
                }}>
                {content.description}
            </Typography>}
        </Grid>
    </Grid>

}
