"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+2348123456789", // Replace with your actual WhatsApp number
  message = "Hello! I'm interested in your generator services. Can you help me?"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickMessage = (quickMessage: string) => {
    const encodedMessage = encodeURIComponent(quickMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  const quickMessages = [
    "I need a generator quote",
    "What generators do you have available?",
    "I need generator maintenance service",
    "Can you help me choose the right generator size?",
    "I'm interested in generator rental"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Messages Panel */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-lg border p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#1F253F]">Quick Messages</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-2">
            {quickMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleQuickMessage(msg)}
                className="w-full text-left p-3 text-sm bg-[#F7F6F2] hover:bg-[#EAE68B] rounded-lg transition-colors"
              >
                {msg}
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors"
            >
              Send Custom Message
            </button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="WhatsApp Support"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
