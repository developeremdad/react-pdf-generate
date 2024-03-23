import moment from "moment";
import { bills } from "../bills";

const BillDetails = () => {
  const allBills = bills;
  return (
    <div>
      <div>
        <div
          //   ref={ref}
          style={{
            padding: "20px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridColumnGap: "70px",
            gridRowGap: "93px",
            marginTop: "10px",
          }}
        >
          {allBills?.map((flat, index) => (
            <div
              key={index}
              style={{ border: "0.5px solid #000", width: "100%" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "3px 8px",
                  }}
                >
                  <img src="#" height={30} alt="logo" />
                  <div>
                    <h6
                      style={{
                        margin: "0 10px",
                        textAlign: "left",
                        fontWeight: "bold",
                      }}
                    >
                      MyGas
                    </h6>
                    <small style={{ margin: "0 10px", fontSize: "13px" }}>
                      {moment(flat?.updatedAt).format("DD-MMMM-YYYY")}
                    </small>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ textTransform: "uppercase", fontSize: "12px" }}>
                    Building name
                  </h6>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textAlign: "center",
                  padding: "4px 0",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
                Flat No: A3-1234
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  textAlign: "left",
                  padding: "1px 4px",
                }}
              >
                <div>
                  <small
                    style={{
                      margin: "0px",
                      textTransform: "capitalize",
                      fontSize: "12px",
                      textAlign: "justify",
                    }}
                  >
                    User name
                    <br /> 01625360571
                  </small>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                  }}
                >
                  <small>Dhonia jatrabari dhaka</small>
                </div>
              </div>
              <hr
                style={{
                  margin: 0,
                  backgroundColor: "#3c3c3c",
                  border: "none",
                  padding: "0.5px 0",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Current Reading</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small style={{ marginRight: "10px" }}>(CM)</small>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>521</div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Previous Reading</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small style={{ marginRight: "10px" }}>(CM)</small>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>500</div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Used Unit</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small style={{ marginRight: "10px", fontSize: "10px" }}>
                    (KG = CM)
                  </small>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span>53</span>
                  <span style={{ margin: "0 5px" }}>=</span>
                  <span>21</span>
                </div>
              </div>

              <hr
                style={{
                  margin: 0,
                  backgroundColor: "#ddd",
                  border: "none",
                  padding: "0.5px 0",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Unit Price</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small style={{ marginRight: "10px" }}>(KG)</small>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>126</div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Unit Price</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <small style={{ marginRight: "10px" }}>(Cubic)</small>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>250</div>
              </div>

              <hr
                style={{
                  margin: 0,
                  backgroundColor: "#ddd",
                  border: "none",
                  padding: "0.5px 0",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Service Charge</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>50</div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Total Amount</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>2300</div>
              </div>

              <hr
                style={{
                  margin: 0,
                  backgroundColor: "#ddd",
                  border: "none",
                  padding: "0.5px 0",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Previous Due</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right" }}>00</div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 40% 20% 40%)",
                  fontSize: "13px",
                  textAlign: "left",
                  padding: "2px 4px",
                  margin: 0,
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>Grand Total</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <b>:</b>
                </div>
                <div style={{ textAlign: "right", fontWeight: "bold" }}>
                  2300
                </div>
              </div>

              <hr
                style={{
                  margin: 0,
                  backgroundColor: "#ddd",
                  border: "none",
                  padding: "0.5px 0",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 70% 30%)",
                  fontSize: "12px",
                  textAlign: "left",
                  padding: "0px 4px",
                  margin: 0,
                }}
              >
                <div style={{ padding: "2px 0" }}>
                  <span>
                    <span style={{ fontSize: "9px" }}>
                      www.facebook.com/mygasbd
                    </span>
                    <br />
                    <span style={{ fontSize: "9px" }}>www.mygasbd.com</span>
                    <br />
                    <span style={{ fontSize: "9px" }}>mygasbd@gmail.com</span>
                  </span>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    padding: "0 4px",
                    margin: "0 10px",
                  }}
                >
                  <img src="#" height={50} alt="logo" />
                  <div>
                    <b style={{ borderTop: "3px solid black" }}>Signature</b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
