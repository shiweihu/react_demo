import './Menu.css';
import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            size : "All",
            length :"All",
            sortType : 0
        }
    }

    onSelectFilterBySize(event){
        const value = event.target.value
        this.props.filterFuc(value,this.state.length,this.state.sortType)
        this.setState({size:value})
    }

    onSelectFilterByLength(event){
        const value = event.target.value
        this.props.filterFuc(this.state.size,value,this.state.sortType)
        this.setState({length:value})
    }

    onSelectSort(event){
        const value = parseInt(event.target.value)
        this.props.filterFuc(this.state.size,this.state.length,value)
        this.setState({sortType:value})
    }

    render(){
        return(
            <div class = "menu">
               <div class="filter area">
                  <h1>Filters:</h1>
                  <h1>Size:</h1>
                  <div class="size">
                      <ul>
                        <li>
                            <input type="checkbox" name="sizeFilter" value="All" checked={this.state.size==="All"} onChange={(event) => this.onSelectFilterBySize(event)}/>
                            <label><h5>All</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="sizeFilter" value="Small" checked={this.state.size==="Small"} onChange={(event) => this.onSelectFilterBySize(event)}/>
                            <label><h5>Small</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="sizeFilter" value="Medium" checked={this.state.size==="Medium"} onChange={(event) => this.onSelectFilterBySize(event)}/>
                            <label><h5>Medium</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="sizeFilter" value="Large" checked={this.state.size==="Large"} onChange={(event) => this.onSelectFilterBySize(event)}/>
                            <label><h5>Large</h5></label>
                        </li>
                      </ul>
                  </div>

                  <h1>Length:</h1>
                  <div class="length">
                      <ul>
                        <li>
                            <input type="checkbox" name="lengthFilter" value="All" checked={this.state.length==="All"} onChange={(event) => this.onSelectFilterByLength(event)}/>
                            <label><h5>All</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="lengthFilter" value="6" checked={this.state.length==="6"} onChange={(event) => this.onSelectFilterByLength(event)}/>
                            <label><h5>6</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="lengthFilter" value="23" checked={this.state.length==="23"} onChange={(event) => this.onSelectFilterByLength(event)}/>
                            <label><h5>23</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="lengthFilter" value="25" checked={this.state.length==="25"} onChange={(event) => this.onSelectFilterByLength(event)}/>
                            <label><h5>25</h5></label>
                        </li>
                      </ul>
                  </div>

                  <h1>Sort by Price:</h1>
                  <div class="sort">
                      <ul>
                        <li>
                            <input type="checkbox" name="sort" value={0} checked={this.state.sortType===0} onChange={(event) => this.onSelectSort(event)}/>
                            <label><h5>Reset Sorting</h5></label>
                        </li>
                        <li>
                            <input type="checkbox" name="sort" value={1} checked={this.state.sortType===1} onChange={(event) => this.onSelectSort(event)}/>
                            <label><h5>Lowest to Highest</h5></label>
                        </li>
                    
                      </ul>
                  </div>


               </div>
            </div>
        )
    }
}



export default Menu;