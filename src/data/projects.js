const _ = 'https://cdn.myportfolio.com/ca72b759-5bcb-4a9e-bc2d-b4085b298de1/'

export const projects = [
  // ─────────────────────────────────────────────────────────────
  // 01 · RUNWAY FOOTWEAR
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'runway-footwear',
    layout: 1,
    title: 'Runway Footwear',
    category: 'Brand Identity & Digital Design',
    categoryShort: 'Brand Identity',
    tags: ['Logo Design', 'Branding Package', 'Application UI', 'Social Media', 'Stationery'],
    client: 'Runway Footwear',
    meta: [
      { label: 'Client',    value: 'Runway Footwear' },
      { label: 'Category',  value: 'Brand Identity & Digital Design' },
      { label: 'Developer', value: 'Chris Solara' },
      { label: 'Designer',  value: 'Jomil Shah' },
    ],
    description: 'A comprehensive branding initiative for Runway Footwear — a modern dropshipping footwear brand. The work began with a strategic logo redesign reflecting style and sophistication, expanding into cohesive packaging and social media content that creates a memorable brand experience.',
    hero: _ + '75a7ee6d-2a00-4137-9482-bdd3366534b3_rw_1920.png?h=e0bb22be4c8c2087413c52eb27e5ecb6',
    sections: [
      { type: 'full', src: _ + '3b1a9566-5af2-4ffd-81af-23e305f38b9b_rw_3840.png?h=4d8f550746ebcdecae0403b56fd1b107', alt: 'Runway Footwear — Brand Identity System' },
      { type: 'text', body: 'The entire project was marked by collaborative synergy, initiated through a connection with a friend who presented the opportunity. What began as a logo refresh evolved into a comprehensive branding initiative — touching every surface, screen, and touchpoint the brand would occupy.' },
      { type: 'duo',
        left:  { src: _ + '01bd9434-1a14-4159-b42b-3b283061a941_rw_1920.png?h=f536f2b8e3325b7baa0a51dfafb1162c', alt: 'Runway — Packaging Design' },
        right: { src: _ + '5de62a76-326d-4017-9677-fa1e0db26407_rw_1920.png?h=c26c587d34ff893251ce00394819f1fd', alt: 'Runway — Social Media Content' },
      },
      { type: 'text', label: 'Brand Extension', heading: 'Packaging & Digital Presence', body: 'Building upon the new logo, packaging and branding design aimed to create a cohesive visual narrative — conceptualized to deliver a memorable unboxing experience reflecting the quality and elegance of Runway Footwear. Social media content was curated to elevate the brand\'s online presence across all digital touchpoints.' },
      { type: 'full', src: _ + '640907ac-651b-4fa2-9b5c-a11c38f43cbd_rw_600.png?h=a8dc845b436c74120ad70ba39ee39464', alt: 'Runway Footwear — Application UI' },
    ],
    next: 'odd-brewing-co',
  },

  // ─────────────────────────────────────────────────────────────
  // 02 · ODD. BREWING CO.
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'odd-brewing-co',
    layout: 2,
    title: 'Odd. Brewing Co.',
    category: 'Branding & Packaging',
    categoryShort: 'Branding & Packaging',
    tags: ['Logo Design', 'Brand Identity', 'Tap Room Mark', 'Packaging Design'],
    client: 'Odd. Brewing Company',
    meta: [
      { label: 'Client',   value: 'Odd. Brewing Company' },
      { label: 'Category', value: 'Branding & Packaging' },
      { label: 'Designer', value: 'Jomil Shah' },
    ],
    description: 'A comprehensive branding initiative balancing contrasts and cohesion. A minimalist black-and-white primary mark for versatility and longevity, complemented by a tap room logo for signage — and bold, vibrant packaging that stands out on the shelf while maintaining brand integrity.',
    hero: _ + 'b9f12569-0b50-428b-bfce-9d47820f5d6a_rw_1920.jpg?h=7d63a90c3c5ed6b4ff57185f8df34d3b',
    sections: [
      { type: 'full', src: _ + 'ea7461df-90bc-478c-93c7-f54b15622a50_rw_1920.jpg?h=728916f7ad213c3138b51716f2d0924a', alt: 'Odd Brewing — Brand System Overview' },
      { type: 'text', body: 'Odd. Brewing Company — a unique and forward-thinking brewery based in Edmonton — required a visual identity capable of holding two seemingly opposing ideas in the same breath: restraint and boldness. The challenge was to build a brand that felt timeless in its primary form, yet energetic across its packaging.' },
      { type: 'text-image', label: 'The Mark', heading: 'Minimalist By Design',
        body: 'A distinctive logo was developed using a minimalist approach — a clean, black-and-white mark built for versatility and longevity. Its strength lies in its restraint: a mark that works on a business card as well as it does on a tap room wall.',
        image: { src: _ + '650d4116-56e9-4741-aed6-9757002bba1e_rw_1920.jpg?h=726f73d431bd06440a5de64d8eeadc98', alt: 'Odd Brewing — Primary Logo Mark' },
        layout: 'right',
      },
      { type: 'text-image', label: 'Tap Room', heading: 'Signage That Commands Space',
        body: 'A complementary mark was created specifically for the tap room — translating the brand\'s minimalist DNA into environmental signage that creates a welcoming, immersive atmosphere for guests the moment they step inside.',
        image: { src: _ + '2be8f34a-dcfc-4e51-9e49-58c25ed8a61d_rw_3840.jpg?h=4c435dd059771a21765167e72c1e9f39', alt: 'Odd Brewing — Tap Room Mark' },
        layout: 'left',
      },
      { type: 'campaign', num: '\\ Packaging', title: 'Bold Contrast.\nDeliberate Energy.', body: 'The client\'s vision was to incorporate vibrant and bold colors — creating a visually arresting contrast to the brewery\'s primary branding. The final result strikes a perfect balance, ensuring that the packaging stands out on the shelf without compromising overall brand integrity.' },
      { type: 'full', src: _ + '8dc98c08-f726-4a7c-8c84-59cd976bf7ed_rw_3840.jpg?h=aed88fe97c9ab5f87fe2580877dc247d', alt: 'Odd Brewing — Full Packaging Suite' },
      { type: 'grid', items: [
        { src: _ + '345a6986-31b9-4763-9def-805f905836e9_rw_1920.jpg?h=d743ec7467137c2ef8037d007e6a9f1a', alt: 'Odd Brewing — Can Design 01' },
        { src: _ + '57ed56e2-3908-46cc-b329-3e543db27b86_rw_1200.png?h=1b0ee5cc6d67f956a71e35ab797ef623', alt: 'Odd Brewing — Can Design 02' },
        { src: _ + '4a41c1b8-b3d7-4123-9789-4280c17dd168_rw_1920.jpg?h=bc6ee4106766047966516ab28aa84f10', alt: 'Odd Brewing — Full Lineup' },
      ]},
      { type: 'text', body: 'One of the highlights of the project was designing the packaging and branding for Odd. Brewing Company\'s inaugural beer lineup. The client\'s vision was to incorporate vibrant and bold colors — creating a visually arresting contrast to the brewery\'s primary branding. The result is a collection of beer packaging that not only stands out on shelves but also remains true to the core values of the Odd. Brewing Company brand.' },
      { type: 'grid', items: [
        { src: _ + 'c136fe0b-97ac-430c-947b-0a7455154ca6_rw_1920.jpg?h=8e2b499dc618945d1e6f4867212d4e64', alt: 'Odd Brewing — Can Detail' },
        { src: _ + '9c862ec1-520d-4f2f-b026-d2f00f45021b_rw_3840.gif?h=9f109ce971cc040243c785f1e94b2220', alt: 'Odd Brewing — Product Shot' },
        { src: _ + '1af932ad-2ef0-4c48-8414-c00b8d4b8d31_rw_1920.jpg?h=f8e797bed6f35512b2e60e8f31267ddc', alt: 'Odd Brewing — Mockup' },
        { src: _ + '3b88edc4-4ff4-4f73-9d74-dd400622dd75_rw_1920.jpg?h=38e2e5cf6e10ae42230c852a54bba625', alt: 'Odd Brewing — Brand Mockup' },
        { src: _ + '4b4dae06-0fe3-421f-934e-1c11c5728ce0_rw_3840.jpg?h=34a63c9a5ea6bc4720ecca8f219603c1', alt: 'Odd Brewing — Final Application', span: 2 },
      ]},
      { type: 'grid', items: [
        { src: _ + '15dd8900-eaf0-46fa-9948-54e507945253_rw_1920.jpg?h=a921457aab5fdc38ba362b388c566a81', alt: 'Odd Brewing — Social Post 01' },
        { src: _ + '19afee9f-fce4-4570-96b7-a0b4253c9cd2_rw_1920.jpg?h=83895b762c5110f2cd1fe5b97a76ad54', alt: 'Odd Brewing — Social Post 02' },
        { src: _ + '790e09c1-479b-451d-9acd-1b431cb80bd3_rw_1920.jpg?h=3b21b9126f71136d0267fdde7a33de9f', alt: 'Odd Brewing — Social Post 03' },
      ]},
      { type: 'text', body: 'The challenge of harmonizing the bold, bright colors of the beer lineup with the established clean design of Odd. Brewing Company\'s brand was met with careful consideration. The final result strikes a perfect balance, ensuring that the packaging stands out without compromising the overall brand integrity. This project was an exciting exploration of contrasts and cohesion — the tailored design elements not only captured the essence of Odd. Brewing Company but also provided a flexible and scalable visual identity for their diverse brand needs.' },
      { type: 'full', src: _ + 'b1f4be9c-ed6c-4681-8c69-52bf947945f5_rw_3840.png?h=cd3e69bf1d35c4730102a5178463eb1a', alt: 'Odd Brewing — Campaign Visual' },
      { type: 'duo',
        left:  { src: _ + 'd696cfa7-6592-4434-9b2d-b6f755c9191c_rw_1920.jpg?h=7164632cdae7d35d3ca9f3c3112f8c10', alt: 'Odd Brewing — Brand Application 01' },
        right: { src: _ + 'a3236095-9978-40cc-b091-acd1dd068f82_rw_3840.jpg?h=da853ede7c5a015d13f8bd63d5746278', alt: 'Odd Brewing — Brand Application 02' },
      },
    ],
    next: 'edify',
  },

  // ─────────────────────────────────────────────────────────────
  // 03 · EDIFY
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'edify',
    layout: 2,
    title: 'Edify',
    category: 'Editorial & Motion Design — 2023',
    categoryShort: 'Editorial & Motion',
    tags: ['Editorial Design', 'Motion Graphics', 'Social Media', 'Brand Identity', 'Graphic Design'],
    client: 'Edify Magazine',
    meta: [
      { label: 'Client',   value: 'Edify Magazine' },
      { label: 'Studio',   value: 'Odvod Media' },
      { label: 'Role',     value: 'Graphic Designer' },
      { label: 'Services', value: 'Editorial, Motion' },
    ],
    description: 'Editorial design and motion graphics for Edify Magazine — encompassing layout design, brand identity applications, and animated social content. Each piece was crafted to bring the magazine\'s visual voice to life across print and digital touchpoints.',
    hero: _ + '31f60dfd-a4cb-4ac3-b64f-83fc305cca38_rw_1920.jpg?h=0ec21748318a5e0038173fab81a67b8d',
    sections: [
      // Image gallery block 1
      { type: 'full', src: _ + 'a7686831-8492-412a-8cab-eab52fd5aa94_rw_3840.jpg?h=6b2dc2dc0e011d90f7a0e15a210adbb9', alt: 'Edify — Brand Overview' },
      { type: 'grid', items: [
        { src: _ + '1bc6eb7c-fe13-479f-9c17-4516f81f6bcb_rw_1200.jpg?h=387eaa87466b9c9ef4cc64cef42a16df', alt: 'Edify — Visual Detail' },
        { src: _ + '121b7a6c-351c-405e-991c-a6bd437971d1_rw_1920.jpg?h=c076305ad88e879f300fb4ea40501bc3', alt: 'Edify — Design Language' },
        { src: _ + '36dae557-a534-4a95-8daf-8a1704402f53_rw_1920.jpg?h=bbb5c1395412af71e5e08073d7a27aff', alt: 'Edify — Brand Application', span: 2 },
        { src: _ + '121e845c-36a3-4d6b-bd95-117ac844abc0_rw_1920.jpg?h=6f2286da8adc59c72f1a2577c1fe6a8e', alt: 'Edify — Mockup' },
      ]},
      // Image gallery block 2
      { type: 'duo',
        left:  { src: _ + 'f928554e-fb55-45a4-bcee-75a361b8a45c_rw_3840.jpg?h=cd06706af2ff78e74fff3f54e7600048', alt: 'Edify — Design 01' },
        right: { src: _ + 'ad67bfdc-c15c-4201-a4d1-9419e9d88b0a_rw_1200.jpg?h=650071bf0d3e2b1073441f5d62017b0a', alt: 'Edify — Design 02' },
      },
      // Videos 1 & 2
      { type: 'video-duo', left: 'SYwJI8X9gKC', right: 'MdSzh8YPPMs' },
      // Image gallery block 3
      { type: 'grid', items: [
        { src: _ + '5a407db2-76c1-44bb-8006-5493683ba949_rw_3840.jpg?h=744299b2b036d794994700639b2b6ba0', alt: 'Edify — Final Design' },
        { src: _ + 'c86d44c1-b69e-4fbd-9220-330a7c9b05bb_rw_3840.jpg?h=788dc6968e5a861735b643f7740ff6be', alt: 'Edify — Brand System' },
        { src: _ + 'c536382e-4026-4302-b4ff-0f4361e9b9aa_rw_1920.jpg?h=1ee948185f3fb4e295d6dedf1fd74a69', alt: 'Edify — Additional Work' },
      ]},
      // Video 3
      { type: 'video', id: 'LhIW_AvI8F4' },
      // Final image
      { type: 'full', src: _ + '9f0e5a03-0f5f-4367-97fa-2353099c6977_rw_1200.jpg?h=948ab44235e8ece2df0b511acf711709', alt: 'Edify — Motion Design' },
      // Videos 4–7
      { type: 'video-duo', left: 'LTGNIixiYAu', right: '2ahToZkdQPZ' },
      { type: 'video-duo', left: 'QhfZLeDxJWr', right: 'A7eHN98LBec' },
    ],
    next: 'apega',
  },

  // ─────────────────────────────────────────────────────────────
  // 04 · APEGA
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'apega',
    layout: 1,
    title: 'APEGA',
    category: 'Marketing Campaign Design',
    categoryShort: 'Campaign Design',
    tags: ['Campaign Design', 'Infographic Poster', 'Animated Video', 'Magazine Ads', 'Social Media', 'Custom Iconography', 'Illustration'],
    client: 'APEGA',
    meta: [
      { label: 'Client',          value: 'APEGA' },
      { label: 'Project Through', value: 'Odvod Media Inc.' },
      { label: 'Category',        value: 'Marketing Campaign Design' },
      { label: 'Designer',        value: 'Jomil Shah' },
    ],
    description: 'Two major campaigns for APEGA — the largest regulator of self-regulated professionals in Western Canada. The Membership Dollars At Work campaign transparently communicated the tangible impact of members\' contributions through infographic posters, animated video, and magazine ads. The Women in the Workplace campaign featured social media, animations, and custom illustrations promoting inclusive workplace culture.',
    hero: _ + 'f794d8a5-fc5c-4ba4-8bbb-81660117b533_rw_1200.jpg?h=f37e1241ad2defea1fad63ce5fe0ea2d',
    sections: [
      { type: 'campaign', num: '01', title: 'Membership Dollars At Work', body: 'A transformative initiative aimed at transparently communicating the tangible impact of APEGA members\' contributions. The campaign included an informative infographic poster, animated video, and magazine advertisements featuring custom iconography and gear imagery symbolizing monetary value at work.' },
      { type: 'full', src: _ + 'daf07c4c-6ccf-4cc3-a6ef-bf9686bea16f_rw_1200.jpg?h=99353364e7e92f3eaa21180fee446327', alt: 'APEGA — Membership Dollars At Work Campaign' },
      { type: 'text-image', label: 'Custom Iconography', heading: 'Crafted from Scratch',
        body: 'A bespoke icon collection was designed from scratch to visually represent APEGA\'s diverse areas of impact — translating complex organizational data into clear, compelling visual language that resonated with members and stakeholders across Western Canada.',
        image: { src: _ + 'a4eb79fc-2b8b-4aa0-87cb-64aa46a5800d_rw_1920.jpg?h=187829ba4bfd0a98ff5b672fea76c412', alt: 'APEGA — Custom Iconography Set' },
        layout: 'right',
      },
      { type: 'duo',
        left:  { src: _ + '26dd7b15-eddc-45d1-b8b3-abf2660fe40f_rw_1920.jpg?h=7ae293e14318c7e8b75af95442f57e9b', alt: 'APEGA — Animated Video Still' },
        right: { src: _ + '0f557fa6-37c7-4976-b55f-9d7023fbdcd3_rw_1920.jpg?h=374e0f0627cc6a8b0d296d93fd57d8e0', alt: 'APEGA — Magazine Advertisement' },
      },
      { type: 'video', id: 'L2V6jpIIyDM' },
      { type: 'campaign', num: '02', title: 'Women in the Workplace', body: 'A campaign featuring impactful social media posts, video editing, animations, and custom illustrations promoting inclusive workplace culture. APEGA volunteers shared their reactions to real experiences — the video editing focused on maintaining sensitivity while effectively conveying the emotional impact of those experiences.' },
      { type: 'full', src: _ + '76d0affd-5e91-4ac9-98c6-9d844c545f7e_rw_1920.jpg?h=02b46e379f5f0a60cc5707684ba9df19', alt: 'APEGA — Social Media Campaign Posts' },
      { type: 'duo',
        left:  { src: _ + 'df0d07fc-3088-468b-abfc-fa390459c7bf_rw_1920.jpg?h=fc70167d3662fd0462028a2cb467e33d', alt: 'APEGA — Women in Workplace Campaign' },
        right: { src: _ + '0c747f5b-3b8b-4d9d-b96d-10a276c72498_rw_1920.jpg?h=5d809e6735bd511997e3dcdff148b59c', alt: 'APEGA — Campaign Visual' },
      },
      { type: 'full', src: _ + 'ddf21305-73c0-414d-a02b-7808bc7edeb9_rw_1920.jpg?h=6789180bb207286367baa03bdb9a97e4', alt: 'APEGA — Animation Stills' },
      { type: 'full', src: _ + '98767052-6063-40cb-94d9-b2b8c09823f4_rw_1920.jpg?h=86d29e918f465ac9931795f9d35bd3ca', alt: 'APEGA — Final Campaign Overview' },
      { type: 'video-duo', left: 'PtD_f6r2hds', right: 'KVRMmcJa2nZ' },
    ],
    next: 'ballet-edmonton',
  },

  // ─────────────────────────────────────────────────────────────
  // 05 · BALLET EDMONTON
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'ballet-edmonton',
    layout: 3,
    title: 'Ballet Edmonton',
    category: 'Graphic Design & Branding',
    categoryShort: 'Graphic Design',
    tags: ['Branding Strategy', 'Banners & Posters', 'Social Media', 'Program Guide Booklet', 'Ticket Portal Proposal', 'Image Editing'],
    client: 'Ballet Edmonton',
    meta: [
      { label: 'Client',          value: 'Ballet Edmonton' },
      { label: 'Project Through', value: 'Odvod Media Inc.' },
      { label: 'Category',        value: 'Graphic Design & Branding' },
      { label: 'Designer',        value: 'Jomil Shah' },
    ],
    description: 'Comprehensive branding and design work capturing the grace, precision, and emotional depth inherent in ballet. From promotional banners and social media content to an immersive program guide booklet and a proposed ticket portal redesign — every piece was crafted to visually translate ballet\'s essence into tangible, striking materials.',
    hero: _ + 'ca653fac-b1b1-49c5-b6df-1157b00f92ec_rw_1200.png?h=b170a80069135b0283dc1f9942ab0ff6',
    sections: [
      { type: 'full', src: _ + '2388ce1d-ae19-4bf4-b993-ecd99e117892_rw_3840.jpg?h=9603a5f4cbedd3ee50ad5500b9313b5d', alt: 'Ballet Edmonton — Campaign Overview' },
      { type: 'text', body: 'Ballet Edmonton stands as a beacon of artistic excellence — where the timeless beauty of dance converges with innovation to create an enchanting experience. The challenge of visually translating the essence of ballet into tangible promotional materials was met with thoughtful design at every level.' },
      { type: 'duo',
        left:  { src: _ + '8e241ead-24f7-490c-afe7-bfc763a2eec0_rw_1920.jpg?h=8ed18ee13fe453bb78a48d8873525790', alt: 'Ballet Edmonton — Promotional Banner' },
        right: { src: _ + 'bfe173f1-2ca0-444d-b71a-13b84f825549_rw_3840.jpg?h=50907e1e739fa8f3f34266e18875c5c6', alt: 'Ballet Edmonton — Performance Poster' },
      },
      { type: 'text', label: 'Print & Promotion', heading: 'Motion Captured in Print', body: 'Banners and posters were crafted not only to function as effective promotional tools, but to capture the emotion and dynamism inherent in Ballet Edmonton\'s performances — communicating the grace and physical precision of the art form through bold imagery and refined typography.' },
      { type: 'full', src: _ + '2b2c9580-ba0e-413d-8ab0-a31c6bf16cb6_rw_1920.jpg?h=d11e1eaf8426a4f45f089237d8169389', alt: 'Ballet Edmonton — Social Media Content' },
      { type: 'text', label: 'Program Guide', heading: 'An Immersive Reading Experience', body: 'Each page of the program guide booklet was meticulously designed to complement the elegance of Ballet Edmonton\'s performances — serving as a comprehensive visual guide that offered patrons an immersive experience before, during, and after the show.' },
      { type: 'duo',
        left:  { src: _ + 'ec18dc8c-36f1-43f3-b8e0-1e628c1cea25_rw_1920.jpg?h=7f61669a30f1adfdbcc7db64598748f5', alt: 'Ballet Edmonton — Program Guide' },
        right: { src: _ + '4ea1c4c3-8e1b-4a34-93f1-82ef5faee248_rw_1920.jpg?h=995a0bf5bb1e7f85dcc35af3f6b5f6d1', alt: 'Ballet Edmonton — Booklet Spread' },
      },
      { type: 'duo',
        left:  { src: _ + 'ef44e109-e87e-439c-9d55-b5f11a730f69_rw_600.gif?h=fecb967b6f3eef85830e0993925cd25c',  alt: 'Ballet Edmonton — Motion Design 01' },
        right: { src: _ + '278e5227-1285-457f-88dd-1ebad86678cf_rw_600.gif?h=a8937f6232f761808a46e63d9071af26',  alt: 'Ballet Edmonton — Motion Design 02' },
      },
      { type: 'text', label: 'Digital Experience', heading: 'A Proposed Ticket Portal', body: 'A redesigned ticketing portal was proposed as a strategic investment in refining Ballet Edmonton\'s online experience — aligning it closely with the organisation\'s commitment to excellence. Decision pending final approval.' },
      { type: 'full', src: _ + '2e522f5b-9474-463c-b20a-ada241b0b9e7_rw_1200.jpg?h=99471c3e40a69f03ae6e161fa2d6f45f', alt: 'Ballet Edmonton — Ticket Portal Proposal' },
    ],
    next: 'page-the-cleaners',
  },

  // ─────────────────────────────────────────────────────────────
  // 06 · PAGE THE CLEANERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'page-the-cleaners',
    layout: 1,
    title: 'Page The Cleaners',
    category: 'Brand Identity & Environmental',
    categoryShort: 'Brand Identity',
    tags: ['Logo Design', 'Brand Identity', 'Environmental Design', 'Store Signage'],
    client: 'Page The Cleaners',
    meta: [
      { label: 'Client',    value: 'Page The Cleaners' },
      { label: 'Location',  value: 'Edmonton, AB' },
      { label: 'Category',  value: 'Brand Identity & Environmental' },
      { label: 'Designer',  value: 'Jomil Shah' },
    ],
    description: 'Full visual identity for Page The Cleaners — an Edmonton-based dry cleaning operation offering a full suite of services for individual and commercial clients. The project encompassed logo design, brand identity system, environmental design, and store signage — emphasising quality, reliability, and customer service through clean, professional aesthetics.',
    hero: _ + 'ae96c42b-e2da-4265-8371-51f925166acf_rw_3840.png?h=0e5d248d752b093dd2a63434268ae518',
    sections: [
      { type: 'full', src: _ + '0ae0d6bb-e09d-424f-97e1-246f90126eab_rw_3840.png?h=772322aa09616fef3e1b99a0a1b878d2', alt: 'Page The Cleaners — Brand Identity System' },
      { type: 'text', body: 'Page The Cleaners is a long-standing Edmonton-based dry cleaning and garment-care company known for its commitment to quality, reliability, and customer-focused service. They offer a full suite of cleaning solutions — including dry cleaning, laundry services, alterations, stain treatment, and specialty garment care — serving both individual clients and commercial partners.' },
      { type: 'duo',
        left:  { src: _ + 'f46b19cc-4c3b-4235-8701-5340a8824696_rw_3840.png?h=3e11ff06e0be72d88e805b27529d2517', alt: 'Page The Cleaners — Logo Design' },
        right: { src: _ + '46229af3-f2b7-471f-89be-6c09728293d9_rw_3840.png?h=7edc5e23df4f13ecb53efd6b347d910c', alt: 'Page The Cleaners — Stationery' },
      },
      { type: 'full', src: _ + '23f74fe1-da35-4262-ab83-13da9329c221_rw_3840.png?h=c93477724147474c28c2d2e722fbffbe', alt: 'Page The Cleaners — Store Signage' },
      { type: 'full', src: _ + 'e1a676d3-d513-4ea9-b0d3-93e7d9bfde34_rw_3840.png?h=df4d85d07b2f428a59c0252ce2ac65fe', alt: 'Page The Cleaners — Environmental Design' },
    ],
    next: 'publications',
  },

  // ─────────────────────────────────────────────────────────────
  // 07 · PUBLICATIONS
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'publications',
    layout: 3,
    title: 'Publications',
    category: 'Art Direction — 2023–2024',
    categoryShort: 'Art Direction',
    tags: ['Art Direction', 'Editorial Design', 'Magazine Layout', 'Print Production'],
    client: 'Odvod Publishing Inc.',
    meta: [
      { label: 'Studio',   value: 'Odvod Publishing Inc.' },
      { label: 'Role',     value: 'Art Director' },
      { label: 'Years',    value: '2023 – 2024' },
      { label: 'Designer', value: 'Jomil Shah' },
    ],
    description: 'Art direction across multiple annual publications — from community foundation storytelling to engineering industry overviews and legal scholarship. Each publication brings together editorial design, photography curation, and typographic craft to create authoritative, immersive reading experiences.',
    hero: _ + '96c4d690-5420-4709-a926-2b1f736085a4_rw_3840.jpg?h=80220ccc5efb6d995b267fa29536c0f0',
    sections: [
      { type: 'text', label: 'A Note', body: 'Publications are always a team effort. The designs and layouts shown here are those produced by Jomil Shah as Art Director.' },
      { type: 'pub', num: '01 / 04', title: 'ECF Legacy In Action Magazine 2023', client: 'Edmonton Community Foundation', year: '2023',
        description: 'Edmonton Community Foundation works with donors to create endowment funds that support charitable causes in Edmonton and beyond. Legacy in Action brings its readers compelling stories from the spaces where endowments and community intersect — from arts and education to health and the environment.',
        image: _ + '96c4d690-5420-4709-a926-2b1f736085a4_rw_3840.jpg?h=80220ccc5efb6d995b267fa29536c0f0',
      },
      { type: 'pub', num: '02 / 04', title: 'CEA Alberta Innovators 2023', client: 'Consulting Engineers of Alberta', year: '2023',
        description: 'An annual industry publication featuring in-depth information on the consulting engineering industry and CEA member firms. The 2023 issue provides a visual snapshot of a year defined by bold breakthroughs and boundary-pushing ideas — offering a glimpse into the minds transforming Alberta\'s landscape.',
        image: _ + 'd33d57be-38a6-45af-983d-d6971779a40f_rw_1920.jpg?h=86743d55a3274ee9a63dc1b08183b284',
        link: 'https://cea.ca/files/Advocacy-Publications/Alberta-Innovators/CEA_AlbertaInnovators-2023.pdf',
      },
      { type: 'pub', num: '03 / 04', title: 'CEA Alberta Innovators 2024', client: 'Consulting Engineers of Alberta', year: '2024',
        description: 'The 2024 cover reflects the ideas, energy, and imagination shaping Alberta\'s future — featuring groundbreaking stories and visionary perspectives on the province\'s innovation landscape. A bold reflection of where consulting engineering in Alberta is headed.',
        image: _ + '7e287c35-c870-4a60-b6da-90484fc5c7a1_rw_1920.jpg?h=7cdfa46f833bed65e0b0610405c5dc4d',
        link: 'https://cea.ca/files/Advocacy-Publications/Alberta-Innovators/CEA-Alberta-Innovators-2024-webmag.pdf',
      },
      { type: 'pub', num: '04 / 04', title: 'University of Alberta Law Magazine 2023', client: 'University of Alberta', year: '2023',
        description: 'A showcase exploring the intersection of law, society, and progress — through case studies and thought-provoking features that emphasise intellectual excellence and innovation in legal education. Every page reflects a commitment to fostering intellectual curiosity and excellence.',
        image: _ + 'daf1c144-c606-4038-9bb4-2247bcfd1545_rw_1920.jpg?h=7ff322cf434b803b9556ad15c1b38873',
      },
    ],
    next: 'urban-affairs',
  },

  // ─────────────────────────────────────────────────────────────
  // 08 · URBAN AFFAIRS
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'urban-affairs',
    layout: 2,
    title: 'Urban Affairs',
    category: 'Graphic Design',
    categoryShort: 'Graphic Design',
    tags: ['Graphic Design', 'Visual Communication', 'Print Design'],
    client: 'Urban Affairs',
    meta: [
      { label: 'Project',  value: 'Urban Affairs' },
      { label: 'Category', value: 'Graphic Design' },
      { label: 'Designer', value: 'Jomil Shah' },
    ],
    description: 'A collection of visual communication and design work exploring urban themes — combining bold graphic language with considered typographic craft to tell stories rooted in city life, culture, and community.',
    hero: _ + 'b1747dcb-3d05-4d99-a6e8-9eafcbbe6772_rw_1200.jpg?h=82ded530e8424623b03f27810acbb0ac',
    sections: [
      { type: 'full', src: _ + '4b214c61-f358-4102-af0a-43ef00e8b138_rw_1200.jpg?h=626a6456280f6b6576760ffceb691421', alt: 'Urban Affairs — Work 01' },
      { type: 'duo',
        left:  { src: _ + '5e3cb395-a47b-4955-a106-4dd5da4b635f_rw_1200.png?h=54243cf1e08942e2d0f7b6191980b4cb', alt: 'Urban Affairs — Work 02' },
        right: { src: _ + '70be9cfa-6a76-4f9c-ba1d-88b657b6d12b_rw_1200.jpg?h=82489437b4fe39db70ee5da2826b1163', alt: 'Urban Affairs — Work 03' },
      },
      { type: 'full', src: _ + '491477e0-48e7-4173-8532-d9bf7b307976_rw_1200.jpg?h=45081a7ad1789a6d7d569289420c8dc2', alt: 'Urban Affairs — Work 04' },
    ],
    next:      'runway-footwear',
    nextLabel: 'Back to Start',
  },
]

export const featuredProjects = projects.slice(0, 6)
export const getProject      = (slug) => projects.find((p) => p.slug === slug)
export const getNextProject  = (slug) => {
  const p = getProject(slug)
  return p ? getProject(p.next) : null
}
