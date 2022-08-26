import './App.css';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Search />
        <Blogs />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
