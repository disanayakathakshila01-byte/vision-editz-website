export interface ServiceItem {
  id: string;
  title: string;
  categoryName: string;
  badge: string;
  description: string;
  iconName: string;
  features: string[];
  turnaround: string;
  highlight?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  beforeImage?: string;
  tags: string[];
  client: string;
  date: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  projectType: string;
  rating: number;
  content: string;
  avatar: string;
  location: string;
}

export const STUDIO_INFO = {
  name: 'Vision Editz',
  tagline: 'Bringing Your Ideas to Life',
  subheading:
    'Professional photo editing, graphic design and creative digital solutions designed to make your ideas stand out.',
  whatsappNumber: '+94771234567', // Sri Lanka format placeholder
  whatsappDisplay: '+94 77 123 4567',
  whatsappMessage:
    "Hello Vision Editz! I'm interested in your design and photo editing services. I'd like to get a quote.",
  email: 'hello@visioneditz.com',
  facebookUrl: 'https://facebook.com/visioneditz',
  instagramUrl: 'https://instagram.com/visioneditz',
  tiktokUrl: 'https://tiktok.com/@visioneditz',
  location: 'Colombo, Sri Lanka (Serving Worldwide)',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-editing',
    title: 'AI Photo Editing',
    categoryName: 'AI Editing',
    badge: 'Popular & Fast',
    description:
      'Harness cutting-edge neural photo enhancement to resurrect damaged memories and scale visual fidelity to 8K clarity.',
    iconName: 'Wand2',
    features: [
      'AI enhancement & upscaling',
      'Old photo restoration & repair',
      'Old photo colorization & improvement',
      'Face & micro-detail enhancement',
    ],
    turnaround: '12 – 24 Hours',
    highlight: true,
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing',
    categoryName: 'Photo Editing',
    badge: 'Studio Retouch',
    description:
      'High-end studio grade image retouching and creative manipulations for models, creators, events, and photographers.',
    iconName: 'Camera',
    features: [
      'Professional skin & beauty retouching',
      'Clean background removal & editing',
      'Vibrant color grading & correction',
      'Creative photo manipulation & effects',
    ],
    turnaround: '24 Hours',
  },
  {
    id: 'birthday-designs',
    title: 'Birthday Designs',
    categoryName: 'Birthday Designs',
    badge: 'Celebrations',
    description:
      'Make birthdays unforgettable with personalized aesthetic posters, cinematic photo edits, and modern invitation cards.',
    iconName: 'Sparkles',
    features: [
      'Custom luxury birthday posters',
      'Creative birthday photo edits',
      'Modern digital & print invitations',
      'Viral social media birthday flyers',
    ],
    turnaround: '24 – 48 Hours',
  },
  {
    id: 'banner-designs',
    title: 'Banner Designs',
    categoryName: 'Banners',
    badge: 'High Impact',
    description:
      'Eye-catching promotional banners crafted for businesses, YouTube, Facebook cover headers, and billboard displays.',
    iconName: 'Layers',
    features: [
      'Corporate & business banners',
      'High-CTR promotional ad banners',
      'Facebook & YouTube header covers',
      'Event roll-up banners & stage backdrops',
    ],
    turnaround: '24 – 48 Hours',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    categoryName: 'Logos',
    badge: 'Brand Identity',
    description:
      'Memorable, distinctive logo marks and comprehensive visual brand identities that elevate your venture above competitors.',
    iconName: 'Brush',
    features: [
      'Modern vector business logos',
      'Brand identity & color typography',
      'Minimalist & monogram concepts',
      'Print-ready vector source delivery',
    ],
    turnaround: '2 – 3 Days',
    highlight: true,
  },
  {
    id: 'social-media',
    title: 'Social Media Designs',
    categoryName: 'Social Media',
    badge: 'Engagement',
    description:
      'Viral-ready Instagram grids, promotional Facebook creatives, carousels, and thumb-stopping advertisements.',
    iconName: 'Share2',
    features: [
      'Facebook & Instagram feed creatives',
      'Multi-slide educational carousels',
      'Promotional flash-sale posts',
      'High-converting sponsored ads',
    ],
    turnaround: '24 Hours',
  },
  {
    id: 'cv-designs',
    title: 'CV Designs',
    categoryName: 'CV Designs',
    badge: 'Career Boost',
    description:
      'ATS-friendly, aesthetically structured professional resumes and creative curriculum vitaes that win interviews.',
    iconName: 'FileText',
    features: [
      'Executive & corporate CV layouts',
      'Modern dark & light designer formats',
      'Creative portfolio CV layouts',
      'Editable PDF & print-optimized formats',
    ],
    turnaround: '24 Hours',
  },
  {
    id: 'business-designs',
    title: 'Business Designs',
    categoryName: 'Business Designs',
    badge: 'Commercial',
    description:
      'Full-spectrum commercial collateral including product packaging, labels, promotional flyers, brochures, and posters.',
    iconName: 'Palette',
    features: [
      'Custom product labels & stickers',
      'Commercial marketing posters',
      'Double-sided business flyers & tri-folds',
      'Corporate stationery & merchandise kits',
    ],
    turnaround: '2 – 4 Days',
  },
];

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Photo Editing', label: 'Photo Editing' },
  { id: 'AI Editing', label: 'AI Editing' },
  { id: 'Birthday Designs', label: 'Birthday Designs' },
  { id: 'Logos', label: 'Logos' },
  { id: 'Banners', label: 'Banners' },
  { id: 'Social Media', label: 'Social Media' },
  { id: 'Business Designs', label: 'Business Designs' },
  { id: 'CV Designs', label: 'CV Designs' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'High-Fashion Studio Retouch & Lighting',
    category: 'Photo Editing',
    categoryLabel: 'Photo Editing',
    description:
      'Magazine cover beauty retouching, micro-texture preservation, frequency separation and editorial color balancing.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Beauty Retouch', 'Frequency Separation', 'Editorial Lighting'],
    client: 'Aura Fashion Studio',
    date: '2026',
  },
  {
    id: 'port-2',
    title: 'Heritage Vintage Photo AI Restoration',
    category: 'AI Editing',
    categoryLabel: 'AI Editing',
    description:
      'Scratched 1960s family portrait restored using AI deep neural colorization, facial sharpening, and noise suppression.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI Restoration', 'Facial Recovery', 'Heritage Colorization'],
    client: 'Private Collector',
    date: '2026',
  },
  {
    id: 'port-3',
    title: 'Neon Midnight Birthday Celebration Poster',
    category: 'Birthday Designs',
    categoryLabel: 'Birthday Designs',
    description:
      'Luxury cyberpunk-themed birthday poster with custom typography, cinematic 3D lighting, and personalized guest invitation.',
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    tags: ['Birthday Poster', 'Neon Aesthetic', 'Custom Typography'],
    client: 'Kavindu S.',
    date: '2026',
  },
  {
    id: 'port-4',
    title: 'Verve Studio Minimalist Brand Mark',
    category: 'Logos',
    categoryLabel: 'Logos',
    description:
      'Geometric monogram brand identity for a modern architectural firm with golden ratio grid construction and dark mode stationery.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Brand Identity', 'Minimal Logo', 'Vector Guideline'],
    client: 'Verve Architect Studio',
    date: '2026',
  },
  {
    id: 'port-5',
    title: 'Cyber Week E-Commerce Promotional Banner',
    category: 'Banners',
    categoryLabel: 'Banners',
    description:
      'Ultra high-converting promotional banner campaign with 3D typography, striking contrast, and multi-format display exports.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Banner', 'High Conversion', '3D Asset Render'],
    client: 'TechPulse Store',
    date: '2026',
  },
  {
    id: 'port-6',
    title: 'Botanical Skincare Social Media Campaign',
    category: 'Social Media',
    categoryLabel: 'Social Media',
    description:
      'Nine-grid organic skincare launch campaign for Instagram with matching story overlays and dynamic promotional hooks.',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    tags: ['Instagram Grid', 'Brand Aesthetics', 'Product Carousel'],
    client: 'Lumina Organics',
    date: '2026',
  },
  {
    id: 'port-7',
    title: 'Artisan Cold Brew Bottle Label & Packaging',
    category: 'Business Designs',
    categoryLabel: 'Business Designs',
    description:
      'Tactile craft beverage label with gold foil accents, regulatory nutritional block, and die-cut bottle sleeve.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Product Label', 'Packaging Design', 'Print Die-Cut'],
    client: 'Roast & Co.',
    date: '2026',
  },
  {
    id: 'port-8',
    title: 'Executive Dark Mode Tech Leader CV',
    category: 'CV Designs',
    categoryLabel: 'CV Designs',
    description:
      'Clean modern curriculum vitae engineered for VP of Engineering role, featuring ATS-optimized hierarchy and project spotlights.',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Modern CV', 'ATS Compatible', 'Executive Layout'],
    client: 'Senior Lead Candidate',
    date: '2026',
  },
  {
    id: 'port-9',
    title: 'Surreal Cyberpunk Conceptual Matte Painting',
    category: 'Photo Editing',
    categoryLabel: 'Photo Editing',
    description:
      'Complex multi-exposure digital blend merging urban architecture with atmospheric fog, neon reflections, and vehicle glows.',
    image:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Matte Painting', 'Color Grading', 'Creative Composite'],
    client: 'Digital Arts Monthly',
    date: '2026',
  },
  {
    id: 'port-10',
    title: 'AI Face Detail & Texture Micro-Upscaling',
    category: 'AI Editing',
    categoryLabel: 'AI Editing',
    description:
      'CCTV and low-resolution portrait reconstruction yielding crystal clear iris reflections and realistic skin pores without artifacts.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Neural Upscale', 'Clarity Restoration', 'Super Resolution'],
    client: 'Archival Media Group',
    date: '2026',
  },
  {
    id: 'port-11',
    title: 'Aesthetic Golden Jubilee Birthday Invitation',
    category: 'Birthday Designs',
    categoryLabel: 'Birthday Designs',
    description:
      'Embossed gold calligraphy, elegant floral composition, and QR-code enabled RSVP card layout for a 50th milestone celebration.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Golden Milestone', 'Custom Invitation', 'Print Production'],
    client: 'Fernando Family',
    date: '2026',
  },
  {
    id: 'port-12',
    title: 'Summit Conference Roll-Up & Stage Banner',
    category: 'Banners',
    categoryLabel: 'Banners',
    description:
      'Large format 2m x 0.85m roll-up display banners for annual tech summit with sponsor clusters and high-resolution typography.',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    tags: ['Event Banner', 'Stage Backdrop', 'Vector Graphics'],
    client: 'Innovate Summit 2026',
    date: '2026',
  },
];

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: 'ba-1',
    title: 'Vintage Photo AI Restoration & Colorization',
    category: 'AI Photo Editing',
    description:
      'Faded, scratched sepia photograph restored with neural facial reconstruction, noise clean-up, and historically accurate vibrant colorization.',
    // Unsplash vintage portrait:
    beforeImage:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=40&sat=-100&bri=-15',
    afterImage:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=95',
    beforeLabel: 'Faded & Damaged Original',
    afterLabel: 'Vision Editz AI Restored (8K)',
  },
  {
    id: 'ba-2',
    title: 'Studio Portrait Beauty Retouch & Color Grading',
    category: 'Professional Retouching',
    description:
      'Raw camera capture transformed with gentle skin smoothing, eye sparkle enhancement, stray hair cleanup, and cinematic warmth grading.',
    beforeImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=50&sat=-20&bri=-10',
    afterImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=95&con=10',
    beforeLabel: 'Raw Unprocessed Shot',
    afterLabel: 'Magazine Editorial Grade',
  },
  {
    id: 'ba-3',
    title: 'Product Background Replacement & Studio Lighting',
    category: 'Commercial Business Design',
    description:
      'Ordinary tabletop phone snapshot converted into luxury e-commerce catalog ready visuals with clean gradient backdrop and studio reflections.',
    beforeImage:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=40&sat=-40&bri=-25',
    afterImage:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=95',
    beforeLabel: 'Flat Mobile Capture',
    afterLabel: 'Studio Commercial Grade',
  },
  {
    id: 'ba-4',
    title: 'Landscape Cinematic Mood & Dynamic Sky Grading',
    category: 'Creative Manipulation',
    description:
      'Overcast flat exposure dramatically enhanced with golden hour ambient light, rich shadows, and luminous atmospheric depth.',
    beforeImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=40&sat=-30&bri=-20',
    afterImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=95',
    beforeLabel: 'Overcast Flat Raw',
    afterLabel: 'Cinematic Golden Hour',
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: 'why-1',
    title: 'Creative Ideas',
    description:
      'Unique designs crafted strictly from your concepts and requirements. No cookie-cutter templates.',
    iconName: 'Wand2',
    accentColor: 'from-cyan-500/20 to-cyan-500/0',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'why-2',
    title: 'Premium Quality',
    description:
      'Pixel-perfect precision, 8K ultra clarity, and professional-looking results with relentless attention to detail.',
    iconName: 'Award',
    accentColor: 'from-violet-500/20 to-violet-500/0',
    borderColor: 'border-violet-500/30',
  },
  {
    id: 'why-3',
    title: 'Custom Designs',
    description:
      'Every composition is tailored to your brand personality, personal milestone, or specific audience demands.',
    iconName: 'Palette',
    accentColor: 'from-amber-500/20 to-amber-500/0',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'why-4',
    title: 'Fast & Friendly Service',
    description:
      'Quick response times via WhatsApp, flexible revisions, and dedicated friendly designer communication.',
    iconName: 'Zap',
    accentColor: 'from-emerald-500/20 to-emerald-500/0',
    borderColor: 'border-emerald-500/30',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Contact Us',
    description:
      'Reach out via WhatsApp or our request form. Tell us what design or photo editing you need.',
    tag: 'Start Conversation',
  },
  {
    step: '02',
    title: 'Send Your Photos / Details',
    description:
      'Provide your high-res photos, text copy, brand colors, or reference styles for the project.',
    tag: 'Asset Brief',
  },
  {
    step: '03',
    title: 'Design & Editing',
    description:
      'We craft your design professionally using advanced editing suites and AI restoration tools.',
    tag: 'Crafting in Progress',
  },
  {
    step: '04',
    title: 'Final Delivery',
    description:
      'Review your preview, request fine-tuning if needed, and receive print-ready full-res assets.',
    tag: 'High-Res Delivery',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dilshan Perera',
    role: 'E-commerce Brand Owner',
    projectType: 'Product Banner & Photo Editing',
    rating: 5,
    content:
      'Vision Editz completely transformed our product catalog imagery. The lighting and background replacements look like a multi-thousand dollar studio shoot. Very fast turnaround via WhatsApp!',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    location: 'Colombo',
  },
  {
    id: 'test-2',
    name: 'Nadeesha Senanayake',
    role: 'Family Heritage Archivist',
    projectType: 'AI Photo Restoration',
    rating: 5,
    content:
      'I sent a torn, water-damaged picture of my grandparents from 1958. Vision Editz restored their facial expressions with breathtaking detail and natural colors. My entire family was stunned.',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    location: 'Kandy',
  },
  {
    id: 'test-3',
    name: 'Kasun Jayawardena',
    role: 'Tech Lead / Applicant',
    projectType: 'Executive CV Design',
    rating: 5,
    content:
      'The dark-mode professional CV layout designed by Vision Editz got me calls for 3 executive engineering interviews within a week. The typography and layout structure are top tier.',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    location: 'Galle',
  },
  {
    id: 'test-4',
    name: 'Shehani Wickramasinghe',
    role: 'Event Organizer',
    projectType: 'Birthday Poster & Social Flyer',
    rating: 5,
    content:
      'Ordered a custom birthday poster design on short notice. The creativity, neon aesthetic, and quick communication made the whole process effortless. Highly recommend Vision Editz!',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    location: 'Negombo',
  },
];
