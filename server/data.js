const users = {
  diplomog: {
    handle: 'diplomog',
    displayName: 'Palmerston',
    avatarSrc: '/assets/diplomog-avatar.jpg',
    bannerSrc: '/assets/diplomog-banner.jpeg',
    location: 'Whitehall',
    url: 'http://fco.gov.uk',
    joined: '2016-02-02T12:00',
    bio: 'Best friends with @treasurymog.',
    followingIds: ['treasurymog'],
    followerIds: ['treasurymog'],
    likeIds: ['1212689921057665024'],
  },
  treasurymog: {
    handle: 'treasurymog',
    displayName: 'Gladstone, Esq.',
    avatarSrc: '/assets/treasurymog-avatar.jpg',
    bannerSrc: '/assets/treasurymog-banner.jpeg',
    location: 'Whitehall, London',
    url: undefined,
    joined: '2016-10-12T12:00',
    bio:
      'I live and work at the Treasury as a mouser but I also have a paw in the finances. Here to help lighten up the political world. Unofficial.',
    followingIds: ['diplomog', 'giantgoat9'],
    followerIds: ['diplomog', 'giantgoat9'],
    likeIds: ['1209791721099411456'],
  },
  giantgoat9: {
    handle: 'giantgoat9',
    displayName: 'Giant Military Goats',
    avatarSrc: '/assets/giantgoat.jpg',
    bannerSrc: '/assets/giantgoatbanner.jpg',
    location: undefined,
    url: undefined,
    joined: '2019-09-01T18:00',
    bio:
      'Just giant goats with military hardware. \nInstagram: @giantmilitarygoats',
    followingIds: ['treasurymog'],
    followerIds: ['treasurymog'],
    likeIds: [],
  },
};

const tweets = {
  // TreasuryMog
  '1209791721099411456r1': {
    id: '1209791721099411456r1',
    authorHandle: 'treasurymog',
    timestamp: '2020-01-19T09:14:00+00:00',
    sortedTimestamp: '2020-01-19T09:14:00+00:00',
    retweetOf: '1209791721099411456',
    likedBy: [],
    retweetedBy: [],
  },
  '1212689921057665024': {
    id: '1212689921057665024',
    authorHandle: 'treasurymog',
    timestamp: '2020-01-12T09:14:00+00:00',
    sortedTimestamp: '2020-01-12T09:14:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status:
      'Ok people #backtowork you go. Goats...just carry on lounging around as usual.',
    media: [
      {
        type: 'img',
        url: '/assets/postMedia/postmedia1212689921057665024.jpeg',
      },
    ],
  },

  // Diplomog
  '1209791721099411456': {
    id: '1209791721099411456',
    authorHandle: 'diplomog',
    timestamp: '2019-12-26T14:38:00+00:00',
    sortedTimestamp: '2019-12-26T14:38:00+00:00',
    likedBy: [],
    retweetedBy: ['treasurymog'],
    status:
      "If you're a 🇬🇧 diplomat abroad today, let me know where you are and what you're up to!",
    media: [],
  },

  '1215324598067245056r2': {
    id: '1215324598067245056r2',
    authorHandle: 'diplomog',
    timestamp: '2020-01-19T09:14:00+00:00',
    sortedTimestamp: '2020-01-19T09:14:00+00:00',
    retweetOf: '1215324598067245056',
    likedBy: [],
    retweetedBy: [],
  },

  '1214624813723136002': {
    id: '1214624813723136002',
    authorHandle: 'diplomog',
    timestamp: '2020-01-12T04:31:00+00:00',
    sortedTimestamp: '2020-01-12T04:31:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `Sometimes I wonder... am I playing with the ribbon or is the ribbon playing with me?

Maybe a more diplomatic approach will work 🤔`,
    media: [
      {
        type: 'img',
        url: '/assets/postMedia/postmedia1214624813723136002.jpeg',
      },
    ],
  },
  '1209788222324256768': {
    id: '1209788222324256768',
    authorHandle: 'diplomog',
    timestamp: '2019-12-25T21:53:00+00:00',
    sortedTimestamp: '2019-12-25T21:53:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `Moggy Christmas to all!

Special wishes to all my diplomats, far from home at this time of year, serving 🇬🇧 all over the 🌍.`,
    media: [
      {
        type: 'img',
        url: '/assets/postMedia/EMoH94cXYAAM5Jj.jpeg',
      },
    ],
  },
  '1212021009320161280': {
    id: '1212021009320161280',
    authorHandle: 'diplomog',
    timestamp: '2019-12-30T19:23:00+00:00',
    sortedTimestamp: '2019-12-30T19:23:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `2019 has a been a wonderful year, but I definitely deserve some rest!

I would love to know what my 🇬🇧diplomats have been getting up to! What’s been your highlight or biggest achievement of the year?

My highlight has been coming back to work with my very own Palmy HQ 🤩`,
    media: [
      {
        type: 'img',
        url: '/assets/postMedia/ENH2rRrWwAARmsZ.jpeg',
      },
      // {
      //   type: 'img',
      //   url: '/assets/postMedia/ENH2rTvWwAYTqQW.jpeg',
      // },
      // {
      //   type: 'img',
      //   url: '/assets/postMedia/ENH2rYeXYAEAIk7.jpeg',
      // },
    ],
  },
  // Giant Military Goats
  '1215337574526525440': {
    id: '1215337574526525440',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-09T13:20:00+00:00',
    sortedTimestamp: '2020-01-09T13:20:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `Olifant / Rooikat`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215337574526525440.jpg',
      },
    ],
  },
  '1215324598067245056': {
    id: '1215324598067245056',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-06T09:20:00+00:00',
    sortedTimestamp: '2020-01-06T09:20:00+00:00',
    likedBy: [],
    retweetedBy: ['diplomog'],
    status: `JAS 39 Gripen`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215324598067245056.jpg',
      },
    ],
  },
  '1215288136026284032': {
    id: '1215288136026284032',
    authorHandle: 'giantgoat9',
    timestamp: '2019-12-24T14:02:00+00:00',
    sortedTimestamp: '2019-12-24T14:02:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `FGS Frankfurt Am Main (A 1412)`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215288136026284032.jpeg',
      },
    ],
  },
  '1215286068716736512': {
    id: '1215286068716736512',
    authorHandle: 'giantgoat9',
    timestamp: '2019-12-29T22:19:00+00:00',
    sortedTimestamp: '2019-12-29T22:19:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `"The principle of giant military goats deterrence states that a country’s possession of giant military goats discourages other countries from using giant military goats".`,
    media: [],
  },
  '1215277385404309504': {
    id: '1215277385404309504',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-01T11:53:00+00:00',
    sortedTimestamp: '2020-01-01T11:53:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `Come adopt Storm #Philadelphia
He needs you to storm the enemy lines and find his new #ForeverHome
#AdoptDontShop
https://morrisanimalrefuge.org/adopt/storm `,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215277385404309504.jpeg',
      },
    ],
  },
  '1216044243980095488': {
    id: '1216044243980095488',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-11T12:08:00+00:00',
    sortedTimestamp: '2020-01-11T12:08:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `USNS Comfort (T-AH-20)`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1216044243980095488.jpeg',
      },
    ],
  },
  '1215996774806106114': {
    id: '1215996774806106114',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-11T08:59:00+00:00',
    sortedTimestamp: '2020-01-11T08:59:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `"Scotland Forever!"
by Lady Butler / 1881`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215996774806106114.jpeg',
      },
    ],
  },
  '1215991148579315713': {
    id: '1215991148579315713',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-11T08:37:00+00:00',
    sortedTimestamp: '2020-01-11T08:37:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `M1128 Stryker MGS`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215991148579315713.jpg',
      },
    ],
  },
  '1215953505451638784': {
    id: '1215953505451638784',
    authorHandle: 'giantgoat9',
    timestamp: '2020-01-12T17:27:00+00:00',
    sortedTimestamp: '2020-01-12T17:27:00+00:00',
    likedBy: [],
    retweetedBy: [],
    status: `Stridsbåt 90H (CB90)`,
    media: [
      {
        type: 'img',
        url:
          '/assets/postMedia/postmedia1215953505451638784.jpeg',
      },
    ],
  },
};

module.exports = {
  users,
  tweets,
};
