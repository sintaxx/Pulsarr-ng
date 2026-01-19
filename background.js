"use strict";

function handlePageAction(tabInfo) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabArray) {
    if (!tabArray || !tabArray[0] || !tabArray[0].url) {
      return;
    }

    const url = tabArray[0].url;

    if (
      // IMDB: support 7+ digit IDs, trailing slash optional
      url.match(/\/\/www\.imdb.com\/.*\/tt\d{7,}(\/|$)/) ||

      // TVDB (legacy pattern – still kept for now)
      url.match(/.*thetvdb.com\/.*id=\d{1,7}/) ||

      // Trakt
      url.match(/.*trakt.tv\/(shows|movies)\//) ||

      // Rotten Tomatoes
      url.match(/.*rottentomatoes.com\/(tv|m)\//) ||

      // TMDB
      url.match(/.*themoviedb.org\/(tv|movie)\//)
    ) {
      chrome.pageAction.show(tabInfo.tabId);
    } else {
      chrome.pageAction.hide(tabInfo.tabId);
    }
  });
}

chrome.tabs.onActivated.addListener(handlePageAction);
chrome.webNavigation.onCommitted.addListener(handlePageAction);
