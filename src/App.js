import Routers from "./routes";
import {useAuth} from "./hooks/useAuth";

function App() {
    const auth = useAuth();
    if(auth.isLoading) return <div>Loading...</div>;
    return (
        <div className="App">
          <Routers />
        </div>
    );
}

export default App;
