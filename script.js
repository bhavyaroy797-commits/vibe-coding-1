/* trops Lip Cosmetics Brand - Interactive JS Engine */
document.addEventListener('DOMContentLoaded', () => {
  
  // =========================================================================
  // 1. DATA STORES: Shade Data & Cart
  // =========================================================================
  
  const shades = {
    'tulum-sand': {
      name: 'Tulum Sand',
      color: '#E6C2B9',
      glow: 'rgba(230, 194, 185, 0.45)',
      finish: 'Finish: High-Gloss Glaze',
      desc: 'A warm sand beige with high-octane glass shine. Melts onto lips with a weightless, non-sticky feel, leaving a glossy finish that makes your lips look naturally fuller and moisturized all day.',
      ingredients: 'Infused with cold-pressed coconut oil, sodium hyaluronate, and vitamin E.',
      price: 24.00
    },
    'coconut-milk': {
      name: 'Coconut Milk',
      color: '#F8ECE3',
      glow: 'rgba(248, 236, 227, 0.5)',
      finish: 'Finish: Luminous Balm',
      desc: 'A creamy warm nude that acts as a sheer hydration filter for your lips. The ultimate "your lips but better" tone, formulated for rapid absorption and a soft dewy finish.',
      ingredients: 'Infused with organic coconut milk solids, shea butter, and avocado oil.',
      price: 24.00
    },
    'shell': {
      name: 'Shell',
      color: '#EAD5D0',
      glow: 'rgba(234, 213, 208, 0.45)',
      finish: 'Finish: Dewy Satin',
      desc: 'A soft, neutral pinkish-beige that captures the subtle sheen of sun-bleached coral shells. Delivers buildable medium coverage with a velvet-satin slip.',
      ingredients: 'Infused with pink seaweed extract, cold-pressed jojoba oil, and jojoba esters.',
      price: 24.00
    },
    'espresso-run': {
      name: 'Espresso Run',
      color: '#5C3D31',
      glow: 'rgba(92, 61, 49, 0.35)',
      finish: 'Finish: Velvet Matte-Satin',
      desc: 'A deep, rich cocoa-brown inspired by morning double-espresso runs in the city. Sets to a comfortable, non-drying matte-satin barrier that stays put through meetings and meals.',
      ingredients: 'Infused with coffee bean extract, hyaluronic acid spheres, and vitamin E.',
      price: 24.00
    },
    'terracotta-dusk': {
      name: 'Terracotta Dusk',
      color: '#B56953',
      glow: 'rgba(181, 105, 83, 0.4)',
      finish: 'Finish: Hydrating Satin',
      desc: 'A warm clay-terracotta shade that brings out the natural warmth in all skin tones. Mimics the warm ambient colors of a Tulum sunset. Full-bodied moisture in one stroke.',
      ingredients: 'Infused with pomegranate seed oil, aloe barbadensis cream, and organic mango butter.',
      price: 24.00
    },
    'golden-hour': {
      name: 'Golden Hour',
      color: '#C49148',
      glow: 'rgba(196, 145, 72, 0.4)',
      finish: 'Finish: Gold-Flecked Glass',
      desc: 'A gold-infused honey gloss that catches light at every angle. Designed to wear alone for an organic wet-look finish or layer over matte shades for an instant cocktail-hour glow.',
      ingredients: 'Infused with ultra-fine biodegradable gold mica flakes, coconut oil, and vitamin E.',
      price: 24.00
    },
    'boardroom': {
      name: 'Boardroom',
      color: '#9C7D73',
      glow: 'rgba(156, 125, 115, 0.4)',
      finish: 'Finish: Comfortable Matte',
      desc: 'A cool-toned taupe-nude designed with executive presence in mind. High pigment, zero sheen, and non-drying hydration that keeps up with back-to-back presentations.',
      ingredients: 'Infused with marine collagen peptides, rosehip oil, and hydrating silica powder.',
      price: 24.00
    },
    'hustle': {
      name: 'Hustle',
      color: '#8C5345',
      glow: 'rgba(140, 83, 69, 0.4)',
      finish: 'Finish: High-Shine Glaze',
      desc: 'A warm cinnamon-nude packed with hydration. Specially crafted for the woman who starts her day in the boardroom and ends it on the beach. Instant confidence in a tube.',
      ingredients: 'Infused with sweet almond oil, vitamin E, and micro-hyaluronic acid particles.',
      price: 24.00
    }
  };
  let cart = [];
  // =========================================================================
  // 2. INTERACTIVE SHADE SELECTOR
  // =========================================================================
  
  const shadeCards = document.querySelectorAll('.shade-card');
  const showcaseGlow = document.getElementById('showcase-glow');
  const showcaseLiquidFill = document.getElementById('showcase-liquid-fill');
  const showcaseFinishBadge = document.getElementById('showcase-finish-badge');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseIngredientsList = document.getElementById('showcase-ingredients-list');
  const showcaseAddBtn = document.getElementById('showcase-add-btn');
  shadeCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active class
      shadeCards.forEach(c => c.classList.remove('active'));
      // Add active class
      card.classList.add('active');
      const shadeId = card.getAttribute('data-shade-id');
      const shadeData = shades[shadeId];
      if (shadeData) {
        // Transition liquid fill & glow in the tube render
        showcaseLiquidFill.style.backgroundColor = shadeData.color;
        showcaseGlow.style.backgroundColor = shadeData.glow;
        // Transition text content with a subtle fade animation
        const transitionElements = [showcaseFinishBadge, showcaseTitle, showcaseDesc, showcaseIngredientsList];
        
        transitionElements.forEach(el => {
          el.style.opacity = 0;
          el.style.transform = 'translateY(5px)';
        });
        setTimeout(() => {
          showcaseFinishBadge.textContent = shadeData.finish;
          showcaseTitle.textContent = shadeData.name;
          showcaseDesc.textContent = shadeData.desc;
          showcaseIngredientsList.textContent = shadeData.ingredients;
          
          // Update Add to Cart Button dataset
          showcaseAddBtn.setAttribute('data-shade', shadeData.name);
          showcaseAddBtn.setAttribute('data-price', shadeData.price.toFixed(2));
          transitionElements.forEach(el => {
            el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
          });
        }, 200);
      }
    });
  });
  // =========================================================================
  // 3. MOCK CART SYSTEM
  // =========================================================================
  
  const cartDrawer = document.getElementById('cart-drawer');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartBadge = document.getElementById('cart-badge');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const emptyCartShopBtn = document.getElementById('empty-cart-shop-btn');
  // Toggle Cart Drawer Open/Close
  function openCart() {
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
  function closeCart() {
    cartDrawer.classList.remove('open');
    document.body.style.overflow = ''; // Unlock background scroll
  }
  cartToggleBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartDrawerOverlay.addEventListener('click', closeCart);
  if (emptyCartShopBtn) {
    emptyCartShopBtn.addEventListener('click', closeCart);
  }
  // Add Item to Cart
  function addToCart(shadeName, price) {
    price = parseFloat(price);
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === shadeName);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      // Find color code from our shades map
      let shadeColor = '#E6C2B9'; // fallback
      Object.values(shades).forEach(s => {
        if (s.name.toLowerCase() === shadeName.toLowerCase()) {
          shadeColor = s.color;
        }
      });
      
      cart.push({
        name: shadeName,
        price: price,
        color: shadeColor,
        quantity: 1
      });
    }
    updateCartUI();
    openCart();
  }
  // Update Cart UI, Badge and Subtotal
  function updateCartUI() {
    // 1. Badge count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cartBadge.style.transform = 'scale(1)';
    }, 200);
    // 2. Subtotal calculation
    const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `$${totalCost.toFixed(2)}`;
    // 3. Render Cart Items
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-message">
          <p>Your bag is currently empty.</p>
          <a href="#shade-range" class="btn-primary select-shade-btn" id="empty-cart-shop-btn-dynamic">Find Your Shade</a>
        </div>
      `;
      // Attach listener to dynamic button
      const dynShopBtn = document.getElementById('empty-cart-shop-btn-dynamic');
      if (dynShopBtn) dynShopBtn.addEventListener('click', closeCart);
      return;
    }
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const cartItemEl = document.createElement('div');
      cartItemEl.className = 'cart-item';
      cartItemEl.innerHTML = `
        <div class="cart-item-visual">
          <div class="cart-item-tube-color" style="background-color: ${item.color};"></div>
          <div class="lipgloss-tube" style="transform: scale(0.35); height: 160px;">
            <div class="tube-cap" style="width: 42px; height: 40px; background-color: #E2D4C5;"></div>
            <div class="tube-body" style="width: 44px; height: 120px; border-width: 4px;"></div>
          </div>
        </div>
        <div class="cart-item-details">
          <div class="cart-item-meta">
            <h4>${item.name}</h4>
            <p>trops Lip Glaze Hybrid</p>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn dec-btn" data-shade="${item.name}">&minus;</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn inc-btn" data-shade="${item.name}">&plus;</button>
          </div>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="remove-item-btn" data-shade="${item.name}">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItemEl);
    });
    // Attach Cart Action Listeners
    attachCartActionListeners();
  }
  function attachCartActionListeners() {
    // Increase quantity
    document.querySelectorAll('.inc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-shade');
        const item = cart.find(item => item.name === name);
        if (item) {
          item.quantity += 1;
          updateCartUI();
        }
      });
    });
    // Decrease quantity
    document.querySelectorAll('.dec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-shade');
        const item = cart.find(item => item.name === name);
        if (item) {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            cart = cart.filter(item => item.name !== name);
          }
          updateCartUI();
        }
      });
    });
    // Remove item
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-shade');
        cart = cart.filter(item => item.name !== name);
        updateCartUI();
      });
    });
  }
  // Attach button add-to-bag triggers on page
  document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-shade');
      const price = btn.getAttribute('data-price');
      addToCart(name, price);
    });
  });
  showcaseAddBtn.addEventListener('click', () => {
    const name = showcaseAddBtn.getAttribute('data-shade');
    const price = showcaseAddBtn.getAttribute('data-price');
    addToCart(name, price);
  });
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      alert(`Thank you for entering the boardroom! Your checkout for $${cart.reduce((t, i) => t + (i.price * i.quantity), 0).toFixed(2)} is a success (Demo).`);
      cart = [];
      updateCartUI();
      closeCart();
    }
  });
  // =========================================================================
  // 4. REVIEWS SLIDER / CAROUSEL
  // =========================================================================
  
  const reviewsTrack = document.getElementById('reviews-track');
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prev-review-btn');
  const nextBtn = document.getElementById('next-review-btn');
  const dotElements = document.querySelectorAll('.slider-dots .dot');
  
  let currentReviewIndex = 0;
  const reviewCount = reviewCards.length;
  function updateSlider() {
    reviewsTrack.style.transform = `translateX(-${currentReviewIndex * 100}%)`;
    
    // Update dots
    dotElements.forEach(dot => dot.classList.remove('active'));
    const activeDot = document.querySelector(`.slider-dots .dot[data-index="${currentReviewIndex}"]`);
    if (activeDot) activeDot.classList.add('active');
  }
  function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviewCount;
    updateSlider();
  }
  function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviewCount) % reviewCount;
    updateSlider();
  }
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextReview);
    prevBtn.addEventListener('click', prevReview);
  }
  dotElements.forEach(dot => {
    dot.addEventListener('click', () => {
      currentReviewIndex = parseInt(dot.getAttribute('data-index'), 10);
      updateSlider();
    });
  });
  // Auto slide reviews every 8 seconds
  let sliderInterval = setInterval(nextReview, 8000);
  // Reset timer on manual slider click
  const resetSliderTimer = () => {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextReview, 8000);
  };
  [prevBtn, nextBtn, ...dotElements].forEach(el => {
    if (el) el.addEventListener('click', resetSliderTimer);
  });
  // =========================================================================
  // 5. EMAIL NEWSLETTER FORM VALIDATION
  // =========================================================================
  
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const formFeedback = document.getElementById('form-feedback');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = newsletterEmail.value.trim();
      
      // Simple regex check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!email) {
        showFeedback('Please enter an email address.', 'error');
      } else if (!emailRegex.test(email)) {
        showFeedback('Please enter a valid executive email address.', 'error');
      } else {
        // Mock successful validation
        showFeedback('Access granted. Welcome to the Boardroom.', 'success');
        newsletterEmail.value = '';
      }
    });
  }
  function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = 'form-feedback-message'; // reset classes
    formFeedback.classList.add(type);
    
    // Clear feedback message after 5 seconds
    setTimeout(() => {
      formFeedback.style.opacity = 0;
      setTimeout(() => {
        formFeedback.textContent = '';
        formFeedback.style.opacity = 1;
      }, 500);
    }, 5000);
  }
  // =========================================================================
  // 6. SCROLL REVEALS & NAVBAR ANIMATION
  // =========================================================================
  
  // Header scroll class
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  // Inject reveal class dynamically to major panels to avoid bloated html
  const animatedElements = [
    '.section-header', 
    '.shade-picker-layout', 
    '.formula-intro-panel', 
    '.feature-card',
    '.editorial-item', 
    '.reviews-slider-wrapper', 
    '.newsletter-content'
  ];
  animatedElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
    });
  });
  // IntersectionObserver to toggle reveal
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
  // Add initial reveal to hero items
  setTimeout(() => {
    document.querySelectorAll('.hero-text-content, .hero-visual').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.25, 1, 0.5, 1)';
    });
  }, 100);
});
