function getFirstSelector (selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){
    var ranks = document.querySelectorAll('.ranked-list li');
    for (var i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML, 10) + n;
    }
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div');
}
