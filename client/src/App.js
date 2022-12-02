import {NavBar} from './components/Nav/NavBar'
import {AnimatedRoutes} from "./components/Nav/AnimatedRoutes";
import {MainContainer} from "./components/MainContainer/MainContainer";

function App() {
    return (
        <MainContainer>
            <NavBar/>
            <AnimatedRoutes/>
        </MainContainer>
    );
}

export default App;
