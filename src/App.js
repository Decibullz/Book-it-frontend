import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { getUser, logout } from './services/userService';
import { useEffect, useState } from 'react';
import { getNytBooks } from './services/bookService';


function App(props) {
  // app state 
  const [ userState, setUserState ] = useState({ user: getUser() });


  const [ nytBookData, setNytBookData ] = useState({
    results:{}
  })

  // helper functions
  function handleSignupOrLogin(){
    setUserState({ user:getUser()})
    props.history.push('./search')
  }

  function handleLogout(){
    logout()
    setUserState({user:null})
    props.history.push('/')
  }
  async function getTopNytBooks(){
    const data = await getNytBooks()
    setNytBookData(data)
  }
  
  
  useEffect(() => {
    getTopNytBooks();
  },[]);

 

  return (
    <div className="App">
    <Header user={userState.user}
     handleLogout={handleLogout}/>
      <Switch>
        <Route exact path ='/' render={ props=>
          <HomePage nytBookData={nytBookData} user={userState.user}/>        
        }/> 
        <Route exact path ='/search' render={props=>
          getUser() ?
          <SearchPage/>
          :
          <Redirect to = '/login'/>
        }/>
        <Route exact path ='/login' render={props=>
          <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
        <Route exact path ='/signup' render={props=>
          <SignupPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
      </Switch>
    <Footer/>
    </div>
 
  );
}

export default withRouter(App);
