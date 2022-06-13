import React from "react";

export default function index() {
  return <div>index</div>;
}

export const getServerSideProps = async (context) => {
  return {
    props: {
      data: null,
    },
  };
};
