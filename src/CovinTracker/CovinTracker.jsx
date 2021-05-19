import {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import DataItems from "./DataItems";
import PinSearch from "./PinSearch";
import DistrictSearch from "./DistrictSearch";
import "./covin.css"
import Loading from "./Loading";
const CovinTracker=()=>{
  const[Data,setData]=useState("");
  const[Left,setLeft]=useState(false);
  const SubmitData=(res)=>{
    return setData(res);
  }
  const DataSelector=()=>{
    setData("");
    setLeft(!Left)
    return ;
  }
  return(<>
  <div className="container bg-light">
    <div className="row">
      <div className="col p-2 mx-2 d-flex justify-content-center align-items-center flex-column">
        <div id="switch" onClick={DataSelector}>
          <span className={Left?"Left":""}></span>
          <div style={{"color":Left?"#ffffff":"#1E00FF"}}>Search By Pin</div>
          <div style={{"color":Left?"#1E00FF":"#ffffff"}}>Search By state</div>
        </div>
        {Left?<DistrictSearch sub={SubmitData}/>:
        <PinSearch sub={SubmitData}/>}
   
        {Data && (Data.IsLoading || Data.Result)?
        (Data.IsLoading?<Loading/>:<DataItems center={Data.Result}/>)
        :<strong>No Data Available</strong>}
   
      </div>
    </div>
  </div>
  
  </>)
  
}
export default CovinTracker;