import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/signIn/signIn";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
   return <h1>Hi, Welcome to My Shop!</h1>;
};

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="signIn" element={<SignIn />} />
         </Route>
      </Routes>
   );
};

export default App;
