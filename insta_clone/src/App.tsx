import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Test from "./Layouts/PageLayout/Test";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
