import React from 'react';
import { FadeText } from "@/components/magicui/fade-text";

const MyComponent = ({icon, text, delay = 0.2 }) => {
  return (
    <FadeText
      direction="up"
      framerProps={{ show: { transition: { delay } } }}
      text={text}
      icon={icon}
    />
  );
}

export default MyComponent;
