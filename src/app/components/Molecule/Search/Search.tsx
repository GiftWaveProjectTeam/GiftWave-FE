"use client";

import * as styles from "./Search.css";
import { Input, SearchIcon } from "@components";
import classnames from "classnames";
import useSearch from "@/app/hooks/useSearch";
import { search } from "../../Atom/Input/Input.css";

const Search = () => {
  const { value, isopen, ref, changeHandler } = useSearch();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.SeacrhBlock}>
          <Input
            type="text"
            name="search"
            value={value}
            onChangeHandler={changeHandler}
            className={search}
            placeholder="찾고 싶은 펀딩을 검색해보세요."
          />
          <div style={{ marginRight: "30px" }}>
            <SearchIcon />
          </div>
        </div>
        <div
          className={classnames(
            styles.activeIndicator,
            isopen === true && styles.active
          )}
        >
          asdsa
        </div>
      </div>
    </div>
  );
};

export default Search;
