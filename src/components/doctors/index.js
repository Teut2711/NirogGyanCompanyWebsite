import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import Services from "./Services";
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";

export default function Dummy({ state, children }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <HeroSection1 state={state.Features} invert={true} />
        <HeroSection1 state={state.Report} />
        <GetInTouch state={state.GetInTouch} />
        {children}
    </React.Fragment>
}