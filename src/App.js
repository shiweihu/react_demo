import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './Menu';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends React.Component {

  

  constructor(props){
     super(props)

     this.list = [
      {
          "count":0,      
          "_id":1,
          "title":"UIUXlemon High-Rise Pant",
          "image":"images/1.png",
          "description": "Green Jasper Legging.",
          "price": 118,
          "length": "25",
          "size":"Medium"
          
      },
      {
          "count":0,      
          "_id":2,
          "title":"UIUXlemon High-Rise Crop",
          "image":"images/2.png",
          "description": "Powder Blue Legging.",
          "price": 98,
          "length": "23",
          "size":"Medium"
      },
      {
          "count":0,
          "_id":3,
          "title":"UIUXlemon High-Rise Crop with Pockets",
          "image":"images/3.png",
          "description": "Pink Peony Legging.",
          "price": 118,
          "length": "23",
          "size":"Large"
      },
      {   
          "count":0,
          "_id":4,
          "title":"UIUXlemon High-Rise Tight",
          "image":"images/4.png",
          "description": "Blue Chill Legging.",
          "price": 88,
          "length": "25",
          "size":"Large"
      },
      {  
          "count":0,      
          "_id":5,
          "title":"UIUXlemon Contour Fit High-Waist Crop",
          "image":"images/5.png",
          "description": "Misty Glade Legging.",
          "price": 59,
          "length": "23",
          "size":"Small"
      },
      {
          "count":0,
          "_id":6,
          "title":"UIUXlemon High-Rise Short with Pockets",
          "image":"images/6.png",
          "description": "True Navy Short.",
          "price": 74,
          "length": "6",
          "size":"Medium"
      },
      {
          "count":0,      
          "_id":7,
          "title":"UIUXlemon High-Rise Short with Pockets",
          "image":"images/7.png",
          "description": "Poolside Short.",
          "price": 54,
          "length": "6",
          "size":"Large"
      },
      {
          "count":0,      
          "_id":8,
          "title":"UIUXlemon High-Rise Short with Pockets",
          "image":"images/8.png",
          "description": "Chambray Short.",
          "price": 29,
          "length": "6",
          "size":"Small"
      },
      {
          "count":0,
          "_id":9,
          "title":"UIUXlemon High-Rise Pant with Pockets",
          "image":"images/9.png",
          "description": "Graphite Grey Legging.",
          "price": 128,
          "length": "25",
          "size":"Small"
      },
      {
          "count":0,      
          "_id":10,
          "title":"UIUXlemon High-Rise Tight",
          "image":"images/10.png",
          "description": "Wisteria Purple Legging.",
          "price": 59,
          "length": "25",
          "size":"Medium"
      },
      {
          "count":0,      
          "_id":11,
          "title":"UIUXlemon High-Rise Pant Shine",
          "image":"images/11.png",
          "description": "Radiate Foil Print French Press Legging.",
          "price": 49,
          "length": "25",
          "size":"Small"
      },
      {
          "count":0,      
          "_id":12,
          "title":"UIUXlemon High-Rise Crop",
          "image":"images/12.png",
          "description": "Java Legging.",
          "price": 88,
          "length": "23",
          "size":"Large"
      }
    ]
    

     this.state = {
      productList:this.list,
      cartList:Array()
     }
  }

  

  filterProductList(size,length,sortType){
    var filterList = this.list.filter( (item) =>{
      return (item.size === size || size === "All") && (item.length == length || length == "All")
    })
     //0 means original 1 means lower to higher
    if(sortType ===1 ){
      filterList = filterList.sort((item1,item2)=>{
        return item1.price - item2.price
      })
    }
    this.setState({productList:filterList});
    console.log(this.state.productList)
  }

  
 


  addProductItem(itemId){
     let item = this.list.find((element) => element._id === itemId);
     let list = this.state.cartList.slice()
     this.setState({cartList:[...list,item]})
  }

  removeProductItem(itemId){
     var itemIndex = -1
     for(let i=0;i<this.state.cartList.length;i++){
        let element = this.state.cartList[i]
        if(element._id == itemId){
          itemIndex = i;
        }
     }
     let newList = this.state.cartList.slice()
     newList.splice(itemIndex,1)
     this.setState({cartList:[...newList]})
  }

  render() {
    return (
      <div className="box">
        <div className='leftLayout'>
          <Menu 
            filterFuc = { (size,length,sortType) => {
                this.filterProductList(size,length,sortType)
            }}
          />
          <Cart cart = {this.state.cartList} 
            addCall = {(itemId) => {
               this.addProductItem(itemId)
            }}
            removeCall = {(itemId) => {
              this.removeProductItem(itemId)
           }}
          />
        </div>
        
        <div className = "rightLayout">
          <ProductList 
            list = {this.state.productList} 
            addFunc = {(id) => this.addProductItem(id)}
          />
        </div>
      </div>
    );
  }
}

export default App;
