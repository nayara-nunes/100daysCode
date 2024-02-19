### Promises

Promise recebe uma função f como argumento, essa função f por sua vez recebe como argumento duas funções g e h (opcional).  

Se durante a execução da lógica da função f a função g for chamada com o argumento P, então o estado da promise mudará para ‘fulfilled’ (resolvida), e o resultado da promise será o valor P. 

Se durante a execução da lógica da função f,a função h for chamada com o argumento Q, então o estado da promise mudará para ‘rejected’ rejeitada e o resultado da promise será o valor Q. 

O método then de uma promise recebe como argumento uma função e executa esta função passando o valor P para ela. 

O método catch de uma promise recebe como argumento uma função, e execute esta função passando o valor Q para ela.

---

```jsx
function f(g, h){
 if(10 > 0){
	 g("P");
}
 else{
		h("Q")

 }
}
function executarSeRejeitar(valor){
	console.log("Rejeitada com o valor" + valor);
}
	const minhaPromise = new Promise(f);
minhaPromise
.then(valor => {
	console.log("Resolveu com o valor" + valor);

})
.catch(valor =>{
console.log("Rejeitada com o valor " + valor);
})

```

### Assincronismo

Assíncrono → leva um tempo para ser executado e pode ser bem sucedido ou não.

- chamadas para API’s
- interações com banco de dados

Há 3 maneiras de lidar com esse tipo de código 

- callbacks
- promises
- promises com async-await

Callbacks → é uma função que é passada para ser executada mais tarde

```jsx
const loginUser = (email, password, callback) =>{
	setTimeout() =>{
	console.log("user logged!");
	callback({email});

},1500);
console.log("after setTimeout");
};

const user = loginUser("felipe@gmail.com", "123456", (user) =>{
console.log({user})
})

```