import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'title 1',
      amount: 234,
      date: new Date(2022, 11, 17),
    },
    {
      id: 2,
      title: 'title 2',
      amount: 234.12,
      date: new Date(2022, 11, 12),
    },
    {
      id: 3,
      title: 'title 3',
      amount: 234.55,
      date: new Date(2022, 10, 14),
    },
    {
      id: 14,
      title: 'title 4',
      amount: 234.87,
      date: new Date(2022, 12, 14),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
