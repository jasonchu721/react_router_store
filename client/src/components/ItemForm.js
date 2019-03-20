import React from 'react';
import axios from 'axios';
import { Form, Header, } from "semantic-ui-react";

class ItemForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", department: "", };
  state = { ...this.defaultValues, };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const item = { ...this.state, };
  //   this.setState({ ...this.defaultValues, });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, itemId } = this.props.match.params;
    const { push } = this.props.history;
     
    if (itemId) {
      axios.put(`/api/stores/${id}/items/${itemId}`, {...this.state})
        .then( res => push (`/stores/${id}`))
    }
    else {
    axios.post(`/api/stores/${id}/items`, {...this.state})
    .then( res => push(`/stores/${id}`)
      )
    }
  };

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  componentDidMount() {
    const {id, itemId} = this.props.match.params;
    if (itemId)
    
      axios.get(`/api/stores/${id}/items/${itemId}`)
        .then( res => { 
          const {name, description, price,} = res.data
          this.setState({name, description, price,  })
        })
  }

  render() {
    const { name, price, description,  } = this.state;

    return (
      <div>
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;
