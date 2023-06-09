import { BrowserRouter } from "react-router-dom";
import GlobalRoute from "./navigation/GlobalRoute";
import './app.scss'

function App() {
  return (
   <BrowserRouter>
      <GlobalRoute />
   </BrowserRouter>
  );
}

export default App;
