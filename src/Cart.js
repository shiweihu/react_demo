import React from 'react';
import './Cart.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Cart extends React.Component{
    constructor(props){
        super(props)

        

    }

    render(){

       const itemCount = new Map();
       this.props.cart.forEach((item)=>{
            var count = itemCount.get(item._id)
            if(count === undefined){
                count = 0
            }
            itemCount.set(item._id,count+1)
       })

       let views = new Array()
       var totalPrice = 0
       for(let item of itemCount.entries()){
            let id = item[0]
            let element = this.props.cart.find((element) =>{
               return element._id === id
            })
            let num = item[1]
            totalPrice+=num * element.price
            views.push( 
                <CartItem itemId = {id} num={num} title = {element.title} price = {element.price} addCall = {(id)=>this.props.addCall(id)} removeCall = {(id)=>{this.props.removeCall(id)}}/>
            );
    　　}
        return(
            <div className='py-auto'>
            <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Shopping Cart</Card.Title>
              <Card.Text>
                {views}
              </Card.Text>
              <h1>Total Price:${totalPrice}</h1>
            </Card.Body>
            </Card>
          </div>
        );
    }
}

class CartItem extends React.Component{
   constructor(props){
        super(props)
   }



   render(){
      return(
        <div className='d-flex align-items-center'>
        <Button variant="outline-primary" value={this.props.title}  onClick = {() => this.props.removeCall(this.props.itemId)} >-</Button>
        <div>
          <h6>You addded {this.props.num} of {this.props.title}, ${this.props.price} for each</h6>
          </div>
        <div>
          <Button variant="outline-primary" value={this.props.title} onClick = {() => this.props.addCall(this.props.itemId)}>+</Button>
        </div>
      </div>

      );
   }

}



export default Cart;