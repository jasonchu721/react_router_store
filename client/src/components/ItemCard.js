
import React from "react";
import { Card, Button, Header } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const ItemCard = ({ id, name, description, price, remove, store_id }) => (



  <Card>
    <Card.Content>
      <Card.Header>
        <Header>{name}</Header>
      </Card.Header>
      <br />
      <Card.Description>
        {description}
      </Card.Description>
      <br />
      <Card.Content extra>
        ${price}
      </Card.Content>
    </Card.Content>

    <Card.Content extra>
      <div className="ui buttons">
        <Link to={`/stores/${store_id}/items/${id}/edit`}>
          <Button basic color="blue">
            Edit
          </Button>
        </Link>
        <Button basic color="blue" onClick={() => remove(id)}>
          Delete
        </Button>
      </div>
    </Card.Content>

  </Card>
)

export default ItemCard;