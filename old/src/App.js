// import { Header, Layout, Footer } from './components';
import Header from './components/Header';
import bg1 from './assets/images/bg1.jpg';
import bg3 from './assets/images/bg3.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="This is title" descr="This is Description" />
      {/* <Layout title="This is title" descr="This is Description" urlBg={bg1} />
      <Layout title="This is title" descr="This is Description" colorBg="#e2e2e2" />
      <Layout title="This is title" descr="This is Description" urlBg={bg3} />
      <Footer /> */}
    </div>
  );
}

export default App;
