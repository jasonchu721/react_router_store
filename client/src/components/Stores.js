import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";
import { Card, Header, Button } from 'semantic-ui-react';

class Stores extends React.Component {
  state = { stores: [], };

  componentDidMount() {
     axios.get("/api/stores")
      .then( res => {
        this.setState({ stores: res.data, })
      })
  }

  renderStores = () => {
    const { stores, } = this.state;

    if (stores.length <= 0)
      return <h2> No stores Open </h2>
    return stores.map( store => (
      <Card>
        <Card.Content>
          <Card.Header>{ store.name } </Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as='h1'> Stores </Header>
        <Button as={Link} color="blue" to="/stores/new">
          Add Store
        </Button>
        <hr />
        <br />
        <br />
        <Card.Group>
          { this.renderStores() }
        </Card.Group>
      </div>
    )
  }
}

export default Stores;