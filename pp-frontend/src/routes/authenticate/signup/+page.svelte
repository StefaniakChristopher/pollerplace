<script lang="ts">
    import axios from 'axios'
    import { backendHost, frontendHost } from '../../../lib/index.js'
    import { goto } from "$app/navigation"

    
        
    

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

    const submitSignUp = async (): Promise<void> => {
        axios.post(backendHost + '/signup', { username, email, password} )
        goto(frontendHost + '/home')
    }

</script>


<h1>Sign Up</h1>

<label for="emailInput">Email</label>
<input bind:value={email} id="emailInput" name="emailInput" type="text" data-cy="emailInput" />

<label for="usernameInput">Username</label>
<input bind:value={username} id="usernameInput" name="usernameInput" type="text" data-cy="usernameInput"/>

<label for="passwordInput">Password</label>
<input bind:value={password} id="passwordInput" name="passwordInput" type="password" data-cy="passwordInput" />

<label for="repeatPasswordInput">Repeat Password</label>
<input bind:value={repeatedPassword} id="repeatPasswordInput" name="repeatPasswordInput" type="password" data-cy="repeatPasswordInput" />

<button on:click|preventDefault={submitSignUp} {disabled} data-cy="submitButton">Submit</button>

<p>Already have an account? <a href="../authenticate/login">Login</a></p>

<style>
    @import '../styles.css';
</style>
