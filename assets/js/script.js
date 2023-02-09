function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

$(function () {
    var $select = $(".model");
    for (i = 1; i <= 28; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
});
$(document).ready(function () {
    $("select.model").change(function () {
        var selectedModel = $(this).children("option:selected").val();
        var background = ['#000','#b2a17f', '#e57000', ' #877bcb', ' #ebe6e0', ' #acb5c4', ' #4a4f53', ' #4a4f53', '#fedac4', ' #b4713d', ' #49528e', ' #66323e', '#ddb300', '#ddb300', '#3d5210', '#3d5210', '#7a7d6a', '#171717', '#44464f', '#a07b50', '#bd8f59', '#b2b5af', '#655f31', '#a7b6ca', '#928c91', ' #536b55', ' #4676c0', ' #91d26a'];
        var buttonColor = ['#000','#99855e', ' #230a0a', ' #6b5dbb', ' #284e61', ' #8b97ab', ' #01b3cd', ' #968372', '#284e61', ' #aaa296', ' #54478b', ' #58212e', '#bc9801', '#0c98a3', '#142012', '#142012', '# 40413c', '#40413c', '#140413c', '#886236', '#886236', '#868b80', '#4f4a21', '# a7b6ca', '#6d646c', ' #224541', ' #2b5dab', ' #91d46a'];
        var fontColor = ['#000','#FFFFFF', '#FFFFFF', '#FFFFFF', '#00324b', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#0061aa,', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
        $(".sub").css("backgroundColor", buttonColor[selectedModel]);
        $("h1, p, h2").css("color", fontColor[selectedModel]);
        $("#profile, body").css("backgroundColor",background[selectedModel]);
        $("#imageHeroDepan").attr("src","assets/images/depan/depan ("+[selectedModel]+").jpg");
        $("#imageHeroBelakang").attr("src","assets/images/belakang/belakang ("+[selectedModel]+").jpg");


});
});
        var gradientOverlay = window.getComputedStyle(document.querySelector('.gradient-overlay'),'::after');
        var gradientOverlayAfter = gradientOverlay.getPropertyValue('background-image');
        
        
        console.log(gradientOverlayAfter);
