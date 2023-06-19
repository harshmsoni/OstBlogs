import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';  
import Segmenta from './segments/Segment1';
import Segmentb from './segments/Segment2';
import Segmentc from './segments/Segment3';


function ControlledTabsExample() {


  return (

    <Tabs defaultActiveKey="tab1" variant="tabs" justify>
      <Tab eventKey="tab1" title="Sustainable Living">
        <Segmenta/>
      </Tab>
      <Tab eventKey="tab2" title="Mental Health and Well-being">
        <Segmentb/>
      </Tab>
      <Tab eventKey="tab3" title="Travel and Adventure">
        <Segmentc/>
      </Tab>
    </Tabs>

  );
}

export default ControlledTabsExample;