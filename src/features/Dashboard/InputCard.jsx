import { useState } from "react";
import "../index.css";

function TransactionForm({
  isExpense,
  groupStyle,
  labelStyle,
  baseInputStyle,
  inputStyle,
  onSubmitData,
  editingTransaction,
}) {
  const [formdata, setformdata] = useState({
    amount: editingTransaction?.amount || "",
    purpose: editingTransaction?.purpose || "",
    source: editingTransaction?.source || "",
    category: editingTransaction?.category || "",
    date: editingTransaction?.date || "",
    description: editingTransaction?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalDate = formdata.date || new Date().toISOString().split("T")[0];

    onSubmitData({
      ...formdata,
      id: editingTransaction ? editingTransaction.id : crypto.randomUUID(),
      date: finalDate,
      type: isExpense ? "expense" : "income",
    });

    setformdata({
      amount: "",
      purpose: "",
      source: "",
      category: "",
      date: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="transaction-form-grid animate-enter"
    >
      {/* ROW 1, COLUMN 1: Amount (Shared) */}
      <div style={groupStyle}>
        <label htmlFor="amount" style={labelStyle}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0.01"
          step="0.01"
          placeholder="0.00"
          required
          style={inputStyle}
          value={formdata.amount}
          onChange={handleChange}
        />
      </div>

      {/* ROW 1, COLUMN 2: Purpose (Expense) OR Source (Income) */}
      <div style={groupStyle}>
        <label style={labelStyle}>
          {isExpense ? "What is this for?" : "Source of income:"}
        </label>
        {isExpense ? (
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
        ) : (
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
            <option
              value="work"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Work
            </option>
            <option
              value="investment"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Investment
            </option>
            <option
              value="freelance"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Freelance
            </option>
            <option
              value="gifts"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Gift
            </option>
            <option
              value="other"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Other
            </option>
          </select>
        )}
      </div>

      {/* ROW 1, COLUMN 3: Category (Expense) OR Date (Income) */}
      <div style={groupStyle}>
        <label style={labelStyle}>{isExpense ? "Category:" : "Date:"}</label>
        {isExpense ? (
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
            <option
              value="food"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Food & Beverage
            </option>
            <option
              value="travel"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Travel
            </option>
            <option
              value="software"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Software
            </option>
            <option
              value="supplies"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Supplies
            </option>
            <option
              value="other"
              style={{ color: "black", backgroundColor: "lightgray" }}
            >
              Other
            </option>
          </select>
        ) : (
          <input
            type="date"
            id="date"
            name="date"
            style={inputStyle}
            value={formdata.date}
            onChange={handleChange}
          />
        )}
      </div>

      {/* ROW 2, COLUMN 1 & 2: Description (Shared) */}
      <div style={groupStyle} className="desc-group">
        <label htmlFor="description" style={labelStyle}>
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add details..."
          style={{ ...baseInputStyle, minHeight: "42px", resize: "vertical" }}
          value={formdata.description}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* ROW 2, COLUMN 3: Submit Button (Dynamic Text) */}
      <button type="submit" className="Button inputCard submit-btn">
        {editingTransaction
          ? "Update"
          : isExpense
            ? "Add Expense"
            : "Add Income"}
      </button>
    </form>
  );
}

export default function InputCard({ onAddTransaction, editingTransaction }) {
  const [expense, setExpense] = useState(
    editingTransaction ? editingTransaction.type === "expense" : true,
  );

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
    <div className="card dark input-card-wrapper">
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
        <TransactionForm
          key={
            editingTransaction
              ? `edit-${editingTransaction.id}`
              : expense
                ? "expense"
                : "income"
          }
          isExpense={expense}
          groupStyle={groupStyle}
          labelStyle={labelStyle}
          baseInputStyle={baseInputStyle}
          inputStyle={inputStyle}
          onSubmitData={onAddTransaction}
          editingTransaction={editingTransaction}
        />
      </div>
    </div>
  );
}
