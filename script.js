// ========== MENU DATA (50+ ITEMS) ==========
const menuItems = [
    // Pizzas
    {
      id: 1,
      name: "Classic Margherita Pizza",
      category: "Pizza",
      price: 299,
      emoji: "🍕",
      rating: 4.5,
      tags: ["vegetarian", "cheese", "pizza"],
    },
    {
      id: 2,
      name: "Farmhouse Veggie Pizza",
      category: "Pizza",
      price: 349,
      emoji: "🍕",
      rating: 4.7,
      tags: ["vegetarian", "pizza"],
    },
    {
      id: 3,
      name: "Peri Peri Paneer Pizza",
      category: "Pizza",
      price: 379,
      emoji: "🍕",
      rating: 4.8,
      tags: ["spicy", "paneer", "pizza"],
    },
    {
      id: 4,
      name: "Double Cheese Burst Pizza",
      category: "Pizza",
      price: 399,
      emoji: "🍕",
      rating: 4.9,
      tags: ["cheese", "pizza"],
    },
    {
      id: 5,
      name: "Tandoori Chicken Pizza",
      category: "Pizza",
      price: 429,
      emoji: "🍕",
      rating: 4.6,
      tags: ["non-veg", "spicy", "pizza"],
    },
    {
      id: 6,
      name: "BBQ Chicken Loaded Pizza",
      category: "Pizza",
      price: 459,
      emoji: "🍕",
      rating: 4.7,
      tags: ["non-veg", "bbq", "pizza"],
    },
  
    // Burgers
    {
      id: 7,
      name: "Crispy Veggie Burger",
      category: "Burgers",
      price: 179,
      emoji: "🍔",
      rating: 4.3,
      tags: ["vegetarian", "burger"],
    },
    {
      id: 8,
      name: "Smoky Chicken Burger",
      category: "Burgers",
      price: 229,
      emoji: "🍔",
      rating: 4.4,
      tags: ["non-veg", "burger"],
    },
    {
      id: 9,
      name: "Cheese Overload Burger",
      category: "Burgers",
      price: 249,
      emoji: "🍔",
      rating: 4.6,
      tags: ["cheese", "burger"],
    },
    {
      id: 10,
      name: "Paneer Tikka Burger",
      category: "Burgers",
      price: 219,
      emoji: "🍔",
      rating: 4.5,
      tags: ["paneer", "burger"],
    },
    {
      id: 11,
      name: "Spicy Mexican Burger",
      category: "Burgers",
      price: 239,
      emoji: "🍔",
      rating: 4.4,
      tags: ["spicy", "burger"],
    },
  
    // Indian
    {
      id: 12,
      name: "Hyderabadi Chicken Biryani",
      category: "Indian",
      price: 349,
      emoji: "🍛",
      rating: 4.9,
      tags: ["biryani", "non-veg", "spicy"],
    },
    {
      id: 13,
      name: "Veg Dum Biryani",
      category: "Indian",
      price: 299,
      emoji: "🍛",
      rating: 4.6,
      tags: ["biryani", "vegetarian"],
    },
    {
      id: 14,
      name: "Butter Chicken with Naan",
      category: "Indian",
      price: 349,
      emoji: "🍗",
      rating: 4.8,
      tags: ["non-veg", "curry"],
    },
    {
      id: 15,
      name: "Paneer Butter Masala with Naan",
      category: "Indian",
      price: 329,
      emoji: "🧀",
      rating: 4.7,
      tags: ["paneer", "vegetarian", "curry"],
    },
    {
      id: 16,
      name: "Chole Bhature Deluxe",
      category: "Indian",
      price: 199,
      emoji: "🍽️",
      rating: 4.5,
      tags: ["vegetarian", "spicy"],
    },
    {
      id: 17,
      name: "Masala Dosa Platter",
      category: "Indian",
      price: 219,
      emoji: "🥞",
      rating: 4.6,
      tags: ["south-indian", "vegetarian"],
    },
    {
      id: 18,
      name: "Pav Bhaji Loaded Butter",
      category: "Indian",
      price: 189,
      emoji: "🍞",
      rating: 4.7,
      tags: ["street-food", "vegetarian"],
    },
    {
      id: 19,
      name: "Amritsari Kulcha Combo",
      category: "Indian",
      price: 239,
      emoji: "🥘",
      rating: 4.4,
      tags: ["north-indian", "vegetarian"],
    },
  
    // Chinese / Asian
    {
      id: 20,
      name: "Veg Hakka Noodles",
      category: "Chinese",
      price: 219,
      emoji: "🍜",
      rating: 4.5,
      tags: ["noodles", "vegetarian"],
    },
    {
      id: 21,
      name: "Chicken Hakka Noodles",
      category: "Chinese",
      price: 249,
      emoji: "🍜",
      rating: 4.6,
      tags: ["noodles", "non-veg"],
    },
    {
      id: 22,
      name: "Veg Manchurian Gravy",
      category: "Chinese",
      price: 229,
      emoji: "🥢",
      rating: 4.4,
      tags: ["gravy", "vegetarian"],
    },
    {
      id: 23,
      name: "Chilli Paneer Dry",
      category: "Chinese",
      price: 249,
      emoji: "🥡",
      rating: 4.7,
      tags: ["spicy", "paneer"],
    },
    {
      id: 24,
      name: "Chilli Chicken Dry",
      category: "Chinese",
      price: 269,
      emoji: "🍗",
      rating: 4.6,
      tags: ["spicy", "non-veg"],
    },
  
    // Salads & Bowls
    {
      id: 25,
      name: "Greek Feta Salad",
      category: "Salads",
      price: 229,
      emoji: "🥗",
      rating: 4.2,
      tags: ["healthy", "vegetarian", "salad"],
    },
    {
      id: 26,
      name: "Quinoa Superfood Bowl",
      category: "Bowls",
      price: 279,
      emoji: "🥗",
      rating: 4.5,
      tags: ["healthy", "bowl"],
    },
    {
      id: 27,
      name: "Grilled Chicken Protein Bowl",
      category: "Bowls",
      price: 299,
      emoji: "🍗",
      rating: 4.4,
      tags: ["healthy", "non-veg", "bowl"],
    },
    {
      id: 28,
      name: "Fresh Fruit Rainbow Bowl",
      category: "Bowls",
      price: 219,
      emoji: "🍉",
      rating: 4.3,
      tags: ["healthy", "fruit"],
    },
    {
      id: 29,
      name: "Caesar Salad with Croutons",
      category: "Salads",
      price: 249,
      emoji: "🥗",
      rating: 4.4,
      tags: ["salad", "vegetarian"],
    },
  
    // Pasta
    {
      id: 30,
      name: "Creamy Alfredo Pasta",
      category: "Pasta",
      price: 269,
      emoji: "🍝",
      rating: 4.6,
      tags: ["pasta", "white-sauce"],
    },
    {
      id: 31,
      name: "Spicy Arrabbiata Pasta",
      category: "Pasta",
      price: 259,
      emoji: "🍝",
      rating: 4.5,
      tags: ["pasta", "red-sauce", "spicy"],
    },
    {
      id: 32,
      name: "Pesto Basil Pasta",
      category: "Pasta",
      price: 289,
      emoji: "🍝",
      rating: 4.4,
      tags: ["pasta", "herb"],
    },
  
    // Breakfast
    {
      id: 33,
      name: "Stuffed Paneer Paratha with Curd",
      category: "Breakfast",
      price: 149,
      emoji: "🥘",
      rating: 4.5,
      tags: ["breakfast", "indian"],
    },
    {
      id: 34,
      name: "Masala Poha",
      category: "Breakfast",
      price: 99,
      emoji: "🥣",
      rating: 4.2,
      tags: ["breakfast", "light"],
    },
    {
      id: 35,
      name: "Nutella Pancake Stack",
      category: "Breakfast",
      price: 199,
      emoji: "🥞",
      rating: 4.7,
      tags: ["sweet", "pancake"],
    },
    {
      id: 36,
      name: "Cheesy Omelette Toast",
      category: "Breakfast",
      price: 159,
      emoji: "🍳",
      rating: 4.3,
      tags: ["eggs", "breakfast"],
    },
  
    // Desserts
    {
      id: 37,
      name: "Hot Brownie with Ice Cream",
      category: "Desserts",
      price: 199,
      emoji: "🍫",
      rating: 4.9,
      tags: ["dessert", "chocolate"],
    },
    {
      id: 38,
      name: "Classic Gulab Jamun (4 pcs)",
      category: "Desserts",
      price: 129,
      emoji: "🍯",
      rating: 4.8,
      tags: ["dessert", "indian"],
    },
    {
      id: 39,
      name: "Rasmalai Deluxe",
      category: "Desserts",
      price: 169,
      emoji: "🍮",
      rating: 4.7,
      tags: ["dessert", "indian"],
    },
    {
      id: 40,
      name: "Red Velvet Pastry",
      category: "Desserts",
      price: 149,
      emoji: "🍰",
      rating: 4.6,
      tags: ["dessert", "cake"],
    },
    {
      id: 41,
      name: "Tiramisu Cup",
      category: "Desserts",
      price: 229,
      emoji: "🍰",
      rating: 4.6,
      tags: ["dessert", "coffee"],
    },
  
    // Drinks
    {
      id: 42,
      name: "Cold Coffee Frappe",
      category: "Drinks",
      price: 159,
      emoji: "🥤",
      rating: 4.5,
      tags: ["coffee", "drink"],
    },
    {
      id: 43,
      name: "Virgin Mojito",
      category: "Drinks",
      price: 139,
      emoji: "🥤",
      rating: 4.4,
      tags: ["drink", "refreshing"],
    },
    {
      id: 44,
      name: "Fresh Lime Soda",
      category: "Drinks",
      price: 99,
      emoji: "🥤",
      rating: 4.3,
      tags: ["drink", "refreshing"],
    },
    {
      id: 45,
      name: "Strawberry Milkshake",
      category: "Drinks",
      price: 169,
      emoji: "🥤",
      rating: 4.5,
      tags: ["shake", "sweet"],
    },
    {
      id: 46,
      name: "Mango Smoothie Bowl",
      category: "Drinks",
      price: 189,
      emoji: "🥤",
      rating: 4.6,
      tags: ["smoothie", "healthy"],
    },
  
    // Extras / Snacks
    {
      id: 47,
      name: "Peri Peri Fries",
      category: "Snacks",
      price: 129,
      emoji: "🍟",
      rating: 4.4,
      tags: ["spicy", "fries"],
    },
    {
      id: 48,
      name: "Cheesy Garlic Bread",
      category: "Snacks",
      price: 139,
      emoji: "🍞",
      rating: 4.5,
      tags: ["cheese", "snack"],
    },
    {
      id: 49,
      name: "Loaded Nachos",
      category: "Snacks",
      price: 189,
      emoji: "🧀",
      rating: 4.4,
      tags: ["snack", "cheese"],
    },
    {
      id: 50,
      name: "Chicken Popcorn Bucket",
      category: "Snacks",
      price: 229,
      emoji: "🍗",
      rating: 4.5,
      tags: ["non-veg", "snack"],
    },
    {
      id: 51,
      name: "Garlic Cheese Shots",
      category: "Snacks",
      price: 169,
      emoji: "🧀",
      rating: 4.3,
      tags: ["snack", "cheese"],
    },
  ];
  
  // ========== DOM ELEMENTS ==========
  const menuContainer = document.getElementById("menu-container");
  const menuCountEl = document.getElementById("menu-count");
  const searchTextInput = document.getElementById("search-text");
  const searchCategorySelect = document.getElementById("search-category");
  const priceRangeInput = document.getElementById("price-range");
  const priceValueEl = document.getElementById("price-value");
  const imageChips = document.querySelectorAll(".image-chip");
  const viewGridBtn = document.getElementById("view-grid");
  const viewListBtn = document.getElementById("view-list");
  
  const yearEl = document.getElementById("year");
  
  // Auth modal
  const authOverlay = document.getElementById("auth-overlay");
  const authClose = document.getElementById("auth-close");
  const authTabs = document.querySelectorAll(".auth-tab");
  const authForms = document.querySelectorAll(".auth-form");
  const openLoginBtn = document.getElementById("open-login");
  const openSignupBtn = document.getElementById("open-signup");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginMessage = document.getElementById("login-message");
  const signupMessage = document.getElementById("signup-message");
  
  // Newsletter & contact
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterEmail = document.getElementById("newsletter-email");
  const newsletterMessage = document.getElementById("newsletter-message");
  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-status");
  
  // ========== UTILITIES ==========
  let currentView = "grid"; // or "list"
  let currentImageTag = null;
  
  function formatPrice(price) {
    return `₹${price}`;
  }
  
  // ========== RENDER MENU ==========
  function renderMenu(items) {
    menuContainer.innerHTML = "";
    menuCountEl.textContent = `Showing ${items.length} dish${
      items.length !== 1 ? "es" : ""
    }`;
  
    if (currentView === "grid") {
      menuContainer.classList.remove("menu-list");
      menuContainer.classList.add("menu-grid");
    } else {
      menuContainer.classList.remove("menu-grid");
      menuContainer.classList.add("menu-list");
    }
  
    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-card";
  
      const imageDiv = document.createElement("div");
      imageDiv.className = "menu-image";
      imageDiv.textContent = item.emoji;
  
      const infoDiv = document.createElement("div");
      infoDiv.className = "menu-info";
  
      const title = document.createElement("h3");
      title.textContent = item.name;
  
      const meta = document.createElement("div");
      meta.className = "menu-meta";
  
      const category = document.createElement("div");
      category.className = "menu-category";
      category.textContent = item.category;
  
      const rightMeta = document.createElement("div");
      rightMeta.style.display = "flex";
      rightMeta.style.flexDirection = "column";
      rightMeta.style.alignItems = "flex-end";
      rightMeta.style.gap = "2px";
  
      const price = document.createElement("div");
      price.className = "menu-price";
      price.textContent = formatPrice(item.price);
  
      const rating = document.createElement("div");
      rating.className = "menu-rating";
      rating.textContent = `${item.rating} ★`;
  
      rightMeta.appendChild(price);
      rightMeta.appendChild(rating);
  
      meta.appendChild(category);
      meta.appendChild(rightMeta);
  
      const tagsWrapper = document.createElement("div");
      tagsWrapper.className = "menu-tags";
  
      item.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "menu-tag";
        span.textContent = tag;
        tagsWrapper.appendChild(span);
      });
  
      infoDiv.appendChild(title);
      infoDiv.appendChild(meta);
      infoDiv.appendChild(tagsWrapper);
  
      card.appendChild(imageDiv);
      card.appendChild(infoDiv);
  
      menuContainer.appendChild(card);
    });
  }
  
  // ========== FILTER LOGIC (TEXT + CATEGORY + PRICE + IMAGE TAG) ==========
  function applyFilters() {
    const text = searchTextInput.value.trim().toLowerCase();
    const category = searchCategorySelect.value;
    const maxPrice = Number(priceRangeInput.value);
  
    const filtered = menuItems.filter((item) => {
      const inCategory = category === "all" || item.category === category;
      const inPrice = item.price <= maxPrice;
  
      const inText =
        !text ||
        item.name.toLowerCase().includes(text) ||
        item.category.toLowerCase().includes(text) ||
        item.tags.some((tag) => tag.toLowerCase().includes(text));
  
      const inImageTag =
        !currentImageTag ||
        item.tags.some((tag) => tag.toLowerCase().includes(currentImageTag));
  
      return inCategory && inPrice && inText && inImageTag;
    });
  
    renderMenu(filtered);
  }
  
  // ========== IMAGE SEARCH HANDLING ==========
  imageChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag.toLowerCase();
      if (currentImageTag === tag) {
        // toggle off
        currentImageTag = null;
        chip.classList.remove("active");
      } else {
        currentImageTag = tag;
        imageChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
      }
      applyFilters();
    });
  });
  
  // Add small visual class for active chip through CSS inline
  const style = document.createElement("style");
  style.textContent = `
    .image-chip.active {
      background: linear-gradient(135deg, #f97316, #facc15);
      color: #111827;
      border-color: transparent;
    }
  `;
  document.head.appendChild(style);
  
  // ========== VIEW SWITCH ==========
  viewGridBtn.addEventListener("click", () => {
    currentView = "grid";
    viewGridBtn.classList.add("solid");
    viewGridBtn.classList.remove("ghost");
    viewListBtn.classList.add("ghost");
    viewListBtn.classList.remove("solid");
    applyFilters();
  });
  
  viewListBtn.addEventListener("click", () => {
    currentView = "list";
    viewListBtn.classList.add("solid");
    viewListBtn.classList.remove("ghost");
    viewGridBtn.classList.add("ghost");
    viewGridBtn.classList.remove("solid");
    applyFilters();
  });
  
  // ========== SEARCH CONTROL EVENTS ==========
  searchTextInput.addEventListener("input", applyFilters);
  searchCategorySelect.addEventListener("change", applyFilters);
  priceRangeInput.addEventListener("input", () => {
    priceValueEl.textContent = `₹${priceRangeInput.value}`;
    applyFilters();
  });
  
  // ========== AUTH MODAL HANDLING ==========
  function openAuth(initialTab) {
    authOverlay.classList.remove("hidden");
    switchAuthTab(initialTab);
  }
  
  function closeAuth() {
    authOverlay.classList.add("hidden");
  }
  
  function switchAuthTab(tabName) {
    authTabs.forEach((tab) => {
      const isActive = tab.dataset.authTab === tabName;
      tab.classList.toggle("active", isActive);
    });
  
    authForms.forEach((form) => {
      const isLogin = form.id === "login-form";
      const isSignup = form.id === "signup-form";
  
      if (tabName === "login") {
        form.classList.toggle("active", isLogin);
      } else {
        form.classList.toggle("active", isSignup);
      }
    });
  
    loginMessage.textContent = "";
    signupMessage.textContent = "";
  }
  
  openLoginBtn.addEventListener("click", () => openAuth("login"));
  openSignupBtn.addEventListener("click", () => openAuth("signup"));
  authClose.addEventListener("click", closeAuth);
  
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switchAuthTab(tab.dataset.authTab);
    });
  });
  
  // Fake local storage user system (front-end only demo)
  const USERS_KEY = "delishbite_users";
  
  function getStoredUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch {
      return [];
    }
  }
  
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
  
    if (!name || !email || !password) {
      signupMessage.textContent = "Please fill all the details.";
      return;
    }
  
    const users = getStoredUsers();
    const exists = users.some((u) => u.email === email);
    if (exists) {
      signupMessage.textContent = "Account already exists with this email.";
      return;
    }
  
    users.push({ name, email, password });
    saveUsers(users);
  
    signupMessage.textContent = "Account created! You can now login.";
    signupForm.reset();
  });
  
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
  
    const users = getStoredUsers();
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (!user) {
      loginMessage.textContent = "Invalid email or password.";
      return;
    }
  
    loginMessage.textContent = `Welcome back, ${user.name}!`;
    setTimeout(() => {
      closeAuth();
    }, 1000);
  });
  
  // Close auth overlay when clicking outside modal
  authOverlay.addEventListener("click", (e) => {
    if (e.target === authOverlay) closeAuth();
  });
  
  // ========== NEWSLETTER & CONTACT (simple front-end handling) ==========
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!newsletterEmail.value.trim()) {
      newsletterMessage.textContent = "Please enter a valid email.";
      return;
    }
    newsletterMessage.textContent = "Thank you for subscribing! 🎉";
    newsletterEmail.value = "";
  });
  
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactStatus.textContent = "Thanks for reaching out! We’ll get back soon.";
    contactForm.reset();
  });
  
  // ========== INIT ==========
  function init() {
    yearEl.textContent = new Date().getFullYear();
    priceValueEl.textContent = `₹${priceRangeInput.value}`;
    renderMenu(menuItems);
  }
  
  init();
  