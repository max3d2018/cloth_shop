import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
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
import { selectCurrentUser } from "./redux/user/users.selectors";
import Checkout from "./Pages/Checkout/Checkout";

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
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
