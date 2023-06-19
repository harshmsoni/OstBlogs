import BrandExample from "./components/Navigationbar";
import ControlledTabsExample from "./components/Segments";
// import Segmenta from "./components/segments/Segment1";
import JobContainer from "./components/Jobs";
import Carousel from "./components/News";
import Carousell from "./components/Advertisement";
function App() {
  return (
    <div className="App">
      <BrandExample/><br/><br/>
      <ControlledTabsExample/>
      <br/><br/>
      {/* <Segmenta/> */}
      <Carousel/>
      <Carousell/>
      <JobContainer/>
      <footer style={{paddingLeft:'650px', backgroundColor:'rgba(217, 217, 217, 1)', height:'50px', paddingTop:'10px'}}>© 2021 Copyright: OST Talent</footer>
    </div>
  );
}

export default App;
