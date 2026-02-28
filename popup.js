

const tab_array = [];
const extra_tabs = [];

function getTabs(callback) {
chrome.tabs.query({}, (tabs) => {
    for (const tab of tabs) {
        if (!tab_array.includes(tab.url)) {
            tab_array.push(tab.url)
        } else {
            extra_tabs.push(tab)
        }
    }

    if (callback) callback();

})
}


function makeText() {
    document.getElementById("counter").innerText = "Количество повторных вкладок: " + extra_tabs.length
}


getTabs(() => {
    makeText()
})


document.getElementById("close_tabs").addEventListener("click", () => {
    for (const extra_tab of extra_tabs) {
        chrome.tabs.remove(extra_tab.id)
    }

    tab_array.length = 0;
    extra_tabs.length = 0;
})

