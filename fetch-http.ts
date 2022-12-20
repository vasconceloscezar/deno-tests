const url = Deno.args[0]
if(!url){
	console.log("Send an URL as a parameter for this function.")
}else{
	const res = await fetch(url)
	const body = new Uint8Array(await res.arrayBuffer())
	await Deno.stdout.write(body)
}
