// Rolling Going Balls - Sphere Dynamics JavaScript

// Velocity Configuration - Thematic Variables
const sphereConfig = {
  velocityMode: "production",
  momentumDelay: 100,
  glideSpeed: 300,
  rollAnimationDuration: 2000,
  trackLoadTimeout: 5000,
};

// Sphere Momentum State
let sphereActiveState = {
  navigationOpen: false,
  contentLoaded: false,
  velocityTrackers: new Map(),
  rollAnimations: [],
};

// DOM Velocity Selectors - Thematic References
const sphereElements = {
  navigationRail: document.getElementById("navigation-rail"),
  platformBase: document.getElementById("platform-base"),
  mobileToggle: document.getElementById("mobile-momentum-toggle"),
  mobileNavigation: document.getElementById("mobile-navigation-ramp"),
  controlInstructions: document.getElementById("control-instructions"),
  playerTestimonials: document.getElementById("player-testimonials"),
  updateStream: document.getElementById("update-stream"),
  playerNotes: document.getElementById("player-notes"),
  contactDetails: document.getElementById("contact-details"),
  rollingContactForm: document.getElementById("rolling-contact-form"),
  velocityYear: document.getElementById("velocity-year"),
};

// Sphere Initialization - Main Launch Function
function initializeSphereVelocity() {
  console.log("🎯 Initializing Rolling Going Balls Sphere Dynamics...");

  // Load header and footer dynamically
  glideHeaderIntoView();
  anchorPlatformBase();

  // Set up navigation momentum
  establishNavigationDynamics();

  // Load page-specific content based on current track
  detectCurrentTrack();

  // Initialize rolling animations
  activateRollingMotion();

  // Initialize track animations
  activateTrackAnimations();

  // Initialize custom animations
  activateCustomAnimations();

  // Set current year in footer
  setVelocityYear();

  console.log("✅ Sphere dynamics fully activated!");
}

// Dynamic Header Loading - Navigation Rail
async function glideHeaderIntoView() {
  try {
    const headerResponse = await fetch("header.html");
    const headerTrajectory = await headerResponse.text();

    if (sphereElements.navigationRail) {
      sphereElements.navigationRail.innerHTML = headerTrajectory;
      console.log("🎯 Navigation rail loaded with velocity");
    }
  } catch (rollError) {
    console.error("❌ Navigation rail failed to load:", rollError);
  }
}

// Dynamic Footer Loading - Platform Base
async function anchorPlatformBase() {
  try {
    const footerResponse = await fetch("footer.html");
    const footerMomentum = await footerResponse.text();

    if (sphereElements.platformBase) {
      sphereElements.platformBase.innerHTML = footerMomentum;
      console.log("🎯 Platform base anchored successfully");
    }
  } catch (anchorError) {
    console.error("❌ Platform base failed to anchor:", anchorError);
  }
}

// Navigation Momentum - Mobile Menu Dynamics
function establishNavigationDynamics() {
  // Wait for header to load, then set up navigation
  setTimeout(() => {
    const burgerSphere = document.getElementById("mobile-momentum-toggle");
    const mobileSlide = document.getElementById("mobile-navigation-ramp");

    if (burgerSphere && mobileSlide) {
      burgerSphere.addEventListener("click", function () {
        toggleMobileVelocity(burgerSphere, mobileSlide);
      });

      console.log("🎯 Navigation momentum established");
    }
  }, sphereConfig.momentumDelay);
}

// Mobile Navigation Toggle - Sphere Activation
function toggleMobileVelocity(burgerElement, slideElement) {
  sphereActiveState.navigationOpen = !sphereActiveState.navigationOpen;

  if (sphereActiveState.navigationOpen) {
    burgerElement.classList.add("sphere-active");
    slideElement.classList.add("velocity-open");
    console.log("📱 Mobile navigation launched");
  } else {
    burgerElement.classList.remove("sphere-active");
    slideElement.classList.remove("velocity-open");
    console.log("📱 Mobile navigation retracted");
  }
}

// Track Detection - Current Page Analysis
function detectCurrentTrack() {
  const currentPath = window.location.pathname;
  const fileName = currentPath.split("/").pop() || "index.html";

  console.log(`🛤️ Current track detected: ${fileName}`);

  switch (fileName) {
    case "index.html":
    case "":
      loadHomeTrackContent();
      break;
    case "roll-log.html":
      loadNewsTrackContent();
      break;
    case "support-roll.html":
      loadContactTrackContent();
      break;
    default:
      console.log("🎯 Static track - no dynamic content required");
  }
}

// Home Track Content Loading
async function loadHomeTrackContent() {
  try {
    const contentResponse = await fetch("assets/data/home-content.json");
    const homeVelocity = await contentResponse.json();

    renderControlInstructions(homeVelocity.controlInstructions);
    renderPlayerTestimonials(homeVelocity.playerTestimonials);

    console.log("🏠 Home track content loaded with momentum");
  } catch (loadError) {
    console.error("❌ Home track content failed to load:", loadError);
  }
}

// Control Instructions Renderer
function renderControlInstructions(instructionData) {
  if (!sphereElements.controlInstructions || !instructionData) return;

  const instructionHTML = instructionData
    .map(
      (instruction) => `
        <div class="instruction-item" data-instruction="${instruction.id}">
            <div class="instruction-icon">${instruction.icon}</div>
            <div class="instruction-content">
                <h3>${instruction.title}</h3>
                <p>${instruction.description}</p>
            </div>
        </div>
    `
    )
    .join("");

  sphereElements.controlInstructions.innerHTML = instructionHTML;
  animateInstructionGlide();
}

// Player Testimonials Renderer
function renderPlayerTestimonials(testimonialData) {
  if (!sphereElements.playerTestimonials || !testimonialData) return;

  const testimonialHTML = testimonialData
    .map(
      (testimonial) => `
        <div class="testimonial-sphere" data-player="${testimonial.id}">
            <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <div class="testimonial-content">${testimonial.testimonial}</div>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${testimonial.playerName
                  .charAt(0)
                  .toUpperCase()}</div>
                <div class="testimonial-author-info">
                    <div class="testimonial-author-name">${
                      testimonial.playerName
                    }</div>
                    <div class="testimonial-author-title">Rolling Enthusiast</div>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  sphereElements.playerTestimonials.innerHTML = testimonialHTML;
  animateTestimonialFloat();
}

// News Track Content Loading
async function loadNewsTrackContent() {
  try {
    const newsResponse = await fetch("assets/data/news-content.json");
    const newsVelocity = await newsResponse.json();

    renderUpdateStream(newsVelocity.updatePipeline);
    renderMomentumNotes(newsVelocity.momentumNotes);

    console.log("📰 News track content loaded with velocity");
  } catch (newsError) {
    console.error("❌ News track content failed to load:", newsError);
  }
}

// Update Stream Renderer
function renderUpdateStream(updateData) {
  if (!sphereElements.updateStream || !updateData) return;

  const updateHTML = updateData
    .map(
      (update) => `
        <div class="update-card" data-update="${update.id}">
            <div class="update-header">
                <div class="update-date">${formatVelocityDate(
                  update.date
                )}</div>
                <div class="update-category">${update.category}</div>
            </div>
            <h3 class="update-title">${update.title}</h3>
            <p class="update-description">${update.description}</p>
            ${
              update.features
                ? `
                <ul class="update-features">
                    ${update.features
                      .map((feature) => `<li>${feature}</li>`)
                      .join("")}
                </ul>
            `
                : ""
            }
        </div>
    `
    )
    .join("");

  sphereElements.updateStream.innerHTML = updateHTML;
  animateUpdateGlide();
}

// Momentum Notes Renderer
function renderMomentumNotes(notesData) {
  if (!sphereElements.playerNotes || !notesData) return;

  const notesHTML = notesData
    .map(
      (note) => `
        <div class="note-card" data-note="${note.id}">
            <div class="note-image-container">
                <img src="${note.image}" alt="${
        note.title
      }" class="note-image" />
            </div>
            <div class="note-header">
                <div class="note-title">${note.title}</div>
                <div class="note-meta">
                    <span class="note-author">by ${note.author}</span>
                    <span class="note-date">${formatVelocityDate(
                      note.date
                    )}</span>
                </div>
            </div>
            <div class="note-content">${note.content}</div>
        </div>
    `
    )
    .join("");

  sphereElements.playerNotes.innerHTML = notesHTML;
  animateNotesFloat();
}

// Contact Track Content Loading
async function loadContactTrackContent() {
  try {
    const contactResponse = await fetch("assets/data/contact-content.json");
    const contactVelocity = await contactResponse.json();

    renderContactDetails(contactVelocity.contactDetails);
    setupContactFormDynamics();

    console.log("📞 Contact track content loaded with momentum");
  } catch (contactError) {
    console.error("❌ Contact track content failed to load:", contactError);
  }
}

// Contact Details Renderer - Updated for new contact page structure
function renderContactDetails(contactData) {
  // Since we now have static content in the HTML, we'll just log the data
  // and could use it for dynamic updates if needed
  console.log("📞 Contact data loaded:", contactData);

  // Add animation classes to contact cards
  const contactCards = document.querySelectorAll(
    ".contact-info-card, .contact-support-card"
  );
  contactCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("contact-animate-in");
    }, index * 100);
  });
}

// Contact Form Dynamics Setup
function setupContactFormDynamics() {
  if (!sphereElements.rollingContactForm) return;

  sphereElements.rollingContactForm.addEventListener(
    "submit",
    function (submitEvent) {
      submitEvent.preventDefault();
      processSphereMessage(this);
    }
  );
}

// Sphere Message Processing - Form Submission
function processSphereMessage(formElement) {
  const formData = new FormData(formElement);
  const messageVelocity = {
    rollerName: formData.get("sphereRollerName"),
    velocityPhone: formData.get("velocityPhone"),
    rollingMessage: formData.get("rollingMessage"),
    timestamp: new Date().toISOString(),
  };

  console.log("📨 Processing sphere message:", messageVelocity);

  // Overlay and airplane elements
  const overlay = document.getElementById("contact-overlay");
  const airplane = document.getElementById("airplane");
  const messageTrail = document.getElementById("message-trail");

  // Show overlay immediately
  if (overlay) overlay.classList.add("active");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Start airplane animation
  setTimeout(() => {
    if (airplane) {
      airplane.classList.add("flying");
    }
  }, 100);

  // Show message after airplane finishes flying
  setTimeout(() => {
    if (messageTrail) {
      messageTrail.textContent = "Your message has been sent successfully!";
      messageTrail.classList.add("showing");
    }
  }, 2200);

  // Complete animation and reset form
  setTimeout(() => {
    if (overlay) overlay.classList.remove("active");
    if (airplane) airplane.classList.remove("flying");
    if (messageTrail) {
      messageTrail.classList.remove("showing");
      messageTrail.textContent = "";
    }

    // Reset form
    formElement.reset();

    console.log("✅ Message sent successfully!");
  }, 4500);
}

// Rolling Animations - Sphere Motion
function activateRollingMotion() {
  // Animate sphere orbs with gentle rotation
  const sphereOrbs = document.querySelectorAll(".mechanic-orb, .logo-orb");
  sphereOrbs.forEach((orb, index) => {
    const rotationDelay = index * 200;
    setTimeout(() => {
      orb.style.animation = `gentle-float 3s ease-in-out infinite ${rotationDelay}ms`;
    }, rotationDelay);
  });

  console.log("🎲 Rolling animations activated");
}

// Animation Helper Functions
function animateInstructionGlide() {
  const instructions = document.querySelectorAll(".instruction-item");
  instructions.forEach((instruction, index) => {
    instruction.style.opacity = "0";
    instruction.style.transform = "translateX(-20px)";

    setTimeout(() => {
      instruction.style.transition = "all 0.5s ease-out";
      instruction.style.opacity = "1";
      instruction.style.transform = "translateX(0)";
    }, index * 100);
  });
}

function animateTestimonialFloat() {
  const testimonials = document.querySelectorAll(".testimonial-sphere");
  testimonials.forEach((testimonial, index) => {
    setTimeout(() => {
      testimonial.classList.add("animate-in");
    }, index * 100);
  });
}

function activateTrackAnimations() {
  const tracks = document.querySelectorAll(".track-type");
  tracks.forEach((track, index) => {
    setTimeout(() => {
      track.classList.add("animate-in");
    }, index * 150);
  });
}

function activateCustomAnimations() {
  const customCategories = document.querySelectorAll(".custom-category");
  customCategories.forEach((category, index) => {
    setTimeout(() => {
      category.classList.add("animate-in");
    }, index * 150);
  });

  // Add contact page specific animations
  const contactHero = document.querySelector(".contact-hero-trajectory");
  if (contactHero) {
    contactHero.classList.add("contact-animate-in");
  }

  const contactSections = document.querySelectorAll(
    ".contact-platform-section, .contact-hours-section, .contact-map-section"
  );
  contactSections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("contact-animate-in");
    }, index * 200);
  });
}

function animateUpdateGlide() {
  const updates = document.querySelectorAll(".update-card");
  updates.forEach((update, index) => {
    update.style.opacity = "0";
    update.style.transform = "translateX(-30px)";

    setTimeout(() => {
      update.style.transition = "all 0.7s ease-out";
      update.style.opacity = "1";
      update.style.transform = "translateX(0)";
    }, index * 200);
  });
}

function animateNotesFloat() {
  const notes = document.querySelectorAll(".note-card");
  notes.forEach((note, index) => {
    note.style.opacity = "0";
    note.style.transform = "translateY(15px)";

    setTimeout(() => {
      note.style.transition = "all 0.5s ease-out";
      note.style.opacity = "1";
      note.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Utility Functions
function formatVelocityDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function setVelocityYear() {
  setTimeout(() => {
    const yearElement = document.getElementById("velocity-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, sphereConfig.momentumDelay);
}

// Sphere Performance Monitoring
function trackSpherePerformance(actionName, startTime) {
  const endTime = performance.now();
  const duration = endTime - startTime;

  sphereActiveState.velocityTrackers.set(actionName, duration);
  console.log(`⚡ ${actionName} completed in ${duration.toFixed(2)}ms`);
}

// Error Handling - Sphere Recovery
function handleSphereError(error, context) {
  console.error(`❌ Sphere error in ${context}:`, error);

  // Attempt graceful degradation
  const errorMessage = document.createElement("div");
  errorMessage.className = "sphere-error-message";
  errorMessage.textContent =
    "Sphere dynamics temporarily unstable. Rolling with basic functionality.";
  errorMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--velocity-accent);
        color: white;
        padding: 1rem;
        border-radius: var(--momentum-radius);
        z-index: 9999;
        animation: slide-momentum 0.3s ease-out;
    `;

  document.body.appendChild(errorMessage);

  setTimeout(() => {
    if (errorMessage.parentNode) {
      errorMessage.remove();
    }
  }, 5000);
}

// Sphere Cleanup - Resource Management
function cleanupSphereResources() {
  // Clear running animations
  sphereActiveState.rollAnimations.forEach((animation) => {
    if (animation.cancel) {
      animation.cancel();
    }
  });

  // Clear velocity trackers
  sphereActiveState.velocityTrackers.clear();

  console.log("🧹 Sphere resources cleaned up");
}

// Event Listeners - Sphere Lifecycle
document.addEventListener("DOMContentLoaded", function () {
  const launchTime = performance.now();

  try {
    initializeSphereVelocity();
    trackSpherePerformance("Sphere Initialization", launchTime);
  } catch (error) {
    handleSphereError(error, "Initialization");
  }
});

// Page Visibility API - Sphere State Management
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("🔄 Sphere entering background momentum");
    // Pause non-essential animations
  } else {
    console.log("🔄 Sphere returning to active velocity");
    // Resume animations
  }
});

// Window Resize - Responsive Sphere Dynamics
window.addEventListener("resize", function () {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 768 && sphereActiveState.navigationOpen) {
    const burgerSphere = document.getElementById("mobile-momentum-toggle");
    const mobileSlide = document.getElementById("mobile-navigation-ramp");

    if (burgerSphere && mobileSlide) {
      toggleMobileVelocity(burgerSphere, mobileSlide);
    }
  }
});

// Cleanup on page unload
window.addEventListener("beforeunload", cleanupSphereResources);

// Export for debugging in development
if (sphereConfig.velocityMode === "development") {
  window.sphereDebug = {
    state: sphereActiveState,
    config: sphereConfig,
    elements: sphereElements,
    trackPerformance: trackSpherePerformance,
  };
}

// --- Scroll to Top Button ---
function createScrollToTopBtn() {
  if (document.getElementById("scroll-to-top-btn")) return;
  const btn = document.createElement("button");
  btn.id = "scroll-to-top-btn";
  btn.className = "scroll-to-top-btn";
  btn.title = "Scroll to top";
  btn.innerHTML =
    '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M12 5L5 12M12 5l7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  document.body.appendChild(btn);
  // Показ/скрытие при прокрутке
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
}
// Инициализация после загрузки DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createScrollToTopBtn);
} else {
  createScrollToTopBtn();
}

// --- Cookie Bar Logic ---
function showCookieBarIfNeeded() {
  var bar = document.getElementById("cookie-bar");
  var btn = document.getElementById("cookie-accept-btn");
  if (!bar || !btn) return;
  if (localStorage.getItem("cookieAccepted") === "yes") {
    bar.style.display = "none";
    return;
  }
  bar.style.display = "flex";
  btn.onclick = function () {
    localStorage.setItem("cookieAccepted", "yes");
    bar.style.display = "none";
  };
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showCookieBarIfNeeded);
} else {
  showCookieBarIfNeeded();
}
