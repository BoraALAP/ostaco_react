import React, { useContext } from "react";
import PageContainer from "../components/Tv/PageContainer";
import PagePreloader from "../components/Tv/PagePreloader";
import styled from "styled-components";

import appContext from "../context/context";

const Tv = props => {
  const { store, dispatch } = useContext(appContext);

  setTimeout(() => {
    dispatch({ type: "LOADING" });
  }, 5000);

  return (
    <Container>
      {/* {!store.siteLoading ? <PageContainer /> : <PagePreloader />} */}
      <PageContainer />
    </Container>
  );
};

export default Tv;

const Container = styled.div``;
