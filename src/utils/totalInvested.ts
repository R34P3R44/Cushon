
import type { InvestmentPosition } from "../features/auth/hooks/useAddInvestments";

export const calculateTotalInvested = (positions?: InvestmentPosition[]): number => {
    if (!positions || positions.length === 0) return 0;
    return positions.reduce((sum, pos) => sum + pos.totalAmount, 0);
};