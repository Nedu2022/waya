import React from "react";

// Remita Icons Base URL
const BASE_URL = "https://remita.net/assets/minimal/images";

export const RemitaIcon = ({
  src,
  alt,
  width = 24,
  height = 24,
  className = "",
  ...rest
}) => (
  <img
    src={`${BASE_URL}${src}`}
    alt={alt}
    width={width}
    height={height}
    className={`object-contain ${className}`}
    {...rest}
  />
);

// Mapped Remita Icons
export const AirtimeIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/buy_airtime.svg"
    alt="Airtime"
    {...props}
  />
);
export const ElectricityIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/buy_electricity.svg"
    alt="Electricity"
    {...props}
  />
);
export const TSAIcon = (props) => (
  <RemitaIcon src="/quick-links-svg/icons/pay_tsa.svg" alt="TSA" {...props} />
);
export const LoanIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/pay_bills.svg"
    alt="Loan"
    {...props}
  />
);
export const SavingsIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/standing_order.svg"
    alt="Savings"
    {...props}
  />
);
export const PersonalBankIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/buy_data.svg"
    alt="Personal Bank"
    {...props}
  />
);

// Replacements for Lucide
export const ShieldCheckIcon = (props) => (
  <RemitaIcon src="/security_icon.svg" alt="Security" {...props} />
);
export const ArrowLeftRightIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/resend_receipt.svg"
    alt="Transfer"
    {...props}
  />
);
export const FingerprintIcon = (props) => (
  <RemitaIcon src="/sign_up_icon.svg" alt="Fingerprint" {...props} />
);
export const SendIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/buy_airtime.svg"
    alt="Send"
    {...props}
  />
);
export const ReceiptIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/pay_bills.svg"
    alt="Receipt"
    {...props}
  />
);
export const WalletIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/pay_taxes.svg"
    alt="Wallet"
    {...props}
  />
);
export const PiggyBankIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/statutory_payments.svg"
    alt="Piggy Bank"
    {...props}
  />
);
export const TrendingUpIcon = (props) => (
  <RemitaIcon src="/modal-svg/buy-jamb-icon.svg" alt="Trending" {...props} />
);
export const ShieldIcon = (props) => (
  <RemitaIcon src="/security_icon.svg" alt="Shield" {...props} />
);
export const UserPlusIcon = (props) => (
  <RemitaIcon src="/sign_up_icon.svg" alt="Sign Up" {...props} />
);
export const RocketIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/buy_data.svg"
    alt="Rocket"
    {...props}
  />
);
export const LandmarkIcon = (props) => (
  <RemitaIcon
    src="/quick-links-svg/icons/pay_tsa.svg"
    alt="Landmark"
    {...props}
  />
);
export const LockIcon = (props) => (
  <RemitaIcon src="/security_icon.svg" alt="Lock" {...props} />
);
export const HeadphonesIcon = (props) => (
  <RemitaIcon src="/mail_icon.svg" alt="Support" {...props} />
);

export const BellIcon = (props) => (
  <RemitaIcon src="/mail_icon.svg" alt="Bell" {...props} />
);
export const BarChart3Icon = (props) => (
  <RemitaIcon src="/modal-svg/buy-jamb-icon.svg" alt="Chart" {...props} />
);

export const MenuIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const XIcon = (props) => (
  <RemitaIcon src="/close_icon.svg" alt="Close" {...props} />
);

export const WayaArrowIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7.00008V9.00008H12L6.5 14.5001L7.92 15.9201L15.84 8.00008L7.92 0.0800781L6.5 1.50008L12 7.00008H0Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowUpRightIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
