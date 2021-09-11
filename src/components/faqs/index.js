import React from 'react';
import HeroSection from './HeroSection';
import FrequentQuestions from './FrequentQuestions';
import Form from './Form';
import { Grid } from "@material-ui/core";

export default function FAQS({ state }) {

    return <React.Fragment>
                <Grid container alignContent="center">
                    <HeroSection state={state.HeroSection} />
                    <FrequentQuestions state={state.FrequentQuestions} />
                    <Form state={state.Form} />
                </Grid>
            </React.Fragment>
}