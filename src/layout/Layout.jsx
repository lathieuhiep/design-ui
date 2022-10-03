import Header from "~/layout/components/Header";
import Footer from "~/layout/components/Footer";

function Layout({ children, classPage }) {
    return (
        <div className={`template-default ${classPage}`}>
            <Header />

            <div className="sticky-footer">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout