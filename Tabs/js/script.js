window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tabs = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabsContent = document.querySelectorAll('.info-tabcontent');

    function hideTabsContent(a) {
        for (let i = a; i < tabsContent.length; i++) {
            tabsContent[i].classList.remove('show');
            tabsContent[i].classList.add('hide');
        }
    };

    hideTabsContent(1);

    function showTabsContent (b) {
        if (tabsContent[b].classList.contains('hide')) {
            tabsContent[b].classList.add('show');
            tabsContent[b].classList.remove('hide');
        }
    };

    info.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabsContent(0);
                    showTabsContent(i);
                }
            }
        }
    });

});