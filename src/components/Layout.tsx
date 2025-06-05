import React from "react";
import InvestmentPage from "../features/investments/pages/InvestmentPage";
import Header from "./Header";

const Layout: React.FC = () => {

    
    return (
        <>
            <Header/>
            <InvestmentPage/>
        </>
    )
};

export default Layout;