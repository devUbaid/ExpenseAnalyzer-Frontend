import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import './History.css'; // Import the CSS file

function History({ isDashboard, noPadding, limitTransactions }) {
    const { transactionHistory } = useGlobalContext();
    const [...history] = transactionHistory();

    // Limit transactions for Dashboard
    const displayedHistory = limitTransactions ? history.slice(0, 3) : history;

    return (
        <div
            className="history-container"
            style={{ '--padding': noPadding ? '0' : '2rem' }}
        >
            <h2>RECENT HISTORY</h2>
            {displayedHistory.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p
                            style={{
                                color: type === 'expense' ? 'red' : 'green',
                            }}
                        >
                            {title}
                        </p>
                        <p
                            style={{
                                color: type === 'expense' ? 'red' : 'green',
                            }}
                        >
                            {type === 'expense'
                                ? `-${amount <= 0 ? 0 : amount}`
                                : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default History;
