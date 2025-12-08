// https://nuxt.com/docs/api/configuration/nuxt-configg
export default defineNuxtConfig({
  compatibilityDate: "2025-11-04",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  nitro: {
    preset: "vercel",
    sourceMap: false,
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Varnish",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "alternate icon", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/icons/Company logo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;300;400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          innerHTML: `
            (function() {
              function initMobileMenu() {
                const button = document.getElementById('mobile-menu-toggle');
                const menu = document.getElementById('mobile-menu');
                if (button && menu) {
                  button.addEventListener('click', function(e) {
                    const currentDisplay = menu.style.display || window.getComputedStyle(menu).display;
                    menu.style.display = currentDisplay === 'none' ? 'block' : 'none';
                  });
                }
              }
              
              function initSolutionsDropdown() {
                const button = document.getElementById('solutions-dropdown-button');
                const menu = document.getElementById('solutions-dropdown-menu');
                const arrow = document.getElementById('solutions-dropdown-arrow');
                const container = document.getElementById('solutions-dropdown-container');
                
                if (button && menu) {
                  // Close dropdown when clicking outside (inline onclick handles toggle)
                  document.addEventListener('click', function(e) {
                    if (container && !container.contains(e.target)) {
                      menu.style.display = 'none';
                      if (arrow) {
                        arrow.style.transform = 'rotate(0deg)';
                      }
                    }
                  });
                  
                  // Prevent dropdown from closing when clicking inside
                  menu.addEventListener('click', function(e) {
                    e.stopPropagation();
                  });
                }
              }
              
              function initConfigCards() {
                console.log('Initializing config cards...');
                const cards = document.querySelectorAll('.config-card');
                console.log('Found', cards.length, 'config cards');
                
                cards.forEach(function(card, index) {
                  const content = card.querySelector('.config-card-content');
                  const arrow = card.querySelector('.config-card-arrow');
                  const button = card.querySelector('button');
                  
                  // Initialize as collapsed using classes
                  if (content) {
                    content.classList.add('config-card-content-collapsed');
                    content.classList.remove('config-card-content-expanded');
                  }
                  if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                  }
                  
                  // Add click handler if button exists (accordion behavior)
                  if (button) {
                    button.addEventListener('click', function(e) {
                      const allCards = document.querySelectorAll('.config-card');
                      const clickedContent = content;
                      const clickedArrow = arrow;
                      const wasOpen = clickedContent ? clickedContent.classList.contains('config-card-content-expanded') : false;
                      
                      // Close all cards first
                      allCards.forEach(function(c) {
                        const cContent = c.querySelector('.config-card-content');
                        const cArrow = c.querySelector('.config-card-arrow');
                        if (cContent) {
                          cContent.classList.remove('config-card-content-expanded');
                          cContent.classList.add('config-card-content-collapsed');
                        }
                        if (cArrow) {
                          cArrow.style.transform = 'rotate(0deg)';
                        }
                      });
                      
                      // Open clicked card if it wasn't already open
                      if (clickedContent && !wasOpen) {
                        clickedContent.classList.remove('config-card-content-collapsed');
                        clickedContent.classList.add('config-card-content-expanded');
                        if (clickedArrow) {
                          clickedArrow.style.transform = 'rotate(90deg)';
                        }
                      }
                    });
                  }
                });
              }
              
              function initAll() {
                initMobileMenu();
                initSolutionsDropdown();
                initConfigCards();
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAll);
              } else {
                initAll();
              }
              setTimeout(initAll, 300);
            })();
          `,
          type: 'text/javascript'
        }
      ],
    },
  },
  alias: {
    "@": ".",
  },
});