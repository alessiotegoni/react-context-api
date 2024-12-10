import { Route, Routes } from "react-router-dom";
import { About, Home, Layout, Blogs, Blog } from "./components/_root/pages";

const App = () => (
  <Routes>
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog">
          <Route index element={<Blogs />} />
          <Route path=":id" element={<Blog />} />
        </Route>
      </Route>
    </Route>
  </Routes>
);

export default App;
