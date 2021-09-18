var dob = document.querySelector("#input-dob");
var btnSelector = document.querySelector("#btn");
var output = document.querySelector("#output");
var btnSelectorNext = document.querySelector("#btn-next");
var btnSelectorPrev = document.querySelector("#btn-prev");
var wait=document.querySelectorAll("#wait")
function clickHandlerPrev(){
    wait[0].style.display="none";
    wait[1].style.display="none";
    var missDayPrev=0;
    var Dob = dob.value;
    if (Dob != "") {
        var date = Dob.split("-");
        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        };
        var ansDate;
        var prevDate = getPrev(date);
        while (1) {
            missDayPrev++;
            var dateStr = convertDateToStr(prevDate);
            var checkDate = dateStr.day + dateStr.month + dateStr.year;
            if (checkPalin(checkDate)) {
                ansDate = prevDate;
                break;
            } else
                prevDate = getPrev(prevDate);
        }

        output.innerText = "The last palindrome date was " + prevDate.day+"-"+prevDate.month+"-"+prevDate.year +". It was missed by "+missDayPrev+" days.";
    }
}
function clickHandlerNext() {
    wait[0].style.display="none";
    wait[1].style.display="none";
    var missDayNext=0;

    var Dob = dob.value;
    if (Dob != "") {
        var date = Dob.split("-");
        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        };
        var ansDate;
        var nextDate = getNext(date);
        while (1) {
            missDayNext++;
            var dateStr = convertDateToStr(nextDate);
            var checkDate = dateStr.day + dateStr.month + dateStr.year;
            if (checkPalin(checkDate)) {
                ansDate = nextDate;
                break;
            } else
                nextDate = getNext(nextDate);
        }

        output.innerText = "The next nearest palindrome date is " + nextDate.day+"-"+nextDate.month+"-"+nextDate.year+". It will come up next in "+missDayNext+" days.";
    }
}

function clickHandler() {
    wait[0].style.display="none";
    wait[1].style.display="none";
    var Dob = dob.value;
    if (Dob != "") {
        var date = Dob.split("-");
        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        };
        var dateStr = convertDateToStr(date);
        var checkDate = dateStr.day + dateStr.month + dateStr.year;
        if (checkPalin(checkDate))
            output.innerText = "Hurrah! It's a palindrome!";
        else
            output.innerText = "Maybe your next birth will surely be a palindrome😄";


    }
}
function getPrev(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;
    var daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(day===0){month--;
    if(month===0){
        month=12;
        day=31;
        year--;
    }else if(month==2){
        if(leapYear(year)){
            day=29;
        }else{
            day=28;
        }}
        else{
            day=daysTotal[month-1];
        }
    }
    
    return {
        day: day,
        month: month,
        year: year
    };
}
function leapYear(yr) {
    if (yr % 400 === 0) return true;
    if (yr % 100 === 0) return false;
    if (yr % 4 === 0) return true;
    return false;
}

function getNext(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
        if (leapYear(year)) {
            if (day > 29) {
                day = 1;
                month = 3;
            }
        } else {
            if (day > 28) {
                day = 1;
                month = 3;
            }
        }
    } else {
        if (day > daysTotal[month - 1]) {
            day = 1;
            month++;
        }
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}

function convertDateToStr(date) {
    var dateStr = {
        day: "",
        month: "",
        year: ""
    };
    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}

function checkPalin(str) {
    return (str === reverseIt(str));
}

function reverseIt(str) {
    return str.split("").reverse().join("");
}
function clickHandlerT(){
    wait[0].style.display="initial";
    wait[1].style.backgroundImage="url('https://media.giphy.com/media/l3vR2zXDNyxQeFAl2/giphy-downsized-large.gif?cid=ecf05e47t8t2wogsbmhl39kwufwng7pwye8w9imfh8t638j5&rid=giphy-downsized-large.gif&ct=g')";
    setTimeout(clickHandler,2000);
    
}
function clickHandlerNextT(){
    wait[0].style.display="initial";
    wait[1].style.backgroundImage="url('https://media.giphy.com/media/l3vR2zXDNyxQeFAl2/giphy-downsized-large.gif?cid=ecf05e47t8t2wogsbmhl39kwufwng7pwye8w9imfh8t638j5&rid=giphy-downsized-large.gif&ct=g')";
    setTimeout(clickHandlerNext,2000);
}
function clickHandlerPrevT(){
    wait[0].style.display="initial";
    wait[1].style.backgroundImage="url('https://media.giphy.com/media/l3vR2zXDNyxQeFAl2/giphy-downsized-large.gif?cid=ecf05e47t8t2wogsbmhl39kwufwng7pwye8w9imfh8t638j5&rid=giphy-downsized-large.gif&ct=g')";
    setTimeout(clickHandlerPrev,2000);
}
btnSelector.addEventListener("click",clickHandlerT );
btnSelectorNext.addEventListener("click", clickHandlerNextT);
btnSelectorPrev.addEventListener("click", clickHandlerPrevT);