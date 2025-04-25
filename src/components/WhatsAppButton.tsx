import React from 'react';
import {Whatsapp} from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+15551234567'; // Replace with the desired WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-accent hover:bg-accent-foreground text-white rounded-full p-3 shadow-lg z-50 transition-colors"
    >
      <Whatsapp className="h-6 w-6"/>
    </a>
  );
};

export default WhatsAppButton;
