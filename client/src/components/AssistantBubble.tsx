import React from 'react';

export default function AssistantBubble({ message }) {
  return (
    <div className="fixed bottom-8 right-8 bg-gold text-black rounded-full shadow-lg px-6 py-3 flex items-center gap-2">
      <img src={require('@/assets/gpt-icon.svg')} alt="Assistant" className="h-8" />
      <span className="font-medium">{message}</span>
    </div>
  );
}
