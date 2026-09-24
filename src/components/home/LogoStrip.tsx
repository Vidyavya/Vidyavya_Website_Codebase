import { useEffect } from 'react';

const LogoStrip = () => {
  const logos = [
    { src: '/company-logos/1.png', alt: 'Partner Logo 1', sizeClass: 'max-h-12 md:max-h-15' },
    { src: '/company-logos/meta flow ai logo-edited.png', alt: 'Meta Flow AI', sizeClass: 'max-h-12 md:max-h-15' },
    { src: '/company-logos/yukoso logo-edited.png', alt: 'Yukoso', sizeClass: 'max-h-12 md:max-h-15' },
    { src: '/company-logos/5.png', alt: 'Partner Logo 5', sizeClass: 'max-h-12 md:max-h-15' },
    { src: '/company-logos/unifolio.png', alt: 'Unifolio', sizeClass: 'max-h-8 md:max-h-10' },
  ];

  const renderLogoSet = (keyPrefix: string) => (
    <div className="flex gap-8 sm:gap-12 md:gap-16 items-center flex-shrink-0">
      {logos.map((logo, index) => (
        <div
          key={`${keyPrefix}-${index}`}
          className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-20 md:h-24 flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={`${logo.sizeClass} max-w-[85%] object-contain opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-4 bg-card border-y border-border overflow-hidden">
      <div className="container-custom mb-2">
        <p className="font-accent text-[1.4rem] font-semibold text-muted-foreground text-center uppercase tracking-wider">
          Trusted by Leading Companies
        </p>
      </div>
      <div className="relative overflow-hidden py-2">
        <div className="flex testimonial-scroll w-max gap-8 sm:gap-12 md:gap-16">
          {renderLogoSet('logo-set-1')}
          {renderLogoSet('logo-set-2')}
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
