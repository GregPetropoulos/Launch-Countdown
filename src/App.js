import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import PageNotFound from './components/page/PageNotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
