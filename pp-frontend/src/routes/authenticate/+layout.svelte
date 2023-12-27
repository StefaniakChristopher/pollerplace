<form class="signuporlogin-container">
    <slot/>
</form>

<style>
    :global(body) {
        background-color: #0D1321;
        font-family: Arial, sans-serif;
        background-color: #0D1321;
        justify-content: center;
        align-items: center; 
        display: flex;
        height: 97vh;
        width:97vw;
    }

    .signuporlogin-container {
        background-color: #FFEDDF;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
        align-self: auto;
    }
    
   
</style>