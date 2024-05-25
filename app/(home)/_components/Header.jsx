import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="ml-64 p-6 border-b flex items-center">
      <SearchBar />
    </div>
  );
};

export default Header;
