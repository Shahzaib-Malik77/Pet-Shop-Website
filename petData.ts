export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  tag: string;
  img: string;
  gallery: string[];
  category: string;
  rating: number;
  reviewCount: number;
  short: string;
  description: string;
  features: string[];
  reviews: Review[];
}

export interface PostSection {
  heading: string;
  body: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read: string;
  img: string;
  author: string;
  date: string;
  intro: string;
  sections: PostSection[];
  takeaway: string;
}

export interface Testimonial {
  name: string;
  pet: string;
  text: string;
  rating: number;
}

export interface Faq {
  q: string;
  a: string;
}

const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=800`;

export const products: Product[] = [
  {
    id: 'cozy-cat-house',
    name: 'Cozy Cat House',
    price: 49.99,
    oldPrice: 64.99,
    tag: 'Bestseller',
    img: 'https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png',
    gallery: [px(406014), px(617278)],
    category: 'Beds & Houses',
    rating: 4.8,
    reviewCount: 214,
    short: 'A plush, enclosed hideaway that gives your cat a warm, secure place to nap and watch the world.',
    description:
      'Hand-stitched from breathable felt with a removable, machine-washable cushion. The enclosed design reduces anxiety and blocks drafts, while the anti-slip base keeps it firmly in place on any floor. Sized for one adult cat up to 7kg.',
    features: ['Breathable felt shell', 'Removable washable cushion', 'Anti-slip base', 'Holds up to 7kg', 'Neutral tones fit any room'],
    reviews: [
      { name: 'Hina K.', rating: 5, date: '2 weeks ago', text: 'My cat took to it in minutes. The cushion is so soft and it washes beautifully.' },
      { name: 'Daniyal R.', rating: 5, date: '1 month ago', text: 'Sturdy, looks premium, and stays put. Worth every rupee.' },
      { name: 'Ayesha M.', rating: 4, date: '2 months ago', text: 'Perfect for my kitten. Slightly small for my 8kg tomcat though.' }
    ]
  },
  {
    id: 'plush-dog-bed',
    name: 'Plush Dog Bed',
    price: 39.0,
    tag: 'New',
    img: 'https://bedsurehome.com/cdn/shop/files/07_3213b409-7d9d-403d-860c-2af78cca4f9e.jpg?v=1758522337',
    gallery: ['https://bedsurehome.com/cdn/shop/collections/pet_502f5ac0-980a-42ee-ad1b-6d95315028fd.jpg?v=1782892499', 'https://snoozerpetproducts.com/wp-content/uploads/2021/02/CozyCave_Rectangle_Environment-HeatherGray_SQ-7.jpg'],
    category: 'Beds & Houses',
    rating: 4.8,
    reviewCount: 178,
    short: 'Orthopedic memory-foam dog bed that cushions joints and eases pressure points for better sleep.',
    description:
      'Filled with shredded memory foam that contours to your dog’s body and relieves joint pressure — ideal for older dogs. The water-resistant liner protects the foam from accidents, and the cover unzips for easy washing.',
    features: ['Memory-foam fill', 'Water-resistant liner', 'Machine-washable cover', 'Non-slip bottom', 'Joint & hip support'],
    reviews: [
      { name: 'Sara J.', rating: 5, date: '3 weeks ago', text: 'My senior lab finally sleeps through the night. Huge difference.' },
      { name: 'Bilal A.', rating: 5, date: '1 month ago', text: 'Cover washes great and the foam bounces back perfectly.' },
      { name: 'Marium T.', rating: 4, date: '2 months ago', text: 'Great bed but shipping took a little longer than expected.' }
    ]
  },
  {
    id: 'premium-pet-food',
    name: 'Premium Pet Food',
    price: 24.5,
    tag: 'Organic',
    img: 'https://mediterraneum.pt/images/KAGdTeyDugVsI572PQCF.png',
    gallery: [
      'https://images.unsplash.com/photo-1655210913315-e8147faf7600?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1663045476550-6ecee3c164da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    category: 'Food',
    rating: 4.8,
    reviewCount: 309,
    short: 'Grain-free recipe with real deboned chicken, superfoods, and zero artificial additives.',
    description:
      'Vet-formulated with deboned chicken as the first ingredient, plus sweet potato, blueberries, and salmon oil for a glossy coat. No corn, wheat, soy, or artificial colors. Suitable for all adult breeds.',
    features: ['Real deboned chicken first', 'Grain-free recipe', 'Omega 3 & 6 from salmon oil', 'No artificial additives', 'Vet-formulated'],
    reviews: [
      { name: 'Usman G.', rating: 5, date: '1 week ago', text: 'Coat is shinier within two weeks. My picky eater loves it.' },
      { name: 'Fatima N.', rating: 5, date: '3 weeks ago', text: 'Clean ingredients and a fair price. We have it on subscription now.' },
      { name: 'Kashif H.', rating: 4, date: '1 month ago', text: 'Good food, wish the bag had a resealable zip.' }
    ]
  },
  {
    id: 'travel-carrier',
    name: 'Travel Carrier',
    price: 65.0,
    tag: 'Travel',
    img: 'https://images.unsplash.com/photo-1677847627380-0926540997ae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1677847627380-0926540997ae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1774167096754-330519a788c6?q=80&w=643&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    category: 'Travel',
    rating: 4.8,
    reviewCount: 142,
    short: 'Airline-approved soft carrier with mesh ventilation and a padded shoulder strap.',
    description:
      'TSA and most airline approved (check your carrier’s dimensions). Padded base, three mesh panels for airflow, and two access points. Folds flat for storage. Reflective trim for evening walks.',
    features: ['Airline-approved size', '3 mesh ventilation panels', 'Padded shoulder strap', 'Folds flat for storage', 'Reflective trim'],
    reviews: [
      { name: 'Nida S.', rating: 5, date: '5 days ago', text: 'Flew cross-country with zero issues. Cat was calm and ventilated.' },
      { name: 'Hamza W.', rating: 5, date: '1 month ago', text: 'Sturdy zips and the padding is genuinely comfortable.' },
      { name: 'Rabia D.', rating: 4, date: '2 months ago', text: 'Great carrier, runs a touch small for larger cats.' }
    ]
  },
  {
    id: 'grooming-kit',
    name: 'Grooming Kit',
    price: 18.99,
    tag: 'Care',
    img: '/images/grooming_kit.png',
    gallery: ['/images/grooming_kit.png', '/images/grooming_kit.png'],
    category: 'Grooming',
    rating: 4.7,
    reviewCount: 96,
    short: 'A 6-piece grooming set: brush, nail clipper, comb, and grooming glove in a compact pouch.',
    description:
      'Everything you need between grooming appointments. Stainless-steel tools with ergonomic, non-slip handles. The silicone grooming glove is gentle on sensitive skin and traps loose fur.',
    features: ['6 stainless-steel tools', 'Ergonomic non-slip grips', 'Silicone grooming glove', 'Travel pouch included', 'Suitable for dogs & cats'],
    reviews: [
      { name: 'Tariq M.', rating: 5, date: '2 weeks ago', text: 'Quality tools, the nail clipper is sharp and precise.' },
      { name: 'Sana B.', rating: 4, date: '1 month ago', text: 'Good kit for the price. The glove is my dog’s favorite.' }
    ]
  },
  {
    id: 'interactive-toys-set',
    name: 'Interactive Toys Set',
    price: 14.0,
    tag: 'Play',
    img: '/images/interactive_toys.png',
    gallery: ['/images/interactive_toys.png', '/images/interactive_toys.png'],
    category: 'Toys',
    rating: 4.7,
    reviewCount: 134,
    short: 'A four-toy enrichment bundle that sparks hunting instincts and beats boredom.',
    description:
      'Feather wands, a crinkle tunnel, a treat puzzle, and a rolling bell ball. Designed for daily mental stimulation that prevents destructive behavior. Non-toxic, pet-safe materials.',
    features: ['4 enrichment toys', 'Treat puzzle included', 'Non-toxic materials', 'Reduces boredom chewing', 'Great for indoor cats'],
    reviews: [
      { name: 'Imran F.', rating: 5, date: '1 week ago', text: 'My cat is obsessed with the puzzle. Best small purchase ever.' },
      { name: 'Nimra P.', rating: 4, date: '3 weeks ago', text: 'Good variety, the feather wand could be a bit sturdier.' }
    ]
  },
  {
    id: 'feather-teaser',
    name: 'Feather Teaser',
    price: 9.99,
    tag: 'Cats',
    img: '/images/feather_teaser.png',
    gallery: ['/images/feather_teaser.png', '/images/feather_teaser.png'],
    category: 'Toys',
    rating: 4.6,
    reviewCount: 87,
    short: 'A retractable feather wand with a bell — built for daily chase-and-pounce play.',
    description:
      'Retractable wand extends to 90cm and retracts for storage. Real feathers plus a chime bell trigger natural hunting instincts. Comfortable grip and a reinforced attachment clip.',
    features: ['Retractable to 90cm', 'Real feathers + bell', 'Reinforced attachment', 'Comfort-grip handle', 'Indoor exercise'],
    reviews: [
      { name: 'Hooria K.', rating: 5, date: '4 days ago', text: 'My lazy cat actually sprints now. So much fun.' },
      { name: 'Adnan V.', rating: 4, date: '2 months ago', text: 'Great toy, feathers shed a little but that’s expected.' }
    ]
  },
  {
    id: 'ceramic-bowl-duo',
    name: 'Ceramic Bowl Duo',
    price: 16.5,
    tag: 'Feeding',
    img: '/images/ceramic_bowl.png',
    gallery: ['/images/ceramic_bowl.png', '/images/ceramic_bowl.png'],
    category: 'Feeding',
    rating: 4.7,
    reviewCount: 112,
    short: 'Chip-resistant ceramic bowls with a non-slip base and a matte glaze finish.',
    description:
      'Set of two 350ml ceramic bowls. Heavy enough to resist tipping, with a silicone ring base to prevent sliding. Dishwasher and microwave safe. Matte glaze won’t absorb odors or stains.',
    features: ['Set of 2 × 350ml', 'Chip-resistant ceramic', 'Non-slip silicone base', 'Dishwasher & microwave safe', 'Odor & stain resistant'],
    reviews: [
      { name: 'Mehwish A.', rating: 5, date: '10 days ago', text: 'Heavy, sturdy, and they actually don’t slide. Love the glaze.' },
      { name: 'Owais L.', rating: 4, date: '1 month ago', text: 'Lovely bowls, one arrived with a tiny chip but support replaced fast.' }
    ]
  },
  {
    id: 'travel-water-bottle',
    name: 'Portable Water Bottle',
    price: 12.99,
    tag: 'Travel',
    img: '/images/water_bottle.png',
    gallery: ['/images/water_bottle.png', '/images/water_bottle.png'],
    category: 'Travel',
    rating: 4.9,
    reviewCount: 412,
    short: 'Leak-proof travel water bottle with a built-in drinking bowl for pets on the go.',
    description: 'Keep your pet hydrated during walks or road trips. Press the button to release water into the attached bowl, and release to lock. Unused water flows back inside to prevent waste.',
    features: ['One-hand operation', 'Leak-proof lock', 'BPA-free material', 'Fits cup holders', 'Includes lanyard'],
    reviews: [
      { name: 'Kiran A.', rating: 5, date: '1 week ago', text: 'Game changer for our summer walks!' }
    ]
  },
  {
    id: 'squeaky-bone-toy',
    name: 'Tough Squeaky Bone',
    price: 8.50,
    tag: 'Play',
    img: '/images/squeaky_bone.png',
    gallery: ['/images/squeaky_bone.png', '/images/squeaky_bone.png'],
    category: 'Toys',
    rating: 4.5,
    reviewCount: 310,
    short: 'Durable rubber chew toy with a built-in squeaker for aggressive chewers.',
    description: 'Made from tough, non-toxic natural rubber that withstands heavy chewing while cleaning teeth. The internal squeaker keeps dogs engaged for hours of independent play.',
    features: ['Indestructible rubber', 'Built-in squeaker', 'Promotes dental health', 'Floats on water', 'Beef scented'],
    reviews: [
      { name: 'Ali M.', rating: 5, date: '2 months ago', text: 'First toy my pitbull hasn\'t destroyed in a day.' }
    ]
  },
  {
    id: 'beef-dog-food',
    name: 'Beef Recipe Dog Food',
    price: 32.00,
    tag: 'Organic',
    img: '/images/dog_food.png',
    gallery: ['/images/dog_food.png', '/images/dog_food.png'],
    category: 'Food',
    rating: 4.8,
    reviewCount: 156,
    short: 'High-protein dry kibble with real beef and vegetables for strong muscles.',
    description: 'A nutrient-dense formula for active adult dogs. Made with pasture-raised beef, sweet potatoes, and peas. Fortified with vitamins and probiotics for healthy digestion.',
    features: ['Real beef is #1 ingredient', 'Supports digestion', 'No wheat or corn', 'Rich in antioxidants', 'For all breed sizes'],
    reviews: [
      { name: 'Zainab F.', rating: 4, date: '3 weeks ago', text: 'Dog loves it, but kibble size is a bit small.' }
    ]
  },
  {
    id: 'slow-feeder-bowl',
    name: 'Slow Feeder Bowl',
    price: 14.00,
    tag: 'Health',
    img: '/images/slow_feeder.png',
    gallery: ['/images/slow_feeder.png', '/images/slow_feeder.png'],
    category: 'Feeding',
    rating: 4.7,
    reviewCount: 289,
    short: 'Puzzle bowl designed to slow down fast eaters and prevent bloating.',
    description: 'The ridges and mazes force your dog to eat up to 10x slower, improving digestion and reducing the risk of bloat. Holds up to 2 cups of dry or wet food. Dishwasher safe.',
    features: ['Slows eating by 10x', 'Prevents bloating', 'Food-safe plastic', 'Non-slip base', 'Dishwasher safe'],
    reviews: [
      { name: 'Fahad R.', rating: 5, date: '1 month ago', text: 'My lab used to inhale his food in 10 seconds. Now it takes him 5 minutes!' }
    ]
  },
  {
    id: 'cat-grooming-brush',
    name: 'Self-Cleaning Brush',
    price: 15.99,
    tag: 'Care',
    img: '/images/self_cleaning_brush.png',
    gallery: ['/images/self_cleaning_brush.png', '/images/self_cleaning_brush.png'],
    category: 'Grooming',
    rating: 4.9,
    reviewCount: 504,
    short: 'Slicker brush that removes loose undercoat. Press the button to release the hair.',
    description: 'Easily detangle and remove loose fur with fine bent wires designed to penetrate deep into the coat without scratching the skin. The push-button retracts the bristles for effortless cleaning.',
    features: ['One-click fur release', 'Gentle on skin', 'Reduces shedding by 90%', 'Ergonomic handle', 'For cats and dogs'],
    reviews: [
      { name: 'Saba H.', rating: 5, date: '2 days ago', text: 'Brushing is so much easier now. The fur just pops right off.' }
    ]
  }
];

export const posts: Post[] = [
  {
    id: 'stress-free-vet-visit',
    title: '5 Tips for a Stress-Free Vet Visit',
    excerpt: 'Simple ways to keep your pet calm and cooperative at the clinic.',
    category: 'Wellness',
    read: '4 min',
    img: 'https://images.pexels.com/photos/6867479/pexels-photo-6867479.jpeg?w=800',
    author: 'Dr. Ayesha Khan',
    date: 'Aug 12, 2026',
    intro:
      'Vet visits don’t have to be a battle. A few small adjustments before, during, and after the appointment can turn panic into cooperation — and keep your pet healthier in the long run.',
    sections: [
      { heading: 'Make the carrier a happy place', body: 'Leave the carrier out at home with a soft blanket and the occasional treat inside. If the carrier only appears before stressful trips, your pet will associate it with fear.' },
      { heading: 'Practice gentle handling', body: 'Touch your pet’s paws, ears, and mouth regularly at home. The more used they are to being handled calmly, the easier the examination will be.' },
      { heading: 'Time it right', body: 'Book the first appointment of the day to minimize waiting-room exposure, and ask for a quiet corner. Bring a favorite toy or a worn item that smells like home.' },
      { heading: 'Reward, don’t punish', body: 'High-value treats during and after the visit build a positive association. Never scold fear — it only deepens it.' },
      { heading: 'Follow up at home', body: 'Give your pet a quiet space to decompress, and watch the injection site for 24 hours. Call your vet if you notice swelling or lethargy.' }
    ],
    takeaway: 'Calm vet visits are built at home, weeks before the appointment — not in the waiting room.'
  },
  {
    id: 'right-bed-for-cat',
    title: 'Choosing the Right Bed for Your Cat',
    excerpt: 'From cozy caves to sunny perches — find the perfect spot for your feline.',
    category: 'Comfort',
    read: '6 min',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
    author: 'Dr. Ayesha Khan',
    date: 'Aug 5, 2026',
    intro:
      'Cats sleep 12–16 hours a day, so the bed you choose matters. The right bed depends on your cat’s age, habits, and the kind of naps they prefer.',
    sections: [
      { heading: 'Watch where they naturally sleep', body: 'If your cat seeks out enclosed, dark spaces, a cave-style bed will win. If they sprawl in sunny windowsills, a flat perch is better.' },
      { heading: 'Consider the season', body: 'Felt and plush beds hold warmth for winter. Breathable cotton or raised mesh beds keep cats cool through summer.' },
      { heading: 'Size for stretching', body: 'Cats love to curl, but also to fully stretch out. Pick a bed at least 1.5× your cat’s body length.' },
      { heading: 'Washability is non-negotiable', body: 'Hair, dander, and the occasional accident mean you’ll want a removable, machine-washable cover. A bed you can’t clean won’t last.' },
      { heading: 'Placement beats features', body: 'Even the perfect bed fails in a noisy, high-traffic spot. Place it in a warm, quiet corner your cat already gravitates to.' }
    ],
    takeaway: 'The best cat bed is the one that matches how your cat already likes to sleep — not the one that looks best in the photo.'
  },
  {
    id: 'reading-pet-food-labels',
    title: 'Nutrition Basics: Reading Pet Food Labels',
    excerpt: 'What those ingredients really mean — and what to avoid.',
    category: 'Nutrition',
    read: '5 min',
    img: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=800',
    author: 'Dr. Bilal Raza',
    date: 'Jul 28, 2026',
    intro:
      'Pet food labels are full of marketing and confusing terms. Here’s a plain-English guide to decoding them so you can make confident choices.',
    sections: [
      { heading: 'Ingredients are listed by weight', body: 'The first five ingredients make up the bulk of the food. Look for a named animal protein (e.g. “deboned chicken”, not “meat meal”) at the top.' },
      { heading: 'Beware of splitting', body: 'Manufacturers split fillers (corn, wheat, rice) into multiple entries so protein appears first. If several grain varieties appear in the top five, the food is filler-heavy.' },
      { heading: '“Complete and balanced” means something', body: 'That phrase means the food meets AAFCO nutrient profiles for a specific life stage. It’s a meaningful minimum standard.' },
      { heading: 'Watch for vague additives', body: '“Animal fat” without a named source, and artificial colors (Red 40, Blue 2), offer no nutritional value and may cause sensitivity.' },
      { heading: 'Match food to life stage', body: 'Puppy, adult, and senior formulas are calibrated differently. Feeding the wrong life-stage food long-term can cause real harm.' }
    ],
    takeaway: 'A named protein up top, named fats, and minimal fillers — that’s the short version of a good label.'
  },
  {
    id: 'indoor-games-summer',
    title: 'Fun Indoor Games to Beat the Summer Heat',
    excerpt: 'Keep your pet active and cool with these easy enrichment ideas.',
    category: 'Play',
    read: '3 min',
    img: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800',
    author: 'Marium Tariq',
    date: 'Jul 20, 2026',
    intro:
      'When it’s too hot for walks, indoor enrichment keeps pets happy and out of trouble. Try these five simple games that cost nothing.',
    sections: [
      { heading: 'The treat puzzle', body: 'Hide treats in a muffin tin and cover each cup with a tennis ball. Your dog has to figure out which balls to move — great brain work.' },
      { heading: 'Frozen Kongs', body: 'Stuff a Kong with wet food and freeze it. It takes 30+ minutes to work through and cools your pet down at the same time.' },
      { heading: 'The toilet-paper tube', body: 'For cats and small pets: fold treats inside a paper tube and poke holes. They’ll bat, chew, and roll it until the treats fall out.' },
      { heading: 'Hallway fetch with a twist', body: 'Roll a ball down a hallway and call “find it” — scent-based games tire a dog out faster than physical exercise.' },
      { heading: 'Cardboard fort', body: 'Cats love new enclosed spaces. A few taped boxes become a multi-room fort they’ll explore for days.' }
    ],
    takeaway: 'Ten minutes of mental enrichment can tire a pet as much as a long walk — and it works even when it’s scorching outside.'
  },
  {
    id: 'grooming-at-home',
    title: 'Grooming at Home: A Beginner’s Routine',
    excerpt: 'Build a simple weekly routine that keeps coats, nails, and ears healthy.',
    category: 'Care',
    read: '5 min',
    img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800',
    author: 'Dr. Bilal Raza',
    date: 'Jul 10, 2026',
    intro:
      'You don’t need to be a groomer to keep your pet in great shape between appointments. A consistent weekly routine prevents most common problems.',
    sections: [
      { heading: 'Brush 2–3 times a week', body: 'Regular brushing removes loose fur, prevents matting, and spreads natural oils. Long coats need a slicker brush; short coats do fine with a rubber glove.' },
      { heading: 'Trim nails every 2 weeks', body: 'Overgrown nails change gait and cause pain. Trim the very tip and keep styptic powder nearby in case of a quick nick.' },
      { heading: 'Check ears weekly', body: 'Healthy ears are pale and odorless. Wipe the outer ear with a damp cotton pad — never insert anything into the canal.' },
      { heading: 'Bathe only when needed', body: 'Over-bathing strips natural oils. Most pets need a bath every 4–6 weeks, or only when visibly dirty or smelly.' },
      { heading: 'Reward every step', body: 'Pair grooming with treats from day one. A pet that associates grooming with food is calm for life.' }
    ],
    takeaway: 'A few minutes of gentle, regular care prevents the expensive problems that send pets to the groomer in a panic.'
  },
  {
    id: 'traveling-with-pets',
    title: 'Traveling With Pets: A Complete Checklist',
    excerpt: 'Everything to pack, plan, and prepare before a trip with your companion.',
    category: 'Travel',
    read: '6 min',
    img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800',
    author: 'Marium Tariq',
    date: 'Jul 2, 2026',
    intro:
      'Travel with pets is wonderful — if you’re prepared. Miss one item and a smooth trip becomes stressful. Use this checklist before you leave.',
    sections: [
      { heading: 'Health & documents', body: 'Carry vaccination records, a recent health certificate, and any prescriptions. For air travel, confirm airline pet policies 48 hours before departure.' },
      { heading: 'The essentials bag', body: 'Pack food for the full trip plus two extra days, bottled water, bowls, waste bags, a leash, a favorite toy, and a blanket that smells like home.' },
      { heading: 'Carrier or harness', body: 'Use an airline-approved carrier for flights and a crash-tested harness for cars. Never travel with an unrestrained pet in a moving vehicle.' },
      { heading: 'Identification', body: 'Double-check that ID tags are legible and your microchip contact details are current. A current photo of your pet is invaluable if they get lost.' },
      { heading: 'Plan for breaks', body: 'On road trips, stop every 2–3 hours for water and a short walk. Never leave a pet in a parked car — temperatures rise dangerously fast.' }
    ],
    takeaway: 'Preparation is the difference between a calm adventure and a crisis. Pack the night before, not the morning of.'
  }
];

export const testimonials: Testimonial[] = [
  { name: 'Sara Javed', pet: 'Golden Retriever — Max', text: 'CozyPaws is the only place I trust for Max’s food. The ingredients are clean and delivery is always on time.', rating: 5 },
  { name: 'Daniyal Raza', pet: 'Tabby Cat — Miso', text: 'The cat house is gorgeous and Miso actually sleeps in it. Customer support helped me pick the right size.', rating: 5 },
  { name: 'Ayesha Malik', pet: 'Beagle — Bruno', text: 'Switched to their organic food and Bruno’s coat has never been shinier. The blog tips are genuinely useful too.', rating: 5 },
  { name: 'Bilal Ahmed', pet: 'Persian Cat — Luna', text: 'Luna is a picky princess and she loves the feather teaser. Fast delivery, fair prices, no complaints.', rating: 4 },
  { name: 'Marium Tariq', pet: 'Labrador — Coco', text: 'The memory-foam bed gave my old dog his comfort back. I cried a little. Thank you CozyPaws.', rating: 5 },
  { name: 'Hamza Wahid', pet: 'Two cats — Pepper & Salt', text: 'Bought the travel carrier for a flight and it worked perfectly. Solid build and the cats stayed calm.', rating: 5 }
];

export const faqs: Faq[] = [
  { q: 'What areas do you deliver to?', a: 'We currently deliver to all major cities nationwide. Enter your pincode at checkout to see exact delivery options and charges for your location.' },
  { q: 'How long does delivery take?', a: 'Standard delivery takes 2–4 business days. Same-day and next-day delivery are available in select metro areas — look for the badge at checkout.' },
  { q: 'Are your products vet-approved?', a: 'Yes. Our food and supplement lines are formulated with veterinary input, and every product on our shelves is screened for safety and quality before listing.' },
  { q: 'What is your return policy?', a: 'Unused items in original packaging can be returned within 14 days for a full refund. Opened food and hygiene products are non-returnable for safety reasons.' },
  { q: 'Do you offer subscriptions?', a: 'Yes — subscribe to any food or consumable and save 10% on every order, with free delivery. You can pause, skip, or cancel anytime from your account.' },
  { q: 'Which payment methods do you accept?', a: 'We accept all major debit and credit cards, bank transfer, and cash on delivery in eligible areas. All online payments are encrypted and secure.' },
  { q: 'How do I track my order?', a: 'You’ll receive a tracking link by email and SMS as soon as your order ships. You can also view live status from your account at any time.' },
  { q: 'Can I get advice on which product suits my pet?', a: 'Absolutely. Use our contact page or live chat and our pet-care team will recommend the right size, food, or accessory for your companion.' }
];