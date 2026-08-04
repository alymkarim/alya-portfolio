import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<HomePage scrollTarget="articles" />} />
        <Route path="playground" element={<HomePage scrollTarget="playground" />} />
        <Route path="contact" element={<HomePage scrollTarget="contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;