import { Route, Routes } from "react-router-dom";
import { Contact, Home, Layout, Posts } from "./components/_root/pages";

const App = () => (
  <Routes>
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Contact />} />
        <Route path="posts" element={<Posts />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
