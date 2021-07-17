<script>
    import { set_data } from "svelte/internal";
    export let message = "i am sad...";
    export let player = false;
</script>

<div class="message-box">
{#if player}
<img src="/static/assets/favicon.png" alt="">
<p>{message}</p>
{/if}

{#if !player}
<p>{message}</p>
    <img src="/static/forest-of-letters/a-happy.png" alt="">
{/if}</div>

<style>
    .message-box{
        color: white;
        width: 90%;
        height: 5rem;
        background-color: var(--bg2);
        border: 1px white solid;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .message-box > p{
        padding: 0 1rem;
    }
    img{
        width: 5rem;
        border: 2px solid gold;
    }
</style>