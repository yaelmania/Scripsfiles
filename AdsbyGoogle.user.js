// ==UserScript==
// @name        AdsbyGoogle
// @namespace   Fix Somthing
// @description Fix some Shit
// @copyright   2024+, Yaelmania Ilutions Graphics (Yaelmania)
// @run-at      document-end
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @icon        https://github.com/yaelmania/Scripsfiles/raw/refs/heads/main/favicon01.ico
// @include     http*://*
// @exclude     http*://192.168.*
// @version     1
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// @grant       GM_getResourceURL
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// ==/UserScript==

var $abg = jQuery.noConflict();
/* http*://somoskudasai.com/* */
function Killadsbg() {
  $abg('[class*="jetpack"],[href*="youradexchange."], #ads-header, a[href*="adtng.com"], [id^="ezoic"], [class^="ezoic"], #ad-banner, iframe[src*="discord.com"], .ad-container, .header-ads-section, #unitedblades_div, #ub_iframe, [class^="ads_"], [id^="ads_"], [src*="bet_o_bet"], [class*="Cbox"], [id*="Cbox"], [src*="Cbox"], [href*="Cbox"], .ad, .a-badge.sponsored, iframe[src*="banner"], .headerAd, .footerAd2, .footerAd, #cookie-notice, .adsbygoogle, #adsbygoogle, div[style*="z-index: 2147483"], iframe[style*="width: 1px; height: 1px;"], iframe[style*="z-index: 2147483"], [data-sizes*="x"]').each(function() {
    $abg(this).remove();
  });
}

setTimeout(Killadsbg, 1500);