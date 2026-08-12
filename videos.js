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
