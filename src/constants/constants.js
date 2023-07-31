export const COUNTRIES = ['Poland', 'USA', 'Germany', 'France', 'Spain'];
export const LANGUAGES = ['Polish', 'English', 'German', 'French', 'Spanish'];
export const CURRENCIES = ['PLN', 'USD', 'EUR', 'GBP'];

export const BUSINESS_PRODUCTS = [
  {
    id: 'checkout',
    title: 'Quick Checkout',
    description:
      'Our hosted solution enables you to add cards, wallets, instant bank transfers and cash payment methods via a single integration.The fastest and easiest way to capture payments.',
  },
  {
    id: 'wallet',
    title: 'Digital Wallet',
    description:
      'Fast and easy to enable, customers pay quickly with an email address and password. Accept cards, bank transfers and local payment methods. Add Skrill 1-Tap for repeat payments with a single touch.',
  },
  {
    id: 'transfer',
    title: 'Rapid Transfer',
    description:
      'An instant bank transfer solution that supports 3000+ banks worldwide and lets your customers pay directly from their bank account without leaving your website. You receive the funds instantly and always charge-back free.',
  },
  {
    id: 'shopping',
    title: 'Shopping carts',
    description: `We've partnered with all major shopping carts. Activate Skrill on your eCommerce platform and gain access to credit cards and 100+ local payment options, with just one account, one contract and one integration.`,
  },
];

export const CONSUMER_PRODUCTS = [
  {
    id: 'shopping',
    title: 'Pay online',
    description: 'Make payments without sharing your bank details.',
  },
  {
    id: 'send',
    title: 'Send money',
    description: 'Send to a bank account or another Skrill customer.',
  },
  {
    id: 'crypto',
    title: 'Buy crypto',
    description: 'We offer over 40 different cryptocurrencies.',
  },
  {
    id: 'card',
    title: 'Skrill card',
    description:
      'Order your Skrill Prepaid Mastercard® to start spending on-the-go.',
  },
];

export const TOPICS = [
  { id: 't1', topic: 'Account' },
  { id: 't2', topic: 'Payments' },
  { id: 't3', topic: 'Crypto' },
  { id: 't4', topic: 'International Money Transfer' },
  { id: 't5', topic: 'Security' },
  { id: 't6', topic: 'Prepaid' },
];

export const QUESTIONS = [
  {
    id: 'withdraw',
    title: 'How do I withdraw money to my bank account?',
    answer:
      'The bank wire withdrawal option lets you transfer money from your Skrill digital wallet to a personal bank account.',
  },
  {
    id: 'password',
    title: 'How do I reset my Skrill password?',
    answer:
      'If you have access to your Skrill account, you can easily reset your password by following these steps.',
  },
  {
    id: 'verification',
    title: 'What address verification documents do you accept?',
    answer:
      'We accept the following documents for address verification:  A utility bill issued within the past 90 days (for heating, electricity, water, cable, landline telephone, sewer, gas). We don’t accept mobile.',
  },
  {
    id: 'limits',
    title: 'How to verify my account and increase my limits?',
    answer:
      'It"s simple! Once you have started using your Skrill account, you"ll have the option to verify your identity by uploading a valid and readable photo of your ID. We"ll also ask you to verify your address and take.',
  },
  {
    id: 'authentication',
    title: 'What is Strong Customer Authentication?',
    answer:
      'Strong Customer Authentication is a European regulatory requirement which aims at making online payments more secure.',
  },
];

export const EXCHANGE = {
  sender: {
    label: 'You send from',
    name: 'Poland',
    id: 'sender',
    abbr: 'PLN',
  },
  receiver: {
    label: 'They receive in',
    name: 'USA',
    id: 'receiver',
    abbr: 'USD',
  },
  currencyRate: 3.99,
  discount: 25,
  senderInitialValue: 1000,
};
