import React from "react";

import "./funding-options.css";

import { MdAttachMoney } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";

const FundingOptions = () => {
  return (
    <section className='funding-options-section'>
      <h3 className='funding-options-title'>
        Tailored Funding Options for Your Business Needs
      </h3>

      <div className='funding-options-content'>
        <div className='funding-options-item'>
          <MdAttachMoney className='funding-options-item-icon' />
          <h4 className='funding-options-item-title'>Merchant Cash Advance</h4>
          <p className='funding-options-item-desc'>
            Get the capital you need now by leveraging your future sales. Ideal
            for businesses seeking quick, flexible funding without the rigidity
            of traditional loans.
          </p>
          <ul className='funding-options-item-highlights'>
            <li className='funding-options-item-highlight'>
              Fast Funding: Access funds within 24 hours of approval.
            </li>
            <li className='funding-options-item-highlight'>
              Flexible Repayment: Repayments are based on a percentage of daily
              sales.
            </li>
            <li className='funding-options-item-highlight'>
              No Collateral Required: Unsecured funding based on your
              business&apos;s sales performance.
            </li>
            <li className='funding-options-item-highlight'>
              Great for Cash Flow Management: Perfect for businesses with
              seasonal sales or fluctuating revenue.
            </li>
          </ul>
        </div>

        <div className='funding-options-item'>
          <FaRegHandshake className='funding-options-item-icon' />
          <h4 className='funding-options-item-title'>SBA Loan</h4>
          <p className='funding-options-item-desc'>
            Secure a low-interest loan backed by the Small Business
            Administration. A great option for businesses planning significant
            investment or expansion.
          </p>
          <ul className='funding-options-item-highlights'>
            <li className='funding-options-item-highlight'>
              Competitive Interest Rates: Enjoy some of the lowest rates
              available on the market.
            </li>
            <li className='funding-options-item-highlight'>
              Longer Repayment Terms: Terms can extend up to 10 years for
              working capital loans and up to 25 years for real estate loans.
            </li>
            <li className='funding-options-item-highlight'>
              Range of Loan Amounts: Borrow from $30K to $5M to suit your
              business needs.
            </li>
            <li className='funding-options-item-highlight'>
              Great for Growth and Expansion: Ideal for businesses looking to
              invest in their future.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FundingOptions;
