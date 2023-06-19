
import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import s1 from "./images/t1.jpeg"
import s2 from "./images/t2.jpeg"
import s3 from "./images/t3.jpeg"
import s4 from "./images/t4.jpeg"
import s5 from "./images/t5.jpeg"

function Segmenta() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula erLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ultricies enim, nec finibus massa commodo a. Nulla facilisi. Fusce faucibus sollicitudin risus, a tincidunt lacus sagittis a. Morbi cursus lectus a purus ullamcorper, et bibendum elit fermentum. Nunc maximus mauris tellus, id pharetra elit congue in. Donec aliquet rutrum dolor vel egestas. Pellentesque pulvinar odio et odio sagittis, vitae rutrum nisi consectetur. Aliquam erat volutpat. Curabitur non ligula er";


    return (
    <div style={{padding: '30px'}}>

    <Tabs defaultActiveKey="tab1" variant="pills" style={{paddingBottom: '20px'}}>
      <Tab eventKey="tab1" title="Zero-Waste Lifestyle">
        
      
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={s1} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Zero-Waste Lifestyle</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>




      </Tab>
      <Tab eventKey="tab2" title="Sustainable Fashion">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={s2} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Sustainable Fashion</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab3" title="Renewable Energy">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={s3} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Renewable Energy</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab4" title="Eco-Friendly Home">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={s4} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Eco-Friendly Home</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="tab5" title="Sustainable Food Choices">
      <div style={{ width: '1100px', height: '1115px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginTop: '20px' }}>
      <img src={s5} alt="Image" style={{ width: '650px', height: '325px', objectFit: 'cover', borderRadius:'15px' }} />
    </div>
    <div style={{ padding: '50px' }}>
      <h2>Sustainable Food Choices</h2>
      <p style={{ marginBottom: '10px', paddingTop: '20px' }}>{description}</p>
      
    </div>
  </div>
</div>
      </Tab>
    </Tabs>
</div>
  );
}

export default Segmenta;