import React from 'react';
import { PasswordInput } from './PasswordInput';

export default { title: 'PasswordInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PasswordInput placeholder="Your password" description="Hello" label="There" />
    </div>
  );
}
