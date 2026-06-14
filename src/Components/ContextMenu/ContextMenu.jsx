import "./ContextMenu.css";

export default function ContextMenu({ x, y, onEdit, onDelete }) {
  // Ensure the menu doesn't overflow screen bounds on mobile
  const safeX = x + 120 > window.innerWidth ? window.innerWidth - 130 : x;
  const safeY = y + 80 > window.innerHeight ? window.innerHeight - 90 : y;

  return (
    <div
      className="context-menu"
      style={{
        position: "fixed",
        top: safeY,
        left: safeX,
        zIndex: 10000,
      }}
    >
      <button className="context-menu-item" onClick={onEdit}>
        Edit
      </button>
      <button className="context-menu-item delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
