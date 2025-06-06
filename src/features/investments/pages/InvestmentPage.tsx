import React from "react";
import InvestmentForm from "../components/InvestmentForm";
import InvestmentIndicator from "../components/InvestmentIndicator";

const InvestmentPage: React.FC = () => {
    return (
        <div className="bg-mainBackground flex h-screen w-screen justify-between p-5">
            <InvestmentIndicator/>
            <InvestmentForm/>
        </div>
)
};

export default InvestmentPage;