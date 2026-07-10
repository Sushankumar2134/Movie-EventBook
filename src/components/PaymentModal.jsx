import "../styles/details.css";

function PaymentModal({ open, onClose, onSelect }) {
  const paymentMethods = [
    { key: "gpay", label: "Google Pay", url: "https://pay.google.com/" },
    { key: "phonepe", label: "PhonePe", url: "https://www.phonepe.com/" },
    { key: "paypal", label: "PayPal", url: "https://www.paypal.com" },
    { key: "card", label: "Credit Card", url: "https://www.yourbank.com" },
    { key: "debit", label: "Debit Card", url: "https://www.yourbank.com" },
    { key: "cash", label: "Cash on Venue", url: "" }
  ];

  if (!open) {
    return null;
  }

  return (
    <div className="modal" aria-hidden={!open} style={{ display: "flex" }}>
      <div className="modal-content">
        <span className="close-btn" role="button" aria-label="Close" onClick={onClose}>
          ×
        </span>
        <h3>Select Payment Mode</h3>
        <div className="payment-options">
          {paymentMethods.map((method) => (
            <div
              className="payment-option"
              key={method.key}
              onClick={() => onSelect(method)}
            >
              {method.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;