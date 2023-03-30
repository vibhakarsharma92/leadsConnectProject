import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Drawer = (props) => {
  const [show, setshow] = useState(false);
  const handleClose = () => {
    setshow(false);
    props.onclickCartClose();
  };
  useEffect(() => {
    props.showDrawer && setshow(true);
  }, [props]);
  console.log("dd");

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {props.cartItems.map((val) => {
          return (
            <>
              <Row>
                <Col lg={4}>
                  <img src={val.image} width={"100%"} />
                </Col>
                <Col lg={8}>
                  <div className="parentDiv">
                  <span>{val.title} </span>
                  <div
                    className="input-group input-group-sm mb-3 text-center"
                    style={{ width: "40%" }}
                  >
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon03"
                      onClick={(e) => props.minusItem(val.quantity, val.id)}
                    >
                      -
                    </button>
                    <input
                      className="form-control text-center"
                      min={1}
                      value={val.quantity}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon03"
                      onClick={(e) => props.plusItem(e, val.id)}
                    >
                      +
                    </button>
                  </div>
                  <bdi class="carttotalprice">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-currency-rupee"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                    </svg>{" "}
                    {val?.price * val?.quantity}
                  </bdi>

                  <p>(Inclusive of all taxes)</p>
                  <button type="button" onClick={()=>{props.deleteItem(val.id)}} className="deleteBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                  </div>
                  
                </Col>
              </Row>
              <hr />
            </>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Drawer;
