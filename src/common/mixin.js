import BackTop from 'components/item/backTop/BackTop'

export const mixin = {
  data () {
    return {
    }
  },
  mounted () {
  }
}

export const backTopMixin = {
  data () {
    return {
      isShowScrollTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop () {
      this.$refs.scroll.bs.scrollTo(0, 0, 500)
    }
  }
}
