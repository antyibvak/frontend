import React from 'react'
import { useState, useEffect } from "react";
import Displaylist from './Displaylist';

//APIs to be gottenfrom backend

const Editlist = () => {

  const [searchOrders, setsearchOrders] = useState({});
  const [data, setdata] = useState([]);

  const handleChange = e => {
    setsearchOrder({ order: e.target.value });
  };

  const getOrders = async () => {
    const orders = await Orders();
  };

  const OrderID = data.filter(list => {
    return list.ID.includes(searchOrders.order());
  });

  const deleteData = async id => {
    await deleteStudent(id);
  };
  
  const EditData = async id => {
    await EditStudent(id);
  };

  useEffect(() => {
    getEntries();
  }, []);


  return (
    <div>
      <Displaylist/>
    </div>
  );
}

export default Editlist