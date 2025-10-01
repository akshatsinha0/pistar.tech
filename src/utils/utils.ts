
export const animationCreate = () => {
  if (typeof window !== "undefined") {
    try {
      // Dynamic import with proper error handling
      import("wowjs").then((module: any) => {
        // Try different ways WOW.js might be exported
        let WOWConstructor;
        
        if (module.default && typeof module.default === 'function') {
          WOWConstructor = module.default;
        } else if (module.WOW && typeof module.WOW === 'function') {
          WOWConstructor = module.WOW;
        } else if (module.default && module.default.WOW && typeof module.default.WOW === 'function') {
          WOWConstructor = module.default.WOW;
        }
        
        if (WOWConstructor) {
          const wow = new WOWConstructor({
            live: false,
            animateClass: 'animated',
            offset: 0,
            mobile: false
          });
          wow.init();
        } else {
          console.warn('WOW constructor not found in module:', module);
        }
      }).catch((error) => {
        console.warn('Failed to load WOW.js:', error);
      });
    } catch (error) {
      console.warn('Error initializing WOW.js:', error);
    }
  }
};

export const calculateDiscountedPrice = (price:number, discount:number) => {
  return (price - (price * discount) / 100).toFixed(2);
};