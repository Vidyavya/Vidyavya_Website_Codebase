import React, { useEffect, useState } from 'react';
import { Dialog, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRequestCallback } from '@/context/RequestCallbackContext';
import { X } from 'lucide-react';
import * as DialogPrimitive from "@radix-ui/react-dialog";

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
      <DialogPortal>
        {/* Dimmed backdrop overlay with glass blur (softens the page behind the popup) */}
        <DialogOverlay className="bg-black/20 backdrop-blur-[10px]" />
        
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 grid w-[92%] sm:max-w-[720px] translate-x-[-50%] translate-y-[-50%] border border-border/80 bg-white p-8 sm:p-14 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl overflow-hidden"
        >
          {/* Close Button in top right */}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-2 opacity-60 transition-opacity hover:opacity-100 focus:outline-none text-foreground hover:bg-muted">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* Main Content Layout - No top icons, clean top start */}
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 pt-4">
            {/* Headline Section */}
            <h2 className="font-heading text-3xl sm:text-[48px] font-bold text-center leading-[1.25] tracking-tight">
              <span className="text-[#34495E] block">The Industry Is Hiring.</span>
              <span className="text-[#FF5757] block mt-1 sm:mt-3">Are You Ready?</span>
            </h2>

            {/* Subheading Section */}
            <p className="font-body text-base sm:text-[17px] text-muted-foreground text-center leading-relaxed max-w-xl mx-auto">
              Get trained by industry professionals, work on real projects, and secure a guaranteed internship through Vidyavya.
            </p>

            {/* CTA Button Section */}
            <div className="w-full flex justify-center pt-2">
              <Button 
                onClick={handleCTAClick}
                variant="cta" 
                className="w-full sm:w-auto h-12 sm:h-14 px-10 sm:px-12 text-base sm:text-lg font-semibold tracking-wide rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Talk to a Mentor
              </Button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default PromoPopup;
