import React from "react";

export default function index() {
  return <div>index</div>;
}

export const getServerSideProps = (context) => {
  return {
    props: {
      data: null,
    },
  };
};
