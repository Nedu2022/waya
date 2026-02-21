/* ============================
   WAYABANK — Interactive Functionality
   ============================ */

document.addEventListener("DOMContentLoaded", () => {
  // ========== Mobile Menu ==========
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.style.overflow = mobileNav.classList.contains("active")
      ? "hidden"
      : "";
  });

  // ========== Sticky Navbar ==========
  const navbar = document.getElementById("navbar");
  let lastScrollY = 0;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  // ========== Scroll Reveal ==========
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ========== Loan Calculator ==========
  const loanAmountSlider = document.getElementById("loanAmount");
  const loanDurationSlider = document.getElementById("loanDuration");
  const loanAmountDisplay = document.getElementById("loanAmountDisplay");
  const loanDurationDisplay = document.getElementById("loanDurationDisplay");
  const monthlyPaymentEl = document.getElementById("monthlyPayment");
  const principalDisplayEl = document.getElementById("principalDisplay");
  const interestDisplayEl = document.getElementById("interestDisplay");
  const totalDisplayEl = document.getElementById("totalDisplay");

  const interestRate = 0.05; // 5% per annum

  function formatCurrency(amount) {
    return "₦" + new Intl.NumberFormat("en-NG").format(Math.round(amount));
  }

  function calculateLoan() {
    const principal = parseInt(loanAmountSlider.value);
    const months = parseInt(loanDurationSlider.value);
    const monthlyRate = interestRate / 12;

    // Amortized loan formula
    const numerator =
      principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const monthlyPayment = numerator / denominator;
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    loanAmountDisplay.textContent = formatCurrency(principal);
    loanDurationDisplay.textContent = months + " months";
    monthlyPaymentEl.textContent = formatCurrency(monthlyPayment);
    principalDisplayEl.textContent = formatCurrency(principal);
    interestDisplayEl.textContent = formatCurrency(totalInterest);
    totalDisplayEl.textContent = formatCurrency(totalPayment);

    // Update slider fill
    updateSliderFill(loanAmountSlider);
    updateSliderFill(loanDurationSlider);
  }

  function updateSliderFill(slider) {
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;
    const percentage = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #FF6B00 ${percentage}%, rgba(255,255,255,0.15) ${percentage}%)`;
  }

  loanAmountSlider.addEventListener("input", calculateLoan);
  loanDurationSlider.addEventListener("input", calculateLoan);

  // Initial calculation
  calculateLoan();

  // ========== Counter Animation ==========
  const counters = document.querySelectorAll(".counter");
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
        }
      });
    },
    { threshold: 0.3 },
  );

  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) counterObserver.observe(statsBar);

  function animateCounters() {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const prefix = counter.getAttribute("data-prefix") || "";
      const suffix = counter.getAttribute("data-suffix") || "";
      const duration = 2000;
      const startTime = performance.now();

      function formatCounter(value) {
        if (value >= 1000000000) {
          return prefix + (value / 1000000000).toFixed(0) + "B" + suffix;
        }
        if (value >= 1000000) {
          return prefix + (value / 1000000).toFixed(0) + "M" + suffix;
        }
        if (value >= 1000) {
          return prefix + new Intl.NumberFormat("en-NG").format(value) + suffix;
        }
        return prefix + value + suffix;
      }

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * easedProgress);

        counter.textContent = formatCounter(currentValue);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // Ensure final value is set with + suffix
          if (target >= 1000 && !suffix) {
            counter.textContent = formatCounter(target) + "+";
          } else {
            counter.textContent = formatCounter(target);
          }
        }
      }

      requestAnimationFrame(update);
    });
  }

  // ========== Smooth Scrolling ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Global function for mobile nav close
function closeMobile() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  hamburger.classList.remove("active");
  mobileNav.classList.remove("active");
  document.body.style.overflow = "";
}
