import "jspdf-autotable";
import BillWithInch from "./Component/BillWithInch";
import { bills } from "./bills";

const App = () => {
  const bill = bills;
  console.log(bill);

  return (
    <div>
      <h1 className="text-green-300">hello</h1>
      {/* <BillDetails /> */}
      {/* <BillWithInch /> */}
      {/* <ImageToText /> */}
      {/* <BillWithMM /> */}
    </div>
  );
};

export default App;
