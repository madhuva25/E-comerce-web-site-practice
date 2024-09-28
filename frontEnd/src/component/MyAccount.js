import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//import Cart from "./backend/controler/Model/catrModel.js"
import axios from "axios"
import "./css/Myaccount.css"

function MyAccount() { 
  const params = useParams()
  const [user, setUser] = useState("")
  const[cart,setCart]= useState("")
  const [showTable, setShowTable] = useState(false);
  const [showTable1, setShowTable1] = useState(null);
  
   const [cname,setCname]= useState("")
   const [caddress,setCaddress]= useState("")
   const [cpnumber,setCpnumber]= useState("")




  
  const adress = (e)=>{
    const userId = params.id
    e.preventDefault();
    const details = ({ cname,caddress,cpnumber})

    axios.post(`http://localhost:3000/api/auth/username/${userId}`,details).then((res)=>{

    })
    
    
  }

  useEffect(()=>{
    const userId = params.id
    axios.get(`http://localhost:3000/api/auth/username/${userId}`).then((res)=>{
        setUser(res.data);
    }).catch((err)=>{
        console.log(err);
    });
  },[]);

  useEffect(()=>{
    var userid=params.id
   axios.get(`http://localhost:3000/api/bucket/cart/${userid}`).then(res => {
       setCart(res.data)
       console.log(userid)
       //console.log(res.data)
       
       
   }).catch((err)=>{
       console.log(err);
   });
 },[]);

 const order = (itemId,e) => {
  const itemToOrder = cart.find(item => item._id === itemId);
  const userid=params.id
   e.preventDefault();
    const details = ({ cname,caddress,cpnumber})
    const data = { ...itemToOrder, ...details }
  axios.post(`http://localhost:3000/api/ord/order/${userid}`, data)
      .then((response) => {
          console.log(response.data);
          console.log(userid)
          // handle success here
      })
      .catch((error) => {
          console.log(error);
          // handle error here
      });

  axios.post('https://your-server-url/v1/messages', {
    phone_number: 'recipient-phone-number',
    message: `Order details: ${itemToOrder.name}, ${itemToOrder.storage}, ${itemToOrder.color}, ${itemToOrder.quenty}, ${itemToOrder.price}`
  })
  .then((response) => {
      console.log(response.data);
      // handle success here
  })
  .catch((error) => {
      console.log(error);
      // handle error here
  });
}


  const delete1 = (cartId) => {
    axios.delete(`http://localhost:3000/api/bucket/cart/${cartId}`)
        .then((response) => {
            console.log(response.data);
            setCart(cart.filter(item => item._id !== cartId)); // Update the cart state
        })
        .catch((error) => {
            console.log(error);
        });
}




   console.log(cart.name)
   console.log(user.username)
  return (
    <div>
    <div className="hi">HI {user.username}{cart.name}</div>

    <button onClick={() => setShowTable(!showTable)}>
  {showTable ? 'Hide' : 'MY ORDER'} 
</button>

{showTable && (
  <table>
    <thead> 
      <tr>
        <th>NAME</th>
        <th>STORAGE</th>
        <th>COLOR</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(item => (
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.storage}</td>
          <td>{item.color}</td>
          <td>{item.quenty}</td>
          <td>{item.price}</td>
          <td>{item._id}</td>
          <td><button onClick={() => setShowTable1(item._id)}>
  {showTable1 === item._id ? 'Hide' : 'MY ORDER'} 
</button></td>
         <td>
  
         {showTable1 === item._id && (
  <>
    <label htmlFor="cname">Name  :</label>
    <input
      type="text"
      id="cname"
      value={cname}
      onChange={(e) => setCname(e.target.value)}
    />
    <label htmlFor="caddress">ADDRESS  :</label>
    <input
      type="text"
      id="cadress"
      value={caddress}
      onChange={(e) => setCaddress(e.target.value)}
    />
    <br/>
    <label htmlFor="age">Phone Number:</label>
    <input
      type="number"
      id="cpnumber"
      value={cpnumber}
      onChange={(e) => setCpnumber(e.target.value)}
    />
  
<button onClick={(e) => order(item._id, e)}>Order Now</button>

  </>
  )}
</td>


  
 
    

<td><button onClick={() => delete1(item._id)}>REMOVE</button></td>


        </tr>
      ))}

    </tbody>
  </table>
)}





  

    
    </div>
 
)}


export default MyAccount
