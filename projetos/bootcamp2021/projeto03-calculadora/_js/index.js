function calcular () {
    document.formulario.valorTotal.value = 
    Number(document.formulario.campo1.value) + 
    Number(document.formulario.campo2.value); 
}
function subtrair () {
    document.formulario.valorTotal.value = 
    Number(document.formulario.campo1.value) - 
    Number(document.formulario.campo2.value); 
}
function multiplicar () {
    document.formulario.valorTotal.value = 
    Number(document.formulario.campo1.value) * 
    Number(document.formulario.campo2.value); 
}
function dividir () {
    document.formulario.valorTotal.value = 
    Number(document.formulario.campo1.value) / 
    Number(document.formulario.campo2.value); 
}