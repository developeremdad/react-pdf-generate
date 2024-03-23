import "jspdf-autotable";
import BillWithInch from "./Component/BillWithInch";
import { bills } from "./bills";

const App = () => {
  const bill = bills;
  console.log(bill);

  return (
    <div>
      {/* <BillDetails /> */}
      <BillWithInch />
      {/* <ImageToText /> */}
      {/* <BillWithMM /> */}
    </div>
  );
};

export default App;
