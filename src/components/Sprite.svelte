<script lang='ts'>
    import {spriteDirection} from "../store/spritedirection";

</script>

<img class="{$spriteDirection}" src="https://i.imgur.com/Z7yUuOx.png" alt="">
<!-- <img id="hoodie" class="{$spriteDirection}" src="https://i.imgur.com/sBYaytr.png" alt=""> -->

<style>
    .true {
     transform: scaleX(1);
        
        position:absolute;
translate: -50px;
     height:100px;
    }

    .false {
        transform: scaleX(-1);
        position:absolute;
translate: -50px;
       
        
     height:100px;
    }

</style>