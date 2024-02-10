import { Button } from "./button"
const Section1=(props)=>{
    return(
<>
<div className="container-fluid section1">
<div className="row">
<div className="col-md-6 mt-2">
<img src="https://template.hasthemes.com/daxone/daxone/assets/images/slider/hm1-single-1.png" alt="" className="img-fluid" />
</div>
<div className="col-md-6 section1a">
<h1>{props.discount}</h1>
<h2>COMFORT CHAIR</h2>
<p>Collect from Daxon and get 30% discount</p>
<Button/>
</div>

</div>


</div>



</>




    )
}
export{Section1}