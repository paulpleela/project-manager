import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ auth }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const project_id = 1;
        navigate(`/project/${project_id}`);
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error.message);
      });
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}
