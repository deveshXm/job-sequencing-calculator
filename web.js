const table = document.querySelector('.table1');
const result = document.querySelector('.result');
const make = document.querySelector('.btn1');
const cal = document.querySelector('.btn');
p = [];
d = [];
var n;
function sortList(a, b) {
    for (var i = 0; i < a.length; i++) {
        let max = 0;
        for (var j = i; j < a.length; j++) {
            if (a[j] > max) {
                max = a[j];
                x = j;
            }
        }
        let temp;
        temp = a[i];
        a[i] = a[x];
        a[x] = temp;
        temp = b[i];
        b[i] = b[x];
        b[x] = temp;

    }
}
function job_deadline(n) {
    for (var i = 0; i < n; i++) {
        p.push(document.getElementById(`row1${i}`).value);
        d.push(document.getElementById(`row2${i}`).value);
    }
    let max = 0;
    for (var i = 0; i < n; i++) {
        if (parseInt(d[i]) > max)
            max = parseInt(d[i]);
    }
    sortList(p, d);
    const l = new Array(max);
    l.fill(0);
    console.log(l.length);
    for (var i = 0; i < n; i++) {
        console.log(p[i], i);
        console.log(d[i], i);
        if (l[parseInt(d[i]) - 1] != 0) {
            console.log(l[parseInt(d[i]) - 1], 'l')
            for (var j = parseInt(d[i]) - 2; j >= 0; j--) {
                if (l[j] == 0)
                    l[j] = parseInt(p[i]);
            }
        }
        else {
            l[parseInt(d[i]) - 1] = parseInt(p[i]);
        }
    }
    var sum=0,str = "";
    for (let i = 0; i < max; i++) {
        sum += parseInt(l[i]);
        str += `${l[i]}, `;
    }
    result.innerHTML = `<table> <tr><th>Max Profit</th><th>Job Sequence</th></tr><tr><td>${sum}</td><td>${str}</td></tr></table>`;
}
function maketable(n) {
    let str1 = "";
    for (var i = 0; i < n; i++) {
        str1 += `<tr><td>Job-${i + 1}</td><td><input type="number" id="row${1}${i}" placeholder="Enter Profit"><td><input type="number" id="row${2}${i}" placeholder="Enter Job deadline"></td></tr>`
    }
    table.innerHTML = `<table> <tr><th>Job no.</th><th>Job Profit</th><th>Job deadline</th></tr>${str1}</table>`;

}

make.addEventListener('click', () => {
    n = document.getElementById('num').value;
    maketable(n);
})
cal.addEventListener('click', () => {
    job_deadline(n);
})