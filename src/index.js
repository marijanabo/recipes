import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './index.css';
import './fonts/DMSerifDisplay-Regular.ttf';
import { searchRecipes, getByCategories } from './service';
import Recipes from './components/Recipes';
import Login from './components/Login';
import Footer from './components/Footer';
import Ingredients from './components/Ingredients';

const App = ({users}) => {
  const [allRecipes, setAllRecipes] = useState([])
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState('')
  const [user, setUser] = useState(null)
  const [categories, setCategories] = useState(undefined)
  
  useEffect(()=>{
    searchRecipes().then(res=>{
      setAllRecipes(res.data.meals)
      setRecipes(res.data.meals)
    })
  },[])

  useEffect(() => {
    categories ? getByCategories(categories).then(res => setRecipes(res.data.meals)) 
      : setRecipes(allRecipes)
  },[categories,allRecipes])

  return (
    <>
      <Router basename="/recipes">
        <Switch>

          <Route exact path="/">
            {user ? <Recipes recipes={recipes} filter={filter} setFilter={setFilter} setCategories={setCategories}/> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} users={users}/>
          </Route>
          <Route exact path="/:title">
            <Ingredients recipes={recipes} setRecipes={setRecipes}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

const users = [
  {
    username: 'Admin',
    password: '12345678'
  },
  {
    username: 'Zika',
    password: '58963254'
  },
  {
    username: 'Marko',
    password: '85641257'
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App users={users}/>
  </React.StrictMode>,
  document.getElementById('root')
);