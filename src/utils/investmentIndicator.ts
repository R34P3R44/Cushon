import { format } from "date-fns/format";
import type { Timestamp } from "firebase/firestore";

export const formatDate = (date?: Timestamp) => {
    if (!date) return '';
    const investmentDate = date.toDate();
    return format(investmentDate, 'dd/MM/yyyy, HH:mm');
};