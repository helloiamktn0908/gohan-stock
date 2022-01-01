import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthProvider";
import { Main } from "./Main";
import { SignIn } from "./SignIn";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          {/* 以下認証のみ */}
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
