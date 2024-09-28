import React, { useEffect, useState } from 'react';
import './css/Iphone15.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Iphone15 = () => {
  const {params} = useParams();


  // Assuming your URL is something like "http://localhost:3000/user/123"
let urlPath = window.location.pathname; // This will return "/user/123"
let pathParts = urlPath.split('/'); // This will return ["", "user", "123"]
let userId = pathParts[2]; // This will return "123"

  
  const[name,setName]=useState("");
  const[color,setColor]=useState("");
  const[storage , setStorage]= useState("");
  const[waranty,setWaranty]=useState("");
  const[quenty,setQuenty]=useState("");
  const[price,setPrice]=useState("");


  //15pro max white
  const [image, setImage] = useState("../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg");
  const image2w = "../images/17231540.jpg";
  //function
  const changeImagew = () => {
    console.log("changeImagew function called"); // This will log when the function is called
   console.log("Current image:", image); // This will log the current image before changing it
  
    let newImage = image === "../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2w : "../images/17231540.jpg";
    console.log("New image:", newImage); // This will log the new image that will be set
  
    setImage(newImage);
  };
  
//15promx blue
  
  const image2b = "../images/17231493.jpg";

//function
  const changeImageb = () => {
    setImage(image === "../images/MME73_AV2.jpg" ? image2b : "../images/17231493.jpg");
  };

//15promx dark
  
  const image2d = "../images/17231486.jpg";
//function
  const changeImaged = () => {
    setImage(image === "../images/MME73_AV2.jpg" ? image2d : "../images/17231486.jpg");
  };
  

  //15promx ass
  
  const image2a = "../images/17231523.jpg";

//function
  const changeImagea = () => {
    setImage(image === "./images/MME73_AV2.jpg" ? image2a : "../images/17231523.jpg");
  
  };

  

    const strg2= ()=>{
        setStorage("256GB");
        console.log(storage);
        return storage
    }
    const strg5= ()=>{
 
  setStorage("512GB");
    }
    const strg1= ()=>{
      setStorage("1TB");
      
  
    }

    function changeColor() {
        document.getElementById("x").style.backgroundColor = "black"; 
        document.getElementById("x").style.color = "white";
      }
    function changeColor1() {
        document.getElementById("y").style.backgroundColor = "black"; 
        document.getElementById("y").style.color = "white";
      }
    function changeColor2() {
        document.getElementById("z").style.backgroundColor = "black"; 
        document.getElementById("z").style.color = "white";
      }

      const strgbt= ()=>{
        document.getElementById("cl").innerHTML="Blue Titanium";
        setColor("Blue Titanium")
          }
    const strgnt= ()=>{
            document.getElementById("cl").innerHTML="Natural titanium";
            setColor("Natural titanium")
              }
    const strgtb= ()=>{
                document.getElementById("cl").innerHTML="Titanium/Black";
                setColor("Titanium/Black")
                  }

    const strgwt= ()=>{
                    document.getElementById("cl").innerHTML="White Titanium";
                    setColor("White Titanium")
                      }


    var x = 0;
     const increment = ()=>{
      x +=1;
      document.getElementById("vl").innerHTML= x
      setQuenty(x)
     }
     const decrement = ()=>{
      if(x>0){
      x -= 1;
      setQuenty(x)
  document.getElementById("vl").innerHTML= x;}
     }
     const review = () => {
      document.getElementById("x1").innerHTML = `<!DOCTYPE html>
      <html>
      <head>
          <style>
              @media (max-width: 600px) {
                  table { width: 100%; }
                  h4, h5, p { font-size: 14px; word-wrap: break-word; margin-left:5px; }
                  textarea { width: 150%; height:200px; margin-left:5px; }
                  input[type='text'] { width: 150%; margin-bottom:10px; margin-left:5px; }
              }
          </style>
      </head>
      <body>
          <table style='width:100%; margin-left:10px;'>
          <form onclick="">
              <tr><td><h4>Brand</h4></td><td></td> </tr>
              <tr><td><h4>BE THE FIRST TO REVIEW “IPHONE 15 PRO MAX”</h4></td><td><p style="margin-left:200px;"></p></td> </tr>
              <tr><td><p>Your email address will not be published. Required fields are marked *</p></td></tr>
              <tr><td><h4>Your rating * :</h4></td><td></td></tr>
              <tr><td><h4>Your review *</h4></td></tr>
              <tr><td><textarea name="message" rows="10" cols="90"></textarea></td></tr>
              <tr><td><h5>Name*</h5></td></tr>
              <tr><td><input type='text' size="90%"></input></td></tr>
              <tr><td><h5>Email*</h5></td></tr>
              <tr><td><input type='text' size="90%"></input></td></tr>
              <tr><td><input type="radio">  Save my name, email, and website in this browser for the next time I comment.</input><td></tr>
              <tr><td><button type="submit" class="btn btn-primary">SUBMIT</button></tr></td>
              </form>
              </table>
      </body>
      </html>
      `
          
     }

  const adfun = () => {
    document.getElementById("x1").innerHTML = `
        <style>
            @media (max-width: 600px) {
                table { width: 100%; }
                h4 { font-size: 15px; }
                p { font-size: 14px; word-wrap: break-word; margin-left: 0px; }
                tr { width: 100%; }
                td { margin-left: 5px; width: 100%; }
                hr { width: 100%; }
            }
        </style>
        <table style='width:100%;margin-left:5px'>
            <tr><td><h4>Brand</h4></td><td><p style="margin-left:195px;">apple</p></td> </tr>
            <tr><td colspan='4'><hr></hr></td></tr>
            <tr><td><h4>Storage</h4></td><td><p style="margin-left:195px;">256GB, 512GB, 1TB</p></td> </tr>
            <tr><td colspan='4'><hr></hr></td></tr>
            <tr><td><h4>Color</h4></td><td><p style="margin-left:195px;">Blue titanium, Natural titanium, Titanium/Black, White titanium</p></td> </tr>
            <tr><td colspan='4'><hr></hr></td></tr>
            <tr><td><h4>Warranty</h4></td><td><p style="margin-left:195px;">Apple Care Warranty, Genxt Warranty</p></td></tr>
        </table>`;
}

  
  
const sendData = (e, waranty,price) => {
  e.preventDefault();
  
  
  
  const data = { name:"Iphone 15 Pro Max",color,waranty,quenty,storage,price};
  axios.post(`http://localhost:3000/api/bucket/creat/${userId}`, data).then(response => console.log(response))
  .catch(error => console.error(error));
console.log(`userid= ${userId}`)
console.log(storage)
console.log(data)
console.log(color)
console.log(quenty)
}
useEffect(() => {
  console.log(color,  storage, price,quenty);
}, [color,  storage, price,quenty]);


  return(
    <div>
        
        <div className='t3'>
        <div className='t1'>
          <div className='phoneImage'>
          <table style={{height:"100%"}}>
            
    <tr>
    <td className='mainiphone'>
    
        <img src={image} />
    
</td>

    </tr>
</table>

               </div>
               </div>
    <div className='t2'>
    <table>
        <tr>
            <td>
                <p>Home / iPhone / iPhone 15 Pro Max</p>

            </td>
        </tr>
        <tr>
            <td className='logo'>
                <Link to="">
                <img src="../images/apple-logo-6-1024x1024.png" alt='applelogo'/>
                </Link>
            </td>
            </tr>
            <tr>
                <td>
                    <h3> iPhone 15 Pro Max</h3>
                </td>
            </tr>

            <tr>
                <td>
                    <p  style={{color:'gray',textDecoration: "line-through"}}>රු534,900.00</p>
                    
                </td>
                <td><p style={{color:'blue',marginLeft:"-250px"}}>රු534,900.00</p></td>
            </tr>
            <tr>
                <td>
                    <p  className='responsive-text' style={{color:"red", fontWeight:"700",wordWrap: "break-word",width:"100%"}}>Mentioned Price Will be Reduced in Octomber</p>
                </td>

            </tr>

            <tr>
                <td>
                    <p style={{fontWeight:"800"}}>Storage:</p></td><td ><p style={{marginLeft:"-280px"}}><div id="st" >{storage}</div></p>
                </td>
            </tr>
            <tr>
                <td>
                    <button id="x" onClick={()=>{strg2();changeColor()}}>256GB</button>
                    <button id="y" onClick={()=>{strg5();changeColor1()}}>512GB</button>
                    <button id="z"onClick={()=>{strg1();changeColor2()}}>1TB</button>
                </td>
            </tr>
        <tr><td className='ct'>
            <p  style={{fontWeight:"600"}}>Color:</p></td><td><p style={{marginLeft:"-300px", color:"gray"}}><div id='cl'></div></p></td></tr>
            <tr><td>
                
    <div className="clorround" >
      <ul><li className='bl'> <button onClick={()=>{changeImageb();strgbt()}}>g</button></li>
      <li className='gray'><button onClick={()=>{changeImagea();strgnt()}}>g</button></li>
      <li className='dark'><button onClick={()=>{changeImaged();strgtb()}}>g</button></li>
      
      <li className='white'><button onClick={()=>{changeImagew();strgwt()}}>g</button></li>
      
      
      
      </ul>
      
      
      
      
    </div></td></tr>
<tr>
<td>
    <p style={{fontWeight:"600"}}>Warranty:</p></td> <td><select style={{marginLeft:"-260px", color:"gray"}}><option value={"Apple Care Warranty"} >Apple Care Warranty</option><option value={"Choose other option"}>Choose other option</option></select></td>

</tr>

<tr >
<td ><button id="mi" onClick={decrement}>-</button> <button id='c' style={{border:"0.5px solid gray" ,backgroundColor:"white",padding: "10px",marginLeft:"-5px",marginTop:"10px",marginBottom:"10px"}}><div id="vl" style={{color:'blue',}}>0</div></button><button id="pl" onClick={increment}>+</button></td> <td><button id='add' class="btn btn-primary" type='submit' onClick={sendData} style={{marginLeft:'-260px',fontWeight:'600',padding:"10px",marginTop:"10px",marginBottom:"10px"}}>ADD TO CART</button> </td>
</tr>
<tr>
  <td>
<button id='com'><i class="fa-solid fa-arrows-turn-to-dots"></i> Compare</button> <button id="aw"><i class="fa-regular fa-heart"> </i> Add to wishlist</button>
  </td>
</tr>

<tr>
<td className='b'>
    <div id='q'>People are watching this</div>
    <hr></hr>
</td>
</tr>
<tr>
  <td>
    <p id='ss'> <span>SKU:</span>N/A</p>
  </td>
</tr>
<tr>
  <td>
    <p id='ss'><span>Categories:</span>iPhone,iPhone 15 Pro Max</p>
  </td>
</tr>
<tr>
  <td>
    <p > <span>Tag:</span>New</p>
  </td>
</tr>
<tr>
  <td>
    <p > <span>Follow:</span><a href=''> <i class="fa-brands fa-facebook-f"></i></a><a href=''><i class="fa-brands fa-whatsapp"></i> </a><a href=''> <i class="fa-brands fa-instagram"></i></a> <a href=''><i class="fa-brands fa-tiktok"></i></a></p>
  </td>
</tr>

        
    </table>

    


    </div>
    
    </div>
     <div className="z1">
     <hr></hr>
      <div className="z2">
      
        <ul>
        
          <li><button onClick={adfun}>ADDITIONAL INFROMATION</button></li>
        
          <li><button onClick={review}>REWIVES</button></li>
          <li><button onClick={""}>SHOPPING AND DELEVARY</button></li>
          
        </ul>
        <div id="x1">s</div>
        
          

      </div>
     </div>

     <div>
    
    {/* ... rest of your code ... */}
   
  </div>
    
    </div>
  )
}

export default Iphone15