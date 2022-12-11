<script>
	import { enhance } from '$app/forms'
</script>

<form method="POST" use:enhance>
	<label for="userId"> User id </label>
	<input name="userId" id="userId" type="text" />
	<button type="submit">Submit</button>
</form>
