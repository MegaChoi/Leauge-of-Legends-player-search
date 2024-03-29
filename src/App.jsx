import { useState, Component} from 'react';
import { SearchBox, Content, Navbar, Header} from './components';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const [playerData, setPlayerData] = useState({name:'NOTFOUND'});
  const setData = (data) => {
    setPlayerData(data);
  }

  return (
    <BrowserRouter>
      <ErrorBoundary>
          <Navbar/>
          <Header playerName={playerData.name}/>
          <SearchBox setData = {setData}/>
          <Content playerData={playerData}/>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;