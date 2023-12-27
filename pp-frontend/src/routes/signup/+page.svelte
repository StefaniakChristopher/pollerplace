<script lang="ts">
    import axios from 'axios'

    const host = "http://localhost:8080"

    let disabled: boolean = true
    let username: string = ""
    let email: string = ""
    let password: string = ""
    let repeatedPassword: string = ""

    const enableSignUp = (username: string, email: string, password: string, repeatedPassword: string): void => {
        if(username !== "" && email !== "" && password !== "" && repeatedPassword !== "") {
            disabled = false
         } else {
            disabled = true
         }
    }

    $: enableSignUp(username, email, password, repeatedPassword)

    const submitSignUp = (): void => {
        axios.post(host + 'signup', { username, email, password} )
    }

</script>

<div class="body">
    <form class="signup-container">
        <h1>Sign Up</h1>

        <label for="emailInput">Email</label>
        <input bind:value={email} id="emailInput" name="emailInput" type="text" />

        <label for="usernameInput">Username</label>
        <input bind:value={username} id="usernameInput" name="usernameInput" type="text" />

        <label for="passwordInput">Password</label>
        <input bind:value={password} id="passwordInput" name="passwordInput" type="password" />

        <label for="repeatPasswordInput">Repeat Password</label>
        <input bind:value={repeatedPassword} id="repeatPasswordInput" name="repeatPasswordInput" type="password" />

        <button on:click|preventDefault={submitSignUp} {disabled}>Submit</button>
    </form>
</div>

<style>
    :global(body) {
        background-color: #0D1321;
        font-family: Arial, sans-serif;
        background-color: #0D1321;
        justify-content: center;
        align-items: center; 
        display: flex;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .signup-container {
        background-color: #FFEDDF;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
        align-self: auto;
    }

    h1 {
        text-align: center;
        color: #0D1321;
    }

    label {
        display: block;
        margin-bottom: 6px;
        color: #0D1321; /* Change label color to green */
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.7s ease;
    }

    button:hover {
        background-color: #45a049;
    }

    button:disabled {
        width: 100%;
        padding: 10px;
        background-color: #b83524;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.7s ease;
    }

    button:disabled:hover {
        cursor: not-allowed;
    }
</style>