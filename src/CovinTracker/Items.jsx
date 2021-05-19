import {
  Button,Tooltip
} from "@material-ui/core";
//import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
const Items = (props)=> {
  const {
    name,
    state_name,
    district_name,
    pincode,
    sessions
  } = props.data;
  
/*seEffectt(()=>{
  const DataFilter=()=>{
  return setSession(props.data.filter((e)=>{
    return e.include(min_age_limit);
    })
  )
}
  DataFilter()
  console.log(Session)
},[sessions])*/
  const Buttonstyle=makeStyles({
    root:{
      "fontSize":"0.7rem",
      "padding":"0.2rem",
      "borderRadius":"3rem",
      '&:focus':{"outline":"none"},
    }
  })
  const classes=Buttonstyle();
  return(
    <>
    <div className="row my-1">
       <div className="p-2 bg-light" >
           <div className="col d-flex align-items-center flex-column">
             <h6><strong>{name}</strong></h6>
             <p>{`${district_name},${state_name},${pincode}`}</p>
             <div className="DataItems">
             {sessions.map((slotCap, key)=> {
             const {available_capacity, min_age_limit, vaccine,date} = slotCap;
              return (slotCap)?(<div key={key}>
                    <div className="DataBtn mx-1">
                          <Tooltip title={date}  placement="top">
                            <Button className={classes.root}
                                    variant="contained" 
                                    color={(available_capacity)?"primary":"secondary"}
                                    >
                            {(!available_capacity)?"Booked":available_capacity}
                            </Button>
                          </Tooltip>
                          <p className="vaccine">{vaccine}</p>
                          <p className="age">{min_age_limit}+</p>
                       </div>
                    </div>):
                   (<div key={key} className="text-center d-flex">
                         <div className="d-block mx-1">
                          <Tooltip title="Not Available" placement="top">
                            <Button className={classes.root}
                                    variant="contained">
                              N/A
                            </Button>
                          </Tooltip>
                         </div>
                        </div>)
            })}
            </div>
        </div>
    </div>
    </div> < />
  )
}
export default Items;