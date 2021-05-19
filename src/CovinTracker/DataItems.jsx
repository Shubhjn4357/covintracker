import Items from "./Items";
const DataItems = (Response)=> {
  if (Response.center.error) {
    
    return <p>
      {Response.center.error}
    </p>
  } else {
    return(<>
      <div className="container DataCenters">
    {Response.center.centers.map((center, index)=> {
        return (
          <Items data={center} key={index} />
        )})}
      </div> < />)
    }
  }
  export default DataItems;