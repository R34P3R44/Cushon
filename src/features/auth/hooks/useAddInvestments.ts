import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, runTransaction } from 'firebase/firestore';
import type { Investment } from '../../investments/dataTypes';

const db = getFirestore();

export type InvestmentPosition = {
    fundName: string;
    totalAmount: number;
}

export const useInvestmentPositions = () => {
    return useQuery<InvestmentPosition[], Error>({

        queryKey: ['investment-positions'],
        queryFn: async () => {
            const snapshot = await getDocs(collection(db, 'investment-positions'));
            return snapshot.docs.map(doc => ({ fundName: doc.id, totalAmount: doc.data().totalAmount}));
        },
    
        staleTime: 5 * 60 * 1000,          
    
    });
}

export const useInvestments = () => {
    return useQuery<Investment[], Error>({

        queryKey: ['investments'],
        queryFn: async () => {
            const q = query(collection(db, 'investment-transactions'), orderBy('timestamp', 'desc'));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Omit<Investment, 'id'>), }));
        },
    
        staleTime: 5 * 60 * 1000,          
    
    });
}

export const useAddInvestments = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newInvestment: { fundName: string; amount: number }) => {

            await addDoc(collection(db, 'investment-transactions'), {
                fundName: newInvestment.fundName,
                amount: newInvestment.amount,
                timestamp: serverTimestamp(),
            });

            const positionRef = doc(db, 'investment-positions', newInvestment.fundName);

            await runTransaction(db, async (transaction) => {
                const positionDoc = await transaction.get(positionRef);

                if (!positionDoc.exists()) {
                    transaction.set(positionRef, {
                        totalAmount: newInvestment.amount,
                    });
                } else {
                    const currentTotal = positionDoc.data().totalAmount || 0;
                    transaction.update(positionRef, {
                        totalAmount: currentTotal + newInvestment.amount,
                    });
                }
            });
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['investments'] });
            queryClient.invalidateQueries({ queryKey: ['investment-positions']});
        },
    });
};



