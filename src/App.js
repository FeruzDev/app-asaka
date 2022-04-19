import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import CreditCalc from "./component/CreditCalc";
import Advantages from "./component/Advantages";
import ChooseCredit from "./component/ChooseCredit";
import ExchangeRate from "./component/ExchangeRate";
import Footer from "./component/Footer";
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <CreditCalc/>
        <Input/>
        <Advantages/>
        <ChooseCredit/>
        <ExchangeRate/>
        <Footer/>
       </div>
  );
}

export default App;
