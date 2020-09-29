
let i_wand_know1 = document.querySelector("#i_wand_know1");
let i_wand_know = document.querySelector("#i_wand_know");

let blc = document.querySelector("#blc");
let blc1 = document.querySelector("#blc1");

let closes = document.querySelector('#closes');
let closes_w = document.querySelector('#closes_w');


let bye = document.querySelector('#popup');
let black = document.querySelector('#black');
let new_wind = document.querySelector('#kek');
let new_o = document.querySelector('#kok');
let bt1 = document.querySelector('#bt1');
let bt2 = document.querySelector('#bt2');
let bt3 = document.querySelector('#bt3');
let bt4 = document.querySelector('#bt4');
let subcribe = document.querySelector('#subcribe');

document.querySelector('#show_fuck').onclick = function() {
bye.classList.add('level_bt');
bye.classList.remove('none')
black.classList.add('opas');
black.classList.remove('opass')



};
document.querySelector('#onme').onclick = function() {
bye.classList.remove('level_bt');
bye.classList.add('none')
black.classList.add('opass');
black.classList.remove('opas')

new_wind.classList.remove('level_bt');
new_wind.classList.add('none')
new_o.classList.remove('level_bt');
new_o.classList.add('none')
};




subcribe.onclick = function(){
i_wand_know.classList.add('none');
i_wand_know1.classList.remove('none');

}

bt1.onclick = function(){
blc.classList.add('none');
blc1.classList.remove('none');
}

bt2.onclick = function(){
blc.classList.add('none');
blc1.classList.remove('none');
}

bt3.onclick = function(){
blc.classList.add('none');
blc1.classList.remove('none');
}

bt4.onclick = function(){
blc.classList.add('none');
blc1.classList.remove('none');
}

closes.onclick = function(){
i_wand_know1.classList.add('none');

blc1.classList.add('none');
blc.classList.remove('none');

i_wand_know.classList.remove('none');
bye.classList.remove('level_bt');
bye.classList.add('none')
black.classList.add('opass');
black.classList.remove('opas')
}

closes_w.onclick = function(){
blc1.classList.add('none');
blc.classList.remove('none');

i_wand_know1.classList.add('none');
i_wand_know.classList.remove('none');

bye.classList.remove('level_bt');
bye.classList.add('none')
black.classList.add('opass');
black.classList.remove('opas')
}