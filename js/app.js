let Num_visited =  document.getElementById('num_visted');
let Num_A0 =  document.getElementById('num_A0');
let Num_A3 =  document.getElementById('num_A3');
let Num_A4 =  document.getElementById('num_A4');
let cost_visited =  document.getElementById('cost_visted');
let cost_A0 =  document.getElementById('cost_A0');
let cost_A3 =  document.getElementById('cost_A3');
let cost_A4 =  document.getElementById('cost_A4');
let cost_total =  document.getElementById('cost_total');

function Calc(){
    if (Num_visited.value.length === 0) {
        return;
    }
    if (Num_A0.value.length === 0) {
        return;
    }
    if (Num_A3.value.length === 0) {
        return;
    }
    if (Num_A4.value.length === 0) {
        return;
    }

    cost_visited.value = Num_visited.value * 7.3;
    cost_A0.value = Num_A0.value * 76;
    cost_A3.value = Num_A3.value * 1.5;
    cost_A4.value = Num_A4.value * 1.3;
    cost_total.value = cost_visited.value + cost_A0.value + cost_A3.value + cost_A4.value;
}



// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}
