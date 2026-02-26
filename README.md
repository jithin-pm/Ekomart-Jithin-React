#  Ekomart — React E-Commerce Storefront

Ekomart is a modern, responsive e-commerce frontend built with **React 19** and **Vite**. It features a fully functional home page with a hero banner, product listings, category sliders, weekly sales, a blog section, and a complete header/footer system — all styled with custom CSS.

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router DOM v7](https://reactrouter.com/) | Client-side routing |
| [Swiper.js](https://swiperjs.com/) | Touch-friendly sliders |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |


---

## 📁 Project Structure

```
Ekomart-react/
├── public/
│   ├── assets/              # Static image assets (banners, products, etc.)
│   └── vite.svg             # Default Vite favicon
│
├── src/
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── HeaderTopBar.jsx    # Top info strip (contact, social links)
│   │   │   ├── HeaderSearchBar.jsx # Logo, search bar, cart/wishlist icons
│   │   │   ├── HeaderNavBar.jsx    # Main desktop navigation menu
│   │   │   ├── HeaderMobile.jsx    # Mobile header with hamburger toggle
│   │   │   └── styles/             # Header-specific CSS
│   │   │
│   │   ├── styles/                 # Per-component CSS files
│   │   │
│   │   ├── Banner.jsx              # Hero carousel banner
│   │   ├── BuyingEasyway.jsx       # "How to buy" feature strip
│   │   ├── CategorySlider.jsx      # Swiper-powered category carousel
│   │   ├── CategoryFeatureCards.jsx# Highlighted category cards
│   │   ├── PopularProducts.jsx     # Popular products grid
│   │   ├── WeeklySales.jsx         # Weekly deals / flash sales section
│   │   ├── BlogSection.jsx         # Latest blog posts section
│   │   ├── MobileMenu.jsx          # Off-canvas mobile navigation drawer
│   │   ├── Footer.jsx              # Full-width site footer
│   │   ├── Copyright.jsx           # Bottom copyright bar
│   │   └── ScrollToTop.jsx         # Floating scroll-to-top button
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx          # Shell layout (header + outlet + footer)
│   │
│   ├── pages/
│   │   └── Home.jsx                # Home page — assembles all sections
│   │
│   ├── App.jsx                     # Root component with router setup
│   ├── main.jsx                    # React DOM entry point
│   └── index.css                   # Global base styles
│
├── index.html                      # HTML shell
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── eslint.config.js                # ESLint configuration
└── package.json                    # Dependencies & scripts
```

## 🛠️ Getting Started

### Installation

1. **Clone or download** the repository:
   ```bash
   git clone <repository-url>
   cd Ekomart-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The app will start at **[http://localhost:5173](http://localhost:5173)** by default. Vite provides instant hot module replacement (HMR) for a fast development experience.

### Other Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Build the optimised production bundle into `dist/` |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run ESLint to check for code issues |