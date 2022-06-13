import { data, info } from "autoprefixer";
import Button from "@mui/material/Button";
import Router, { useRouter } from "next/router";
import { client } from "../graphql/client";
import { getCharacters } from "../graphql/queries";
import CardComponent from "./components/CardComponent";
import FilterComponent from "./components/FilterComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";
import { useEffect, useState } from "react";

export default function Home({ data, next }) {
  const [item, setItem] = useState({
    isLoading: false,
    datas: data,
    hasMore: false,
    prev: null,
    next: next,
  });

  function handlePage() {
    setItem((prev) => ({
      ...prev,
      isLoading: true,
      hasMore: true,
      next: next + 1,
    }));
  }

  function nextPages() {
    setItem((prev) => ({
      ...prev,
      isLoading: false,
      hasMore: false,
      datas: prev.datas.concat(data),
    }));
  }

  useEffect(() => {
    if (item.hasMore === true) {
      nextPages();
    }

    if (item.next > 1) {
      Router.push(`/?page=${next - 1}&nextPage=${next}`);
    }
  }, [item]);

  return (
    <div className="container-lg mx-auto">
      {console.log(item)}
      <NavbarComponent />
      <HeaderComponent />
      <FilterComponent />
      {!data || item.isLoading ? (
        <div className="text-center my-24">
          <h4 className="weight-bold">Loading...</h4>
        </div>
      ) : (
        <div className="mx-auto w-auto px-12">
          <CardComponent data={item.datas} />
          {next !== null ? (
            <div className="text-center my-12">
              <Button
                className="shadow-xl"
                style={{ minWidth: 150 }}
                size="medium"
                onClick={handlePage}
              >
                Load More
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      {/* <FooterComponent /> */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const page = !context.query.nextPage ? 1 : Number(context.query.nextPage);

  const { data } = await client.query({
    query: getCharacters(page),
  });

  const { results } = data.characters;
  const { next, prev } = data.characters.info;

  return {
    props: {
      data: results,
      next: next,
      prev: prev,
    },
  };
};
