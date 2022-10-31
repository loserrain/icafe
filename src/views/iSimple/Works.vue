<template>
  <section class="page__works">
    <i-cover :background-url="cover_image">
      <template #title>
        <h1>
          最新消息
        </h1>
      </template>
    </i-cover>
    <section class="works">
      <table>
        <thead>
          <tr>
            <th
              v-for="col in epaper_table.columns"
              :key="col.key"
              :class="{ active: sortKey == col.key }"
            >
              {{ col.title | capitalize }}
            </th>
            <th>連結</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in filteredNews" :key="index">
            <td v-for="col in epaper_table.columns" :key="col.key">
              {{ entry[col.key] }}
            </td>
            <td>
              <a :href="entry.url" target="_blank">+</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="works-ref">公告資訊 from 水林鄉公所</section>
  </section>
</template>

<script>
import epaper_data from '@/assets/js/news_data.js'
export default {
  data() {
    let sortOrders = {}
    let columns = [
      { title: '標題', key: 'title' },
      { title: '日期', key: 'date' },
    ]
    columns.forEach(function(key) {
      sortOrders[key] = 1
    })
    return {
      cover_image: 'cover/page/works.jpg',
      epaper_table: {
        columns: columns,
        filiterKey: '',
        epapers: epaper_data,
      },
      sortKey: '',
      sortOrders: sortOrders,
    }
  },
  computed: {
    filteredNews: function() {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var epapers = this.epaper_table.epapers
      if (filterKey) {
        epapers = epapers.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        epapers = epapers.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return epapers
    },
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
  },
}
</script>

<style lang="scss">
.works {
  padding: 0 10%;

  > table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 1rem 0.8rem;
  }

  thead {
    border-bottom: 1px grey solid;
    > tr > th {
      font-weight: bold;
      // padding: 1rem 0.8rem;
      &:nth-child(1) {
        width: 60%;
      }
    }
  }

  tbody {
    > tr {
      border-bottom: 1px lightgrey solid;
      td:nth-child(2),
      td:nth-child(3) {
        text-align: center;
      }
      td:nth-child(3) > a {
        text-decoration: none;
        color: $color-primary;
        font-size: 2em;
        font-weight: bold;
        line-height: 1rem;
      }
    }
  }
}

.works-ref {
  width: 80%;
  padding-top: 2rem;
  text-align: right;
}
</style>
