import './App.css';
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import { Home } from './components/Home';
import { RecipeList } from './components/RecipeList';
import { RecipeCreate } from './components/RecipeCreate';
import { RecipeEdit } from './components/RecipeEdit';
import { RecipeSingle } from './components/RecipeSingle';

function App() {
    return (
        <Router forceRefresh>
            <nav className='navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3'>
                <div className='' id='navbarNav'>
                    <ul className='navbar-nav lead font-weight-bold'>
                        <li className='nav-item'>
                            <NavLink to={'/'}>
                                <span className='nav-link'>
                                    <img width='60px' src={`${process.env.REACT_APP_BACKEND_URL}/static/assets/logo.png`} alt=""/>
                                </span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/receptek'} activeClassName='active' exact>
                                <span className='nav-link pt-4'>
                                    Receptek
                                </span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/új-recept'} activeClassName='active' exact>
                                <span className='nav-link pt-4'>
                                    Új recept
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container' style={{marginTop: '140px'}}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/receptek' component={RecipeList} />
                    <Route exact path='/uj-recept' component={RecipeCreate} />
                    <Route exact path='/recept-szerkesztes/:recipeSlug' component={RecipeEdit} />
                    <Route exact path='/recept:/recipeSlug' component={RecipeSingle} />
                    <Redirect to={'/'} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
