import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel1 from './Carousel';

const Orders = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Carousel1 imageUrl={["https://www.burton.com/static/product/W23/22737100001_4.png?impolicy=bglt&imwidth=486",
"https://www.burton.com/static/product/W23/22737100001_5.png?impolicy=bglt&imwidth=486",
"https://www.burton.com/static/product/W23/22737100001_1.png?impolicy=bglt&imwidth=486",
"https://www.burton.com/static/product/W23/22737100001_7.png?impolicy=bglt&imwidth=486",
"https://www.burton.com/static/product/W23/22737100001_9.png?impolicy=bglt&imwidth=486"]}/>   
      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Text>
          Item Colour
        </Card.Text>
        <Card.Text>
          Item Size
        </Card.Text>
        <Card.Text>
          InStock
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


// ImageUrls, Item names, Colours, Size and Instock to be recieved from Database

export default Orders