
import React from "react";
import { Tab, Tabs } from 'react-bootstrap'; 
import t1 from "./images/sa1.jpeg"
import t2 from "./images/sa2.jpeg"
import t3 from "./images/sa3.jpeg"
import t4 from "./images/sa4.jpeg"
import t5 from "./images/sa5.jpeg"
function Segmentc() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula er";
  return (
    <div style={{padding: '30px'}}>

    <Tabs defaultActiveKey="tab1" variant="pills" style={{paddingBottom: '20px'}}>
      <Tab eventKey="tab1" title="Budget Travel Tips">
        
      
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={t1} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Budget Travel Tips</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>


      </Tab>
      <Tab eventKey="tab2" title="Solo Travel Adventures">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={t2} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Solo Travel Adventures</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>

 
      </Tab>
      <Tab eventKey="tab3" title="Off-the-Beaten-Path Destinations">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={t3} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Off-the-Beaten-Path Destinations</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>

   
      </Tab>
      <Tab eventKey="tab4" title="Eco-Tourism and Responsible Travel">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={t4} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Eco-Tourism and Responsible Travel</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>


      </Tab>
      <Tab eventKey="tab5" title="Adventure Activities">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={t5} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Adventure Activities</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
    </Tabs>
</div>
  );
}

export default Segmentc;