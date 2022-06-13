import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import InfiniteScroll from "react-infinite-scroller";
import { client } from "../../graphql/client";
import { getCharacters } from "../../graphql/queries";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";

const styles = {
  container: "flex justify-center flex-row flex-wrap",
  cardContainer: {
    maxWidth: 250,
    margin: "50px 20px 20px 30px",
  },
};

export default function CardComponent({ data }) {
  return (
    <div className={styles.container}>
      {data?.map((val, i) => (
        <Card sx={styles.cardContainer} key={i}>
          <CardActionArea>
            <CardMedia>
              <Image src={val.image} width={250} height={200} alt="logo" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.species}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
