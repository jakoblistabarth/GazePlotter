<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let isDisabled = false
  export let isIcon = true

  const handleClick = () => {
    dispatch('click')
  }
</script>

<button disabled={isDisabled} on:click={handleClick} class:isIcon>
  <slot />
</button>

<style>
  button {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.7);
    padding: 0.25em 0.5em;
    text-align: center;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    height: 34px;
    min-width: 34px;
    font-size: 16px;
    cursor: pointer;
  }
  button.isIcon {
    width: 34px;
  }
  button:hover {
    border: 1px solid #cd1404;
    color: #cd1404;
  }
  button:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.26);
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>
