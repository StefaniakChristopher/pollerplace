<script lang="ts">
    import axios from "axios";
    import { backendHost } from '../../../lib/index.js'

    let disabled: boolean = true
    let email: string = ""
    let password: string = ""

    const enableLogin = (email: string, password: string): void => {
        if(email !== "" && password !== "") {
            disabled = false
         } else {
            disabled = true
         }
    }

    $: enableLogin(email, password)

    const submitLogin = async(): Promise<void> => {
        axios.post(backendHost + '/login', { email, password} )
    }
</script>

<h1>Login</h1>

<label for="emailInput">Email</label>
<input bind:value={email} id="emailInput" name="emailInput" type="text" />

<label for="passwordInput">Password</label>
<input bind:value={password} id="passwordInput" name="passwordInput" type="password" />

<button on:click|preventDefault={submitLogin} {disabled}>Submit</button>

<p>Don't have an account? <a href="../authenticate/signup">Sign Up</a></p>

<style>
    @import '../styles.css';
</style>