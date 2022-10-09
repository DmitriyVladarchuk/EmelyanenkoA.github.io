function task1 (){
    var n1, n2, res;
    n1 = document.getElementById('field1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('field2').value;
    n2 = parseInt(n2);

    if (isNaN(n1) || isNaN(n2))
    {
        alert("Неккоректный запрос, проверьте чтобы оба значения были числами");
        return false;
    }
    alert("Ваш запрос выполняется");
    res = n1 * n2;
    document.getElementById('output').innerHTML = "Итоговая цена: " + res;

}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let a= document.getElementById("click");
    a.addEventListener("task1");
});