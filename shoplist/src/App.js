import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={ items: [] };
  }

  addItem = (item) => {
    this.setState({items: [item, ...this.state.items]});
  }

  render(){

    const listItems = this.state.items.map((item, index) =>
    <ListItem key={index}><ListItemText primary={item.product} secondary={item.amount}/></ListItem>)

    return (
      <div className="App">
        <h2>Shopping list</h2>
        <AddItem additem={this.addItem}/><List>{listItems}</List>
      </div>
    );


    // const listItems = this.state.items.map((item, index) => <li key={index}>{item.product} {item.amount}</li>)
    // return (
    //   <div className="App">
    //   <h2>Shopping list</h2>
    //   <AddItem additem={this.addItem}/>
    //   <ul>{listItems}</ul>
    //   </div>
    // );
  }
}
 
export default App;