import React, { useState } from "react";
import "../css/faq.css";

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
        answer: "To get started, please fill the sign-up form on app.cardinalstone.com or via the mobile phone application. Please upload all required documents listed below correctly to enable a KYC compliant status. There is a 1mb size limit on all document uploads.",
        list: [" A valid government issued ID (International Passport, Driver’s License, National Identity Card, or National Voter’s Card)",
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
        answer: "Click “Fund Account” on the Investment Value card on the dashboard.You can fund your investment cash account via USSD payment, card payment, bank transfer or CardinalStone Wallet.Funding account from CS wallet carries no transaction charges. However, the wallet balance must be sufficient.",
      },
      {
        question: "What is a Cardinalstone Wallet?",
        answer: "A CardinalStone Wallet is a charge free method of paying for CardinalStone services. You can fund your investment cash account via USSD payment, card payment, bank transfer or gift voucher redemption. To apply for a wallet, search for the “Wallet” Card on your dashboard and click the “+” to apply. This product is only available to KYC compliant clients. Funds transferred to your virtual account will reflect in your wallet if you have one.",
      },
      {
        question: "What is a Virtual Account?",
        answer: "Creating a virtual account reserves an account number and account name in the format “CardinalStone/CustomerName”.Any money transferred to that account will reflect in the CardinalStone Wallet.Apply for a virtual account in the “More” Section of Alpha CS. This product is only available to KYC compliant clients.",
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
        answer: "KYC information can be updated in the “More” section.There is a “KYC update” page which can be filled and saved to update changes.For documents, tick the name of the document to be updated e.g. “Signature Specimen” and a field for the upload will be displayed underneath. Ensure all uploads are within size limit of 50kB.      Please ensure the “Update KYC” button is clicked once all relevant fields have been completed.",
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
        list:["Login","Select a business type e.g., Asset Management","On the navigation panel, select “Report” and choose the report type."],
      },
      {
        question: "How can I get an Investment Confirmation Letter?",
        answer:"Embassy letters and stamped reports can be generated for free. To access this -?",
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

];

const AccordionItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
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
          <p>{item.answer}</p>
          {item.list && (
            <ul>
              {item.list.map((li, index) => (
                <li key={index}>{li}</li>
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
      <div className="group-name" id={group.id}>{group.groupName}</div>
      {group.items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="main">
      {faqData.map((group, index) => (
        <AccordionGroup key={index} group={group} />
      ))}
    </div>
  );
}

