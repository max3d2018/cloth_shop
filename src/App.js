import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/Shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import signInAndSignUp from "./Pages/signInAndsignUp/signInAndSignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createProfileDoc } from "./firebase/firebase";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  constructor() {
    super();

    this.unsubscribe = null;
  }

  componentDidMount() {
    const { setUser, user } = this.props;

    this.unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = await createProfileDoc(currentUser);

          onSnapshot(userRef, (snapshot) => {
            setUser(snapshot.data());
          });
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setUser(currentUser);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="appContainer">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={signInAndSignUp} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
