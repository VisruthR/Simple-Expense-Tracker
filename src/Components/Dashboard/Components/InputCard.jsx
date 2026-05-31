import { useState } from "react";
import "../index.css";

function Expense({
  groupStyle,
  labelStyle,
  baseInputStyle,
  inputStyle,
  onSubmitData,
}) {
  const [formdata, setformdata] = useState({
    amount: "",
    purpose: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Submitting Expense:`, formdata);

    onSubmitData({
      ...formdata,
      id: crypto.randomUUID(),
      type: "expense",
    });

    // Reset form after submission
    setformdata({
      amount: "",
      purpose: "",
      category: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1.5fr",
        gap: "0.8rem",
        padding: "0.5rem 1rem",
      }}
    >
      {/* ROW 1 */}
      <div style={groupStyle}>
        <label htmlFor="amount" style={labelStyle}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          step="0.01"
          placeholder="0.00"
          required
          style={inputStyle}
          value={formdata.amount}
          onChange={handleChange}
        />
      </div>

      <div style={groupStyle}>
        <label htmlFor="purpose" style={labelStyle}>
          What is this for?
        </label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          placeholder="e.g., Client Lunch"
          required
          style={inputStyle}
          value={formdata.purpose}
          onChange={handleChange}
        />
      </div>

      <div style={groupStyle}>
        <label htmlFor="category" style={labelStyle}>
          Category:
        </label>
        <select
          id="category"
          name="category"
          required
          style={inputStyle}
          value={formdata.category}
          onChange={handleChange}
        >
          <option value="" style={{ color: "black" }}>
            -- Select Category --
          </option>
          <option value="food" style={{ color: "black" }}>
            Food & Beverage
          </option>
          <option value="travel" style={{ color: "black" }}>
            Travel
          </option>
          <option value="software" style={{ color: "black" }}>
            Software
          </option>
          <option value="supplies" style={{ color: "black" }}>
            Supplies
          </option>
          <option value="other" style={{ color: "black" }}>
            Other
          </option>
        </select>
      </div>

      {/* ROW 2 */}
      <div style={{ ...groupStyle, gridColumn: "1 / span 2" }}>
        <label htmlFor="description" style={labelStyle}>
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add details..."
          style={{
            ...baseInputStyle,
            minHeight: "42px",
            resize: "vertical",
          }}
          value={formdata.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="Button inputCard"
        style={{
          gridColumn: "3",
          alignSelf: "center",
          height: "50px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "0.95rem",
        }}
      >
        Add Expense
      </button>
    </form>
  );
}
function Income({
  groupStyle,
  labelStyle,
  baseInputStyle,
  inputStyle,
  onSubmitData,
}) {
  const [formdata, setformdata] = useState({
    amount: "",
    source: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Submitting Income:`, formdata);

    onSubmitData({
      ...formdata,
      id: crypto.randomUUID(),
      type: "income",
    });

    setformdata({
      amount: "",
      source: "",
      date: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1.5fr",
        gap: "0.8rem",
        padding: "0.5rem 1rem",
      }}
    >
      {/* ROW 1 */}
      <div style={groupStyle}>
        <label htmlFor="amount" style={labelStyle}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          step="0.01"
          placeholder="0.00"
          required
          style={inputStyle}
          value={formdata.amount}
          onChange={handleChange}
        />
      </div>

      <div style={groupStyle}>
        <label htmlFor="source" style={labelStyle}>
          Source of income:
        </label>
        <select
          id="source"
          name="source"
          required
          style={inputStyle}
          value={formdata.source}
          onChange={handleChange}
        >
          <option value="" style={{ color: "black" }}>
            -- Select Source --
          </option>
          <option value="work" style={{ color: "black" }}>
            Work
          </option>
          <option value="investment" style={{ color: "black" }}>
            Investment
          </option>
          <option value="Freelance" style={{ color: "black" }}>
            Freelance
          </option>
          <option value="Gifts" style={{ color: "black" }}>
            Gift
          </option>
          <option value="other" style={{ color: "black" }}>
            Other
          </option>
        </select>
      </div>

      <div style={groupStyle}>
        <label htmlFor="date" style={labelStyle}>
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          style={inputStyle}
          value={formdata.date}
          onChange={handleChange}
        />
      </div>

      {/* ROW 2 */}
      <div style={{ ...groupStyle, gridColumn: "1 / span 2" }}>
        <label htmlFor="description" style={labelStyle}>
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add details..."
          style={{
            ...baseInputStyle,
            minHeight: "42px",
            resize: "vertical",
          }}
          value={formdata.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="Button inputCard"
        style={{
          gridColumn: "3",
          alignSelf: "center",
          height: "50px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "0.95rem",
        }}
      >
        Add Income
      </button>
    </form>
  );
}

export default function InputCard({ onAddTransaction }) {
  const [expense, setExpense] = useState(true);

  const switchCard = () => {
    setExpense(!expense);
  };

  const groupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  };

  const labelStyle = {
    color: "#e2e8f0",
    fontSize: "0.85rem",
    fontWeight: "500",
  };

  const baseInputStyle = {
    padding: "0.4rem 0.75rem",
    borderRadius: "6px",
    border: "1px solid #475569",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#ffffff",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
  };

  const inputStyle = {
    ...baseInputStyle,
    height: "36px",
  };

  return (
    <div
      className="card dark"
      style={{
        width: "97vh",
        height: "24vh",
        marginTop: "2rem",
        borderRadius: "8px",
        overflow: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255, 255, 255, 0.2) transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        <h2 style={{ margin: 0, color: "#ffffff" }}>
          {expense ? "Expense" : "Income"}
        </h2>

        <button
          onClick={switchCard}
          title="Switch between Income and Expense"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "38px",
            height: "38px",
            padding: "0",
            backgroundColor: "#38bdf8",
            color: "#000000",
            border: "1px solid #475569",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: expense ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 4 19 8 15 12"></polyline>
            <line x1="5" y1="8" x2="19" y2="8"></line>
            <polyline points="9 12 5 16 9 20"></polyline>
            <line x1="19" y1="16" x2="5" y2="16"></line>
          </svg>
        </button>
      </div>

      <div>
        {expense ? (
          <Expense
            groupStyle={groupStyle}
            labelStyle={labelStyle}
            baseInputStyle={baseInputStyle}
            inputStyle={inputStyle}
            onSubmitData={onAddTransaction}
          />
        ) : (
          <Income
            groupStyle={groupStyle}
            labelStyle={labelStyle}
            baseInputStyle={baseInputStyle}
            inputStyle={inputStyle}
            onSubmitData={onAddTransaction}
          />
        )}
      </div>
    </div>
  );
}
