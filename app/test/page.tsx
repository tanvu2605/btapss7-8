import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Products = () => {
  const router = useRouter();
  const { name, category } = router.query;
  const [inputName, setInputName] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  useEffect(() => {
    if (name) setInputName(name as string);
    if (category) setInputCategory(category as string);
  }, [name, category]);

  const handleSearch = () => {
    router.push(`/products?name=${inputName}&category=${inputCategory}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tìm kiếm sản phẩm</h1>

      {name && (
        <p>
          <strong>Tên sản phẩm:</strong> {name}
        </p>
      )}
      {category && (
        <p>
          <strong>Danh mục:</strong> {category}
        </p>
      )}

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          style={{ padding: "5px", width: "300px", marginRight: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Tìm kiếm theo danh mục"
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
          style={{ padding: "5px", width: "300px", marginRight: "10px" }}
        />
      </div>
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default Products;
