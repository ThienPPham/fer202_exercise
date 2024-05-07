import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Quiz from "./Components/Quizzes";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Header5 from "./Components/Header5";
import store from "./Components/store";
import { Provider } from 'react-redux';
import ReviewPage from "./Components/ReviewQuizzes";
function App() {
  return (
    <div>

      <Router>
        <Header5 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quizzes" exact element={
            <Provider store={store}>
              <div className="App">
                <Quiz />
              </div>
            </Provider>}
          />
          <Route path="/newspage" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={
            <Provider store={store}>
              <div className="App">
                <ReviewPage />
              </div>
            </Provider>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
