import Navbar from "@/pages/components/Navbar"


const RootLayout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <Navbar />
        </>
    );
};

export default RootLayout;