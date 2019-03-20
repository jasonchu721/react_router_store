import React from 'react';
import axios from 'axios';
import { Form, Header, } from 'semantic-ui-react';

class StoreForm extends React.Component {
  state = {name: "", }

  componentDidMount() {
    const {id} = this.props.match.params;
    if (id)
      axios.get(`/api/stores/${id}`)
      .then( res => {
        const {name} = res.data;
        this.setState({name})
      })
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value, });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const store = { ...this.state, };
  //   axios.patch("/api/stores", store)
  //     .then( res => {
  //       this.props.history.push("/stores");
  //     })
  //     this.setState(this.name);

  //   }

  //Need to add a check for store id - if it has an id => edit, if not create new
  handleSubmit = (e) => {
    e.preventDefault();
    const store = { ...this.state };
    const { id } = this.props.match.params;
    if (id) {
      axios.put(`/api/stores/${id}`, store )
        .then( res => {
          this.props.history.push(`/stores/${id}`)
        })
    } else {
      axios.post(`/api/stores`, store)
        .then( res => {
          this.props.history.push(`/stores`)
        })
    }
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <Header as='h1'> Input Store Name </Header>
        <Form onSubmit={ this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input 
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
              />
          </Form.Group>
          <Form.Button color="blue"> Submit </Form.Button>
        </Form>
      </div>

    )
  }
}

export default StoreForm;