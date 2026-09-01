import { GlobalStyle } from "./GlobalStyle.tsx";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header";
import AppRoutes from "./routes/routes.tsx";
import { HashRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <AppRoutes />
            <Footer />
        </Router>
    );
}

export default App;
