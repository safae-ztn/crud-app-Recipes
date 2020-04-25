import React from 'react';

export default function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Bonjour Mr.</h1>
            <p class="lead">Cette une simple CRUD application en reactJs </p>
            <ul>
                <li>Si vous voulez ajouter une recette vous cliquez sur "Ajouter une recette"</li>
                <li>Si vous voulez voir la liste de vos recettes, éditer ou supprimer une recette ou plus vous cliquez sur "Liste des recettes" </li>
            </ul>
        </div>
        </div>
    );
}