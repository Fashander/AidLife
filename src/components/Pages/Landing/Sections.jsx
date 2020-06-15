import React, { Fragment } from 'react';
import About from './About';
import News from './News'
import Emergencies from './Emergencies'

const Sections = () => {
  return (
    <Fragment>
      <About />
      <News/>
      <Emergencies/>
    </Fragment>
  );
};

export default Sections;