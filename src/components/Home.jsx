import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session);
      };
      checkAuth();
    }, []);
  return (
    <div>{
        user ? (
          <div>
            <h1>Welcome {user.user.email}!</h1>
            <button onClick={async () => {
              await supabase.auth.signOut();
              setUser(null);
            }}>Sign Out</button>
          </div>
        ) : (
          <div>
            <h1>Welcome to the Home Page!</h1>
            <p>Please sign in to continue</p>
          </div>
        )
        }</div>
  )
}

export default Home