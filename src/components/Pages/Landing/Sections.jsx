import React, { Fragment } from 'react';
import About from './About';
import Emergencies from './Emergencies';
import Updates from './Updates';

const Sections = () => {
  return (
    <Fragment>
      {/* <About /> */}
      <Emergencies/>
      <Updates />
    </Fragment>
  );
};

export default Sections;