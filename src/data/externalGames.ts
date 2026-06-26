export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoOverview: string;
  howToPlay: string;
  strategyGuide: string;
  playerTips: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
  accentClass: string;
};

const playgamaCatalogId = "p_eb5ee739-3023-44bb-875d-81fe60b91666";
const playgamaIframeUrl = (slug: string) => `https://playgama.com/export/game/${slug}?clid=${playgamaCatalogId}`;
const playgamaThumbnail = (slug: string, extension = "webp") => `/game-thumbs/playgama/${slug}.${extension}`;

export const mainGame: ExternalGame = {
  slug: "wheelie-bike",
  title: "Wheelie Bike",
  shortTitle: "Wheelie Bike",
  description: "Play Wheelie Bike online, a free Playgama balance game where one smooth tap can keep the front wheel floating.",
  seoOverview:
    "Wheelie Bike is the closest Playgama match for Bike Wheelie: a focused bicycle balance game about holding the front wheel up without tipping too far. The fun comes from tiny corrections, rhythm, and patience rather than full racing speed. It fits bikewheelie.online because every run is short, skill-based, and easy to restart in the browser.",
  howToPlay:
    "Press, tap, or hold to lift the front wheel, then release or ease off before the rider flips backward. Keep the bike angled high enough to score distance but low enough to recover. The run ends when balance breaks, so steady inputs beat panic taps.",
  strategyGuide:
    "Find the balance point early and make smaller corrections than you think you need. If the wheel drops, add pressure briefly; if the rider leans too far back, release before the angle becomes unrecoverable. Longer runs come from rhythm and restraint, not from holding the control nonstop.",
  playerTips: [
    "Use short corrections instead of one long hold.",
    "Watch the rider angle more than the background speed.",
    "Recover early when the front wheel starts dropping.",
    "Restart quickly and focus on one cleaner run each attempt.",
  ],
  category: "Bike balance",
  thumbnail: playgamaThumbnail("wheelie-bike"),
  iframeUrl: playgamaIframeUrl("wheelie-bike"),
  accent: "#ff6a2a",
  accentClass: "accent-orange",
};

export const externalGames = [
  {
    slug: "wheelie-bike-for-2-players",
    title: "Wheelie Bike For 2 Players",
    shortTitle: "Wheelie 2P",
    description: "Play Wheelie Bike For 2 Players online, a Playgama bicycle physics challenge built around balance and timing.",
    seoOverview:
      "Wheelie Bike For 2 Players keeps the same wheelie-balance idea but adds a social challenge. It is a strong companion game because the core skill remains the same: hold a controlled angle, recover before tipping, and stretch each run as far as possible.",
    howToPlay:
      "Choose a player mode, then use the assigned controls to raise and balance the bike. Avoid over-rotating backward and keep the front wheel up for as long as the course allows.",
    strategyGuide:
      "Treat the first few seconds as calibration. Learn how quickly the bike responds, then settle into short corrections. In two-player sessions, consistency matters more than flashy lifts.",
    playerTips: [
      "Start with a modest wheelie angle.",
      "Release before the bike passes the recovery point.",
      "Use the rival score as pressure, not as a reason to rush.",
      "Practice the first launch until it feels repeatable.",
    ],
    category: "Bike physics",
    thumbnail: playgamaThumbnail("wheelie-bike-for-2-players"),
    iframeUrl: playgamaIframeUrl("wheelie-bike-for-2-players"),
    accent: "#ff8a3d",
    accentClass: "accent-orange",
  },
  {
    slug: "moto-x3m",
    title: "Moto X3M",
    shortTitle: "Moto X3M",
    description: "Play Moto X3M online, a Playgama motorbike stunt game with ramps, flips, hazards, and timed tracks.",
    seoOverview:
      "Moto X3M is a faster motorbike stunt pick for players who like Bike Wheelie's balance skill but want full obstacle courses. The game adds ramps, flips, traps, and time pressure while still rewarding careful air control.",
    howToPlay:
      "Accelerate through each track, brake when hazards demand it, and control the bike in the air so the rider lands cleanly. Finish quickly to improve your result.",
    strategyGuide:
      "Speed matters, but landing angle matters more. Slow down before traps, use flips only when there is enough air, and keep the wheels level before touching down.",
    playerTips: [
      "Brake before blind hazards.",
      "Level the bike before every landing.",
      "Use flips only on long jumps.",
      "Replay tracks to learn where speed is safe.",
    ],
    category: "Motorbike stunt",
    thumbnail: playgamaThumbnail("moto-x3m"),
    iframeUrl: playgamaIframeUrl("moto-x3m"),
    accent: "#ef4444",
    accentClass: "accent-coral",
  },
  {
    slug: "bike-stunt-game",
    title: "Bike Stunt Game",
    shortTitle: "Bike Stunt",
    description: "Play Bike Stunt Game online, a Playgama physics-racing game with ramps, jumps, and bike control.",
    seoOverview:
      "Bike Stunt Game expands the same balance theme into a stunt-ramp format. It belongs beside Bike Wheelie because players still manage bike angle, speed, and landing control every few seconds.",
    howToPlay:
      "Ride toward ramps, control speed, and keep the bike stable in the air. Clear stunt sections without crashing and aim for cleaner landings each attempt.",
    strategyGuide:
      "Do not hit every ramp at maximum speed. Some jumps require control more than distance, so adjust throttle before takeoff and prepare the landing early.",
    playerTips: [
      "Approach ramps straight.",
      "Adjust speed before the jump, not in midair.",
      "Keep both wheels ready for landing.",
      "Use restarts to memorize difficult ramp timing.",
    ],
    category: "Bike stunt",
    thumbnail: playgamaThumbnail("bike-stunt-game"),
    iframeUrl: playgamaIframeUrl("bike-stunt-game"),
    accent: "#8b5cf6",
    accentClass: "accent-violet",
  },
  {
    slug: "canyon-drifter",
    title: "Canyon Drifter",
    shortTitle: "Canyon Drifter",
    description: "Play Canyon Drifter online, a Playgama motorbike physics game with canyon turns and controlled riding.",
    seoOverview:
      "Canyon Drifter is a Playgama motorbike game for riders who like balance and physics but want a broader track. It keeps the focus on control, traction, and measured movement.",
    howToPlay:
      "Guide the bike through the canyon route, manage turns, and keep momentum without losing stability. Stay aware of the terrain and recover smoothly after each drift.",
    strategyGuide:
      "Look ahead through the canyon instead of reacting late. Smooth steering and controlled speed preserve more momentum than sudden corrections.",
    playerTips: [
      "Enter corners with room to recover.",
      "Keep the bike stable before adding speed.",
      "Use small steering changes on narrow paths.",
      "Learn where the canyon forces slower riding.",
    ],
    category: "Motorbike physics",
    thumbnail: playgamaThumbnail("canyon-drifter"),
    iframeUrl: playgamaIframeUrl("canyon-drifter"),
    accent: "#23cc88",
    accentClass: "accent-green",
  },
  {
    slug: "adventure-crazy-ramp-bike-stunt-game",
    title: "Adventure Crazy Ramp Bike Stunt Game",
    shortTitle: "Crazy Ramp",
    description: "Play Adventure Crazy Ramp Bike Stunt Game online, a Playgama 3D stunt-riding challenge.",
    seoOverview:
      "Adventure Crazy Ramp Bike Stunt Game is the high-ramp option in the Bike Wheelie game library. It emphasizes big jumps, physics control, and confident landings.",
    howToPlay:
      "Ride across ramp courses, line up jumps, and control the bike while airborne. Complete each stunt route by landing without losing the rider.",
    strategyGuide:
      "Use the center of each ramp and avoid unnecessary steering while airborne. A clean line before takeoff usually creates the cleanest landing.",
    playerTips: [
      "Line up with the ramp before accelerating.",
      "Avoid sharp turns on narrow stunt paths.",
      "Correct the bike angle early in the air.",
      "Focus on finishing before chasing risky stunts.",
    ],
    category: "Bike stunt",
    thumbnail: playgamaThumbnail("adventure-crazy-ramp-bike-stunt-game"),
    iframeUrl: playgamaIframeUrl("adventure-crazy-ramp-bike-stunt-game"),
    accent: "#20b8d8",
    accentClass: "accent-sky",
  },
  {
    slug: "moto-x3m-spooky-land",
    title: "Moto X3M Spooky Land",
    shortTitle: "Spooky Land",
    description: "Play Moto X3M Spooky Land online, a Playgama Halloween motorbike stunt game with tricky hazards.",
    seoOverview:
      "Moto X3M Spooky Land gives bike-stunt players a themed course set with hazards, jumps, and timing traps. It is a strong related game because it tests the same landing control with more surprise.",
    howToPlay:
      "Accelerate, brake, flip, and balance through spooky stunt levels. Watch for moving hazards and land with both wheels under control.",
    strategyGuide:
      "Replay levels to learn trap timing. Once you know where the surprises are, clean landings and controlled flips become much easier.",
    playerTips: [
      "Expect hazards after big ramps.",
      "Brake before moving traps.",
      "Do not flip unless there is clear landing room.",
      "Replay for cleaner time once the layout is known.",
    ],
    category: "Motorbike stunt",
    thumbnail: playgamaThumbnail("moto-x3m-spooky-land"),
    iframeUrl: playgamaIframeUrl("moto-x3m-spooky-land"),
    accent: "#f6b63d",
    accentClass: "accent-gold",
  },
  {
    slug: "motorcycle-racer-road-mayhem",
    title: "Motorcycle Racer: Road Mayhem",
    shortTitle: "Road Mayhem",
    description: "Play Motorcycle Racer: Road Mayhem online, a Playgama road-riding game for fast reflexes.",
    seoOverview:
      "Motorcycle Racer: Road Mayhem shifts from wheelie balance to traffic-speed riding. It belongs in the related library because it keeps the bike theme while testing reaction timing and lane control.",
    howToPlay:
      "Ride through traffic, avoid collisions, and keep speed under control. Use quick lane changes only when there is enough room to recover.",
    strategyGuide:
      "Look farther ahead than the closest vehicle. Smooth lane changes preserve speed and prevent last-second crashes.",
    playerTips: [
      "Leave space before overtaking.",
      "Avoid weaving when traffic is dense.",
      "Use speed only when the road is readable.",
      "Watch for patterns in vehicle movement.",
    ],
    category: "Motorbike racing",
    thumbnail: playgamaThumbnail("motorcycle-racer-road-mayhem"),
    iframeUrl: playgamaIframeUrl("motorcycle-racer-road-mayhem"),
    accent: "#2563eb",
    accentClass: "accent-blue",
  },
  {
    slug: "offroad-motocross",
    title: "Off-road Motocross",
    shortTitle: "Motocross",
    description: "Play Off-road Motocross online, a Playgama dirt-bike physics game with rugged terrain.",
    seoOverview:
      "Off-road Motocross is a rugged dirt-bike match for Bike Wheelie fans who like physics and terrain management. It trades one-wheel distance for hill control and landing discipline.",
    howToPlay:
      "Ride across off-road terrain, manage throttle, and keep the bike balanced over bumps and jumps. Crashes usually come from bad angles, not just low speed.",
    strategyGuide:
      "Ease into rough sections and let the bike settle after jumps. Keeping momentum is useful, but staying balanced keeps the run alive.",
    playerTips: [
      "Use steady throttle on hills.",
      "Land flat after bumps and jumps.",
      "Slow down before uneven terrain.",
      "Recover balance before accelerating again.",
    ],
    category: "Dirt bike",
    thumbnail: playgamaThumbnail("offroad-motocross"),
    iframeUrl: playgamaIframeUrl("offroad-motocross"),
    accent: "#16a34a",
    accentClass: "accent-green",
  },
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
