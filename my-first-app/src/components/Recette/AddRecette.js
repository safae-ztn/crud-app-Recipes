import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class AddRecette extends Component {

    state = {
        titre:null,
        ingredients:null,
        isEditing:false
    }
    //call addRecette (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRecette(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

  render(){
    return (
      <Card>
        <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Ajouter une recette</Card.Header>
        <Form onSubmit={this.handleSubmit}>
        <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Titre</Form.Label>
              <Form.Control required autoComplete="off"
                name="titre" placeholder="Entrez le titre"
                onChange={ this.updateState} />
            </Form.Group>

            <Form.Group>
              <div class="form-group">
              <label for="exampleFormControlTextarea1">Les ingredients</label>
                <textarea required autoComplete="off"
                  name="ingredients" placeholder="Entrez les ingredients" 
                  onChange={this.updateState} class="form-control" id="exampleFormControlTextarea1" rows="3">
                  </textarea>
              </div>
            </Form.Group>
        </Card.Body>
        <Card.Footer style={{"textAlign":"right"}}>
          <Button variant="success" type="submit">
            <FontAwesomeIcon icon={faSave} /> Submit
          </Button>{'  '}
          <Button variant="info" type="reset">
            <FontAwesomeIcon icon={faUndo} /> Reset
          </Button>
        </Card.Footer>
        </Form>
      </Card>
    );
  }
}