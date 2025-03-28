"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useDebounce } from "@/hooks";
import { search } from "../../../public/svgs";
import type { ISearchBarProps } from "./searchbar.interface";
import styles from "./searchbar.styles.module.scss";

const SearchBar: React.FC<ISearchBarProps> = ({
  onSearch,
  placeholder,
  onClick,
  className,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 700);

  React.useEffect(() => {
    if (debouncedQuery.length) {
      onSearch(debouncedQuery);
    } else {
      onSearch("");
    }
  }, [debouncedQuery, onSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={`${styles.searchBar}${className ? ` ${className}` : ""}`}>
      <input
        type="text"
        placeholder={placeholder || ""}
        value={searchQuery}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button} onClick={onClick}>
        <Image src={search} height={15} width={15} alt="Lupa" />
      </button>
    </div>
  );
};

export default SearchBar;
