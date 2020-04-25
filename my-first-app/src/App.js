import React from 'react';
import './App.css';
import Recettes from './components/Recette/Recettes';
import AddRecette from './components/Recette/AddRecette';
import Footer from './components/matserbase/Footer';
import Jumbotron from './components/Home/Jumbotron';
import NavBar from './components/matserbase/NavBar';
import {Col, Container} from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component{
  
  state = {
    recettes:[]
  }

  // (newRecette) is received from AddRecette.js
  addRecette = (newRecette) => {
        let recettes = [...this.state.recettes, newRecette];
        localStorage.setItem('recettes', JSON.stringify(recettes));
        this.setState({
            recettes
        });    
  }

  // when press edit button
  // (i) is received from Recettes.js
  pressEditBtn = (i) => {
    let recettes = this.state.recettes;
    recettes[i].isEditing = true;
    localStorage.setItem('recettes', JSON.stringify(recettes));
    this.setState({
        recettes
    });
  }

  // (i, titre, ingredients) is received from Recettes.js
  updateRecette = (i, titre, ingredients) => {
    let recettes = this.state.recettes;
    recettes[i].titre = titre;
    recettes[i].ingredients = ingredients;
    recettes[i].isEditing = false;
    localStorage.setItem('recettes', JSON.stringify(recettes));
    this.setState({
        recettes
    });
  }

  // (i) is received from Recettes.js
  pressDelete = (i) => {
    let recettes = this.state.recettes.filter((u,index)=>{
        return index !== i;
    });
    localStorage.setItem('recettes', JSON.stringify(recettes));
    this.setState({
        recettes
    });
  }
  componentDidMount(){
    let recettes = JSON.parse(localStorage.getItem("recettes"))|| [];
    this.setState({recettes});
  }

render(){
  return (
    <Router>
      <NavBar/>
      <Container>
        <Switch>
        <Route exact path='/'>
            <Col lg={12} className={"margin"}>
              <Jumbotron/>
            </Col>
          </Route>
          <Route exact path='/add'>
            <Col lg={12} className={"margin"}>
              <AddRecette addRecette={this.addRecette}/>
            </Col>
          </Route>
          <Route exact path='/list'>
            <Col lg={12} className={"margin"}>
              <Recettes allRecettes={this.state.recettes} pressEditBtn={this.pressEditBtn} updateRecette={this.updateRecette} pressDelete={this.pressDelete}/>
            </Col>
          </Route>
        </Switch>
      </Container>
      <Footer/>
    </Router>
    );
}
}
export default App;