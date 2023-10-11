import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
   onAuthStateChangedListener,
   createUserDocumentForAuth,
} from "./utils/firebase/firebase";

import { setUser } from "./store/user/user.action";

import { Routes, Route } from "react-router-dom";

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocumentForAuth(user);
         }
         dispatch(setUser(user));
      });
      return unsubscribe;
   }, [dispatch]);

   return (
      <Routes>
         <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
         </Route>
      </Routes>
   );
};

export default App;
