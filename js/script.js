function Nhap() {
    var tendn, mk;
    tendn = document.getElementById("txtus").value;
    mk = document.getElementById("txtmk").value;
    var cafe = new Array();

    var taphop = document.querySelectorAll("input[type='checkbox']");
    taphop.forEach(function(chk) {
        if (chk.checked)
            cafe.push(chk.value);
    });
    var gtinh;

    var taphopgt = document.querySelectorAll("input[type='radio']");
    taphopgt.forEach(function(ra) {
        if (ra.checked)
            gtinh = ra.value;
    })

    var w = window.open("info.html");

    localStorage.setItem("us", tendn)
    localStorage.setItem("pd", mk)
    localStorage.setItem("cf", cafe)
    localStorage.setItem("gt", gt)
}