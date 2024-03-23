import { bills } from "../bills";

const BillWithMM = () => {
  //   const pageWidth = 210;
  //   const pageHeight = 297;
  //   const marginTop = 20;
  //   const marginBottom = 20;
  //   const headerHeight = 30;
  //   const footerHeight = 20;
  //   const dataHeight =
  //     pageHeight - marginTop - marginBottom - headerHeight - footerHeight;
  //   const itemPerPage = 4;

  //   const itemHeight = dataHeight / itemPerPage;
  const pageSize = {
    width: "210mm",
    height: "297mm",
    padding: "5mm",
    display: "flex",
    flexWrap: "wrap",
  };

  const divStyle = {
    width: "90mm",
    height: "135mm",
    margin: "13.5mm 5mm",
    border: "1px solid black",
    boxSizing: "border-box",
  };

  const itemsPerPage = 4; // Number of items to display per page

  const totalPages = Math.ceil(bills.length / itemsPerPage);

  const getPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;
    return bills.slice(startIndex, endIndex);
  };
  return (
    // <div
    //   style={{
    //     width: `${pageWidth}mm`,
    //     height: `${pageHeight}mm`,
    //     padding: "5mm",
    //     display: "flex",
    //     flexWrap: "wrap",
    //   }}
    // >
    //   {bills?.map((item, index) => (
    //     <div
    //       key={index}
    //       style={{
    //         width: "50%",
    //         height: `${itemHeight}`,
    //         marginBottom: "5mm",
    //         border: "1px solid black",
    //       }}
    //     >

    //     </div>
    //   ))}
    // </div>
    <div>
      {[...Array(totalPages)].map((_, pageIndex) => (
        <div key={pageIndex} style={pageSize}>
          {getPageData(pageIndex + 1).map((item, index) => (
            <div key={index} style={divStyle}>
              {/* Your existing item content */}
            </div>
          ))}
          {/* Placeholder for consistent header and footer */}
          <div style={{ height: "20mm" }}></div>
        </div>
      ))}
    </div>
  );
};

export default BillWithMM;
