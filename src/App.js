import './App.css';
import TestRouter from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
      <Provider store={store}>
      <div className='App'>
      <TestRouter />
      </div>
      </Provider>
  );
}

export default App;
