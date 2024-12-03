// smallCards.tsx
import Image from 'next/image';
import React from 'react';

type SmallCardProps = {
  heading: string;
  desc: string;
  img: string;
  containerClasses?: string;
  imageContainerClasses?: string;
  imageClasses?: string;
  contentContainerClasses?: string;
  headingClasses?: string;
  descClasses?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({ heading, desc, img, containerClasses, imageContainerClasses, imageClasses, contentContainerClasses, headingClasses, descClasses }) => {
  return (
    <div className={containerClasses}>
      <div className={imageContainerClasses}>
        <Image src={img} alt="image" width={125} height={125} className={imageClasses} />
      </div>
      <div className={contentContainerClasses}>
        <h2 className={headingClasses}>{heading}</h2>
        <h2 className={descClasses}>{desc}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
