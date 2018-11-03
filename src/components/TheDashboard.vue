<template>
  <div class="tile is-ancestor">
    <div class="tile is-4 is-parent is-vertical has-background-grey-light">
      <div class="tile is-vertical">
        <DashboardMember
          :who='sender'
        />
        <DashboardMember
          :who='acceptor'
        />
        <DashboardActions/>
      </div>
      <div class="tile is-child"/>
    </div>
    <div class="tile is-parent has-background-grey-lighter">
      <DashboardItems/>
    </div>

    <DashboardModal/>
  </div>
</template>

<script>
import DashboardActions from './DashboardActions'
import DashboardItems from './DashboardItems'
import DashboardMember from './DashboardMember'
import DashboardModal from './DashboardModal'

export default {
  name: 'TheDashboard',

  components: {
    DashboardActions, DashboardItems, DashboardMember, DashboardModal
  },

  data () {
    return {
      sender: { title: 'Sender', name: 'sender' },
      acceptor: { title: 'Acceptor', name: 'acceptor' }
    }
  }
}
</script>
