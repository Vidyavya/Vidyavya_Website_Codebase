import { useEffect } from 'react';

const LogoStrip = () => {
  const logos = [
    '/company-logos/1.png',
    '/company-logos/meta flow ai logo-edited.png',
    '/company-logos/yukoso logo-edited.png',
    '/company-logos/5.png',
    '/company-logos/unifolio.png'
  ];

  const renderLogoSet = (keyPrefix: string) => (
    <div className="flex gap-6 md:gap-12 items-center px-3 md:px-6">
      {logos.map((src, index) => {
        const isUnifolio = src.includes('unifolio');
        const isMetaflow = src.includes('meta flow');

        // Optical max-height so logos feel balanced in vertical scale
        let maxHClass = "max-h-16 md:max-h-20";
        if (isUnifolio) maxHClass = "max-h-9 md:max-h-11";
        if (isMetaflow) maxHClass = "max-h-14 md:max-h-18";

        return (
          <div
            key={`${keyPrefix}-${index}`}
            className="flex-shrink-0 w-48 md:w-60 h-24 md:h-28 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Company logo ${index + 1}`}
              loading="lazy"
              className={`${maxHClass} max-w-full object-contain opacity-75 hover:opacity-100 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-lg transition-all duration-300`}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="py-4 bg-card border-y border-border overflow-hidden">
      <div className="container-custom mb-2">
        <p className="font-accent text-[1.4rem] font-semibold text-muted-foreground text-center uppercase tracking-wider">
          Trusted by Leading Companies
        </p>
      </div>
      <div className="relative overflow-hidden py-0">
        <div className="flex testimonial-scroll w-max">
          {renderLogoSet('logo-set-1')}
          {renderLogoSet('logo-set-2')}
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
