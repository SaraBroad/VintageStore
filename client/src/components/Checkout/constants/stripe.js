const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_wm10MtNVx4eZqsrHUpMXjw8i'
  : 'pk_test_wm10MtNVx4eZqsrHUpMXjw8i';

export default STRIPE_PUBLISHABLE;