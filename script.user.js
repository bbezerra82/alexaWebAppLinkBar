// ==UserScript==
// @name         Alexa Links
// @namespace    https://alexa.amazon.com
// @version      0.1
// @description  Generate links for Alexa pages no longer showing up in the Alexa web app.
// @author       b.alvim@gmail.com
// @include      https://alexa.amazon.*/*
// ==/UserScript==

(function () {
    'use strict';

    $(window).on('hashchange', function () {

        var linkbar = "";
        var hostname = window.location.hostname; // e.g. alexa.amazon.com

        var alexa_base_url = window.location.protocol + "//" + hostname + "/"; // e.g. https://alexa.amazon.com/

        linkbar += "<strong>Alexa web app quicklinks:</strong> ";
        linkbar += get_link(alexa_base_url + "spa/index.html#appliances", "Devices", false);
        linkbar += get_link(alexa_base_url + "spa/index.html#skills/your-skills/?ref-suffix=ysa_gw", "Your Skills", false);
        linkbar += get_link(alexa_base_url + "spa/index.html#smart-home-skills", "SH Skills", false);
        linkbar += get_link(alexa_base_url + "spa/index.html#settings/dialogs", "History", false);

        linkbar += "by Bernardo Bezerra"

        var linkbar_id = "alexa-web-app-linkbar";
        linkbar = "<div id='" + linkbar_id + "' style='background-color: gold; padding: 4px; padding-left: 16px; font-size: 70%;'>" + linkbar + "</div>";
        $("#" + linkbar_id).remove();
        $('body').prepend(linkbar);
    });

    function get_link(url, txt, blank = true) {
        var target = "";
        if (blank) {
            target = "target='_blank'";
        }
        return "<a href='" + url + "' " + target + ">" + txt + "</a> | ";
    }
})();