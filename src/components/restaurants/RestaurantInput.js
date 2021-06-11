import React, { Component } from 'react';



class RestaurantInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''  //restaurant name
    }
  }


  handleChange(e){
   this.setState({ 
     text: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({  //reset
      text: ''
    })
  }

  render() {
    return (
      <div>
          <form onSubmit={(e)=> this.handleOnSubmit(e) }>
              <input  type="text" 
                      value={this.state.text}  
                      onChange={(e => this.handleChange(e))}/>
              <input type="Submit" />
          </form>
      </div>
    );
  }
};

export default RestaurantInput;
