import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Test from "./Layouts/PageLayout/Test";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
  const [authUser] = useAuthState(auth)
  
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth"/> } />
          <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/auth"/>} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
