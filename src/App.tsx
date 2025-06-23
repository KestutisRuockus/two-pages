import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import UsersPage from "./pages/UsersPage";
import JokesPage from "./pages/JokesPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/users" />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="jokes" element={<JokesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
