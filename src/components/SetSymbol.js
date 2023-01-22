import React from 'react';

export default function SetSymbol({ code }) {
  return <i className={`ss ss-${code.toLowerCase()}`} />;
}
