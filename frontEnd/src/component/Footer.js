import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="bgcl"> 
        <div className="foot1"><ul><li><img src='../images/apple-africa-high-resolution-logo-black-transparent.png' style={{width:'150px',height:'70px',  margin:'20px 0px 5px -30px'}}/>
    
    <p className='footerp'>Apple Asia is the largest Apple Products Seller in Sri Lanka and we strive to bring the Apple products you love closer to you.</p>
     <br/>    


<h5> <i class="fa-solid fa-location-dot"> </i> Francium - Bambalapitiya Branch (For Brand New Devices)</h5>
<p style={{marginLeft:"25px"}}>No. 515, Lion House, Galle Road, Bambalapitiya, Colombo 04
<br/>
+94771757655</p>

<button className='location' onClick={""}>Find location</button>
     <br/>
     <br/>
  <h4><i class="fa-solid fa-location-dot"></i> Apple Asia - Wellawatta Branch
(For Used Devices)</h4>
<p style={{marginLeft:"25px"}}>No.11B, Fussel's lane, Wellawatta.
  <br/>

+94772722293</p>

<button className='location' onClick={""}>Find location</button>

 </li> 
    
   <li><ul className='footer2'>
    <li><h6>MAIN CATOGARIES</h6>
    
    <Link >iPhone</Link>
    <br/>
    <Link >iPad</Link>
    <br/>
    <Link >Mac</Link>
    <br/>
    <Link >Accessories</Link>

    <h6>QUICK NAVIGATION</h6>
    
    <Link >Home</Link>
    <br/>
    <Link >About us</Link>
    <br/>
    <Link >Contact Us</Link>
    <br/>
    <Link >News Room</Link>
    </li>
    </ul></li> 
    


<li><ul className='footer3'>
    <li><Card className='footercard'>card1</Card></li>
    <li><Card className='footercard'>c</Card></li>
    <li><Card className='footercard'>c</Card></li>
    <li><Card className='footercard'>c</Card></li>
    <li><Card className='footercard'>c</Card></li>
    <li><Card className='footercard'>c</Card></li>
    </ul></li>

    
    </ul></div>
   
    

    <hr style={{width:"100%"}}></hr>

    <div className='footer4'>

      <ul><li>
    <Link style={{marginLeft:"85px"}} >Privacy policy</Link></li>
    
    <li>
    <Link >Return / Refund</Link></li>
    <li>
    <Link >Terms & Conditions</Link></li>
   <li>
    <Link >Our Sitemap</Link>
    </li>

    
    
    
    <h1 style={{color:"rgb(213, 219, 219)",
marginTop:"10px"}}>xhh</h1>
      </ul>
    </div>


   


    
  
    </div>
  )
}

export default Footer