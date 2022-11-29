

import Grid from "./grid";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Menue from "./menu";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";

function App() {

 const [pic,setPic]=useState([
  // {pic:
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU"/>},

// {pic: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU"/>

// },
// {pic: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU"/>

// },
// { <pic: img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU"/>

// },

])




const handler=(lin)=>{
const update=
pic.filter((lin2)=>(
  lin2.lin !=lin
))
  setPic(update)

}




  return (
    <div>
    
      <Menue/>
      
<div className="row">

<div className='col-md-2'     style={{marginTop:'3vh',borderRadius: '5px',
boxShadow: '#222831 0 0 4px',
borderCollapse: 'collapse',fontFamily:'sans-serif',height:'90vh', marginLeft:'3vw'}}>
  <Rightbar/>
  
{/* <Sidebar/> */}


</div>

{



}




<div className='col-md-6'     style={{marginTop:'3vh',borderRadius: '5px',

boxShadow: '#222831 0 0 2px',
borderCollapse: 'collapse',alignItems:'center', fontFamily:'sans-serif',fontSize:'2',height:'100vh', marginLeft:'1vw'}}>


{

pic.map((lin)=>(
<div>
  
  {lin.pic}

  <button onClick={()=> handler(lin.lin2)}>delete</button>
  <br></br>
   </div>


))

}

 
 <div class="card mb-3" style={{height:'20vh',width:"20vw"}}>

  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body" style={{backgroundColor:'black', color:'white'}}>
   
    <p class="card-text">
    Shain tait is supposed 
    </p>
    <p class="card-text" style={{color:'white'}}>
      <small class="text-muted" >shain tait recently playing against the newsland</small>
    </p>

    
  </div>
</div>

<div class="card mb-3" style={{height:'20vh',width:"20vw",marginTop:'11vh'}}>

  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body" style={{backgroundColor:'black', color:'white'}}>
   
    <p class="card-text">
    Shain tait is supposed 
    </p>
    <p class="card-text" style={{color:'white'}}>
      <small class="text-muted" >shain tait recently playing against the newsland</small>
    </p>

    
  </div>
</div>

<div class="card mb-3" style={{height:'20vh',width:"20vw",marginLeft:'40vh',marginTop:'-53vh'}}>

  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body" style={{backgroundColor:'black', color:'white'}}>
   
    <p class="card-text">
    Shain tait is supposed 
    </p>
    <p class="card-text" style={{color:'white'}}>
      <small class="text-muted" >shain tait recently playing against the newsland</small>
    </p>

    
  </div>
</div>

<div class="card mb-3" style={{height:'20vh',width:"20vw",marginTop:'11vh',marginLeft:'40vh'}}>

  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3WrXaGS3uvvdfLL5QVrFttUabBY9PJcp5Q&usqp=CAU" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body" style={{backgroundColor:'black', color:'white'}}>
   
    <p class="card-text">
    Shain tait is supposed 
    </p>
    <p class="card-text" style={{color:'white'}}>
      <small class="text-muted" >shain tait recently playing against the newsland</small>
    </p>

    
  </div>
</div>



  








  


















 </div>

<div className='col-md-3'     style={{marginTop:'3vh',borderRadius: '5px',

boxShadow: '#222831 0 0 2px',
borderCollapse: 'collapse',alignItems:'center', fontFamily:'sans-serif',fontSize:'2', marginLeft:'1vw',height:'90vh'}}>
 {/* <Rightbar/> */}
</div>

</div>

     <Footer/>


<Routes>

  <Route  path="/qeatrophy" element={<Footer/>}/>
  <Route  path="/ios" element={<Footer/>}/>
  <Route/>

</Routes>

    

     </div>

    
  );
}

export default App;
