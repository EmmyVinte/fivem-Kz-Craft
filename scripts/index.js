let data = {
    "GroupName": "Motoclub",
    "LocationAction": 1
}

if(data.LocationAction) {
    $("#Fabricar").addClass("Selected")
    $("#Produzir").addClass("Unselected")
}

$(document).on("click", ".Unselected",function(){
    let CurrentUnselected = $(this);
    $(".Selected").addClass("Unselected")
    $(".Selected").removeClass("Selected")
    CurrentUnselected.removeClass("Unselected")
    CurrentUnselected.addClass("Selected")
})

