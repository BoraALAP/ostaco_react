import React, { useState, useContext } from "react";

import { useFormik } from "formik";
import styled from "styled-components";

import axios from "axios";
import InputText from "../Ui/InputText";
import InputCheckbox from "../Ui/InputCheckbox";
import PrimaryButton from "../Ui/PrimaryButton";
import SecondaryButton from "../Ui/SecondaryButton";
import appContext from "../../context/context";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "First Name Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.province) {
    errors.province = "Province is Required";
  } else if (values.province.length > 20) {
    errors.province = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = () => {
  const formUrl = process.env.REACT_APP_GOOGLE_SHEET;
  const { dispatch } = useContext(appContext);
  const [status, setStatus] = useState({
    result: "",
    sending: false,
    sent: false
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      province: "",
      interested: "",
      consideration: ""
    },
    validate,
    resetForm: {
      name: "",
      email: "",
      province: "",
      interested: "",
      consideration: ""
    },
    onSubmit: (values, { resetForm }) => {
      setStatus({
        ...status,
        sending: true
      });
      const post = async () => {
        try {
          const res = await axios({
            method: "get",
            url: `${formUrl}?name=${encodeURIComponent(
              values.name
            )}&email=${encodeURIComponent(
              values.email
            )}&province=${encodeURIComponent(
              values.province
            )}&interested=${encodeURIComponent(
              values.interested
            )}&consideration=${encodeURIComponent(values.consideration)}`
          });

          if (res.status && res.status === 200) {
            setStatus({
              sending: false,
              sent: true,
              result: "We have got your input, Thank you"
            });
          } else {
            setStatus({
              sending: false,
              sent: true,
              result: "Something is wrong, Please try again to send it again"
            });
          }
        } catch (err) {}
      };
      post();
      resetForm();
    }
  });

  const formClose = () => {
    dispatch({ type: "TOGGLE_FORM" });
    setStatus({
      result: "",
      sending: false,
      sent: false
    });
  };
  const sentConfirm = () => {
    if (status.sending) {
      return <p>sending</p>;
    } else if (status.sent) {
      return (
        <div>
          <p>{status.result}</p>
          <PrimaryButton text="Close form" onClick={formClose} />
        </div>
      );
    }
  };

  return (
    <Container>
      {status.sending || status.sent ? (
        sentConfirm()
      ) : (
        <FormS
          onReset={formik.initialValues}
          onSubmit={formik.handleSubmit}

          // onChange={formik.handleFormChange}
        >
          <InputText
            name="name"
            label="First Name"
            type="text"
            placeholder="type your first name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          <InputText
            name="email"
            label="Email Address"
            type="email"
            placeholder="type your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <InputText
            name="province"
            label="Province / State"
            type="text"
            placeholder="type your province or state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.province}
          />

          <h6>What product are you interested in?</h6>
          <InputCheckbox
            name="interested"
            value="prism"
            label="Prism"
            checked={formik.values.interested.includes("prism")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputCheckbox
            label="Enersense"
            name="interested"
            value="enersense"
            checked={formik.values.interested.includes("enersense")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputCheckbox
            label="Patio doors"
            name="interested"
            value="patio doors"
            checked={formik.values.interested.includes("patio doors")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputCheckbox
            label="Entry doors"
            name="interested"
            value="entry doors"
            checked={formik.values.interested.includes("entry doors")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <h6>
            What is a major consideration when purchasing windows and doors?
          </h6>
          <InputCheckbox
            label="Energy cost savings"
            name="consideration"
            value="energy cost savings"
            checked={formik.values.consideration.includes(
              "energy cost savings"
            )}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputCheckbox
            label="The look"
            name="consideration"
            value="the look"
            checked={formik.values.consideration.includes("the look")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputCheckbox
            label="Price"
            name="consideration"
            value="price"
            checked={formik.values.consideration.includes("price")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputCheckbox
            label="Brand Notoriety"
            name="consideration"
            value="brand notoriety"
            checked={formik.values.consideration.includes("brand notoriety")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ButtonContainer>
            <SecondaryButton text="Reset" />
            <PrimaryButton type="submit" text="Submit" />
          </ButtonContainer>
        </FormS>
      )}
    </Container>
  );
};

export default Form;

const Container = styled.div`
  display: grid;
  h6 {
    color: ${({ theme }) => theme.color.main};
  }
`;

const FormS = styled.form`
  display: grid;
  grid-gap: 24px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-auto-flow: column;
  margin-bottom: 5vh;
`;
