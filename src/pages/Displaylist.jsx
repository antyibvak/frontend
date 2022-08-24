import React from 'react'
import Orders from '../components/Orders'
import { useEffect, useState } from 'react';
import axios from 'axios';



const Displaylist = () => {

  const [Orders, setOrders] = useState([])

  useEffect(() => {
    Orderdata();
  }, []);

  const Orderdata = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1") // Will be gotten from database;
    setOrders(data);
  };

  return (
    <div>
      {Orders.map((order) => (
        <div>
          <p>{order.OrderID}</p>
        </div>
      ))}
      <button>
        Edit
      </button>
      <button>
        Delete
      </button>
    </div>
  )
}

export default Displaylist