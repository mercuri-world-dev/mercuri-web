<script lang="ts">
  import { addOrUpdateLibraryResource } from '$lib/supabase/library';
  let title = '';
  let description = '';
  let message = '';

  async function handleSubmit() {
    const { error } = await addOrUpdateLibraryResource(title, description);
    if (error) {
      message = 'Error: ' + error.message;
    } else {
      message = 'Resource added!';
      title = '';
      description = '';
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Title:
    <input bind:value={title} required />
  </label>
  <br />
  <label>
    Description:
    <textarea bind:value={description} required></textarea>
  </label>
  <br />
  <button type="submit">Add Resource</button>
</form>
{#if message}
  <p>{message}</p>
{/if}