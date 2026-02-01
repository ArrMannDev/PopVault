export default function CreateBlindBoxItemForm() {
  return (
    <form
      action="http://localhost:5300/blind-box-items"
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
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        required
      />

      <input
        type="number"
        name="packageId"
        placeholder="Package ID"
        required
      />

      <input
        type="file"
        name="image"
        accept="image/*"
      />

      <button type="submit">
        Create Item
      </button>
    </form>
  );
}
