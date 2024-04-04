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
            Leverage your future sales to secure the capital you need today with
            our Merchant Cash Advance, the ideal solution for businesses in
            search of quick and flexible funding. Enjoy the benefits of fast
            funding with access to capital within 24 hours of approval, flexible
            repayment terms tied to daily sales, and the convenience of no
            collateral requirements. This unsecured funding option is perfect
            for managing cash flow, especially for businesses experiencing
            seasonal sales or fluctuating revenue.
          </p>
        </div>

        <div className='funding-options-item'>
          <FaRegHandshake className='funding-options-item-icon' />
          <h4 className='funding-options-item-title'>SBA Loan</h4>
          <p className='funding-options-item-desc'>
            Secure your business&apos;s future with a low-interest SBA Loan, an
            excellent choice for significant investment or expansion efforts.
            Benefit from competitive interest rates, among the lowest in the
            market, and enjoy the flexibility of extended repayment terms—up to
            10 years for working capital and 25 years for real estate loans.
            With a wide range of loan amounts available, from $30K to $5M,
            tailor your borrowing to fit your specific business needs. This loan
            is ideally suited for businesses aiming for growth and expansion,
            providing a solid foundation to build upon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundingOptions;
