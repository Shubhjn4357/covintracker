import {TextField,MenuItem,Button} from "@material-ui/core";
import {useState} from "react";
import useData from "./useData";
import {makeStyles} from "@material-ui/styles";
const DistrictSearch=(props)=>{
  const [District,setDistrict]=useState("")
  const [City,setCity]=useState("")
  const date=new Date().toLocaleDateString();
  const state=useData(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
  const district=useData(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${District}`);
  const response=useData(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${City}&date=${date}`);
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.sub(response)
  }
  const Search=makeStyles({
    root:{
      "fontSize":"0.5rem",
      "padding":"0.5rem",
      "borderRadius":"3rem",
      "width":"20rem",
      "margin":"0.5rem 0",
      '&:focus':{
        "outline":"none",
      }
    },
    field:{
      "width":"20rem",
      "fontWeight":"bolder",
    }
  })
  const classes=Search();
  return(<>
  <form onSubmit={handleSubmit} className="formFields" >
    <TextField className={classes.field} 
               id="district"
               label="Select District"
               value={District}
               onChange={(e)=>setDistrict(e.target.value)}
               helperText="Select Your State"
               TextField
               required>
      {(state && state.Result)?
        (state.Result.states.map((MenuItem) => (
            <MenuItem key={MenuItem.state_id} value={MenuItem.state_id}>
              {MenuItem.state_name}
            </MenuItem>
          ))):<MenuItem value="">
              <em>loading...</em>
            </MenuItem>
      }
    </TextField>

    <TextField className={classes.field}
               id="city"
               label=" Select City"
               value={City}
               onChange={(e)=>setCity(e.target.value)} 
               helperText="Select Your City"
               TextField
               required>
      {(district && district.Result)?
        (district.Result.districts.map((MenuItem) => (
            <MenuItem key={MenuItem.district_id} value={MenuItem.district_id}>
              {MenuItem.district_name}
            </MenuItem>
          ))):<MenuItem value="">
              <em>None</em>
            </MenuItem>
      }            
    </TextField> 
    <Button className={classes.root} type="submit" variant="outlined" color="primary">Search</Button>
  </form>
  </>)
}
export default DistrictSearch;