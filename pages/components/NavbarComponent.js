import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/rick-and-morty-logo.png";

const styles = {
  container: "flex justify-between border-solid border py-2 px-24 shadow-md",
  navigationContainer:
    "w-96 my-4 text-lg font-bold flex justify-between cursor-pointer",
  navigationText: "active:drop-shadow-lg",
};

export default function NavbarComponent() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={Logo} height={70} width={70} alt="logo-navbar" />
      </div>
      <div className={styles.navigationContainer}>
        <Link href={"/characters"}>
          <span className={styles.navigationText}>Characters</span>
        </Link>
        <Link href={"/locations"}>
          <span className={styles.navigationText}>Locations</span>
        </Link>
        <Link href={"/episodes"}>
          <span className={styles.navigationText}>Episodes</span>
        </Link>
      </div>
    </div>
  );
}
