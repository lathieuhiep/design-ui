import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout({ children }) {
    return (
        <div className="warp">
            <Header />

            <div className="sticky-footer">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout