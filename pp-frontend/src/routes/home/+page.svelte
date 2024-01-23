<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js">
  import { onMount } from "svelte";

  // if no onMount, then 'window not defined error'
  onMount(() => {
    // @ts-ignore
    import('boxicons');
  });
</script>

<!-- make a create poll option with a different style of button -->
<nav class="bg-gray-300 flex items-center p-2">
  <img src="src/static/pplogosmall.png" alt="Poller Place Logo" class="p-1 w-20" />

  <input type="text" class="p-2 border-none rounded-full text-lg outline-none ml-3 w-3/4 bg-yellow-200 transition duration-1000 ease-in-out" placeholder="Search..." />

  <div class="flex items-center bg-yellow-200 transition duration-1000 ease-in-out ml-3 min-w-32" id="create-poll-div">
    <box-icon id='create-poll-plus' name='plus' class="ml-2"></box-icon>
    <button class="p-2 rounded-full " id="create-poll-button">Create Poll</button>
  </div>

  <button class="ml-3 p-2 rounded-full bg-yellow-200 transition duration-1000 ease-in-out min-w-24" id="login-button">Login</button>
  <button class="ml-3 p-2 rounded-full bg-yellow-200 transition duration-1000 ease-in-out min-w-24" id="signup-button">Sign Up</button>
</nav>

<style>
  :global(body) {
    background-color: #0d1321;
    height: 98vh;
  }
</style>
