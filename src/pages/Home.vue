<template lang="pug">
.flex-column
  .search
    i.material-icons search
    input(type='text', v-model='searchValue', placeholder='Search aliases...')
  .categories
    .category(v-for='cat in categories', v-if='iconsForCategory(cat).length > 0')
      .title {{ cat }}
      .icons
        .icon(v-for='icon in iconsForCategory(cat)', :title='aliasString(cat, icon)')
          i.material-icons {{ sanitizeIconName(icon) }}
          .name {{ icon }}
</template>

<script>
const BAD_WORDS = [ // filter some problematic/empty icons
  '0 bar',
  '1 bar',
  '2 bar',
  '3 bar',
  'battery 20',
  'battery 30',
  'battery 50',
  'battery 60',
  'battery 80',
  'battery 90',
  'battery charging 20',
  'battery charging 30',
  'battery charging 50',
  'battery charging 60',
  'battery charging 80',
  'battery charging 90',
  '26x'
]

export default {
  data () {
    return {
      searchValue: '',
      iconIndex: require('src/../icons.yml')
    }
  },
  computed: {
    categories () {
      return Object.keys(this.iconIndex)
    }
  },
  methods: {
    iconsForCategory (cat) {
      let icons = Object.keys(this.iconIndex[cat])

      icons = icons.filter(x => !BAD_WORDS.some(y => x.indexOf(y) !== -1))

      if (this.searchValue) {
        const searchTerms = this.searchValue.split(' ').filter(x => x !== '')

        icons = icons.filter(i => {
          return searchTerms.every(st => i.indexOf(st) !== -1 || this.getAliasArray(cat, i).some(a => a.indexOf(st) !== -1))
        })
      }

      return icons
    },

    sanitizeIconName (icon) {
      return icon.replace(/ /g, '_')
    },

    getAliasArray (cat, icon) {
      return this.iconIndex[cat][icon]
    },

    aliasString (cat, icon) {
      return [icon].concat(this.getAliasArray(cat, icon)).join(', ')
    }
  },
  watch: {
    searchValue (v) {

    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.search {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  i {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 36px;
    color: #888;
  }

  input {
    display: flex;
    flex-grow: 1;
    height: 50px;
    padding-left: 50px;
    border: none;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
}

.categories {
  margin-top: 50px;

  .category {
    background: #eee;
    margin: 20px 0;
    padding: 70px 30px 30px 30px;
    position: relative;

    .title {
      text-transform: uppercase;
      font-weight: bold;
      position: absolute;
      top: 30px;
      left: 70px;
    }

    .icons {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 20px 10px 0;
        width: 150px;

        i {
          color: #888;
          font-size: 50px;
        }

        .name {
          font-size: 12px;
          // white-space: nowrap;

          margin-top: 5px;
        }
      }
    }
  }
}

</style>
