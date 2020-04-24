import React from 'react';

export default function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Bonjour Mr.</h1>
            <p class="lead">cette une simple CRUD application en reactJs </p>
            <ul>
                <li>Si vous voulez ajouter une recette vous clickez sur "Ajouter une recette"</li>
                <li>Si vous voulez voir la liste de votre recettes, éditer ou supprimer une recette ou plus vous clickez sur "La liste des recettes" </li>
            </ul>
        </div>
        </div>
    );
}