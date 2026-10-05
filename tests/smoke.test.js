import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'weightsMeasures',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Weights and measures',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '8c4d3b2b-b470-5f35-bed2-4232604f8bca',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '08ca3301-2cfe-53a2-95e4-689994740410',
    dynasty: {
      item: 'e9ac8bfe-e5a8-566c-836f-41ec7b0ff65e',
      name: 'Umayyads',
    },
    timeline: {
      code: 'ua',
      id: 'are',
      country: 'United Arab Emirates (Sharjah)',
    },
    partner: {
      id: 'dbeada8d-19e8-5b4c-af80-b2facb57070d',
      name: 'The Jordan Museum',
      city: 'Amman',
      country: 'Jordan',
      objects: 1,
    },
  },
})
