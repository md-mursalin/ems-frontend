import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import EmployeeView from "./components/employee/EmployeeView";
import NavBar from "./components/common/NavBar";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import AddEmployee from "./components/employee/AddEmployee";
import EditEmployee from "./components/employee/EditEmployee";
import EmployeeProfile from "./components/employee/EmployeeProfile";

function App() {
    return (
        <main className="container mt-5">
            <Router>
                <NavBar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}></Route>
                    <Route
                        exact
                        path="/view-employees"
                        element={<EmployeeView />}></Route>
                    <Route
                        exact
                        path="/add-employees"
                        element={<AddEmployee />}></Route>
                    <Route
                        exact
                        path="/edit-employee/:id"
                        element={<EditEmployee />}></Route>
                    <Route
                        exact
                        path="/employee-profile/:id"
                        element={<EmployeeProfile />}></Route>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
