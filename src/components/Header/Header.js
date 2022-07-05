// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// export default function header() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">LeafTech</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.NavLink href="#action1">Home</Nav.NavLink>
//             <Nav.NavLink href="#action2">Project</Nav.NavLink>
//             <Nav.NavLink href="#action2">Services</Nav.NavLink>
//           </Nav>
//           <Form className="d-flex">
//             <Button variant="outline-secondary">Contact</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

import React, { useState, useEffect } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Downarrow from "../../assest/Icons/chevron.png"
import "./Header.css";
import { Outlet, NavLink,Link } from "react-router-dom";
import $ from "jquery";

export default function Header({ history }) {
  const [showMenu, setMenu] = useState(false);
  console.log(history);

  useEffect(() => {
    $(function () {
      // this will get the full URL at the address bar
      var url = window.location.href;

      // passes on every "Navlink" tag
      $("#sub-header Navlink").each(function () {
        // checks if its the same on the address bar
        if (url == this.href) {
          $(this).closest("li").addClass("active");
        }
      });
    });
  }, []);

  const handleMobile = () => {
    setMenu(!showMenu);
  };
  return (
    <div>
      <div className="arun_container">
        <div className="arun_logo">
          <h1 style={{ fontFamily: "Exo2-Regular" }} class="uppercase">
            LeafTech
          </h1>
        </div>
        {showMenu == false ? (
          <div className="arun_menuList" id="sub-header">
            <ul>
              <li>
                <a href="/" activeClassName="active-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/Project" activeClassName="active-link">
                  Project
                </a>{" "}
              </li>
              <li>
                {/* <NavLink to="/service">Services</NavLink> */}
                <div class="dropdown">
                  <button class="dropbtn"> <p class="">Services</p><img id="dropbtnimg" class="mt-1.5 ml-2" src={Downarrow} width="15" height="30" /></button>
                  <div class="dropdown-content">
                    <a href="/services/3d-digital-models-of-buildings" activeClassName="active-link">
                      Modeling
                    </a>
                    <a href="/building-analytics" activeClassName="active-link">
                      Analytics
                    </a>
                    <a href="/smart-building-control" activeClassName="active-link">
                      Control
                    </a>
                  </div>
                </div>
              </li>
              <div className="contactandLanguage">
                <ul style={{ gap: "2rem" }}>
                  <li className="Contact_btn">
                    <NavLink style={{all:"unset"}} to="/contact" activeClassName="active-link">
                      <button type="button">Contact</button>
                    </NavLink>
                  </li>
                  <li classNam>
                    <button>EN</button>
                  </li>
                  <li>
                    <button>DE</button>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        ) : (
          // mobile view header
          <div className="arun_mobilemenuList">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>{" "}
              </li>

              <li>
                <NavLink to="/Project">Project</NavLink>{" "}
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">Services</button>
                  <div class="dropdown-content">
                    <NavLink to="/service">Services 1</NavLink>
                    <NavLink to="/service">Services 2</NavLink>
                    <NavLink to="/service">Services 3</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/contact">
                  <button>Contact</button>
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <div className="mobile_menubutton">
          {showMenu == false ? (
            <MenuSharpIcon onClick={handleMobile} />
          ) : (
            <CloseSharpIcon onClick={handleMobile} />
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
