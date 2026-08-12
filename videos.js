/* ═══════════════════════════════════════════════════════════
   VIDEO DATA — this is the only file you edit to change videos.

   To add/swap a video:
     1. Drop its cover image in the repo (e.g. overall-4.jpg)
     2. Optional: drop a short muted clip in /clips (e.g. clips/overall-4.mp4)
        → if "clip" is present, the card autoplays it on loop
        → if not, it shows the cover image
     3. Add or edit an entry below. Order = display order.

   profile — your TikTok, used by the "View all" link
   rails   — the three groups of cards on the Content tab
   ═══════════════════════════════════════════════════════════ */

const VIDEOS = {

  profile: "https://www.tiktok.com/@brookerogers27",

  /* ═══════════════ GALLERY ═══════════════
     Drop files in a /gallery folder, then list them here.
     Stills and videos both work — .mp4/.webm/.mov autoplay muted on loop.

     size options (leave blank for the standard photo slot):
       (none)     1 column,  4:5   <- all photos use this
       "tall"     1 column,  2:3
       "square"   1 column,  1:1
       "wide"     2 columns, 8:5   <- good for video
       "big"      2 columns, 4:3
       "banner"   4 columns, 16:6  full-width strip

     caption is optional — shows on hover, leave "" for none.
     poster is optional — a still shown while a video loads.
  ═══════════════════════════════════════ */
  gallery: [
    { src: "gallery/Tezza-0384.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-0806.JPG", size: "", caption: "" },
    { src: "gallery/img_2010-2.mp4", size: "wide", caption: "" },
    { src: "gallery/img_4994.mp4", size: "wide", caption: "" },
    { src: "gallery/Tezza-0898.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-1302.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-1447.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-1481.JPG", size: "", caption: "" },
    { src: "gallery/img_8057.mp4", size: "wide", caption: "" },
    { src: "gallery/img_8061.mp4", size: "wide", caption: "" },
    { src: "gallery/Tezza-1867.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-2269.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-2604.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-3444.JPG", size: "", caption: "" },
    { src: "gallery/img_8062.mp4", size: "wide", caption: "" },
    { src: "gallery/img_8065.mp4", size: "wide", caption: "" },
    { src: "gallery/Tezza-3578.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-3772.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-5495.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-5933.JPG", size: "", caption: "" },
    { src: "gallery/img_8078.mp4", size: "wide", caption: "" },
    { src: "gallery/img_8156.mp4", size: "wide", caption: "" },
    { src: "gallery/Tezza-6306.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-6336.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-6649.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-8567.JPG", size: "", caption: "" },
    { src: "gallery/img_8234.mp4", size: "wide", caption: "" },
    { src: "gallery/img_8403.mp4", size: "wide", caption: "" },
    { src: "gallery/Tezza-9014.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-9205.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-9424.JPG", size: "", caption: "" },
    { src: "gallery/Tezza-9609.JPG", size: "", caption: "" },
    { src: "gallery/img_8453.mp4", size: "wide", caption: "" },
    { src: "gallery/49a724b7-e453-41fb-931f-3823ff3f0bed.mp4", size: "", caption: "" }
  ],

  rails: {

    /* ── TOP PERFORMING (Overall toggle) ── */
    overall: [
      {
        title: "I could never be a man",
        link:  "https://www.tiktok.com/t/ZTkfLpW2r/",
        cover: "overall-1.jpg",
        clip:  "",
        stats: [
          { val: "250K",   lbl: "Likes" },
          { val: "903.6K", lbl: "Views" },
          { val: "12.7K",  lbl: "Shares" },
          { val: "11.7K",  lbl: "Saves" }
        ]
      },
      {
        title: "How I Built a Breakfast Nook",
        link:  "https://www.tiktok.com/t/ZTkfLVYEL/",
        cover: "overall-2.jpg",
        clip:  "",
        stats: [
          { val: "78.3K",  lbl: "Likes" },
          { val: "936.4K", lbl: "Views" },
          { val: "6,809",  lbl: "Shares" },
          { val: "20.8K",  lbl: "Saves" }
        ]
      },
      {
        title: "Listening to Real Music",
        link:  "https://www.tiktok.com/t/ZTkfLf1Wc/",
        cover: "overall-3.jpg",
        clip:  "",
        stats: [
          { val: "64.8K", lbl: "Likes" },
          { val: "324K",  lbl: "Views" },
          { val: "1,929", lbl: "Shares" },
          { val: "8,320", lbl: "Saves" }
        ]
      }
    ],

    /* ── LATEST (Lately toggle) ── */
    lately: [
      {
        title: "Enjoying my Space",
        link:  "https://www.tiktok.com/t/ZTkfLm6m9/",
        cover: "lately-1.jpg",
        clip:  "",
        stats: [
          { val: "44.9K", lbl: "Likes" },
          { val: "179K",  lbl: "Views" },
          { val: "1,969", lbl: "Shares" },
          { val: "3,805", lbl: "Saves" }
        ]
      },
      {
        title: "So Happy To Be Here",
        link:  "https://www.tiktok.com/t/ZTkfj6175/",
        cover: "lately-2.jpg",
        clip:  "",
        stats: [
          { val: "3,705", lbl: "Likes" },
          { val: "23K",   lbl: "Views" },
          { val: "128",   lbl: "Shares" },
          { val: "28",    lbl: "Comments" }
        ]
      },
      {
        title: "Just a girl obsessed with her home",
        link:  "https://www.tiktok.com/t/ZTkfjf4vg/",
        cover: "lately-3.jpg",
        clip:  "",
        stats: [
          { val: "852",   lbl: "Likes" },
          { val: "5,035", lbl: "Views" },
          { val: "2",     lbl: "Shares" },
          { val: "66",    lbl: "Saves" }
        ]
      }
    ],

    /* ── HIGHEST ENGAGEMENT ── */
    engagement: [
      {
        title: "I love having adult money",
        link:  "https://www.tiktok.com/t/ZTkfjpTdC/",
        cover: "engagement-1.jpg.jpg",
        clip:  "",
        stats: [
          { val: "8.1%",  lbl: "Eng. Rate" },
          { val: "534",   lbl: "Likes" },
          { val: "7,109", lbl: "Views" },
          { val: "34",    lbl: "Saves" }
        ]
      },
      {
        title: "Fomo Doesn't Exist Here",
        link:  "https://www.tiktok.com/t/ZTkfjPaPR/",
        cover: "engagement-2.jpg.jpg",
        clip:  "",
        stats: [
          { val: "24.5%", lbl: "Eng. Rate" },
          { val: "5,252", lbl: "Likes" },
          { val: "23.9K", lbl: "Views" },
          { val: "500",   lbl: "Saves" }
        ]
      },
      {
        title: "Just a girl & her apartment",
        link:  "https://www.tiktok.com/t/ZTkfjm8jv/",
        cover: "engagement-3.jpg.jpg",
        clip:  "",
        stats: [
          { val: "15.2%", lbl: "Eng. Rate" },
          { val: "2,108", lbl: "Likes" },
          { val: "15.6K", lbl: "Views" },
          { val: "143",   lbl: "Saves" }
        ]
      }
    ]

  }
};
