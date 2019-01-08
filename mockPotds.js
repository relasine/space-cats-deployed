const mockDailies = [
  {
    title: "Westerlund 2",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg",
    date: "Wednesday, 1/9/19"
  },
  {
    title: "Pillars of Creation",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1501a.jpg",
    date: "Tuesday, 1/8/19"
  },
  {
    title: "A Rose Made of Galaxies",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1107a.jpg",
    date: "Monday, 1/7/19"
  },
  {
    title: "Extreme Star Cluster Burst",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0715a.jpg",
    date: "Sunday, 1/6/19"
  },
  {
    title: "The Bubble Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1608a.jpg",
    date: "Saturday, 1/5/19"
  },
  {
    title: "Antennae Galaxies",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/potw1345a.jpg",
    date: "Friday, 1/4/19"
  },
  {
    title: "Horsehead Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1307a.jpg",
    date: "Thursday, 1/3/19"
  },
  {
    title: "NGC 1275",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0817a.jpg",
    date: "Wednesday, 1/2/19"
  },
  {
    title: "Galaxies Galore",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0406a.jpg",
    date: "Tuesday, 1/1/19"
  },
  {
    title: "Sombrero Galaxy",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/opo0328a.jpg",
    date: "Monday, 12/31/18"
  },
  {
    title: "Shedding Light on the Past",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0702a.jpg",
    date: "Sunday, 12/30/18"
  },
  {
    title: "Crab Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0515a.jpg",
    date: "Saturday, 12/29/18"
  },
  {
    title: "Lagoon Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1808a.jpg",
    date: "Friday, 12/28/18"
  },
  {
    title: "Spirals and Supernovae",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/potw1811a.jpg",
    date: "Thursday, 12/27/18"
  },
  {
    title: "NGC 6302",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0910h.jpg",
    date: "Wednesday, 12/26/18"
  },
  {
    title: "Orion Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0601a.jpg",
    date: "Tuesday, 12/25/18"
  },
  {
    title: "A Young Star Sculpts Gas",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0514a.jpg",
    date: "Monday, 12/24/18"
  },
  {
    title: "The Whirlpool Galaxy (M51)",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0506a.jpg",
    date: "Sunday, 12/23/18"
  },
  {
    title: "Stellar Spire in the Eagle Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0506b.jpg",
    date: "Saturday, 12/22/18"
  },
  {
    title: "Cosmic Dust Bunnies",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/opo0511a.jpg",
    date: "Friday, 12/21/18"
  },
  {
    title: "Stellar Outburst",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0503a.jpg",
    date: "Thursday, 12/20/18"
  },
  {
    title: "NGC 1300",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/opo0501a.jpg",
    date: "Wednesday, 12/19/18"
  },
  {
    title: "Runaway Galaxy",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0206a.jpg",
    date: "Tuesday, 12/18/18"
  },
  {
    title: "Birth of a Star",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0206c.jpg",
    date: "Monday, 12/17/18"
  },
  {
    title: "The Merging of Two Galaxies",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0206b.jpg",
    date: "Sunday, 12/16/18"
  },
  {
    title: "The Red Spider Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic0109a.jpg",
    date: "Saturday, 12/15/18"
  },
  {
    title: "Light and Shadow in the Carina Nebula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/opo0006a.jpg",
    date: "Friday, 12/14/18"
  },
  {
    title: "Saturn in Natural Colors",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/opo9828c.jpg",
    date: "Thursday, 12/13/18"
  },
  {
    title: "Messier 106",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1302a.jpg",
    date: "Wednesday, 12/12/18"
  },
  {
    title: "Close-up of the Tarantula",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1105a.jpg",
    date: "Tuesday, 12/11/18"
  },
  {
    title: "Flocculent Spiral NGC 2841",
    url:
      "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1104a.jpg",
    date: "Monday, 12/10/18"
  }
];

module.exports = mockDailies;
