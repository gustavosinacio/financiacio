import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { useEffect, useState } from "react";

import { Home } from "./components/pages/Home";
import { loginInfo } from "./config/login";

export function App() {
  const [user, setUser] = useState<User>();
  const auth = getAuth();

  useEffect(() => {
    async function signIn() {
      const credentials = await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );

      setUser(credentials.user);
    }

    signIn();
  }, [auth]);

  return <>{user?.uid ? <Home /> : <>loading</>}</>;
}
