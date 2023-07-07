function Output() {
    let pi = 3.14;
    let month = document.getElementById("Month").value;
    let day = document.getElementById("Day").value;
    let year = document.getElementById("Year").value;
    let optw1 = document.getElementById("Optw1");
    let BB = document.getElementById("Output");
    let optw2 = document.getElementById("Optw2");
    let optw3 = document.getElementById("Optw3");
    Number(month);
    Number(day);
    Number(year);
    Number(pi);
    if (day > 31) {
        alert("Please check Your Day Number!");
    } else if (month > 12) {
        alert("Please check Your Month Number!");
    } else {
        let Fullday = (month * 30) - (30 - day);
        Number(Fullday);
        if (month = 2) {
            if (year % 4 == 0) {
                if (day > 29) {
                    BB.innerText = "ERROOORRR";
                } else {
                    let B = 50.6585 * Math.cos((6.28 * (Fullday - 172)) / 365) + 727.6915;
                    let h, m, s;
                    Number(h);
                    Number(m);
                    Number(s);
                    h = Math.floor(B / 60);
                    m = Math.floor(B % 60);
                    s = Math.floor((B - ((h * 60) + m)) * 60);
                    BB.innerText = h + "h:" + m + "mn:" + s + "s";
                }
            } else {
                if (day > 28) {
                    BB.innerText = "ERROOORRR";
                } else {
                    let B = 50.6585 * Math.cos((6.28 * (Fullday - 172)) / 365) + 727.6915;
                    let h, m, s;
                    Number(h);
                    Number(m);
                    Number(s);
                    h = Math.floor(B / 60);
                    m = Math.floor(B % 60);
                    s = Math.floor((B - ((h * 60) + m)) * 60);
                    BB.innerText = h + "h:" + m + "mn:" + s + "s";
                }
            }
        } else {
            if (day == 0 && month == 0 && year == 0) {
                BB.innerText = Time["00:00:0000"];
            } else {
                let B = 50.6585 * Math.cos((6.28 * (Fullday - 172)) / 365) + 727.6915;
                let h, m, s;
                Number(h);
                Number(m);
                Number(s);
                h = Math.floor(B / 60);
                m = Math.floor(B % 60);
                s = Math.floor((B - ((h * 60) + m)) * 60);
                BB.innerText = h + "h:" + m + "mn:" + s + "s";
            }
        }
    }
}//make by sengleang and Edit by Dalin