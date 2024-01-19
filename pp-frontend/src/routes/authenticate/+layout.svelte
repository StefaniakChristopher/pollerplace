
<div class="signuporlogin-container-alignment">
    <form class="signuporlogin-container">
        <slot/>
    </form>
</div>


<style>

    :global(body) {
        background-color: #0D1321;
        height: 98vh
    }
    .signuporlogin-container-alignment {
        justify-content: center;
        align-items: center;
        display: flex;
        height: 98vh
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