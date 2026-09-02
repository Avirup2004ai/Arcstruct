import { ServiceItem, ProjectItem, IndustryItem, InsightItem } from './types';

export const BRAND_INFO = {
  name: "THE ARCHSTRUCT CONSULTANT",
  shortName: "ARCHSTRUCT",
  tagline: "We plan, We Design, We Build Your Dreams.",
  founder: "Er. Tanmoy Das",
  founderTitle: "Founder & Chief Executive Officer",
  experienceYears: 11,
  projectsCount: "250+",
  clientsCount: "100+",
  establishedYear: 2021,
  headquarters: "Library Para Road, Dankuni, Hooghly, West Bengal – 712311",
  businessHours: "10:00 AM – 6:00 PM (Monday – Saturday)",
  email: "arcstractconsultant@gmail.com",
  phone: "+91 98300 12345",
  whatsapp: "919830012345",
  operatingRegions: "Eastern India (West Bengal, Odisha, Jharkhand, Bihar, Assam) & Pan-India Project Engagements",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    slug: "architectural-planning-drawing",
    title: "Architectural Planning & Drawing",
    category: "Planning",
    tagline: "Spatial optimization meets statutory compliance.",
    shortDescription: "Statutory municipal approvals, master planning, functional layout optimization, and high-precision architectural working drawings conforming to National Building Code (NBC) guidelines.",
    fullOverview: "Our architectural planning integrates functional ergonomics, climate-responsive site orientation, and strict municipal regulatory alignment. We produce complete working drawing sets that transition seamlessly into structural engineering and on-site execution without ambiguities.",
    keyDeliverables: [
      "Master Site Plans & Contour Layouts",
      "Comprehensive 2D Floor & Sectional Drawings",
      "Municipal Sanction & Approval Sets",
      "3D Architectural Elevation Studies",
      "Staircase, Egress & Core Detailing"
    ],
    standardsFollowed: ["National Building Code (NBC 2016)", "Local Municipal / KMDA By-laws", "IS 8888 (Low-income Housing Guidelines)"],
    idealFor: ["Commercial Developers", "Residential Builders", "Industrial Warehouse Owners", "Healthcare Facilities"],
    scopePoints: [
      "Zoning & FAR (Floor Area Ratio) optimization",
      "Sun-path, ventilation & acoustic spatial orientation",
      "Statutory municipal sanction filing sets",
      "Coordination with MEP and structural grids"
    ]
  },
  {
    id: "02",
    number: "02",
    slug: "structural-design-drawing",
    title: "Structural Design & Drawing",
    category: "Structural",
    tagline: "Seismic-resilient structural frames engineered for safety and economy.",
    shortDescription: "Seismic-resistant design (IS 1893), RCC and structural steel frame optimization, dynamic load modeling, and micro-detailed reinforcement schedules.",
    fullOverview: "We engineer structural frames that balance maximum material economy with uncompromised load safety. Every beam, column, shear wall, and foundation is calculated using finite element modeling against seismic forces, wind dynamics, and soil-structure interactions.",
    keyDeliverables: [
      "3D Structural Finite Element Models",
      "Complete General Arrangement (GA) Drawings",
      "Detailed RCC Reinforcement & Bar Bending Schedules",
      "Structural Steel Connection & Fabrication Detailing",
      "Seismic & Wind Stability Calculation Dossiers"
    ],
    standardsFollowed: ["IS 456:2000 (Plain & Reinforced Concrete)", "IS 1893 (Seismic Design)", "IS 875 Parts 1-5 (Design Loads)", "IS 800:2007 (Structural Steel)", "IS 13920 (Ductile Detailing)"],
    idealFor: ["Multi-Storey Apartments", "Industrial Factory Sheds", "Commercial Towers", "Heavy Machine Foundations"],
    scopePoints: [
      "Seismic Zone III & IV dynamic response spectrum analysis",
      "High-rise lateral drift and deflection control",
      "Steel truss, portal frame, and PEB structural design",
      "Foundation scheme selection (Isolated, Combined, Mat, or Piles)"
    ]
  },
  {
    id: "03",
    number: "03",
    slug: "soil-testing",
    title: "Geotechnical Soil Testing",
    category: "Testing & Audit",
    tagline: "Sub-surface ground truth for structural foundations.",
    shortDescription: "Standard Penetration Testing (SPT), subsoil exploration, borehole logging, and safe bearing capacity determination ensuring rock-solid structural foundation design.",
    fullOverview: "A structure is only as reliable as the ground beneath it. Our geotechnical team conducts in-situ field testing and laboratory soil mechanics to evaluate shear strength, water table fluctuations, and settlement characteristics.",
    keyDeliverables: [
      "Borehole Drilling Logs & Stratification Charts",
      "Standard Penetration Test (SPT) N-Value Curves",
      "Safe Bearing Capacity (SBC) Calculations",
      "Direct Shear & Triaxial Laboratory Test Reports",
      "Foundation Depth & Type Recommendations"
    ],
    standardsFollowed: ["IS 2131 (Standard Penetration Test)", "IS 1892 (Subsurface Investigation)", "IS 2720 (Methods of Soil Testing)"],
    idealFor: ["New Construction Projects", "Industrial Estates", "Highway & Bridge Approaches", "Tower Foundations"],
    scopePoints: [
      "Field borehole drilling up to required refusal depth",
      "Undisturbed (UDS) and disturbed soil sample extraction",
      "Atterberg limits, moisture content, and consolidation testing",
      "Specific foundation recommendations (Shallow vs Deep Piling)"
    ]
  },
  {
    id: "04",
    number: "04",
    slug: "surveying",
    title: "Topographical & Land Surveying",
    category: "Planning",
    tagline: "Millimeter-precision geomatics and terrain modeling.",
    shortDescription: "Total Station and digital terrain contour surveying for accurate boundary demarcations, volumetric cut-fill analysis, and site gradient planning.",
    fullOverview: "Using electronic Total Stations and digital geodetic surveying, we capture physical terrain contours, boundary demarcations, natural drainage features, and benchmark elevations to provide an undisputed spatial baseline for project planners.",
    keyDeliverables: [
      "Topographical 2D/3D Contour Maps",
      "Geo-referenced Boundary Demarcation Reports",
      "Cut-and-Fill Earthwork Volume Computations",
      "Road Alignment & Gradient Level Charts",
      "CAD-Ready Terrain Surface Models"
    ],
    standardsFollowed: ["Survey of India Benchmarking Guidelines", "IRC Highway Survey Norms"],
    idealFor: ["Township Developers", "Highway Contractors", "Industrial Land Buyers", "Government Works"],
    scopePoints: [
      "Perimeter and internal boundary triangulation",
      "Contour interval generation (0.5m / 1.0m grids)",
      "Existing utilities, trees, and waterbody mapping",
      "Road and drainage slope feasibility studies"
    ]
  },
  {
    id: "05",
    number: "05",
    slug: "structural-audit-ndt",
    title: "Structural Audit & Non-Destructive Testing",
    category: "Testing & Audit",
    tagline: "Diagnostic structural health evaluation without destructive demolition.",
    shortDescription: "Rebound hammer, Ultrasonic Pulse Velocity (UPV), core extraction, and structural health audits for aging, stressed, modified, or fire-affected structures.",
    fullOverview: "We evaluate the in-situ integrity, compressive strength, rebar corrosion, and internal voids of existing concrete structures. Our certified audit reports deliver actionable strengthening, retrofitting, and load-reclassification blueprints.",
    keyDeliverables: [
      "Rebound Hammer Surface Hardness Mapping",
      "Ultrasonic Pulse Velocity (UPV) Uniformity Profiles",
      "Concrete Core Compressive Strength Test Results",
      "Carbonation Depth & Rebar Corrosion Potential Data",
      "Comprehensive Structural Fitness & Audit Certificate",
      "Retrofitting & Jacketing Engineering Schemes"
    ],
    standardsFollowed: ["IS 13311 (Part 1 - UPV, Part 2 - Rebound Hammer)", "IS 516 (Concrete Strength Testing)", "NBC 2016 Structural Audit Protocol"],
    idealFor: ["Old Residential Complexes", "Factory Expansion Projects", "Distressed Buildings", "Banks & Insurance Audits"],
    scopePoints: [
      "Visual defect mapping (Cracks, spalling, honeycombing)",
      "In-situ non-destructive pulse velocity and rebound tests",
      "Core sampling and lab compressive verification",
      "Deflection and structural distress root-cause diagnosis"
    ]
  },
  {
    id: "06",
    number: "06",
    slug: "foundation-quality-assessment",
    title: "Foundation Quality Assessment",
    category: "Testing & Audit",
    tagline: "Sub-structure integrity and pile verification.",
    shortDescription: "Sub-structure load verification, settlement analysis, and foundation integrity audits for heavy industrial facilities and high-rise developments.",
    fullOverview: "We inspect and assess existing and under-construction foundations. From Low-Strain Pile Integrity Testing to differential settlement verification, we ensure foundations safely transfer super-structural loads to bearing strata.",
    keyDeliverables: [
      "Low-Strain Pile Integrity Test (PIT) Graphs",
      "Foundation Settlement Monitoring Logs",
      "Sub-Structure Load Transfer Validation",
      "Underpinning & Remedial Foundation Schemes"
    ],
    standardsFollowed: ["IS 2911 (Design & Construction of Pile Foundations)", "IS 1904 (Structural Foundations)"],
    idealFor: ["Piled Foundation Sites", "Industrial Machine Bases", "Structures Experiencing Settlement"],
    scopePoints: [
      "Pile shaft continuity and necking/bulging detection",
      "Differential settlement baseline monitoring",
      "Remedial underpinning and micro-piling guidance",
      "Foundation stability sign-offs for additional floor loads"
    ]
  },
  {
    id: "07",
    number: "07",
    slug: "fire-noc-approvals",
    title: "Fire N.O.C. & Statutory Clearances",
    category: "Planning",
    tagline: "Statutory life safety engineering and approval compliance.",
    shortDescription: "Fire life safety layouts, hydrant system designs, evacuation mapping, and statutory clearance liaising with state Fire & Emergency Services directorates.",
    fullOverview: "Navigating fire safety norms requires strict adherence to Part 4 of the National Building Code. We design active and passive fire protection systems and prepare statutory documentation to secure Fire Safety Recommendations (FSR) and Fire N.O.C.",
    keyDeliverables: [
      "Fire Evacuation & Travel Distance Plans",
      "Internal/External Hydrant & Wet Riser System Layouts",
      "Fire Sprinkler & Smoke Detection Schemes",
      "Fire Pump Room & Water Storage Sizing Calculations",
      "Statutory Fire Department Approval Dossiers"
    ],
    standardsFollowed: ["NBC 2016 Part 4 (Fire and Life Safety)", "IS 3844 (Installation of Fire Hydrants)", "IS 15105 (Design & Installation of Fixed Fire Sprinklers)"],
    idealFor: ["Commercial Complexes", "High-Rise Apartments (>15m)", "Hospitals & Nursing Homes", "Warehouses & Factories"],
    scopePoints: [
      "Egress width, staircase enclosure & refuge area calculations",
      "Active firefighting hydraulic calculations",
      "Passive compartmentalization and fire-stop design",
      "Liaison drawings for West Bengal Fire & Emergency Services"
    ]
  },
  {
    id: "08",
    number: "08",
    slug: "building-construction",
    title: "Building Construction & Turnkey Execution",
    category: "Execution",
    tagline: "Engineering-supervised civil execution with zero quality compromises.",
    shortDescription: "End-to-end structural construction with strict on-site quality control, concrete batch testing, and engineering-supervised civil execution.",
    fullOverview: "Unlike conventional contractors, our construction division is led directly by structural engineers. We enforce strict concrete mix ratios, curing regimes, bar placement tolerances, and material testing protocols to deliver durable buildings on schedule.",
    keyDeliverables: [
      "Turnkey RCC & Brickwork Execution",
      "Daily Material & Concrete Cube Compressive Test Logs",
      "Critical Stage Inspection Sign-offs (Pre-pour Reinforcement)",
      "Weekly Project Milestone Progress Dashboards",
      "As-Built Structural Documentation Handover"
    ],
    standardsFollowed: ["IS 456 (Workmanship & Curing)", "IS 2502 (Bending & Fixing of Bars)", "IS 4082 (Stacking & Storage of Construction Materials)"],
    idealFor: ["Bespoke Residential Residences", "Commercial Establishments", "Industrial Factories & Sheds", "Institutional Campuses"],
    scopePoints: [
      "Site excavation, layout alignment & sub-base preparation",
      "Reinforced concrete frame casting with calibrated batching",
      "Precision masonry, lintels, and structural plastering",
      "Strict on-site safety protocols and quality documentation"
    ]
  },
  {
    id: "09",
    number: "09",
    slug: "interior-design",
    title: "Interior Design & Space Planning",
    category: "Finishing & Protection",
    tagline: "Ergonomic interior architecture and bespoke spatial finishes.",
    shortDescription: "Ergonomic interior architecture, acoustic planning, high-end commercial office fit-outs, and luxury residential interior layouts.",
    fullOverview: "We integrate interior aesthetics with structural constraints and MEP services. Our team crafts customized spatial layouts with attention to ergonomic circulation, lighting design, acoustics, and durable material selections.",
    keyDeliverables: [
      "Photorealistic 3D Interior Views",
      "Reflected Ceiling & Lighting Plans",
      "Electrical & Plumbing Conduit Schematics",
      "Custom Millwork & Joinery Detail Sheets",
      "Finishing Material & Color Palette Boards"
    ],
    standardsFollowed: ["IS 3646 (Code of Practice for Interior Illumination)", "NBC Interior Safety Guidelines"],
    idealFor: ["Corporate Offices", "Retail Showrooms", "Luxury Residences", "Hospitality Venues"],
    scopePoints: [
      "Functional zoning and ergonomic furniture layout",
      "Acoustic wall panelling and partition systems",
      "Lighting design (Ambient, Task & Accentuation)",
      "Vendor coordination and material quality checks"
    ]
  },
  {
    id: "10",
    number: "10",
    slug: "false-ceiling-painting",
    title: "False Ceiling & Finishing Works",
    category: "Finishing & Protection",
    tagline: "Precision ceiling grid frameworks and architectural protective coatings.",
    shortDescription: "Precision gypsum/grid ceiling systems, specialized acoustic treatments, and architectural protective paint coatings.",
    fullOverview: "Our finishing specialists execute precision false ceilings and multi-coat protective finishes. We ensure level framing, concealed MEP access, and high-performance paint systems that resist peeling and humidity.",
    keyDeliverables: [
      "Gypsum & Grid False Ceiling Layouts",
      "Cove Lighting & HVAC Diffuser Details",
      "Surface Preparation & Multi-Coat Emulsion Application",
      "Anti-Fungal & Weather-Proof Exterior Coatings"
    ],
    standardsFollowed: ["IS 2395 (Painting of Concrete & Masonry)", "IS 2441 (Gypsum Ceiling Standards)"],
    idealFor: ["Offices", "Apartments", "Retail Outlets", "Hospitals"],
    scopePoints: [
      "GI channel framework levelling and suspension anchors",
      "Plasterboard jointing with fiber tape and crack filler",
      "Putty sanding with micro-level surface smoothing",
      "Low-VOC interior and elastomeric exterior paint finishes"
    ]
  },
  {
    id: "11",
    number: "11",
    slug: "waterproofing-damp-proofing",
    title: "Waterproofing & Damp Proofing",
    category: "Finishing & Protection",
    tagline: "Engineered moisture barriers protecting structural reinforcement from corrosion.",
    shortDescription: "Advanced chemical membrane application, crystalline treatments, basement tanking, and roof waterproofing systems.",
    fullOverview: "Water ingress is the primary cause of concrete degradation and rebar corrosion. We deploy engineered waterproofing systems—from crystalline injection to elastomeric membranes—backed by technical application protocols.",
    keyDeliverables: [
      "Basement Retaining Wall & Raft Tanking",
      "Terrace & Roof Slab Crystalline Membrane Systems",
      "Pressure Grouting for Honeycombs & Construction Joints",
      "Toilet & Sunken Slab Multi-Layer Waterproofing",
      "Multi-Year Performance Warranty Documentation"
    ],
    standardsFollowed: ["IS 3067 (Code of Practice for Waterproofing of Buildings)", "IS 1346 (Waterproofing of Roofs)"],
    idealFor: ["Basements & Podiums", "Roof Terraces", "Water Tanks & Swimming Pools", "Old Buildings with Dampness"],
    scopePoints: [
      "Surface preparation, v-groove chasing & joint sealing",
      "Polymer-modified cementitious (PMC) and polyurethane coatings",
      "Non-shrink pressure grouting in structural cold joints",
      "Pond testing verification before tiling / protective screeds"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "PRJ-01",
    slug: "dankuni-logistics-industrial-park",
    title: "Logistics Hub & PEB Warehouse",
    sector: "Warehousing",
    location: "Dankuni Industrial Corridor, Hooghly",
    year: "2023",
    scale: "85,000 Sq. Ft.",
    scope: ["Geotechnical Soil Testing", "Structural Steel Design", "Municipal Sanction Drawings", "Waterproofing"],
    archstructRole: "Lead Structural & Geotechnical Consultant",
    challenge: "High water table and soft alluvial clay strata required specialized soil stabilization and high-bearing isolated footings to resist heavy crane wheel loads and wind uplift on a 36m clear-span PEB frame.",
    engineeringApproach: "Conducted 6 deep SPT boreholes up to 24m depth. Engineered a hybrid foundation scheme combining compacted stone columns with rigid RCC pedestals. Structural steel members were optimized using finite element modeling under IS 800:2007.",
    outcome: "Achieved a 14% reduction in structural steel tonnage while exceeding IS 1893 seismic ductility standards. Zero settlement observed during full operational loading.",
    keyMetrics: [
      { label: "Clear Span", value: "36 Meters" },
      { label: "Steel Optimization", value: "14% Saved" },
      { label: "Borehole Depth", value: "24 Meters" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "PRJ-02",
    slug: "grand-heritage-residential-enclave",
    title: "Grand Vista Multi-Storey Residential Enclave",
    sector: "Residential",
    location: "Hooghly Riverfront Zone, West Bengal",
    year: "2023",
    scale: "120,000 Sq. Ft. (B+G+9)",
    scope: ["Architectural Planning", "Structural Design", "Fire NOC Clearance", "Foundation Testing"],
    archstructRole: "Comprehensive Planning & Structural Engineering",
    challenge: "Complex cantilever balcony geometry and riverfront seismic proximity demanded rigorous dynamic response spectrum analysis and stringent fire evacuation clearance for 120 residential units.",
    engineeringApproach: "Designed an RCC shear-wall core system with ductile detailing under IS 13920. Conducted Low-Strain Pile Integrity Testing (PIT) on 180 bored cast-in-situ piles. Integrated an automated wet-riser and sprinkler scheme to obtain West Bengal Fire Directorate clearance.",
    outcome: "Secured all municipal and fire statutory approvals on first submission. Delivered robust seismic performance with high residential spatial efficiency.",
    keyMetrics: [
      { label: "Structure Height", value: "B+G+9 Storeys" },
      { label: "Pile Tests", value: "180 Tested" },
      { label: "Fire Clearance", value: "100% Compliant" }
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "PRJ-03",
    slug: "eastern-manufacturing-foundry",
    title: "Heavy Machinery Foundry & Fabrication Facility",
    sector: "Industrial",
    location: "Kharagpur Industrial Area, West Bengal",
    year: "2022",
    scale: "45,000 Sq. Ft.",
    scope: ["Machine Foundation Design", "Structural Audit & NDT", "Building Construction"],
    archstructRole: "Industrial Structural Consultant & Quality Auditor",
    challenge: "Dynamic vibration resonance from a 15-ton drop hammer machine threatened adjacent control rooms and structural framing.",
    engineeringApproach: "Engineered an isolated mass concrete block foundation with vibration-damping elastomeric barriers. Conducted non-destructive Ultrasonic Pulse Velocity (UPV) audits on surrounding columns to map existing concrete stress fields.",
    outcome: "Damped 94% of operational harmonic vibration, preventing structural cracking in surrounding framing and prolonging equipment lifespan.",
    keyMetrics: [
      { label: "Dynamic Load", value: "15-Ton Impact" },
      { label: "Vibration Damped", value: "94% Isolated" },
      { label: "Concrete Grade", value: "M35 High Early" }
    ],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "PRJ-04",
    slug: "metropolitan-commercial-tower",
    title: "Skyline Corporate Plaza & Retail Hub",
    sector: "Commercial",
    location: "Howrah Urban Growth Zone",
    year: "2024",
    scale: "65,000 Sq. Ft.",
    scope: ["Architectural Planning", "Structural Design", "Surveying", "Interior Fit-outs"],
    archstructRole: "Principal Architectural & Structural Consultant",
    challenge: "Narrow urban plot footprint with zero side-setback tolerance, requiring maximum rentable column-free floor plates on upper commercial levels.",
    engineeringApproach: "Employed high-strength concrete (M40) with post-tensioned (PT) band beams, achieving 9.5m clear spans without deep downstand beams, preserving ceiling clearance for MEP conduits.",
    outcome: "Maximized leasable floor area by 18% compared to conventional beam-slab framing while reducing overall dead load on foundations.",
    keyMetrics: [
      { label: "Clear Span", value: "9.5m Column-Free" },
      { label: "Leasable Area Gain", value: "+18%" },
      { label: "Concrete Strength", value: "M40 Grade" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "PRJ-05",
    slug: "institutional-health-campus-audit",
    title: "Apex Healthcare & Research Facility Structural Audit",
    sector: "Institutional",
    location: "Kolkata Metropolitan Area",
    year: "2023",
    scale: "95,000 Sq. Ft.",
    scope: ["Structural Audit & NDT Testing", "Carbonation Testing", "Retrofitting Schemes"],
    archstructRole: "Lead Structural Diagnostic & Audit Engineer",
    challenge: "A 28-year-old hospital wing required addition of heavy MRI and CT-scan equipment on the 2nd floor, raising concerns over structural load capacity and concrete degradation.",
    engineeringApproach: "Executed 140 Rebound Hammer tests, 65 UPV grid points, core extraction, and chemical rebar carbonation testing. Formulated an external carbon-fiber-reinforced polymer (CFRP) beam wrapping and column micro-concrete jacketing scheme.",
    outcome: "Upgraded live-load carrying capacity by 40% with zero disruption to ground-floor ICU operations, certified with full municipal compliance.",
    keyMetrics: [
      { label: "NDT Tests", value: "205 Points" },
      { label: "Load Upgrade", value: "+40% Live Load" },
      { label: "Retrofitting", value: "CFRP Wrapping" }
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "PRJ-06",
    slug: "highway-culvert-infrastructure",
    title: "Regional Drainage Culvert & Bridge Approach",
    sector: "Infrastructure",
    location: "Hooghly - Bardhaman Highway Link",
    year: "2022",
    scale: "Linear Infrastructure",
    scope: ["Topographical Surveying", "Soil Investigation", "Structural Culvert Design"],
    archstructRole: "Geomatic & Structural Design Consultant",
    challenge: "Flash flood catchment area with highly erodible alluvial banks requiring rapid hydraulic discharge and scour-resistant foundation design.",
    engineeringApproach: "Conducted electronic Total Station terrain modeling over a 3km catchment corridor. Designed a multi-cell RCC box culvert under IRC:112 concrete bridge codes with deep cut-off walls.",
    outcome: "Successfully weathered consecutive monsoon seasons with zero scour undermining or waterlogging on the state arterial corridor.",
    keyMetrics: [
      { label: "Catchment Survey", value: "3.0 Kilometers" },
      { label: "Culvert Type", value: "Multi-Cell Box" },
      { label: "Design Code", value: "IRC:112" }
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=80"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    slug: "industrial-manufacturing",
    name: "Industrial & Manufacturing",
    code: "IND-01",
    tagline: "Heavy-duty engineering for continuous production environments.",
    description: "From heavy machine vibration foundations and crane gantry beams to large-span production sheds and effluent treatment civil plants.",
    keyChallenges: ["Dynamic machine vibration harmonics", "Heavy point loads from overhead cranes", "Industrial chemical soil exposure"],
    ourSolutions: ["Mass concrete inertia block design", "IS 800 steel gantry detailing", "Sulphate-resistant foundation concrete"],
    relevantServices: ["Structural Design & Drawing", "Soil Testing", "Foundation Assessment", "Building Construction"]
  },
  {
    slug: "logistics-warehousing",
    name: "Logistics & Warehousing",
    code: "IND-02",
    tagline: "Large-span PEB facilities and high-load floor slabs.",
    description: "Engineering high-throughput distribution hubs, clear-span pre-engineered buildings (PEB), and heavy racking foundation schemes.",
    keyChallenges: ["High wind uplift forces on wide spans", "Super-flat floor slab tolerances (FM2 standards)", "Stormwater management over massive roof areas"],
    ourSolutions: ["PEB tapered member wind optimization", "Laser-guided jointless concrete flooring schemes", "Rainwater runoff and recharge engineering"],
    relevantServices: ["Architectural Planning", "Structural Design", "Surveying", "Waterproofing"]
  },
  {
    slug: "commercial-corporate",
    name: "Commercial & Corporate",
    code: "IND-03",
    tagline: "Column-free commercial towers, retail plazas, and corporate hubs.",
    description: "Creating high-efficiency commercial floor plates that maximize leasable carpet area while complying with statutory fire and municipal norms.",
    keyChallenges: ["Maximizing FAR and leasable area", "Stringent municipal setback and parking norms", "Acoustic and MEP ceiling integration"],
    ourSolutions: ["Post-tensioned long-span slab systems", "Automated basement stack parking layouts", "Complete Fire N.O.C. and statutory liaisons"],
    relevantServices: ["Architectural Planning", "Structural Design", "Fire N.O.C. Approvals", "Interior Design"]
  },
  {
    slug: "residential-developments",
    name: "Residential Developments",
    code: "IND-04",
    tagline: "Villas, residential towers, and gated communities built to last generations.",
    description: "Balancing family living ergonomics, natural ventilation, and seismic safety in standalone luxury villas and multi-storey apartment complexes.",
    keyChallenges: ["Tight budget vs durability tradeoffs", "Moisture ingress and long-term dampness", "Seismic safety in riverine delta soils"],
    ourSolutions: ["Ductile RCC framing with optimized steel ratios", "Integrated damp-proof crystalline barriers", "Vastu-compliant architectural space planning"],
    relevantServices: ["Architectural Planning", "Structural Design", "Building Construction", "Waterproofing"]
  },
  {
    slug: "institutional-healthcare",
    name: "Institutional & Healthcare",
    code: "IND-05",
    tagline: "Hospitals, medical labs, and academic institutions requiring zero-failure safety.",
    description: "Designing high-importance factor structures (IS 1893 Importance Factor 1.5) with advanced radiation shielding and continuous accessibility.",
    keyChallenges: ["Heavy diagnostic equipment loads (MRI/CT)", "Uninterrupted emergency egress routes", "Acoustic isolation between wards"],
    ourSolutions: ["High-density concrete radiation bunkers", "Part 4 NBC medical fire compliance layouts", "Structural audits for live hospital upgrades"],
    relevantServices: ["Architectural Planning", "Structural Audit & NDT", "Fire N.O.C. Approvals", "Interior Fit-outs"]
  },
  {
    slug: "infrastructure-government",
    name: "Infrastructure & Government",
    code: "IND-06",
    tagline: "Public works, drainage culverts, and state compliance assessments.",
    description: "Providing precision geomatic surveys, bridge approach assessments, and third-party structural audit certifications for government and municipal works.",
    keyChallenges: ["Strict adherence to PWD/CPWD & IRC specifications", "High water table drainage management", "Public safety durability benchmarks"],
    ourSolutions: ["Total Station digital elevation terrain baselines", "IRC:112 compliant box culvert engineering", "Certified structural fitness documentation"],
    relevantServices: ["Topographical Surveying", "Soil Testing", "Structural Audit & NDT"]
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    name: "UNDERSTAND",
    subtitle: "Project Scoping & Statutory Baseline",
    desc: "We analyze project vision, statutory FAR limits, municipal bylaws, and spatial objectives to set unambiguous technical parameters before any drawing begins."
  },
  {
    step: "02",
    name: "ASSESS",
    subtitle: "Geotechnical & Site Investigation",
    desc: "Conducting on-site soil boring, SPT sampling, and Total Station surveying to evaluate exact soil bearing capacity, ground table, and topographical contours."
  },
  {
    step: "03",
    name: "PLAN",
    subtitle: "Architectural & Functional Blueprinting",
    desc: "Developing optimized floor layouts, sun-path orientation, egress routes, and municipal approval sets conforming to the National Building Code (NBC 2016)."
  },
  {
    step: "04",
    name: "DESIGN",
    subtitle: "Finite Element Structural Modeling",
    desc: "Performing 3D dynamic seismic analysis, wind load modeling, and material optimization using IS 456, IS 1893, and IS 800 standards."
  },
  {
    step: "05",
    name: "ENGINEER",
    subtitle: "Micro-Detailing & Bar Schedules",
    desc: "Producing zero-error reinforcement schedules, beam-column junction ductile detailing, and MEP coordination drawings for flawless contractor execution."
  },
  {
    step: "06",
    name: "EXECUTE",
    subtitle: "On-Site Supervision & Batch Testing",
    desc: "Supervising critical structural stages, shuttering alignment, concrete cube compressive testing, and pile integrity testing on active sites."
  },
  {
    step: "07",
    name: "DELIVER",
    subtitle: "Structural Certification & Handover",
    desc: "Issuing final structural fitness certificates, statutory sign-offs, as-built drawing archives, and waterproofing warranties."
  }
];

export const INSIGHTS: InsightItem[] = [
  {
    slug: "importance-of-soil-testing-before-construction",
    title: "Why Soil Testing is Non-Negotiable Before Foundation Design",
    category: "Geotechnical Engineering",
    readTime: "5 min read",
    date: "January 2024",
    summary: "Understanding how SPT N-values and soil stratigraphy prevent differential settlement and catastrophic foundation failure in riverine delta basins.",
    content: [
      "Constructing without a geotechnical soil report is akin to building blindfolded. In regions like Eastern India and the Bengal delta basin, subsoil layers vary drastically within a radius of just 15 meters—shifting from firm silt to compressible organic clays.",
      "A Standard Penetration Test (SPT) measures the resistance of soil strata at successive 1.5-meter intervals. If an engineer designs an isolated footing based on assumed bearing capacity instead of measured SPT N-values, excessive differential settlement can crack structural beams within 36 months of handover.",
      "Investing a fraction of 1% of the total project budget in comprehensive borehole soil testing guarantees foundation safety and often saves 10-15% in excessive concrete over-design."
    ],
    keyTakeaways: [
      "Assumed soil capacity leads to either catastrophic settlement or expensive over-design.",
      "SPT N-values dictate whether shallow footings, raft, or deep piling is mandatory.",
      "High groundwater tables significantly reduce effective soil bearing capacity."
    ]
  },
  {
    slug: "non-destructive-testing-structural-audits",
    title: "Diagnostic Power of Non-Destructive Testing (NDT) in Aging Buildings",
    category: "Structural Audits",
    readTime: "6 min read",
    date: "December 2023",
    summary: "How Rebound Hammer and Ultrasonic Pulse Velocity (UPV) evaluate concrete health without drilling or damaging active structures.",
    content: [
      "When evaluating an old residential complex, commercial tower, or industrial plant for expansion, destructive testing is often impossible. Non-Destructive Testing (NDT) provides a non-invasive window into concrete health.",
      "The Rebound Hammer (IS 13311 Part 2) tests surface hardness, while Ultrasonic Pulse Velocity (UPV, IS 13311 Part 1) shoots acoustic waves through concrete. The wave transit velocity reveals internal voids, honeycomb pockets, and concrete homogeneity.",
      "Combined with chemical carbonation testing, NDT tells engineers exactly how much life remains in a structure and guides precise carbon-fiber wrapping or micro-concrete jacketing schemes."
    ],
    keyTakeaways: [
      "UPV speeds over 3.75 km/s indicate good-to-excellent concrete uniformity.",
      "Rebound values must always be calibrated with UPV for accurate strength estimation.",
      "NDT is mandatory before adding additional floors to an existing structure."
    ]
  },
  {
    slug: "seismic-resilient-design-is-1893",
    title: "Seismic Resilient RCC Framing: Key Ductile Detailing Principles",
    category: "Structural Engineering",
    readTime: "7 min read",
    date: "November 2023",
    summary: "A technical breakdown of IS 13920 ductile detailing norms for beam-column joints to withstand lateral earthquake forces.",
    content: [
      "Earthquakes do not kill people; collapsing buildings do. During seismic events, lateral inertia forces create immense shear stress at beam-column junctions.",
      "Under IS 13920:2016, ductile detailing ensures that beams yield before columns (the 'Strong Column - Weak Beam' principle). This allows the structure to absorb seismic energy through plastic deformation without sudden brittle failure.",
      "Close-spaced stirrups (confined ties) at column ends and special anchorage hooks in beam reinforcement are simple detailing practices that protect human life."
    ],
    keyTakeaways: [
      "Always design columns stronger than the intersecting beams.",
      "Confined stirrup spacing (often <= 100mm) is critical within the joint zone.",
      "Continuous bottom rebar through interior joints prevents progressive collapse."
    ]
  }
];

export const TESTIMONIALS = [
  {
    client: "Industrial Plant Director",
    company: "Apex Engineering & Logistics Hub, Dankuni",
    quote: "Er. Tanmoy Das and The Archstruct Consultant team engineered our 85,000 sq. ft. logistics warehouse under difficult soft-soil conditions. Their geotechnical testing and PEB structural optimization saved us significant steel tonnage while passing all safety audits with flying colors.",
    projectType: "Industrial Logistics Hub"
  },
  {
    client: "Managing Director",
    company: "Heritage Real Estate Developers, Hooghly",
    quote: "Finding a consultancy that seamlessly handles municipal architectural sanctioning, IS 1893 seismic structural calculation, and West Bengal Fire N.O.C. under one roof is rare. Archstruct is our permanent engineering partner.",
    projectType: "Multi-Storey Residential Enclave"
  },
  {
    client: "Facility Head",
    company: "Regional Manufacturing & Foundry Works",
    quote: "Their non-destructive testing (NDT) audit and vibration-isolated machine foundation design completely solved our heavy drop-hammer vibration issues. Highly analytical, professional, and precise.",
    projectType: "Heavy Machinery Foundry"
  }
];
