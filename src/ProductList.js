
import React from 'react';
import styles from './ProductList.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let viewList = this.props.list.map( (value,index) =>{
            return(
                <ProductItem className = "grid-item"
                  data = {value}
                  addFunc = {(id) => this.props.addFunc(id)}
                />
            )
        } ) 
        return(
            <div className='grid-container'>
               {viewList}
            </div>
        );
    }

}

class ProductItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        let itemData = this.props.data

        return(
            <div className='grid-item'>
            <Card style={{ width: '20rem', height: '38rem'}}>
            <Card.Body>
              <Card.Img variant="top" style={{width:'12rem', height: '20rem'}}  src={itemData.image}/> 
              <Card.Title>{itemData.title}</Card.Title>
              <Card.Text>
                  <p>{itemData.size}</p>
                  <p>length: {itemData.length}''</p>
                  <h5>Price: ${itemData.price}</h5>
                  <p>{itemData.description}</p>
              </Card.Text>
              <Button onClick={()=>{
                this.props.addFunc(itemData._id)
              }} variant="outline-primary">Add to cart</Button>
            </Card.Body>
            </Card>
          </div>
        );
    }
}


export default ProductList;