import {TabData, TabTitles, TabElement} from "./transactionHistory.styled.js"

export const TransactionHistory = ({items}) => {
    return (
        <TabData>
            <TabTitles>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TabTitles>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>   
                        <TabElement>{item.type}</TabElement>
                        <TabElement>{item.amount}</TabElement>
                        <TabElement>{item.currency}</TabElement>
                    </tr>
                ))}
            </tbody>
        </TabData>
    );
}