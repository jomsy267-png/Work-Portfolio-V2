export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  description: string
  deliverables: string[]
  thumbnail: string
  heroImage: string
  images: string[]
  nextProject: string
  meta?: Record<string, string>
}

const CDN = 'https://cdn.myportfolio.com/ca72b759-5bcb-4a9e-bc2d-b4085b298de1'

export const projects: Project[] = [
  {
    slug: 'runway-footwear',
    title: 'Runway Footwear',
    client: 'Runway Footwear',
    category: 'Brand Identity & Digital Design',
    year: '2023',
    description:
      'A comprehensive branding initiative for Runway Footwear — a modern dropshipping footwear brand. The work began with a strategic logo redesign reflecting style and sophistication, expanding into cohesive packaging and social media content that creates a memorable brand experience.',
    deliverables: ['Logo Design', 'Branding Package', 'Application UI', 'Social Media', 'Stationery'],
    thumbnail: `${CDN}/75a7ee6d-2a00-4137-9482-bdd3366534b3_rw_1920.png?h=e0bb22be4c8c2087413c52eb27e5ecb6`,
    heroImage: `${CDN}/75a7ee6d-2a00-4137-9482-bdd3366534b3_rw_1920.png?h=e0bb22be4c8c2087413c52eb27e5ecb6`,
    images: [
      `${CDN}/3b1a9566-5af2-4ffd-81af-23e305f38b9b_rw_3840.png?h=4d8f550746ebcdecae0403b56fd1b107`,
      `${CDN}/01bd9434-1a14-4159-b42b-3b283061a941_rw_1920.png?h=f536f2b8e3325b7baa0a51dfafb1162c`,
      `${CDN}/5de62a76-326d-4017-9677-fa1e0db26407_rw_1920.png?h=c26c587d34ff893251ce00394819f1fd`,
      `${CDN}/640907ac-651b-4fa2-9b5c-a11c38f43cbd_rw_600.png?h=a8dc845b436c74120ad70ba39ee39464`,
    ],
    meta: { Developer: 'Chris Solara', Designer: 'Jomil Shah' },
    nextProject: 'odd-brewing-co',
  },
  {
    slug: 'odd-brewing-co',
    title: 'Odd. Brewing Co.',
    client: 'Odd. Brewing Company',
    category: 'Branding & Packaging',
    year: '2023',
    description:
      'A comprehensive branding initiative balancing contrasts and cohesion. A minimalist black-and-white primary mark for versatility and longevity, complemented by a tap room logo for signage — and bold, vibrant packaging that stands out on shelf while maintaining brand integrity.',
    deliverables: ['Logo Design', 'Brand Identity', 'Tap Room Mark', 'Packaging Design'],
    thumbnail: `${CDN}/b9f12569-0b50-428b-bfce-9d47820f5d6a_rw_1920.jpg?h=7d63a90c3c5ed6b4ff57185f8df34d3b`,
    heroImage: `${CDN}/b9f12569-0b50-428b-bfce-9d47820f5d6a_rw_1920.jpg?h=7d63a90c3c5ed6b4ff57185f8df34d3b`,
    images: [
      `${CDN}/ea7461df-90bc-478c-93c7-f54b15622a50_rw_1920.jpg?h=728916f7ad213c3138b51716f2d0924a`,
      `${CDN}/650d4116-56e9-4741-aed6-9757002bba1e_rw_1920.jpg?h=726f73d431bd06440a5de64d8eeadc98`,
      `${CDN}/2be8f34a-dcfc-4e51-9e49-58c25ed8a61d_rw_3840.jpg?h=4c435dd059771a21765167e72c1e9f39`,
      `${CDN}/8dc98c08-f726-4a7c-8c84-59cd976bf7ed_rw_3840.jpg?h=aed88fe97c9ab5f87fe2580877dc247d`,
      `${CDN}/345a6986-31b9-4763-9def-805f905836e9_rw_1920.jpg?h=d743ec7467137c2ef8037d007e6a9f1a`,
      `${CDN}/4a41c1b8-b3d7-4123-9789-4280c17dd168_rw_1920.jpg?h=bc6ee4106766047966516ab28aa84f10`,
      `${CDN}/c136fe0b-97ac-430c-947b-0a7455154ca6_rw_1920.jpg?h=8e2b499dc618945d1e6f4867212d4e64`,
      `${CDN}/1af932ad-2ef0-4c48-8414-c00b8d4b8d31_rw_1920.jpg?h=f8e797bed6f35512b2e60e8f31267ddc`,
      `${CDN}/3b88edc4-4ff4-4f73-9d74-dd400622dd75_rw_1920.jpg?h=38e2e5cf6e10ae42230c852a54bba625`,
      `${CDN}/4b4dae06-0fe3-421f-934e-1c11c5728ce0_rw_3840.jpg?h=34a63c9a5ea6bc4720ecca8f219603c1`,
    ],
    meta: { Designer: 'Jomil Shah' },
    nextProject: 'edify',
  },
  {
    slug: 'edify',
    title: 'Edify',
    client: 'Edify',
    category: 'Brand & Design',
    year: '2023',
    description:
      "A focused brand and design project completed in 2023. The work encompasses visual identity design and graphic communication crafted to elevate the brand's presence across print and digital touchpoints.",
    deliverables: ['Brand Identity', 'Visual Design', 'Graphic Design'],
    thumbnail: `${CDN}/31f60dfd-a4cb-4ac3-b64f-83fc305cca38_rw_1920.jpg?h=0ec21748318a5e0038173fab81a67b8d`,
    heroImage: `${CDN}/31f60dfd-a4cb-4ac3-b64f-83fc305cca38_rw_1920.jpg?h=0ec21748318a5e0038173fab81a67b8d`,
    images: [
      `${CDN}/a7686831-8492-412a-8cab-eab52fd5aa94_rw_3840.jpg?h=6b2dc2dc0e011d90f7a0e15a210adbb9`,
      `${CDN}/1bc6eb7c-fe13-479f-9c17-4516f81f6bcb_rw_1200.jpg?h=387eaa87466b9c9ef4cc64cef42a16df`,
      `${CDN}/121b7a6c-351c-405e-991c-a6bd437971d1_rw_1920.jpg?h=c076305ad88e879f300fb4ea40501bc3`,
      `${CDN}/36dae557-a534-4a95-8daf-8a1704402f53_rw_1920.jpg?h=bbb5c1395412af71e5e08073d7a27aff`,
      `${CDN}/121e845c-36a3-4d6b-bd95-117ac844abc0_rw_1920.jpg?h=6f2286da8adc59c72f1a2577c1fe6a8e`,
      `${CDN}/5a407db2-76c1-44bb-8006-5493683ba949_rw_3840.jpg?h=744299b2b036d794994700639b2b6ba0`,
      `${CDN}/c86d44c1-b69e-4fbd-9220-330a7c9b05bb_rw_3840.jpg?h=788dc6968e5a861735b643f7740ff6be`,
    ],
    meta: { Designer: 'Jomil Shah' },
    nextProject: 'apega',
  },
  {
    slug: 'apega',
    title: 'APEGA',
    client: 'APEGA',
    category: 'Campaign Design',
    year: '2023',
    description:
      "Two major campaigns for APEGA — the largest regulator of self-regulated professionals in Western Canada. The Membership Dollars At Work campaign communicated members' contributions through infographic posters, animated video, and magazine ads. The Women in the Workplace campaign featured social media, animations, and custom illustrations promoting inclusive workplace culture.",
    deliverables: ['Campaign Design', 'Infographic Poster', 'Animated Video', 'Magazine Ads', 'Social Media', 'Iconography', 'Illustration'],
    thumbnail: `${CDN}/f794d8a5-fc5c-4ba4-8bbb-81660117b533_rw_1200.jpg?h=f37e1241ad2defea1fad63ce5fe0ea2d`,
    heroImage: `${CDN}/f794d8a5-fc5c-4ba4-8bbb-81660117b533_rw_1200.jpg?h=f37e1241ad2defea1fad63ce5fe0ea2d`,
    images: [
      `${CDN}/daf07c4c-6ccf-4cc3-a6ef-bf9686bea16f_rw_1200.jpg?h=99353364e7e92f3eaa21180fee446327`,
      `${CDN}/a4eb79fc-2b8b-4aa0-87cb-64aa46a5800d_rw_1920.jpg?h=187829ba4bfd0a98ff5b672fea76c412`,
      `${CDN}/26dd7b15-eddc-45d1-b8b3-abf2660fe40f_rw_1920.jpg?h=7ae293e14318c7e8b75af95442f57e9b`,
      `${CDN}/0f557fa6-37c7-4976-b55f-9d7023fbdcd3_rw_1920.jpg?h=374e0f0627cc6a8b0d296d93fd57d8e0`,
      `${CDN}/76d0affd-5e91-4ac9-98c6-9d844c545f7e_rw_1920.jpg?h=02b46e379f5f0a60cc5707684ba9df19`,
      `${CDN}/df0d07fc-3088-468b-abfc-fa390459c7bf_rw_1920.jpg?h=fc70167d3662fd0462028a2cb467e33d`,
      `${CDN}/ddf21305-73c0-414d-a02b-7808bc7edeb9_rw_1920.jpg?h=6789180bb207286367baa03bdb9a97e4`,
      `${CDN}/0c747f5b-3b8b-4d9d-b96d-10a276c72498_rw_1920.jpg?h=5d809e6735bd511997e3dcdff148b59c`,
      `${CDN}/98767052-6063-40cb-94d9-b2b8c09823f4_rw_1920.jpg?h=86d29e918f465ac9931795f9d35bd3ca`,
    ],
    meta: { Designer: 'Jomil Shah' },
    nextProject: 'ballet-edmonton',
  },
  {
    slug: 'ballet-edmonton',
    title: 'Ballet Edmonton',
    client: 'Ballet Edmonton',
    category: 'Graphic Design',
    year: '2023',
    description:
      "Comprehensive branding and design capturing the grace, precision, and emotional depth inherent in ballet. Promotional banners, social media content, an immersive program guide booklet, and a proposed ticket portal redesign — every piece visually translates ballet's essence into tangible, striking materials.",
    deliverables: ['Branding Strategy', 'Banners & Posters', 'Social Media', 'Program Guide Booklet', 'Ticket Portal Proposal', 'Image Editing'],
    thumbnail: `${CDN}/ca653fac-b1b1-49c5-b6df-1157b00f92ec_rw_1200.png?h=b170a80069135b0283dc1f9942ab0ff6`,
    heroImage: `${CDN}/ca653fac-b1b1-49c5-b6df-1157b00f92ec_rw_1200.png?h=b170a80069135b0283dc1f9942ab0ff6`,
    images: [
      `${CDN}/2388ce1d-ae19-4bf4-b993-ecd99e117892_rw_3840.jpg?h=9603a5f4cbedd3ee50ad5500b9313b5d`,
      `${CDN}/8e241ead-24f7-490c-afe7-bfc763a2eec0_rw_1920.jpg?h=8ed18ee13fe453bb78a48d8873525790`,
      `${CDN}/bfe173f1-2ca0-444d-b71a-13b84f825549_rw_3840.jpg?h=50907e1e739fa8f3f34266e18875c5c6`,
      `${CDN}/2b2c9580-ba0e-413d-8ab0-a31c6bf16cb6_rw_1920.jpg?h=d11e1eaf8426a4f45f089237d8169389`,
      `${CDN}/ec18dc8c-36f1-43f3-b8e0-1e628c1cea25_rw_1920.jpg?h=7f61669a30f1adfdbcc7db64598748f5`,
      `${CDN}/4ea1c4c3-8e1b-4a34-93f1-82ef5faee248_rw_1920.jpg?h=995a0bf5bb1e7f85dcc35af3f6b5f6d1`,
      `${CDN}/2e522f5b-9474-463c-b20a-ada241b0b9e7_rw_1200.jpg?h=99471c3e40a69f03ae6e161fa2d6f45f`,
    ],
    meta: { 'Project Manager': 'Odvod Media Inc.', Designer: 'Jomil Shah' },
    nextProject: 'page-the-cleaners',
  },
  {
    slug: 'page-the-cleaners',
    title: 'Page The Cleaners',
    client: 'Page The Cleaners',
    category: 'Brand Identity',
    year: '2023',
    description:
      'Full visual identity for Page The Cleaners — an Edmonton-based dry cleaning operation. The project encompassed logo design, brand identity system, environmental design, and store signage — emphasising quality, reliability, and customer service through clean, professional aesthetics.',
    deliverables: ['Logo Design', 'Brand Identity', 'Environmental Design', 'Store Signage'],
    thumbnail: `${CDN}/ae96c42b-e2da-4265-8371-51f925166acf_rw_3840.png?h=0e5d248d752b093dd2a63434268ae518`,
    heroImage: `${CDN}/ae96c42b-e2da-4265-8371-51f925166acf_rw_3840.png?h=0e5d248d752b093dd2a63434268ae518`,
    images: [
      `${CDN}/0ae0d6bb-e09d-424f-97e1-246f90126eab_rw_3840.png?h=772322aa09616fef3e1b99a0a1b878d2`,
      `${CDN}/f46b19cc-4c3b-4235-8701-5340a8824696_rw_3840.png?h=3e11ff06e0be72d88e805b27529d2517`,
      `${CDN}/46229af3-f2b7-471f-89be-6c09728293d9_rw_3840.png?h=7edc5e23df4f13ecb53efd6b347d910c`,
      `${CDN}/23f74fe1-da35-4262-ab83-13da9329c221_rw_3840.png?h=c93477724147474c28c2d2e722fbffbe`,
      `${CDN}/e1a676d3-d513-4ea9-b0d3-93e7d9bfde34_rw_3840.png?h=df4d85d07b2f428a59c0252ce2ac65fe`,
    ],
    meta: { Location: 'Edmonton, AB', Designer: 'Jomil Shah' },
    nextProject: 'publications',
  },
  {
    slug: 'publications',
    title: 'Publications',
    client: 'Odvod Publishing Inc.',
    category: 'Art Direction',
    year: '2023–2024',
    description:
      'Art direction across multiple annual publications — from community foundation storytelling to engineering industry overviews and legal scholarship. Each publication brings together editorial design, photography curation, and typographic craft to create authoritative, immersive reading experiences.',
    deliverables: ['Art Direction', 'Editorial Design', 'Magazine Layout', 'Print Production'],
    thumbnail: `${CDN}/96c4d690-5420-4709-a926-2b1f736085a4_rw_3840.jpg?h=80220ccc5efb6d995b267fa29536c0f0`,
    heroImage: `${CDN}/96c4d690-5420-4709-a926-2b1f736085a4_rw_3840.jpg?h=80220ccc5efb6d995b267fa29536c0f0`,
    images: [
      `${CDN}/96c4d690-5420-4709-a926-2b1f736085a4_rw_3840.jpg?h=80220ccc5efb6d995b267fa29536c0f0`,
    ],
    meta: { Role: 'Art Director', Studio: 'Odvod Publishing Inc.', Designer: 'Jomil Shah' },
    nextProject: 'urban-affairs',
  },
  {
    slug: 'urban-affairs',
    title: 'Urban Affairs',
    client: 'Urban Affairs',
    category: 'Graphic Design',
    year: '2022',
    description:
      'A collection of visual communication and design work exploring urban themes — combining bold graphic language with considered typographic craft to tell stories rooted in city life, culture, and community.',
    deliverables: ['Graphic Design', 'Visual Communication', 'Print Design'],
    thumbnail: `${CDN}/b1747dcb-3d05-4d99-a6e8-9eafcbbe6772_rw_1200.jpg?h=82ded530e8424623b03f27810acbb0ac`,
    heroImage: `${CDN}/b1747dcb-3d05-4d99-a6e8-9eafcbbe6772_rw_1200.jpg?h=82ded530e8424623b03f27810acbb0ac`,
    images: [
      `${CDN}/4b214c61-f358-4102-af0a-43ef00e8b138_rw_1200.jpg?h=626a6456280f6b6576760ffceb691421`,
      `${CDN}/5e3cb395-a47b-4955-a106-4dd5da4b635f_rw_1200.png?h=54243cf1e08942e2d0f7b6191980b4cb`,
      `${CDN}/70be9cfa-6a76-4f9c-ba1d-88b657b6d12b_rw_1200.jpg?h=82489437b4fe39db70ee5da2826b1163`,
      `${CDN}/491477e0-48e7-4173-8532-d9bf7b307976_rw_1200.jpg?h=45081a7ad1789a6d7d569289420c8dc2`,
    ],
    meta: { Designer: 'Jomil Shah' },
    nextProject: 'runway-footwear',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
