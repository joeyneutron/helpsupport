import React, { useState } from 'react';
import '../css/App.css';

function LeftNav() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="leftnav">
      <ul className="faq-categories">
        <li>
          <a
            className={`faq-category ${selectedItem === 1 ? 'selected' : ''}`}
            href="#1"
            onClick={() => handleItemClick(1)}
          >
            Account Opening
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedItem === 2 ? 'selected' : ''}`}
            href="#2"
            onClick={() => handleItemClick(2)}
          >
            Funding
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedItem === 3 ? 'selected' : ''}`}
            href="#3"
            onClick={() => handleItemClick(3)}
          >
            Gift Voucher
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedItem === 4 ? 'selected' : ''}`}
            href="#4"
            onClick={() => handleItemClick(4)}
          >
            KYC Update
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedItem === 5 ? 'selected' : ''}`}
            href="#5"
            onClick={() => handleItemClick(5)}
          >
            Investment Letters &amp; Reports
          </a>
        </li>
        <li>
          <a
            className={`faq-category ${selectedItem === 6 ? 'selected' : ''}`}
            href="#6"
            onClick={() => handleItemClick(6)}
          >
            Mutual Funds
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftNav;
