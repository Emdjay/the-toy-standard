import SignupForm from "./components/SignupForm";
import CategoryTabs from "./components/CategoryTabs";

const categories = [
  {
    title: "Building Sets",
    description: "Durable builds that reward patience and creativity.",
    focus: "Structure + problem solving",
  },
  {
    title: "Blasters",
    description: "Active play picks with a focus on safety and range.",
    focus: "Movement + coordination",
  },
  {
    title: "STEM",
    description: "Hands-on kits that spark curiosity and real learning.",
    focus: "Curiosity + confidence",
  },
  {
    title: "Board & Puzzle",
    description: "Screen-free favorites for family play time.",
    focus: "Connection + strategy",
  },
  {
    title: "Outdoor",
    description: "Gear that turns backyards into adventure zones.",
    focus: "Energy + exploration",
  },
  {
    title: "Creative Kits",
    description: "Crafts and art that feel open-ended, not scripted.",
    focus: "Imagination + calm",
  },
];

const productCategories = [
  {
    key: "building-sets",
    label: "Building Sets",
    eyebrow: "Builder picks",
    title: "LEGO builds worth the weekend",
    description:
      "Nine LEGO sets that reward focus, creativity, and long-play value. Great for teens and families.",
    items: [
      {
        name: "LEGO Creator 3-in-1 Modular Build",
        brand: "LEGO",
        ageRange: "Ages 9+",
        verdict: "Multi-build sets that stay in rotation.",
        why: "Three builds keep interest longer.",
        price: "Mid-range",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fmodern-house-31153&u1=4657528",
        imageLabel: "Creator 3-in-1",
        imageUrl: "/lego/LEGO Creator 3-in-1 Modular Build.jpg",
      },
      {
        name: "LEGO Technic Supercar Set",
        brand: "LEGO",
        ageRange: "Ages 10+",
        verdict: "Mechanical builds with satisfying detail.",
        why: "Gears and suspension feel advanced.",
        price: "Investment",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fmclaren-p1-42172&u1=4657528",
        imageLabel: "Technic Supercar",
        imageUrl: "/lego/LEGO Technic Supercar Set.jpg",
      },
      {
        name: "LEGO Icons Botanical Collection",
        brand: "LEGO",
        ageRange: "Ages 12+",
        verdict: "Display-worthy builds that feel grown-up.",
        why: "Great for rooms and shelves.",
        price: "Mid-range",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Ftiny-plants-10329&u1=4657528",
        imageLabel: "Botanical",
        imageUrl: "/lego/ LEGO Icons Botanical Collection.jpg",
      },
      {
        name: "LEGO Architecture Skyline",
        brand: "LEGO",
        ageRange: "Ages 12+",
        verdict: "Clean, focused builds with travel appeal.",
        why: "Compact but detailed skyline builds.",
        price: "Mid-range",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fnew-york-city-21028&u1=4657528",
        imageLabel: "Skyline",
        imageUrl: "/lego/LEGO-Architecture-Skyline.jpg",
      },
      {
        name: "LEGO Star Wars Starfighter",
        brand: "LEGO",
        ageRange: "Ages 9+",
        verdict: "Fan-favorite builds with display appeal.",
        why: "Iconic ships and solid detail.",
        price: "Mid-range",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fx-wing-starfighter-75355&u1=4657528",
        imageLabel: "Starfighter",
        imageUrl: "/lego/LEGO Star Wars Starfighter.jpg",
      },
      {
        name: "LEGO Minecraft Base Set",
        brand: "LEGO",
        ageRange: "Ages 8+",
        verdict: "Gaming crossover that keeps kids building.",
        why: "Expandable and highly replayable.",
        price: "Value pick",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fthe-wolf-stronghold-21261&u1=4657528",
        imageLabel: "Minecraft",
        imageUrl: "/lego/LEGO Minecraft Base Set.jpg",
      },
      {
        name: "LEGO Speed Champions Set",
        brand: "LEGO",
        ageRange: "Ages 9+",
        verdict: "Fast builds with collector energy.",
        why: "Great detail for the size.",
        price: "Value pick",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fferrari-sf-24-f1-race-car-77242&u1=4657528",
        imageLabel: "Speed",
        imageUrl: "/lego/LEGO Speed Champions Set.jpg",
      },
      {
        name: "LEGO Ideas Display Set",
        brand: "LEGO",
        ageRange: "Ages 12+",
        verdict: "Unique, fan-designed builds.",
        why: "Great conversation pieces.",
        price: "Investment",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Ftales-of-the-space-age-21340&u1=4657528",
        imageLabel: "Ideas",
        imageUrl: "/lego/LEGO Ideas Display Set.jpg",
      },
      {
        name: "LEGO City Space Mission",
        brand: "LEGO",
        ageRange: "Ages 8+",
        verdict: "Story-driven builds for daily play.",
        why: "Vehicles and play features keep it active.",
        price: "Value pick",
        link:
          "https://click.linksynergy.com/deeplink?id=jl0WcnuLLsk&mid=13923&murl=https%3A%2F%2Fwww.lego.com%2Fen-us%2Fproduct%2Fmodular-galactic-spaceship-60446&u1=4657528",
        imageLabel: "City Space",
        imageUrl: "/lego/LEGO City Space Mission.jpg",
      },
    ],
  },
  {
    key: "blasters",
    label: "Blasters",
    eyebrow: "Action picks",
    title: "NERF gear teens actually use",
    description:
      "Nine blasters with strong play value, from N Series accuracy to Rival performance.",
    items: [
      {
        name: "Nerf N Series Infinite Blaster",
        brand: "NERF",
        ageRange: "Ages 8+",
        verdict: "High-capacity dart belt keeps the action moving.",
        why: "Easy to reload while playing and built for longer sessions.",
        price: "Mid-range",
        link: "https://www.amazon.com/dp/B0CP49W5X3/?tag=thetoystandar-20",
        imageLabel: "N Series Infinite",
        imageUrl: "/Nerf/Nerf N Series Infinite Blaster.jpg",
      },
      {
        name: "Nerf N Series Pinpoint Blaster",
        brand: "NERF",
        ageRange: "Ages 8+",
        verdict: "Precision-focused blaster with a sharpshooter feel.",
        why: "Scope-ready profile and solid accuracy for target play.",
        price: "Value pick",
        link: "https://www.amazon.com/dp/B0CP484TR6/?tag=thetoystandar-20",
        imageLabel: "N Series Pinpoint",
        imageUrl: "/Nerf/Nerf N Series Pinpoint Blaster.jpg",
      },
      {
        name: "Nerf Pro Gelfire Legion Blaster",
        brand: "NERF",
        ageRange: "Ages 14+",
        verdict: "Spring-action gel blaster built for competitive play.",
        why: "High-capacity hopper and burst-on-impact rounds.",
        price: "Mid-range",
        link: "https://www.amazon.com/dp/B0BCHCBF9Z/?tag=thetoystandar-20",
        imageLabel: "Gelfire Legion",
        imageUrl: "/Nerf/Nerf Pro Gelfire Legion Blaster.jpg",
      },
      {
        name: "Nerf Pro Gelfire Pronto Blaster",
        brand: "NERF",
        ageRange: "Ages 14+",
        verdict: "Quick-fire gel blaster for fast-paced battles.",
        why: "Large internal storage and easy pour refill.",
        price: "Mid-range",
        link: "https://www.amazon.com/dp/B0BS48G1BD/?tag=thetoystandar-20",
        imageLabel: "Gelfire Pronto",
        imageUrl: "/Nerf/Nerf Pro Gelfire Pronto Blaster.jpg",
      },
      {
        name: "Nerf Pro Gelfire Uproar Blaster",
        brand: "NERF",
        ageRange: "Ages 14+",
        verdict: "Full-auto gel blaster for high-energy play.",
        why: "Massive round count with protective eyewear included.",
        price: "Investment",
        link: "https://www.amazon.com/dp/B0CJZL65FT/?tag=thetoystandar-20",
        imageLabel: "Gelfire Uproar",
        imageUrl: "/Nerf/Nerf Pro Gelfire Uproar Blaster.jpg",
      },
      {
        name: "Nerf Pro Gelfire Mythic Blaster",
        brand: "NERF",
        ageRange: "Ages 14+",
        verdict: "Premium full-auto blaster for serious battles.",
        why: "High-capacity hopper with rechargeable battery.",
        price: "Investment",
        link: "https://www.amazon.com/dp/B09W6DXY4N/?tag=thetoystandar-20",
        imageLabel: "Gelfire Mythic",
        imageUrl: "/Nerf/Nerf Pro Gelfire Mythic Blaster.jpg",
      },
      {
        name: "Nerf Roblox Soul Catalyst Blaster",
        brand: "NERF",
        ageRange: "Ages 8+",
        verdict: "Roblox-inspired blaster with collector appeal.",
        why: "Includes code to unlock a virtual item.",
        price: "Value pick",
        link: "https://www.amazon.com/dp/B0B1VW77Z3/?tag=thetoystandar-20",
        imageLabel: "Soul Catalyst",
        imageUrl: "/Nerf/Nerf Roblox Soul Catalyst Blaster.jpg",
      },
      {
        name: "Nerf Fortnite Blue Shock Blaster",
        brand: "NERF",
        ageRange: "Ages 8+",
        verdict: "Motorized blasting with Fortnite styling.",
        why: "Includes clip and bonus in-game code.",
        price: "Investment",
        link: "https://www.amazon.com/dp/B0BT1Z53TZ/?tag=thetoystandar-20",
        imageLabel: "Blue Shock",
        imageUrl: "/Nerf/Nerf Fortnight Blue Shock Blaster.jpg",
      },
      {
        name: "Nerf Rival Forerunner XXIII-1200",
        brand: "NERF",
        ageRange: "Ages 14+",
        verdict: "Competitive Rival blaster with precision sights.",
        why: "Built for accuracy and fast follow-up shots.",
        price: "Mid-range",
        link: "https://www.amazon.com/dp/B0B2XBWS1B/?tag=thetoystandar-20",
        imageLabel: "Rival Forerunner",
        imageUrl: "/Nerf/Nerf Rival Forerunner XXII-1200.jpg",
      },
    ],
  },
  {
    key: "stem",
    label: "STEM",
    eyebrow: "Skill builders",
    title: "STEM kits that feel like play",
    description:
      "Nine smart kits that build real skills: coding, robotics, and circuits without boredom.",
    items: [
      {
        name: "Snap Circuits Jr. SC-100",
        brand: "Elenco",
        ageRange: "Ages 8+",
        verdict: "The classic intro to circuits.",
        why: "Clear instructions and lots of projects.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=Snap+Circuits+Jr+SC-100&tag=thetoystandar-20",
        imageLabel: "Snap Circuits",
        imageUrl: "/STEM/Snap Circuits Jr. SC-100.jpg",
      },
      {
        name: "LEGO Education SPIKE Prime",
        brand: "LEGO",
        ageRange: "Ages 10+",
        verdict: "Serious robotics for teens.",
        why: "Great for coding and engineering challenges.",
        price: "Investment",
        link: "https://www.amazon.com/s?k=LEGO+Education+SPIKE+Prime&tag=thetoystandar-20",
        imageLabel: "SPIKE Prime",
        imageUrl: "/STEM/LEGO Education SPIKE Prime.jpg",
      },
      {
        name: "Sphero Mini Robot Ball",
        brand: "Sphero",
        ageRange: "Ages 8+",
        verdict: "App-based coding that feels fun.",
        why: "Quick setup and playful challenges.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Sphero+Mini&tag=thetoystandar-20",
        imageLabel: "Sphero Mini",
        imageUrl: "/STEM/Sphero Mini Robot Ball.jpg",
      },
      {
        name: "Makeblock mBot STEM Kit",
        brand: "Makeblock",
        ageRange: "Ages 10+",
        verdict: "Hands-on robotics starter.",
        why: "Build, code, and modify.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Makeblock+mBot&tag=thetoystandar-20",
        imageLabel: "mBot",
        imageUrl: "/STEM/Makeblock mBot STEM Kit.jpg",
      },
      {
        name: "Raspberry Pi Starter Kit",
        brand: "Raspberry Pi",
        ageRange: "Ages 12+",
        verdict: "Real computing for teen builders.",
        why: "Great for long-term projects.",
        price: "Investment",
        link:
          "https://www.amazon.com/s?k=Raspberry+Pi+starter+kit&tag=thetoystandar-20",
        imageLabel: "Raspberry Pi",
        imageUrl: "/STEM/Raspberry Pi Starter Kit.jpg",
      },
      {
        name: "Arduino Starter Kit",
        brand: "Arduino",
        ageRange: "Ages 12+",
        verdict: "Electronics learning that scales up.",
        why: "Tons of tutorials and projects.",
        price: "Investment",
        link: "https://www.amazon.com/s?k=Arduino+starter+kit&tag=thetoystandar-20",
        imageLabel: "Arduino",
        imageUrl: "/STEM/Arduino Starter Kit.jpg",
      },
      {
        name: "Kano Coding Kit",
        brand: "Kano",
        ageRange: "Ages 8+",
        verdict: "Visual coding that feels creative.",
        why: "Engaging projects without overwhelm.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Kano+coding+kit&tag=thetoystandar-20",
        imageLabel: "Kano",
        imageUrl: "/STEM/Kano Coding Kit.jpg",
      },
      {
        name: "National Geographic Science Kit",
        brand: "National Geographic",
        ageRange: "Ages 8+",
        verdict: "Experiment-style kit with wow factor.",
        why: "Hands-on activities with clear steps.",
        price: "Value pick",
        link:
          "https://www.amazon.com/s?k=National+Geographic+science+kit&tag=thetoystandar-20",
        imageLabel: "Science Kit",
        imageUrl: "/STEM/National Geographic Science Kit.jpg",
      },
      {
        name: "Cricut Joy Starter Set",
        brand: "Cricut",
        ageRange: "Ages 12+",
        verdict: "Design meets maker energy.",
        why: "Creates stickers, cards, and decals.",
        price: "Investment",
        link: "https://www.amazon.com/s?k=Cricut+Joy+starter+set&tag=thetoystandar-20",
        imageLabel: "Cricut Joy",
        imageUrl: "/STEM/Cricut Joy Starter Set.jpg",
      },
    ],
  },
  {
    key: "board-puzzle",
    label: "Board & Puzzle",
    eyebrow: "Game night",
    title: "Strategy picks that keep teens in",
    description:
      "Nine board and puzzle classics with replay value and good group energy.",
    items: [
      {
        name: "Catan",
        brand: "Catan Studio",
        ageRange: "Ages 10+",
        verdict: "Modern classic with huge replay value.",
        why: "Negotiation and strategy stay fresh.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Catan+board+game&tag=thetoystandar-20",
        imageLabel: "Catan",
      },
      {
        name: "Ticket to Ride",
        brand: "Days of Wonder",
        ageRange: "Ages 8+",
        verdict: "Easy to learn, hard to stop playing.",
        why: "Great for families and teens.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Ticket+to+Ride+board+game&tag=thetoystandar-20",
        imageLabel: "Ticket to Ride",
      },
      {
        name: "Azul",
        brand: "Next Move",
        ageRange: "Ages 8+",
        verdict: "Beautiful and strategic tile game.",
        why: "Fast rounds and clever decisions.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Azul+board+game&tag=thetoystandar-20",
        imageLabel: "Azul",
      },
      {
        name: "Codenames",
        brand: "Czech Games",
        ageRange: "Ages 10+",
        verdict: "Best-in-class word game.",
        why: "Teams and laughs with low setup.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=Codenames+board+game&tag=thetoystandar-20",
        imageLabel: "Codenames",
      },
      {
        name: "Pandemic",
        brand: "Z-Man Games",
        ageRange: "Ages 10+",
        verdict: "Co-op strategy that feels cinematic.",
        why: "Everyone plays together.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Pandemic+board+game&tag=thetoystandar-20",
        imageLabel: "Pandemic",
      },
      {
        name: "Exploding Kittens",
        brand: "Exploding Kittens",
        ageRange: "Ages 7+",
        verdict: "Quick laughs and fast rounds.",
        why: "Easy to bring to any group.",
        price: "Value pick",
        link:
          "https://www.amazon.com/s?k=Exploding+Kittens+card+game&tag=thetoystandar-20",
        imageLabel: "Exploding Kittens",
      },
      {
        name: "Risk",
        brand: "Hasbro",
        ageRange: "Ages 10+",
        verdict: "Classic strategy that teens still love.",
        why: "Big decisions and long arcs.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Risk+board+game&tag=thetoystandar-20",
        imageLabel: "Risk",
      },
      {
        name: "Chess Set (Tournament Size)",
        brand: "Various",
        ageRange: "Ages 8+",
        verdict: "Always in style.",
        why: "Skill-building and timeless.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=chess+set+tournament+size&tag=thetoystandar-20",
        imageLabel: "Chess",
      },
      {
        name: "1,000-piece Challenge Puzzle",
        brand: "Various",
        ageRange: "Ages 12+",
        verdict: "Quiet focus for screen-free time.",
        why: "Great solo or family activity.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=1000+piece+puzzle&tag=thetoystandar-20",
        imageLabel: "Puzzle",
      },
    ],
  },
  {
    key: "outdoor",
    label: "Outdoor",
    eyebrow: "Get outside",
    title: "Outdoor gear teens actually use",
    description:
      "Nine outdoor picks that get teens moving without feeling forced.",
    items: [
      {
        name: "Spikeball Set",
        brand: "Spikeball",
        ageRange: "Ages 10+",
        verdict: "High-energy game that teens buy into.",
        why: "Quick setup and competitive play.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Spikeball+set&tag=thetoystandar-20",
        imageLabel: "Spikeball",
      },
      {
        name: "KanJam Disc Game",
        brand: "KanJam",
        ageRange: "Ages 10+",
        verdict: "Easy to learn and addicting.",
        why: "Great for backyards and parks.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=KanJam+disc+game&tag=thetoystandar-20",
        imageLabel: "KanJam",
      },
      {
        name: "Slackline Kit",
        brand: "Gibbon",
        ageRange: "Ages 12+",
        verdict: "Challenge and balance in one.",
        why: "Teens love the progression.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=Slackline+kit&tag=thetoystandar-20",
        imageLabel: "Slackline",
      },
      {
        name: "Badminton Set",
        brand: "Franklin",
        ageRange: "Ages 8+",
        verdict: "Classic outdoor play with real action.",
        why: "Great for groups or family matches.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=badminton+set&tag=thetoystandar-20",
        imageLabel: "Badminton",
      },
      {
        name: "Portable Basketball Hoop",
        brand: "Lifetime",
        ageRange: "Ages 10+",
        verdict: "Keeps teens outside and competitive.",
        why: "Adjustable height for all ages.",
        price: "Investment",
        link: "https://www.amazon.com/s?k=portable+basketball+hoop&tag=thetoystandar-20",
        imageLabel: "Hoop",
      },
      {
        name: "Cornhole Set",
        brand: "GoSports",
        ageRange: "Ages 8+",
        verdict: "Easy setup with instant fun.",
        why: "Great for parties and gatherings.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=cornhole+set&tag=thetoystandar-20",
        imageLabel: "Cornhole",
      },
      {
        name: "Bocce Ball Set",
        brand: "Baden",
        ageRange: "Ages 8+",
        verdict: "Low-key game with surprising strategy.",
        why: "Good for mixed-age groups.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=bocce+ball+set&tag=thetoystandar-20",
        imageLabel: "Bocce",
      },
      {
        name: "Capture the Flag Set",
        brand: "Starlux",
        ageRange: "Ages 8+",
        verdict: "Classic outdoor game with extra energy.",
        why: "Glow gear adds evening fun.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=capture+the+flag+game+set&tag=thetoystandar-20",
        imageLabel: "Capture the Flag",
      },
      {
        name: "Nerf Super Soaker Water Blaster",
        brand: "NERF",
        ageRange: "Ages 8+",
        verdict: "Warm-weather favorite.",
        why: "Simple, high-volume soaking.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=nerf+super+soaker+water+blaster&tag=thetoystandar-20",
        imageLabel: "Super Soaker",
      },
    ],
  },
  {
    key: "creative-kits",
    label: "Creative Kits",
    eyebrow: "Make it",
    title: "Creative kits with teen appeal",
    description:
      "Nine creative picks for design-minded teens: art, craft, and maker tools.",
    items: [
      {
        name: "3D Printing Pen",
        brand: "3Doodler",
        ageRange: "Ages 10+",
        verdict: "Creative tool with real wow factor.",
        why: "Turns sketches into objects.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=3Doodler+3D+printing+pen&tag=thetoystandar-20",
        imageLabel: "3D Pen",
      },
      {
        name: "Acrylic Paint Marker Set",
        brand: "POSCA",
        ageRange: "Ages 8+",
        verdict: "Favorite for art and customization.",
        why: "Works on nearly any surface.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=POSCA+paint+markers&tag=thetoystandar-20",
        imageLabel: "POSCA",
      },
      {
        name: "Wacom Drawing Tablet",
        brand: "Wacom",
        ageRange: "Ages 12+",
        verdict: "Digital art starter for teens.",
        why: "Great for drawing, design, and school.",
        price: "Investment",
        link: "https://www.amazon.com/s?k=Wacom+drawing+tablet&tag=thetoystandar-20",
        imageLabel: "Wacom",
      },
      {
        name: "LEGO DOTS Craft Kit",
        brand: "LEGO",
        ageRange: "Ages 8+",
        verdict: "Quick creative projects with style.",
        why: "Fast builds with customization.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=LEGO+DOTS+craft+kit&tag=thetoystandar-20",
        imageLabel: "LEGO DOTS",
      },
      {
        name: "DIY Resin Jewelry Kit",
        brand: "Various",
        ageRange: "Ages 12+",
        verdict: "Trendy craft with real results.",
        why: "Creates gifts and keepsakes.",
        price: "Mid-range",
        link: "https://www.amazon.com/s?k=DIY+resin+jewelry+kit&tag=thetoystandar-20",
        imageLabel: "Resin",
      },
      {
        name: "Friendship Bracelet Kit",
        brand: "Various",
        ageRange: "Ages 8+",
        verdict: "Classic craft that still lands.",
        why: "Easy to share and gift.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=friendship+bracelet+kit&tag=thetoystandar-20",
        imageLabel: "Bracelets",
      },
      {
        name: "Air-Dry Clay Kit",
        brand: "Sculpey",
        ageRange: "Ages 8+",
        verdict: "Sculpting with low setup.",
        why: "Great for figures and desk art.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=air+dry+clay+kit&tag=thetoystandar-20",
        imageLabel: "Clay",
      },
      {
        name: "Photo Sticker Printer",
        brand: "Canon",
        ageRange: "Ages 12+",
        verdict: "Phone photos into real stickers.",
        why: "Perfect for scrapbooks and laptops.",
        price: "Investment",
        link: "https://www.amazon.com/s?k=photo+sticker+printer&tag=thetoystandar-20",
        imageLabel: "Sticker Printer",
      },
      {
        name: "DIY LED Light Strip Kit",
        brand: "Govee",
        ageRange: "Ages 12+",
        verdict: "Room glow-up with minimal effort.",
        why: "App control and color scenes.",
        price: "Value pick",
        link: "https://www.amazon.com/s?k=Govee+LED+light+strip&tag=thetoystandar-20",
        imageLabel: "LEDs",
      },
    ],
  },
];

const faqs = [
  {
    question: "How do you choose what makes the list?",
    answer:
      "We prioritize safety, durability, and repeat play value. Every pick should earn a spot in the rotation, not just the unboxing moment.",
  },
  {
    question: "Do you accept affiliate commissions?",
    answer:
      "Yes. If you buy through our links, we may earn a small commission at no extra cost to you. It helps fund testing and updates.",
  },
  {
    question: "Are these picks age-appropriate?",
    answer:
      "We list recommended age ranges and highlight safety considerations so parents can make informed choices.",
  },
  {
    question: "How often is the list updated?",
    answer:
      "We update seasonally and whenever new products meet our standards.",
  },
];

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Toy Standard",
    url: "https://www.thetoystandard.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <Logo />
          </div>
          <nav className="nav-links">
            <a href="#standards">How we choose</a>
            <a href="#categories">Categories</a>
            <a href="#picks">Top Picks</a>
            <a href="#faq">FAQ</a>
            <a href="#newsletter">Newsletter</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Teen-approved. Parent-trusted.</div>
              <h1>Smart toy picks that keep teens engaged and parents confident.</h1>
              <p>
                We focus on real play value, durability, and skill-building.
                No hype, just the picks that hold attention and hold up over time.
              </p>
              <div className="cta-row">
                <a className="button primary" href="#picks">
                  Browse the picks
                </a>
                <a className="button secondary" href="#newsletter">
                  Join the list
                </a>
              </div>
            </div>
            <div className="hero-card">
              <h3>What earns the standard</h3>
              <ul>
                <li>Safety-first materials and realistic age guidance</li>
                <li>Play value that lasts beyond the first week</li>
                <li>Clear reasons why each pick earned its spot</li>
                <li>Fast, parent-friendly summaries</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-title">
            <h2>Our promise to parents</h2>
            <p>
              The Toy Standard curates a short list of toys that balance real
              fun, safety, and longevity. Every recommendation is chosen to
              cut through the noise and keep teens engaged.
            </p>
          </div>
        </section>

        <section className="section" id="standards">
          <div className="container section-title">
            <h2>How we choose</h2>
            <p>
              Every pick must clear a safety and longevity checklist. We focus
              on materials, age fit, and real-world play value instead of trend
              cycles.
            </p>
          </div>
          <div className="container card-grid">
            <div className="card">
              <div className="label">Safety-first</div>
              <h3>Materials and build quality</h3>
              <p className="small">
                We prioritize non-toxic materials, secure parts, and sturdy
                construction that stands up to repeated use.
              </p>
            </div>
            <div className="card">
              <div className="label">Age fit</div>
              <h3>Clear, realistic age guidance</h3>
              <p className="small">
                We match complexity to real development stages, not optimistic
                marketing labels.
              </p>
            </div>
            <div className="card">
              <div className="label">Play value</div>
              <h3>Repeatable, open-ended play</h3>
              <p className="small">
                Toys must keep attention beyond the first week and offer more
                than a single scripted outcome.
              </p>
            </div>
            <div className="card">
              <div className="label">Practicality</div>
              <h3>Storage, noise, and cleanup</h3>
              <p className="small">
                We favor designs that parents can actually live with—easy
                storage and reasonable volume.
              </p>
            </div>
            <div className="card">
              <div className="label">Durability</div>
              <h3>Built to survive real play</h3>
              <p className="small">
                Strong joints, resilient finishes, and kid-proof components are
                required for every pick.
              </p>
            </div>
            <div className="card">
              <div className="label">Value</div>
              <h3>Worth the shelf space</h3>
              <p className="small">
                We balance price with longevity so families get lasting value,
                not disposable novelty.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container section-title">
            <h2>Categories teens actually stick with</h2>
            <p>
              These categories flex based on partner availability. Each group
              highlights toys that support a specific type of play.
            </p>
          </div>
          <div className="container card-grid">
            {categories.map((category) => (
              <div className="card" key={category.title}>
                <div className="label">Focus</div>
                <h3>{category.title}</h3>
                <p className="small">{category.description}</p>
                <p className="small">{category.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="picks">
          <div className="container section-title">
            <div>
              <h2>Category picks for teens</h2>
              <p>
                Switch categories to see nine curated picks in each lane. Links
                are Amazon affiliate-only for now.
              </p>
            </div>
            <div className="small">Updated seasonally</div>
          </div>
          <div className="container disclosure">
            Disclosure: As an affiliate, we may earn a commission from qualifying
            purchases at no extra cost to you.
          </div>
          <div className="container">
            <CategoryTabs categories={productCategories} />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container section-title">
            <h2>FAQ</h2>
            <p>
              Transparency matters. Here is how we think about recommendations
              and affiliate links.
            </p>
          </div>
          <div className="container faq-grid">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p className="small">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="newsletter">
          <div className="container newsletter">
            <div>
            <h2>Get the teen-approved shortlist</h2>
              <p className="small">
              New picks, safety notes, and gift guides. We only send when we
              have something genuinely useful.
              </p>
            </div>
            <SignupForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            The Toy Standard is an independent affiliate guide. Purchases made
            through our links may earn a commission that supports ongoing
            research and updates.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo-mark"
        src="/the_toystandard_logo.png"
        alt="The Toy Standard logo"
      />
      <div className="logo-type">
        <span>The Toy Standard</span>
        <em>Parent-First Picks</em>
      </div>
    </div>
  );
}
