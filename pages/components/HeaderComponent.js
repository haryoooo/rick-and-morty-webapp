import React from "react";
import Image from "next/image";
import HeaderText from "../../public/assets/rick-and-morty-text.svg";

const styles = {
  container: 'flex justify-center my-0'
}

export default function HeaderComponent() {
  return (
    <div className={styles.container}>
      <Image src={HeaderText} width={600} alt="header-text" />
    </div>
  );
}
