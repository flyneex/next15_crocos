import React, {PropsWithChildren} from 'react';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Layout: React.FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;