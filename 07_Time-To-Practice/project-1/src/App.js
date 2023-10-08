import { useState } from 'react';
import Header from './components/header/Header';
import InvestmentTable from './components/InvestmentResults/InvestmentTable';
import NewInvestment from './components/InvestmentInput/NewInvestment';

function App() {

  const [investmentData, setInvestmentData] = useState('');

  function newInvestmentHandler(investment){
    setInvestmentData(investment);
  }

  return (
    <div>
      <Header/>

      <NewInvestment onInvest={newInvestmentHandler}/>
      {investmentData===''?<p className='msg'>no data available</p>:<InvestmentTable data={investmentData}/>}
      
    </div>
  );
}

export default App;
