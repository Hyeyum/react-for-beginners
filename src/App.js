import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <routes>
        <Route path="/abot-us" element={<abot-us />}>
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </routes>
    </Router>
  );
}

export default App;