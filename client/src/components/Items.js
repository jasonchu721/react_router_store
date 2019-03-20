import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: [], storeName: "" , };


  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/stores/${id}/items`)
    .then(res => {
      this.setState ({ items: res.data, });
    })
    .catch(err => {
      console.log(err);
    })
    this.getStore();

}
  renderItems = () => {
    return this.state.items.map( p => (
      <ul key={p.id}> 
        <br/>
        <Segment>
          <h2>{p.name}</h2>
          <h3>{p.description}</h3>
          <h3>${p.price}</h3>
        </Segment>
      </ul>
    ));
  }

  getStore = () => {
    let {id} = this.props.match.params;
    axios.get(`/api/stores/${id}`)
    .then(res => {
      this.setState({
        storeName: res.data.name
      })
    })
  }

  render() {
    let {departmentName} = this.state;
    return (
      <div>
        <br />
        <Link to="/items/new">
          <Button>New Items</Button>
        </Link>
        <h1> {departmentName} </h1>
        <ul>
          { this.renderItems() }
        </ul>
       
      </div>
    )
  }
}






export default Items;