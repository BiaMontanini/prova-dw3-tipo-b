
import { UserProvider } from './contexts/UserContext';
import UserPage from './pages/UserPage';

function App() {
  return (
   <UserProvider>
      <UserPage />
      </UserProvider>      
  );
}

export default App;
