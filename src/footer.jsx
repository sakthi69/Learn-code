import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="foot container-fluid">
        <i className="social-icon fab fa-facebook-f"></i>
        <i className="social-icon fab fa-twitter"></i>
        <i className="social-icon fab fa-instagram"></i>
        <i className="social-icon fas fa-envelope"></i>
        <p>© Copyright {new Date().getFullYear()} Sakthi Ganeshwari</p>
      </div>
    </section>
  );
}
