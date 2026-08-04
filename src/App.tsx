import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="playground" element={<PlaygroundPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;