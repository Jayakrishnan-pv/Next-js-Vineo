import React from 'react';

type TextBoxProps = {
  mainClass: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  buttonText?: string;
  showButton?: boolean;
  h2Class?: string;
  h3Class?: string;
  pClass?: string;
  buttonClass?: string;
};
const TextComponent = ({
  mainClass,
  title,
  subtitle,
  paragraphs,
  buttonText = '',
  showButton = true,
  h2Class = '',
  h3Class = '',
  pClass = '',
  buttonClass = '',
}: TextBoxProps) => {
  return (
    <div className={`${mainClass}`}>
      <h2 className={`${h2Class}`}>{title}</h2>
      <h3 className={`${h3Class}`}>{subtitle}</h3>
      <div className="">
        {paragraphs.map((text, index) => (
          <p key={index} className={`${pClass}`}>{text}</p>
        ))}
      </div>
      {showButton && (
        <button type="submit" className={`rounded-xl text-white ${buttonClass}`}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TextComponent;
