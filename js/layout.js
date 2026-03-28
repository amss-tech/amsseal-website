// nav logo SVG (reused everywhere)
const LOGO_SVG = `
<svg class="nav-brand-svg" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#00C896"/><stop offset="100%" stop-color="#00BFFF"/>
  </linearGradient></defs>
  <rect width="60" height="60" rx="10" fill="url(#lg)"/>
  <polygon points="10,32 30,14 50,32" fill="#0f1f3d"/>
  <rect x="19" y="32" width="22" height="17" fill="#0f1f3d"/>
  <rect x="27" y="40" width="6" height="9" fill="rgba(0,191,255,0.4)"/>
  <rect x="21" y="34" width="7" height="7" rx="1" fill="rgba(0,191,255,0.5)"/>
  <rect x="32" y="34" width="7" height="7" rx="1" fill="rgba(0,191,255,0.5)"/>
  <circle cx="23" cy="11" r="2.5" fill="#2a7fc1"/>
  <circle cx="30" cy="7"  r="3"   fill="#2a7fc1"/>
  <circle cx="37" cy="11" r="2.5" fill="#2a7fc1"/>
  <path d="M7,44 Q16,38 22,42 Q30,47 38,42 Q44,38 53,44 L53,51 Q44,57 38,53 Q30,48 22,53 Q16,57 7,51Z" fill="#0f1f3d" opacity=".9"/>
</svg>`;

const NAV_HTML = `
<nav class="site-nav">
  <a href="index.html" class="nav-brand">
    ${LOGO_SVG}
    <div class="nav-brand-text">
      <div class="nav-brand-name">A&amp;M SEAL AND SHIELD</div>
      <div class="nav-brand-sub">CRAWL SPACE ENCAPSULATION</div>
    </div>
  </a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="gallery.html">Gallery</a>
    <a href="about.html">About</a>
    <a href="reviews.html">Reviews</a>
    <a href="contact.html" class="nav-cta">Free Estimate</a>
  </div>
  <div class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="gallery.html">Gallery</a>
  <a href="about.html">About Us</a>
  <a href="reviews.html">Reviews</a>
  <a href="contact.html" class="mob-cta">Free Estimate</a>
</div>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">A&amp;M SEAL AND SHIELD</div>
        <p class="footer-brand-desc">Alabama's trusted crawl space encapsulation specialists. Protecting what's under your home — permanently.</p>
        <div class="footer-badge" style="margin-top:20px;">🛡️ Licensed &amp; Insured | Alabama LLC</div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html">Full Encapsulation</a></li>
          <li><a href="services.html">Drainage Systems</a></li>
          <li><a href="services.html">Dehumidifiers</a></li>
          <li><a href="services.html">Repairs</a></li>
          <li><a href="services.html">Pre-Sale Inspections</a></li>
          <li><a href="services.html">Maintenance Plans</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li>📱 (xxx) xxx-xxxx</li>
          <li>📧 info@amsseal.com</li>
          <li>🌐 amsseal.com</li>
          <li>📍 Serving Alabama</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 A&amp;M Seal and Shield LLC. All rights reserved.</p>
      <p>Crawl Space Encapsulation | Alabama</p>
    </div>
  </div>
</footer>`;

const TRUST_HTML = `
<div class="trust-strip">
  <div class="trust-strip-inner">
    <div class="trust-item">✅ Licensed &amp; Insured</div>
    <div class="trust-item">📋 Free Written Estimates</div>
    <div class="trust-item">🤝 Realtor &amp; Inspector Preferred</div>
    <div class="trust-item">⭐ Satisfaction Guaranteed</div>
    <div class="trust-item">📍 Proudly Serving Alabama</div>
  </div>
</div>`;

// inject
document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
if (document.getElementById('trust-placeholder')) document.getElementById('trust-placeholder').innerHTML = TRUST_HTML;
document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
