import React, { useState } from "react";
import '../css/index.css'

const faqData = [
  {
    groupName: "ACCOUNT OPENING",
    id:1,
    items: [
      {
        question: "What is CS Alpha",
        answer: "The CS Alpha app is an online holistic investment and trading application that allows CardinalStone clients to view, manage and take control of their investments across all its subsidiaries in real time.",
      },
      {
        question: "What do I need to get started?",
        list: ["To get started, please fill the sign-up form on the web or mobile application. The mobile app is available on iOS or Android stores",
        "Please upload all required documents listed below correctly to enable a KYC compliant status. There is a 1mb size limit on all document uploads.",
        "The required documents are:",
        "A valid government issued ID (International Passport, Driver’s License, National Identity Card, or National Voter’s Card)",
        "Means of Identification for foreign clients must be notarized",
        "Proof of Address/Utility Bill (not longer than 3 months",
                "Passport Photograph",
                "Signature Specimen",
                "Signed Investor Profile Questionnaire and Portfolio Management Agreement (for portfolio management clients only)"]
        },
      {
        question: "What is the minimum investment?",
        answer: "This is dependent on the product of interest. Kindly confirm from each product section.",
      },
    ],
  },
  {
    groupName: "FUNDING",
    id:2,
    items: [
      {
        question: "How can I fund my account?",
        list:["Click “Fund Account” on the Investment Value card on the dashboard.",
        "You can fund your investment cash account via USSD payment, card payment, bank transfer or CardinalStone Wallet.",
        "Funding account from CS wallet carries no transaction charges. However, the wallet balance must be sufficient."],
      },
      {
        question: "What is a Cardinalstone Wallet?",
        list:["A CardinalStone Wallet is a charge free method of paying for CardinalStone services.",
        "You can fund your investment cash account via USSD payment, card payment, bank transfer or gift voucher redemption.",
        "To apply for a wallet, search for the “Wallet” Card on your dashboard and click the “+” to apply.",
        "This product is only available to KYC compliant clients.",
        "Funds transferred to your virtual account will reflect in your wallet if you have one."]
      },
      {
        question: "What is a Virtual Account?",
        list:["Creating a virtual account reserves an account number and account name in the format “CardinalStone/CustomerName”.","Any money transferred to that account will reflect in the CardinalStone Wallet.",
        "Apply for a virtual account in the “More” Section of CS Alpha.",
        "This product is only available to KYC compliant clients."]
      },
    ],
  },
  {
    groupName: "GIFT VOUCHER",
    id:3,
    items: [
      {
        question: "How does the Gift Voucher work?",
        answer: " Gift vouchers are created by someone with a CS Alpha account. The voucher can only be funded via a CS wallet. When a person is gifted a voucher, they receive an email with the following details –",
        list:["Sender Name:","Sender Phone:","Sender Email:","Voucher Code:","Voucher Amount:","Gift Date:"],
      },
      
    ],
  },
  
  {
    groupName: "KYC UPDATE",
    id:4,
    items: [
      {
        question: "How can I update my KYC details?",
        answer: "KYC information can be updated in the “More” section.",
        list:["There is a “KYC update” page which can be filled and saved to update changes.",
        "For documents, tick the name of the document to be updated e.g. “Signature Specimen” and a field for the upload will be displayed underneath.",
        "Ensure all uploads are within size limit of 50kB.",
        "Please ensure the “Update KYC” button is clicked once all relevant fields have been completed.",]
        },
      
    ],
  },
  {
    groupName: "INVESTMENT LETTER & REPORTS",
    id:5,
    items: [
      {
        question: "What reports are available to me?",
        answer: "There is a free version of valuation and cash reports available to clients. To access this -",
        list:["Login",
        "Select a business type e.g., Asset Management",
        "On the navigation panel, select “Report” and choose the report type."],
      },
      {
        question: "How can I get an Investment Confirmation Letter?",
        answer:"Embassy letters and stamped reports can be generated for free. To access this-",
        list:["Login",
        "Select a business type e.g., Asset Management",
        " On the navigation panel, select“More” and click on “Investment Confirmation Letter",
        "Select the statement type, currency, and tick “Investment Confirmation Letter” if required",
        "Select the period and fill in the details of the addressee",
        "Click proceed",
        "A copy of the stamped report will be sent to your registered email address"],
     

        },
      ],
  },
  
  {
    groupName: "MUTUAL FUNDS",
    id:6,
    items: [
      {
        question: "How can I subscribe?",
        list:["Login",
        "Click on Mutual funds",
        "Click on subscribe",
        "Choose Fund to subscribe", 
        "Select Payment method",
        "Enter your investment amount and follow the designated steps"],
      },
      {
        question: "How can I redeem my units?",
        list:["Login",
        "Click on Mutual funds", 
        "Select “Redeem”",
        "Select funds to redeem", 
        "Confirm Redemption Amount and account number",
        "Click “proceed”" 
],
     

        },
      ],
  },

];

const AccordionItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to replace specific words with anchor tags in the answer text and lists
  const replaceWordsWithAnchors = (text) => {
    if (!text) {
      return "";
    }
  
    const wordsToReplace = ["Login", "iOS", "Web", "Android"];
    const wordRegex = new RegExp(`\\b(${wordsToReplace.join("|")})\\b`, "gi");
    return text.replace(wordRegex, (word) => {
      const url = getURLForWord(word); // Function to get the URL for the specific word
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${word}</a>`;
    });
  };
  // Function to get the URL for a specific word
  const getURLForWord = (word) => {
    if (word === "Login" || word==="web") {
      return "https://app.cardinalstone.com";
    } else if (word === "Android") {
      return "https://play.google.com/store/apps/details?id=com.cardinalstone.csalpha";
    }
    else if (word === "iOS") {
      return "https://apps.apple.com/ng/app/cs-alpha/id1629621317";
    }
    // Add more conditions for other words and their corresponding URLs
    return "#";
  };

  return (
    <>
      <div className="eachitem">
        <div className="question" onClick={handleOnClick}>
          {item.question}
          {isExpanded ? (
            <span className="icon-minus">&#8722;</span>
          ) : (
            <span className="icon-plus">&#43;</span>
          )}
        </div>
        {isExpanded && (
          <div className="answer">
            <p dangerouslySetInnerHTML={{ __html: replaceWordsWithAnchors(item.answer) }}></p>
            {item.list && (
              <ul>
                {item.list.map((li, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: replaceWordsWithAnchors(li) }}
                  ></li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const AccordionGroup = ({ group }) => {
  return (
    <div className="group">
      <div className="group-name" id={group.id}>
        {group.groupName}
      </div>
      {group.items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
};


export default function App() {
  return (
    <>
    <LeftNav/>
    <div className="faq-container">
      <div className="faq-content">
        {faqData.map((group, index) => (
          <AccordionGroup key={index} group={group} />
        ))}
      </div>
    </div>
    </>
  );
}

export function LeftNav() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="leftnav">
      <ul className="categories">
        <li className="navitem">
          <a
            className={`faq-category ${selectedItem === 1 ? "selected" : ""}`}
            href="#1"
            onClick={() => handleItemClick(1)}
          >
            Account Opening
          </a>
        </li>
        <li className="navitem">
          <a
            className={`faq-category ${selectedItem === 2 ? "selected" : ""}`}
            href="#2"
            onClick={() => handleItemClick(2)}
          >
            Funding
          </a>
        </li>
        <li className="navitem">
          <a
            className={`faq-category ${selectedItem === 3 ? "selected" : ""}`}
            href="#3"
            onClick={() => handleItemClick(3)}
          >
            Gift Voucher
          </a>
        </li>
        <li className="navitem">
          <a
            className={`faq-category ${selectedItem === 4 ? "selected" : ""}`}
            href="#4"
            onClick={() => handleItemClick(4)}
          >
            KYC Update
          </a>
        </li>
        <li className="navitem">
          <a
            className={`faq-category ${selectedItem === 5 ? "selected" : ""}`}
            href="#5"
            onClick={() => handleItemClick(5)}
          >
            Investment Letters &amp; Reports
          </a>
        </li>
        <li className="navitem">
          <a
            className={`faq-category ${selectedItem === 6 ? "selected" : ""}`}
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
