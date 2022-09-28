import {BrowserRouter, Routes, Route} from "react-router-dom";
import {publicRoutes} from "~/routes/Routes";
import Layout from "~/layout";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page/>
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
