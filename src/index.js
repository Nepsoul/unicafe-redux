import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  // console.log("the store is", store);

  console.log("The in app in fe", store.getState().good);
  const Good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };
  const Ok = () => {
    store.dispatch({
      type: "OK",
    });
  };
  const Bad = () => {
    store.dispatch({
      type: "BAD",
    });
  };
  const Zero = () => {
    store.dispatch({
      type: "ZERO",
    });
  };

  return (
    <div>
      <button onClick={() => Good()}>good</button>
      <button onClick={() => Ok()}>ok</button>
      <button onClick={() => Bad()}>bad</button>
      <button onClick={() => Zero()}>reset stats</button>
      <div>good {store.getState().good}</div>
      {/* {console.log("The index in fe", store.getState().good)} */}
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
