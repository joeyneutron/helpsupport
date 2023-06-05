import { useState } from "react";
import "../css/App.css";

function LeftNav() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="leftnav">
      <ul className="faq-categories">
        <li>
          <a
            className={`faq-category ${selectedCategory === 1 ? "selected" : ""}`}
            href="#1"
            onClick={() => handleCategoryClick(1)}
          >
            Account Opening
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedCategory === 2 ? "selected" : ""}`}
            href="#2"
            onClick={() => handleCategoryClick(2)}
          >
            Funding
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedCategory === 3 ? "selected" : ""}`}
            href="#3"
            onClick={() => handleCategoryClick(3)}
          >
            Gift Voucher
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedCategory === 4 ? "selected" : ""}`}
            href="#4"
            onClick={() => handleCategoryClick(4)}
          >
            KYC Update
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedCategory === 5 ? "selected" : ""}`}
            href="#5"
            onClick={() => handleCategoryClick(5)}
          >
            Investment Letters &amp; Reports
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftNav;
