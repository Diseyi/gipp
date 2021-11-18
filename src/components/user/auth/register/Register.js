import React from "react";
import Header from "../../../reusable/Header";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import illustration from "../../../assets/illustrator.svg";
import "./Register.css";
import Button from "../../../reusable/Button";

const Register = () => {
  return (
    <div className="Register">
      <Header />
      <main className="Main-Landing">
        <div className="Flex-Landing">
          <div className="Content-Landing">
            <h1 className="H1-Landing">
              Find Graduate Internship Placement,
              <span className="Span-Landing"> Faster.</span>
            </h1>
            <p className="P-Landing">
              Take skills assessment test to prove your qualification, create a
              free profile and get matched with an employer.
            </p>
            <img
              src={illustration}
              alt="illustration"
              className="Illustration"
            />
          </div>
          <form className="Form-Landing">
            <div className="Form-Div-Flex">
              <button className="Button-Flex Graduates">GRADUATES</button>
              <button className="Button-Flex Employers">EMPLOYERS</button>
            </div>
            <div className="Form-Div">
              <Form.Label className="Label-Form-Landing">Full Name</Form.Label>
              <div className="Name-Div-Landing">
                <Form.Control
                  type="text"
                  placeholder="First name"
                  className="Fifty Placeholder"
                />
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  className="Fifty Placeholder"
                />
              </div>

              <Form.Label className="Label-Form-Landing">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                className="Placeholder"
              />

              <Form.Label className="Label-Form-Landing">
                Phone Number
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+234</InputGroup.Text>
                <FormControl
                  placeholder="Enter 11-digits"
                  aria-label="tel"
                  aria-describedby="basic-addon1"
                  className="Placeholder"
                />
              </InputGroup>

              <Form.Label className="Label-Form-Landing">
                LASRRA Number
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">LA</InputGroup.Text>
                <FormControl
                  placeholder="Enter Number"
                  aria-label="tel"
                  aria-describedby="basic-addon1"
                  className="Placeholder"
                />
              </InputGroup>

              <Form.Label className="Label-Form-Landing">
                Show Your Password
              </Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="borderNone"
                  className="Placeholder"
                />
                <InputGroup.Text id="basic-addon2" className="Underline">
                  SHOW
                </InputGroup.Text>
              </InputGroup>

              <div className="Terms-Agrement-Flex">
                <input type="checkbox" name="checkbox" />
                <div className="Terms-Agrement-Div">
                  <p className="Terms-Agrement-P">
                    By signing up you agree to our{" "}
                    <span className="Underline">Terms of Service</span> and{" "}
                    <span className="Underline"> Privacy Policy, </span> which
                    outline your rights and obligations with respect to your use
                    of the Service and processing of your data.
                  </p>
                  <p className="Terms-Agrement-P Italic">
                    We’re committed to protecting your data privacy. Permissions
                    are part of our continuing compliance efforts.
                  </p>
                </div>
              </div>

              <Button id="Register-Button" value="CREATE YOUR ACCOUNT" />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
