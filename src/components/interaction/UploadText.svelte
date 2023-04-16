<script>
    import deBellumGallicum from './bellum.js'

    let textarea

    async function sendText(e){
        e.preventDefault()
        const { target } = e
        const body = target.text.value
        const res = await fetch('/api/upload/text', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body,
        })
        if(!res.ok) return alert('ups...')
        const entries = await res.json()
        console.log(entries)
    }
</script>
<form on:submit={sendText}>
    <textarea placeholder="Вставьте сюда исследуемый текст длиной не более 3 килобайт" name="text" bind:this={textarea}></textarea>
    <p class="submit-holder">Нажмите, чтобы задействовать тестовый фрагмент<button type="button" on:click={e => textarea.value = deBellumGallicum}>Вставить</button></p>
    <p class="submit-holder"><input type="submit" value="Отправить"></p>
</form>

<style>
    .submit-holder {
        text-align: right;
    }
    .submit-holder input {
        display: inline-block;
    }
</style>
