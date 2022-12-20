# Deno Playground

Here is a place where I tests deno functionalities, to understand how some of it's features work. 

## Set up 

You need to install Deno first. 
[Read more about it in the docs](https://deno.land). 


## Functionalities

- [Fetch-Http](/fetch-http.ts) - Using the `fetch` method to read an URL sent via args when runing the file. 

```shell
deno run ./fetch-http.ts <url> 
``` 
- [Equal String](/equality-string.test.ts) - Use the `assureEqual` from deno to check string equality.

```shell
deno test 
``` 
