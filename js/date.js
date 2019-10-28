/*
 Образец контейнера для даты

 <span class="installedDate" data-daysAgo="45">...</span>
 (ставим "-", если дни отнимаются)
 <span class="installedDate" data-daysAgo="45" data-monthForm="num">...</span>
 (последний пример, если формат даты - числовой)
 <span class="installedDate" data-format="d">...</span>
 (если выводится только число)
 <span class="installedDate" data-format="m">...</span>
 (если выводится только месяц)
 <span class="installedDate" data-format="dm">...</span>
 (если выводится только дата и месяц)
 <span class="installedDate" data-format="y">...</span>
 (если выводится только год)
*/

/*
 language of date:
 Czech:
 innerHTML = pastDate.toLocaleString("cs-CZ", options);

 English
 innerHTML = pastDate.toLocaleString("en-GB", options);

 Russian
 innerHTML = pastDate.toLocaleString("ru", options);
*/

let currentDate = new Date();

let setBlockDate = function () {
    let installedDatesArr = document.querySelectorAll(".installedDate");
    for(let i = 0; i < installedDatesArr.length; i++) {
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC'
        };
        let daysAgo;
        installedDatesArr[i].getAttribute('data-daysAgo') ? daysAgo = installedDatesArr[i].getAttribute('data-daysAgo')*86400000 : daysAgo =  0;
        let pastDate = new Date(currentDate.getTime() + daysAgo);
        if (installedDatesArr[i].getAttribute('data-monthForm') === "num") {
            options.month = '2-digit';
        }
        if (installedDatesArr[i].getAttribute('data-format') === 'y') {
            options.day = undefined;
            options.month = undefined;
        }
        if (installedDatesArr[i].getAttribute('data-format') === 'dm') {
            options.year = undefined;
        }
        if (installedDatesArr[i].getAttribute('data-format') === 'm') {
            options.day = undefined;
            options.year = undefined;
        }
        if (installedDatesArr[i].getAttribute('data-format') === 'd') {
            options.month = undefined;
            options.year = undefined;
        }
        installedDatesArr[i].innerHTML = pastDate.toLocaleString("ru", options);
    };
};

document.addEventListener("DOMContentLoaded", function () {
    setBlockDate();
});

/*  Для сезонов года
<span class="installedSeason"></span>
 */

function setSeason() {
    // var arr = ['зима и весна','весна и лето','лето и весна','осень и зима'];
    let arr = ['зима','весна','лето','осень'];
    let d = new Date ();
    let installedSeason = document.querySelectorAll(".installedSeason");
    let month = d.getMonth();
    for(let i = 0; i < installedSeason.length; i++) {
        if (month === 11 || month === 0 || month === 1) {
            installedSeason[i].innerHTML = arr[0];
        }
        else if (month === 2 || month === 3 || month === 4) {
            installedSeason[i].innerHTML = arr[1];
        }
        else if (month === 5 || month === 6 || month === 7) {
            installedSeason[i].innerHTML = arr[2];
        }
        else if (month === 8 || month === 9 || month === 10) {
            installedSeason[i].innerHTML = arr[3];
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setSeason();
});