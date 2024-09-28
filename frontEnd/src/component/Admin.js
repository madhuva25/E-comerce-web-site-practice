import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/Addmin.css';
//import"./images";


const Admin = () => {
  const params = useParams();
  const [user, setUser] = useState('');
  const [order, setOrder] = useState([]);
  const [clickedRows, setClickedRows] = useState(() => {
    const storedClickedRows = localStorage.getItem('clickedRows');
    return storedClickedRows ? JSON.parse(storedClickedRows) : [];
  });
  
  const [image, setImage] = useState("./images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg");
  const image2w = "./images/17231540.jpg";
  //function
  const changeImagew = () => {
    setImage(image === "./images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2w : "./images/17231540.jpg");
  };
    




  const toggleRowColor = (index) => {
    setClickedRows(prevClickedRows => {
      let newClickedRows;
      if (prevClickedRows.includes(index)) {
        newClickedRows = prevClickedRows.filter(item => item !== index);
      } else {
        newClickedRows = [...prevClickedRows, index];
      }
      localStorage.setItem('clickedRows', JSON.stringify(newClickedRows));
      return newClickedRows;
    });
  };
  
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/ord/order/`).then((res) => {
      setOrder(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (order.length > 0) {
      let userId = order[0].userId;
      userId = userId.trim();
      axios.get(`http://localhost:3000/api/auth/username/${userId}`).then((res) => {
        setUser(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [order]);

  const delete1 = (orderId) => {
    axios.delete(`http://localhost:3000/api/ord/order/${orderId}`)
      .then((response) => {
        console.log(response.data);
        setOrder(order.filter(item => item._id !== orderId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  

  return (
    <div>
      <h1>COUSTERMER ORDERS</h1>
      <table className='tabl'>
        <thead>
          <tr>
            <th>NAME</th>
            <th>STORAGE</th>
            <th>COLOR</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={item._id} style={{ backgroundColor: clickedRows.includes(index) ? 'lightblue' : '' }}>
              <td>{item.name}</td>
              <td>{item.storage}</td>
              <td>{item.color}</td>
              <td>{item.quenty}</td>
              <td>{item.price}</td>
              <td>{user.username}</td>

              <td><button className='ord' onClick={() =>{ toggleRowColor(index);}}>ORDER send</button></td>
              <td><button className='rmv' onClick={() => delete1(item._id)}>REMOVE</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
    
  </div>
    </div>
  );
};

export default Admin;
