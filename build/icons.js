const path = require('path')
const fs = require('fs')
const axios = require('axios')
const _ = require('lodash')
const yaml = require('js-yaml')
const shell = require('shelljs')

const ICONS_URL = 'https://api.github.com/repos/google/material-design-icons/contents/${cat}/svg/production?ref=master'

const ICON_CATEGORIES = [ // TODO get from icons project
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle'
]

const PNG_COLORS = [
  'black',
  'white'
]

const SEARCH = '24px.svg'
const ICONS_PATH = path.join(__dirname, '..', 'icons.yml')

// init axios
// axios.defaults.headers['Authorization'] = 'token ' + TOKEN // using public rate limiting, should be enough

  // ; (async () => {
  //   let totalCount = 0
  //   const icons = {}
  //   const existingIcons = yaml.safeLoad(fs.readFileSync(ICONS_PATH))

  //   for (const cat of ICON_CATEGORIES) {
  //     const catUrl = ICONS_URL.replace('${cat}', cat)

  //     const catIcons = (await axios.get(catUrl)).data

  //     let catIconsFiltered = catIcons.filter(x => x.name.indexOf(SEARCH) !== -1).map(x => x.name.replace('ic_', '').replace(SEARCH, '').replace(/\_/g, ' ').trim())

  //     totalCount += catIconsFiltered.length

  //     icons[cat] = {}
  //     for (const catIcon of catIconsFiltered) {
  //       icons[cat][catIcon] = []
  //     }
  //   }

  //   console.log('Icon count:', totalCount)

  //   const mergedIcons = _.merge(existingIcons, icons)

  //   let mergedIconsOrdered = {}
  //   Object.keys(mergedIcons).forEach(x => mergedIconsOrdered[x] = {})

  //   for (const cat in mergedIcons) {
  //     Object.keys(mergedIcons[cat]).sort().forEach(function (key) {
  //       mergedIconsOrdered[cat][key] = mergedIcons[cat][key]
  //     })
  //   }

  //   fs.writeFileSync(ICONS_PATH, yaml.safeDump(mergedIconsOrdered), null, '  ')


  // })()

shell.exec('git add --all')
shell.exec('git commit -n -m "automated commit"')
