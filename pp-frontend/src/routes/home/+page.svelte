<script>
    
</script>

<!-- make a create poll option with a different style of button -->
<nav class="topBar">
    <img src='src/static/pplogo.png' alt="Poller Place Logo" class="upper-left-logo">

    <input type="text" class="search-input" placeholder="Search...">

    <button class="signup-and-login-button" id="login-button">Login</button>
    <button class="signup-and-login-button" id="signup-button">Sign Up</button>
</nav>

<style>
    :global(body) {
        background-color: #0D1321;
        height: 98vh
    }

    .upper-left-logo {
        width: 5%;
        padding: 1%;
    }
    .topBar {
        display: flex;
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

    .signup-and-login-button {
        margin-top: 2%;
        margin-bottom: 2%;
        margin-right: 1%;
        width:5%;
        background-color: #ffeee0;
        border: none;
        border-radius: 25px;
    }

    .signup-and-login-button,
    .search-input {
        transition: background-color 1s ease; 
    }


    .signup-and-login-button:hover {
        background-color: aliceblue;
        cursor: pointer;
    }

    .search-input:focus {
        background-color: aliceblue
    }
/* enforce a minimum sizing on some of these so it doesnt look stoopid */
    

   
</style>