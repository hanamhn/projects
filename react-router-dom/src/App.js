import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      {/*<Link to="/topics">Topics</Link> */}
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPICS LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>To Topics 13</Link>
      <Link to={`${props.match.url}/17`}>To Topics 17</Link>
      <Link to={`${props.match.url}/21`}>To Topics 21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog/asdsad/topics" component={TopicsList} />
      <Route path="/blog/asdsad/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
