
import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import m1 from "./images/m1.jpeg"
import m2 from "./images/m2.jpeg"
import m3 from "./images/m3.png"
import m4 from "./images/m4.jpeg"
import m5 from "./images/m5.jpeg"

function Segmentb() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula er";
  return (
    <div style={{padding: '30px'}}>

    <Tabs defaultActiveKey="tab1" variant="pills" style={{paddingBottom: '20px'}}>
      <Tab eventKey="tab1" title="Self-Care Rituals">
        
      
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={m1} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Self-Care Rituals</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab2" title="Stress Management Techniques">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={m2} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Stress Management Techniques</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab3" title="Mindfulness and Meditation">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={m3} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Mindfulness and Meditation</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab4" title="Building Resilience">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={m4} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Building Resilience</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab5" title="Nurturing Relationships">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={m5} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Nurturing Relationships</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
    </Tabs>
</div>
  );
}

export default Segmentb;