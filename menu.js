var section_open_style = "margin-left: 0px; width: 270px; transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1); transition-duration: 0.2s;";
var section_close_style = "margin-left: -270px; width: 270px; transition-timing-function: cubic-bezier(0, 0, 0, 1); transition-duration: 0.25s;";
var last_clicked = '';

$(document).bind("DOMSubtreeModified", function() {
    if (!document.getElementById("gobmag-menu")) {
        // create element and stick it on the left menu
        var imgURL = chrome.runtime.getURL("images/gobmagico2.png");
        $("body > div > div > div > div > nav > ul:nth-child(1) > li:nth-child(1)").before(
            "<li data-menubar-sidebutton='gobmag-menu'>\
                <div id='gobmag-menu'>\
                    <div class='gobmag-ico'>\
                </div>\
            </li>");

        // set up what it does on click
        $("li").on("click", "#gobmag-menu", function() {
            if (($("section").attr("style") == section_open_style) && $("#gobmag-menu").hasClass("selected")) {
                $("section").attr("style", section_close_style);
                $("#gobmag-menu").removeClass("selected");
                $("section").html("");
            } else {
                $("#gobmag-menu").addClass("selected");
                $("section").attr("style", section_open_style);
                $("section").load(chrome.runtime.getURL("menu.html"));
            }
        });
    }
});