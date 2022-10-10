function task1 (){
    var n1, n2, res;
    n1 = document.getElementById('field1').value;
    n2 = document.getElementById('field2').value;
    var regex = /^[1-9]\d+$/;

    if (!regex.test(n1) || !regex.test(n2))
    {
        alert("Неккоректный запрос, проверьте чтобы оба значения были положитенльными числами");
        return false;
    }
    
    alert("Ваш запрос выполняется");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    res = n1 * n2;
    document.getElementById('output').innerHTML = "Итоговая цена: " + res;

}


    
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let a = document.getElementById("click");
    a.addEventListener("Click",task1);
});
