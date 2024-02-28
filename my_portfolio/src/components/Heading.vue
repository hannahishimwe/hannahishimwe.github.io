<script setup>

</script>

<template>
    <div class="typing-animation">
        <h1 class="text"><em>Hello,</em> I'm Hannah Ishimwe</h1>
    </div>

</template>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap');
    h1 {
        font-family: 'Radley', serif;
        font-size: 5rem;
        color: #f8eaea;
        margin: 0;
        line-height: 1.5;
        font-weight: 400;
    }

    .typing-animation {
        font-family: 'Radley', serif;
        font-size: 24px;
        overflow: hidden;
        border-right: .15em solid orange; /* Cursor effect */
        white-space: nowrap; /* Prevents line breaks */
        margin: 0 auto;
        display: inline-block;
        animation: typing 3s steps(40) 1, blink-caret 0.75s step-end infinite  ;
    }

    @keyframes typing {
    from {
        width: 0; /* Start with 0 width */
    }
    50% {
        width: 0%; /* Pause at half width */
    }
    100% {
    width: 100%; /* End at full width */
  }
    }


    @keyframes blink-caret {
    from,to {
        border-color: transparent; /* Hide cursor */
    }
    50% {
        border-color: orange; /* Blinking cursor effect */
    }

}

    /* Add this rule to reveal text over time */
    .text {
    overflow: hidden;
    white-space: nowrap;
    }

    /* Additional styling for the cursor effect */

    /* .typing-animation::after {
    content: '|'; /* Cursor character */
    /* display: inline-block;
    width: 0;
    }  */
</style>
  