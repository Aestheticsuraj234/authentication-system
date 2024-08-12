import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase'; // Adjust the import path as needed

const PrivateLayout = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthenticated(!!session);
    };
    checkAuth();
  }, []);

  if (authenticated === null) {
    return <div>Loading...</div>; // Loading state while checking auth
  }

  return authenticated ? (
    <div>
      <nav>
        <h1>Private Navigation</h1>
        {/* Add your private navigation links here */}
      </nav>
      <main>
        <Outlet /> {/* Renders the child route elements */}
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateLayout;
