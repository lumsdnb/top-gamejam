<script context="module">
import { page } from "$app/stores";


    export const load = ({page})=>{
        
        const letter = page.params.letter;
        
        return {
            props: {
                letter,
            },
        };
    };
</script>

<script>
    export let letter;
</script>

<div class="note-page">
    letter {letter}
    
</div>
