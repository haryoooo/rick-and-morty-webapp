import React from "react";
import DropDownComponent from "./DropDownComponent";
import SearchBarComponent from "./SearchBarComponent";

const styles = {
  container: "flex justify-center flex-row mx-4",
};

export default function FilterComponent() {
  return (
    <div className={styles.container}>
      <SearchBarComponent />
      <DropDownComponent />
      <DropDownComponent />
      <DropDownComponent />
    </div>
  );
}
