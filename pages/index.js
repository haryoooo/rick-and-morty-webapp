import Button from "@mui/material/Button";
import Router, { useRouter } from "next/router";
import { client } from "../graphql/client";
import { getCharacters } from "../graphql/queries";
import CardComponent from "./components/CardComponent";
import FilterComponent from "./components/FilterComponent";
import FooterComponent from "./components/FooterComponent";
import SearchBarComponent from "./components/SearchBarComponent";
import DropDownComponent from "./components/DropDownComponent";
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";
import { useEffect, useRef, useState } from "react";

export default function Home({ data, next }) {
  const styles = {
    container: "flex justify-center flex-row mx-4",
  };

  const Router = useRouter();
  const page = Number(Router?.query?.page);
  const statusOptions = ["Dead", "Alive"];
  const genderOptions = ["Male", "Female"];
  const speciesOptions = [
    "Human",
    "Animal",
    "Alien",
    "Humanoid",
    "Mythological Creature",
    "Disease",
    "Robot",
  ];

  const [item, setItem] = useState({
    isLoading: false,
    datas: data,
    hasMore: false,
    prev: null,
  });

  function handlePage() {
    setItem((prev) => ({
      ...prev,
      isLoading: true,
      hasMore: true,
    }));
    nextPages();
  }

  function nextPages() {
    if (page >= 1) {
      Router.push(`/?page=${page + 1}`);
      setItem((prev) => ({
        ...prev,
        isLoading: false,
        hasMore: false,
      }));
    }
  }

  useEffect(() => {
    if (page > 1) {
      setItem((prev) => ({
        ...prev,
        datas: prev.datas.concat(data),
      }));
    }
  }, [page]);

  useEffect(() => {
    if (Router.asPath === "/") {
      Router.push(`/?page=${1}`);
    }
  }, []);

  return (
    <div className="container-lg mx-auto">
      <NavbarComponent />
      <HeaderComponent />

      <div className={styles.container}>
        <SearchBarComponent />
        <DropDownComponent title={"Species"} options={speciesOptions} />
        <DropDownComponent title={"Gender"} options={genderOptions} />
        <DropDownComponent title={"Status"} options={statusOptions} />
      </div>

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
  const page = !context.query.page ? 1 : Number(context.query.page);
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
