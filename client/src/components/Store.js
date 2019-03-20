import React from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { Header, Button, Card, } from "semantic-ui-react"

class Store extends React.Component {
  state = { store: {}, items: [], };

  componentDidUpdate() {
    console.log(this.state)
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/stores/${id}`)
      .then( res => this.setState ({ store: res.data, }))
    axios.get(`/api/stores/${id}/items`)
      .then( res => this.setState({ items: res.data }))
  }

  handleDelete = () => {
    const { id } = this.props.match.params;
    axios.delete(`/api/stores/${id}`)
      .then( res => {
        this.props.history.push("/stores");
      })
  }

  removeItem = (id) => {
    const remove = window.confirm("Delete item?");
    const dId = this.props.match.params.id
    if (remove)
      axios.delete(`/api/stores/${dId}/items/${id}`)
        .then( res => {
          const items = this.state.items.filter( i => {
            if (i.id !== id)
            return i;
          })
          this.setState({ items });
        })
      }
  
      // renderItems = () => {
      //   return this.state.items.map(p => (
      //     <ItemCard key={p.id} {...p} 
      //     remove={this.remove} />
      //   ))
      // }

  render() {
    const { id, name } = this.state.store

    return (
      <div>
          <Header as='h1'> {name} </Header>
          <Link to={`/stores/${id}/items/new`}>
            <Button>
              Add Item
            </Button>
            <br />          
          </Link>
          <Card.Group itemsPerRow={3}>
            {this.renderItems()}
          </Card.Group>
          <br />
          <Link to= {`/stores/${id}/edit`}>
            <Button>
              Edit
            </Button>
          </Link>
          <Button onClick={this.handleDelete}>
            Delete
          </Button>
          <Link to={`/stores/${id}/items`}>
          </Link>
      </div>
    )
  }
}



export default Store;