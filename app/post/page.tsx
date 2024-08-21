"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Posts = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get("search");
    if (search) {
      setSearchValue(search);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/post?search=${searchValue}`);
  };

  return (
    <div>
      <h1>Search Value: {searchValue}</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Rikkei Education"
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
};

export default Posts;
