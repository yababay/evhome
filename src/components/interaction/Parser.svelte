<script>
    import findTokenResponses from "./cache"
    findTokenResponses()
</script>

<h1>hi</h1>
<!--
{#await findTokenResponses() then responses}
    <h1>{responses.length}</h1>
{/await}
-->
