import {TextField,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useState} from "react";
import useData from "./useData";
const PinSearch=(props)=>{
  const[Pin,setPin]=useState("");
  const[isEmpty,setIsEmpty]=useState(false);
  const date=new Date().toLocaleDateString();
  const response=useData(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${Pin.toString()}&date=${date}`);
  const PinSetter=(e)=>{
    setPin(e.target.value);
    const valLength=e.target.value.length;
    if(valLength>0 && valLength<7){
      setIsEmpty(false);
      }
    else{
      setIsEmpty(true)
    }
  }
  const handleSubmit=(e)=>{
    props.sub(response)
    e.preventDefault();
  }
  const Search=makeStyles({
    root:{
      "fontSize":"0.5rem",
      "padding":"0.5rem",
      "borderRadius":"3rem",
      "width":"20rem",
      '&:focus':{
        "outline":"none",
      },
   field:{
      "width":"20rem",
      "fontWeight":"bolder",
      "margin":"2rem 0",
   }
    }
  })
  const classes=Search();
  return(<>
  <form onSubmit={handleSubmit} className="formFields">
    <TextField error={isEmpty}
               className={classes.field}
               type="number" 
               id="pin"
               label="Pin Code"
               value={Pin}
               onChange={PinSetter} 
               helperText={isEmpty?"Incorrect Entry":"Enter Your Pin Code"}
               required />
   <Button className={classes.root} type="submit" variant="outlined" color="primary">Search</Button>
   </form>
  </>)
}
export default PinSearch;