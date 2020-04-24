import React, { Component } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import {faList, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Recettes extends Component {

    // call updateRecette (App.js)
    handleUpdate = () => {
        this.props.updateRecette(this.indexNum, this.titre.value, this.ingredients.value);
    }

    render() {
        const {allRecettes, pressEditBtn, pressDelete} = this.props;
        if(allRecettes){
        const recettesList = this.props.allRecettes.map((recette, index) => {

            return recette.isEditing === true ? (
                
                        <tr  key={index}>
                            <td><input type="text" style={{"width":"100%"}} ref={(val) => {this.titre= val}} required defaultValue={recette.titre}/></td>
                            <td><textarea type="textarea" rows="5" style={{"width":"100%"}} ref={(val) => {this.ingredients = val}} required defaultValue={recette.ingredients} ></textarea></td>
                            <td>
                                <Button variant="primary" type="submit" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btnEdit">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                            </td>
                        </tr>

            ):(    
                        <tr  key={index}>
                            <td>{recette.titre}</td>
                            <td>{recette.ingredients}</td>
                            <td>
                                <Button variant="primary" type="submit" onClick={() => pressEditBtn(index)} className="btnEdit">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="danger" type="submit" onClick={()=>pressDelete(index)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
            );
        });
    

        return (
            <Card>
                <Card.Header><FontAwesomeIcon icon={faList} /> Liste des recettes</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Le titre</th>
                            <th>Les ingredients</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recettesList}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
}