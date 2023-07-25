let typed = new Typed('.multiple-text', {
    strings: ['Earbuds', 'Electronics', 'Mobile Adabter'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})


let Day = document.getElementById('day')
let Hour = document.getElementById('hour')
let Minute = document.getElementById('minute')
let Second = document.getElementById('second')





let dateEnd = new Date('2024-01-01 00:00:00'),
    dateNow = new Date(),
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000)


function countDown() {
    let dateLeft = date
        dateTemp = 0;



        dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
        dateLeft -= dateTemp * 24 * 60 * 60
        dateTemp < 10 ? dateTemp = '0' + dateTemp : dateTemp
        Day.innerHTML = dateTemp



        dateTemp = Math.floor(dateLeft / (60*60));
        dateLeft -= dateTemp * 60 * 60
        dateTemp < 10 ? dateTemp = '0' + dateTemp : dateTemp
        Hour.innerHTML = dateTemp



        dateTemp = Math.floor(dateLeft / 60)
        dateLeft -= dateTemp * 60
        dateTemp < 10 ? dateTemp = '0' + dateTemp : dateTemp
        Minute.innerHTML = dateTemp


        dateLeft < 10 ? dateLeft = '0' + dateLeft : dateLeft
        Second.innerHTML = dateLeft

        date--
}

setInterval(countDown , 1000)