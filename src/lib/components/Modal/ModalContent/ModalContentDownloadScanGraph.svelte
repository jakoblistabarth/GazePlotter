<script lang="ts">
  import { ScanGraphDownloader } from '$lib/class/Downloader/ScanGraphDownloader.ts'
  import { getStimuli } from '$lib/stores/dataStore.ts'
  import GeneralSelectBase from '../../General/GeneralSelect/GeneralSelect.svelte'
  import GeneralInputText from '../../General/GeneralInput/GeneralInputText.svelte'
  import MajorButton from '../../General/GeneralButton/GeneralButtonMajor.svelte'

  let stimulusId = '0'
  let fileName = 'GazePlotter-ScanGraph'

  const options = getStimuli().map(stimulus => {
    return {
      label: stimulus.displayedName,
      value: stimulus.id.toString(),
    }
  })

  console.log(options)

  const handleSubmit = () => {
    console.log(stimulusId)
    const downloader = new ScanGraphDownloader()
    downloader.download(parseInt(stimulusId), fileName)
  }
</script>

<GeneralSelectBase label="Stimulus" {options} bind:value={stimulusId} />
<GeneralInputText legend="File name" bind:value={fileName} />
<div class="mt-30">
  <MajorButton on:click={handleSubmit}>Download</MajorButton>
</div>

<style>
  .mt-30 {
    margin-top: 30px;
  }
</style>
