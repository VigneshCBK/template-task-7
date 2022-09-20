function getMonday(d) {
    d = new Date(d);
    var day = d.getDay()
    date = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(date));
}

getMonday(("2022-10-2"));

