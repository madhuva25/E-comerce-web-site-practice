import React ,{useState} from 'react'
import './css/Header.css'
import { Link, useNavigate, useParams ,} from 'react-router-dom'

import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';








const Header = () => {
  let urlPath = window.location.pathname; // This will return "/user/123"
let pathParts = urlPath.split('/'); // This will return ["", "user", "123"]
let userId = pathParts[2];
const navigate = useNavigate()
const params = useParams()
const [message, setMessage] = useState('')

  
  const myacount = () => {
    const employeeId = params.id
    if (userId) {
      navigate(`/myacount/${userId}`)
      console.log(userId)
    } else {
      setMessage('Please login or signup')
    }
  }
  const home =()=>{
    const employeeId = params.id
    navigate(`/Home/${userId}`)
  }


  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div className='full'>
     <div className='full'>
        {message && <div>{message}</div>}
        
    </div>
      
        <div className='lis'>
          <ul>

          <li><button onClick={home} className="llogo"></button></li>
            
            <li><Link className="no-decoration" to={'/HOME'} >IPHONE</Link></li>

            <li><Link className="no-decoration" to={'/login'} >IPAD</Link></li>
            <li><Link className="no-decoration" to={'/login'} >MACBOOK</Link></li>
            <li><Link className="no-decoration" to={'/login'} >AIRPODS</Link></li>
            <li><Link className="no-decoration" to={'/login'} ></Link></li>
            <li><Link className="no-decoration" to={'/login'} >LOGIN</Link></li>
            <li><Link className="no-decoration" to={'/login'} >LOGIN</Link></li>
            <li><Link className="no-decoration" to={'/login'} >LOGIN</Link></li>
            <li><Link className="no-decoration" to={'/login'} >LOGIN</Link></li>
            <li><Link className="no-decoration" to={'/login'} >LOGIN</Link></li>
          </ul>
        </div>
        <div className='right'>
            <ul>
              <li><Link to='/signup' className="no-decoration1">SIGNUP</Link></li>
              <li><Link to='/login' className="no-decoration1">LOGIN</Link></li>
              <li>
                <div className="myacountb">
                  <button onClick={myacount} style={{backgroundColor:"blue",borderRadius:"10px"}}>My Account</button>
                </div>
              </li>
            </ul>


        </div>
........................................................................................
  
 
.............................................................................................






       
       

  <div><nav class="navbar navbar-expand-lg bg-dark fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand text-light" href="#"></a>

    <a class="navbar-brand text-light" href="#"><img src='../images/apple-africa-high-resolution-logo-transparent (1).png' style={{width:'150px',height:'70px'}}/></a>
    


    <button class="navbar-toggler text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-light" style={{backgroundColor:"white",color:"white"}}></span>
    </button>
    <div class="offcanvas offcanvas-start text-light bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    
      
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-light" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:"white"}}></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >IPHONE</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >IPAD</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >MACBOOK</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >APPLEWATCH</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >AIRTAG</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >ACCESORIES</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-light" to={'/login'} >HOMPOD</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             BROWS CATOGARIEZE
            </a>
            <ul class="dropdown-menu bg-light text-dark">
            <li class="nav-item">
            <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >IPHONE</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >IPAD</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >MACBOOK</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >APPLEWATCH</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >AIRTAG</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >ACCESORIES</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link text-dark" to={'/login'} >HOMPOD</Link>
          </li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>










</div>

 


</div>


   
  )
}

export default Header
