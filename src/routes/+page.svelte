<script lang="ts">
  let { data } = $props();
</script>

<table>
  <thead>
    <tr>
      <th class="name">Name</th>
      <th class="tally">Tally</th>
      <th>Naughty or nice</th>
    </tr>
  </thead>
  <tbody>
  {#each data.data as {name, tally}}
    <tr>
      <td>{name}</td>
      <td>{tally}</td>
      {@const nice = tally > 0}
      {@const naughty = !nice}
      <td class:nice class:naughty>{nice ? 'Nice' : 'Naughty'}</td>
    </tr>
  {/each}
</table>

<style>
  .name {
    width: 10rem;
  }

  .nice {
    color: green;
  }

  .naughty {
    color: red;
  }
</style>