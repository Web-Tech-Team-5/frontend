import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // Simulate backend request for creating payment intent (you would normally call your backend here)
  const createPaymentIntent = async () => {
    // Simulate a backend request to create a payment intent.
    // Here, you would use your backend to create the payment intent.
    return { clientSecret: 'your-client-secret-from-backend' };  // Replace with real data
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    // 1. Create Payment Method
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (paymentMethodError) {
      setPaymentError(paymentMethodError.message || 'An error occurred while processing the payment.');
      setIsProcessing(false);
      return;
    }

    // 2. Create Payment Intent (Usually done in backend)
    const { clientSecret } = await createPaymentIntent();  // Simulate backend call

    // 3. Confirm Payment
    const { error: paymentConfirmationError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    // Handle payment success
    if (paymentConfirmationError) {
      setPaymentError(paymentConfirmationError.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    } else if (paymentIntent?.status === 'succeeded') {
      setSuccess(true);
      setIsProcessing(false);
    } else {
      setPaymentError('Payment was not completed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 md:px-12">
      <div className="bg-white shadow-xl rounded-lg p-8">
        {!success ? (
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Complete Your Payment</h1>
            <p className="text-xl text-gray-500 mb-8">Enter your card details to complete the payment.</p>

            {/* Error Message */}
            {paymentError && <p className="text-red-500 text-sm mb-4">{paymentError}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Card Input */}
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Card Details</label>
                <CardElement
                  options={{
                    style: {
                      base: {
                        color: '#32325d',
                        fontFamily: 'Arial, sans-serif',
                        fontSmoothing: 'antialiased',
                        fontSize: '16px',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a',
                      },
                    },
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing || !stripe}
                className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors ${
                  isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-500 mb-4">Your payment was successfully processed.</p>

            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
