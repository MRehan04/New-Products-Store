import { Navigate, Route, Routes } from 'react-router';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import EditProductPage from './pages/EditProductPage.jsx';
import useAuthReq from './hooks/useAuthReq.js';
import useUserSync from './hooks/useUserSync.js';

function App() {
  const { isSignedIn, isClerkLoaded } = useAuthReq();
  useUserSync();

  console.log({ isSignedIn });

  if (!isClerkLoaded) return null;

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile" element={isSignedIn ? <ProfilePage /> : <Navigate to={"/"} />} />
          <Route path="/create" element={isSignedIn ? <CreatePage /> : <Navigate to={"/"} />} />
          <Route path="/edit/:id" element={isSignedIn ? <EditProductPage /> : <Navigate to={"/"} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
