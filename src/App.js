// App.js
// 220119

import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
