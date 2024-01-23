<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js">
  import { onMount } from "svelte";

  // if no onMount, then 'window not defined error'
  onMount(() => {
    // @ts-ignore
    import('boxicons');
  });
</script>

<!-- make a create poll option with a different style of button -->
<nav class="topBar">
  <img
    src="src/static/pplogo.png"
    alt="Poller Place Logo"
    class="upper-left-logo"
  />

  <input type="text" class="search-input" placeholder="Search..." />

    
  <div class="top-bar-buttons" id="create-poll-div">
    <box-icon id='create-poll-plus' name='plus'></box-icon>
    <button class="top-bar-buttons" id="create-poll-button">Create Poll</button>
  </div>


  <button class="top-bar-buttons" id="login-button">Login</button>
  <button class="top-bar-buttons" id="signup-button">Sign Up</button>
</nav>


<h1 class="underline text-3xl">barf</h1>

<style>
  :global(body) {
    background-color: #0d1321;
    height: 98vh;
  }

  .upper-left-logo {
    width: 5%;
    padding: 1%;
  }
  .topBar {
    display: flex;
    background-color: #9fa58e;
  }

  .search-input {
    padding: 10px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    margin-left: 3%;
    width: 75%;
    margin-bottom: 2%;
    margin-top: 2%;
    display: flex;
    background-color: #ffeee0;
    margin-right: 5%;
  }

  #create-poll-div{
    border-radius: 0px;
    width: 7%;
    display: flex;
    align-items: center;
  }

  .top-bar-buttons {
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 1%;
    width: 6%;
    background-color: #ffeee0;
    border: none;
    border-radius: 25px;
  }

  .top-bar-buttons,
  .search-input {
    transition: background-color 1s ease;
  }

  .top-bar-buttons:hover {
    background-color: aliceblue;
    cursor: pointer;
  }

  .search-input:focus {
    background-color: aliceblue;
  }

  #create-poll-button {
    width: 80%;
    
  }

  #create-poll-plus {
    margin-left: 8%;
  }
  


  /* enforce a minimum sizing on some of these so it doesnt look stoopid */
</style>
