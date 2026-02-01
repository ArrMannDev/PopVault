import React from "react";

export default function BlindboxPackage() {
  return (
    <form
      action="http://localhost:5300/blind-box-packages"
      method="POST"
      encType="multipart/form-data"
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <input type="text" name="name" placeholder="Package Name" required />

      <textarea name="description" placeholder="Description" />

      <input type="number" name="stock" placeholder="Stock" required />

      <input type="text" name="itemType" placeholder="Item Type" required />

      <input
        type="string"
        name="productType"
        placeholder="Product Type"
        required
      />

      <input type="number" name="price" placeholder="Price" required />

      <label>
        <input type="checkbox" name="isActive" defaultChecked />
        Active
      </label>

      <input type="file" name="image" accept="image/*" />

      <button type="submit">Create Package</button>
    </form>
  );
}
