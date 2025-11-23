import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const submit = () => {
    axios
      .post("/api/items", { name })
      .then(() => nav("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#fdfdfd",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
      <h1 style={{
        fontSize: "1.5rem",
        marginBottom: "16px",
        textAlign: "center",
        color: "#333"
      }}>
        Create Item
      </h1>
      <input
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
          transition: "border-color 0.2s"
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button
        style={{
          display: "block",
          width: "100%",
          padding: "10px 12px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.2s"
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#0056b3"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#007bff"}
        onClick={submit}
      >
        Save
      </button>
    </div>
  );
}
