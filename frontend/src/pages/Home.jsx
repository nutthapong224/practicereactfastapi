import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items") // เรียกผ่าน Nginx proxy
      .then((res) => {
        if (Array.isArray(res.data)) setItems(res.data);
        else setItems([]);
      })
      .catch(() => setItems([]));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/items/${id}`)
      .then(() => setItems(items.filter((i) => i._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#333",
        textAlign: "center"
      }}>
        Items
      </h1>
      <Link
        to="/create"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "600"
        }}
      >
        Create
      </Link>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {(items || []).map((i) => (
          <li
            key={i._id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span style={{ flex: 1 }}>{i.name}</span>
            <Link
              to={`/edit/${i._id}`}
              style={{
                marginRight: "10px",
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(i._id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "600"
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c82333")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
