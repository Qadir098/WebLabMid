import { Link } from "react-router-dom";


function Footer() {
    return ( 

        <div>


<footer class=" text-lg-start bg-light text-muted">
  
  <section class="d-flex  justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block" >
 
    </div>
  
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>

  </section>
 
  <section class="">
    <div class=" text-md-start mt-2">
 
      <div class="row mt-3">
 
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-0" style={{marginLeft:'4vw'}}></i>Key Series
          </h6>
          <ul style={{listStyle:'none',marginLeft:'3vw'}}>
<li>test  series</li>
<li>odi  series</li>
<li>world cups</li>
<li>rankin gs</li>
<li>standings ..</li>
<li>test  series</li>
<li>odi  series</li>
<li>world  cups</li>
<li>rankings .. </li>
<li>standings .. </li>

<li>test  series</li>
<li>odi  series</li>
<li>world  cups</li>
<li>rankings ..</li>
<li>standings .. </li>


          </ul>
          
       
        </div>
      

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
     
          <h6 class="text-uppercase fw-bold mb-4" >
            Quick links
          </h6>
          <p>
            <a href="#!" class="text-reset">test series</a>
          </p>
          <p>
            <a href="#!" class="text-reset">world cups</a>
          </p>

          {/* <p>

            <link to ="/qeatrophy">
            QEA
            </link>
          
          </p> */}

          <p>
            <a href="#!" class="text-reset">odi series</a>
          </p>
        </div>
     
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            ESPN CrickInfo Apps
          </h6>
          <p>
            <a href="#!" class="text-reset">Android App</a>
          </p>
          

           {/* <p>

            <link to ="/qeatrophy">
            QEA
            </link>
          
          </p> */}
       
        </div>
   
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Follow CrickInfo</h6>
          <p>
            <a href="#!" class="text-reset">Facebook </a>
          </p>
          <p>
            <a href="#!" class="text-reset">Youtube</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Instagram</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Twitter</a>
          </p>
        </div>
      
      </div>
    
    </div>
  </section>


 
  <div class="p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">ESPNCrick Info.com</a>
  </div>
 
</footer>


        </div>
     );
}

export default Footer;