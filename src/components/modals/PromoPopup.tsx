import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import { Sparkles } from 'lucide-react';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useRequestCallback();

  useEffect(() => {
    // Check if the user has already seen or closed the promo popup during this session
    const hasSeen = sessionStorage.getItem('hasSeenPromoPopup');
    if (!hasSeen) {
      // Show the popup automatically after a brief 1.5-second delay for smooth entry
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPromoPopup', 'true');
  };

  const handleCTAClick = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPromoPopup', 'true');
    // Open the Request Callback Modal
    openModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border border-border bg-card shadow-2xl rounded-2xl">
        {/* Header/Banner Section with Brand Styling */}
        <div className="relative w-full h-32 flex items-center justify-center border-b border-border bg-gradient-to-b from-cream/60 to-background/40 select-none">
          {/* Subtle grid pattern and glowing shapes to match Vidyavya's UI */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/30 rounded-full blur-xl pointer-events-none" />
          
          <div className="relative flex flex-col items-center">
            {/* Sparkles icon badge */}
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-2 border border-primary/20 shadow-sm animate-pulse">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <span className="font-accent text-[0.7rem] uppercase tracking-[0.2em] font-bold text-primary">
              Limited Opportunity
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              The Industry Is Hiring. <span className="text-primary">Are You Ready?</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Get trained by industry professionals, work on real projects, and secure a guaranteed internship through Vidyavya.
            </p>
          </div>

          <Button 
            onClick={handleCTAClick}
            variant="cta" 
            size="lg" 
            className="w-full sm:w-auto px-8 py-5 text-base font-semibold tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Talk to a Mentor
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;
