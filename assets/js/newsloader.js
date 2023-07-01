fetch("https://api.pescadogames.com/news")
    .then(response => response.json())
    .then(data => loadJson(data));

function loadJson(readjson) {
    // id属性で要素を取得
    const addtoelement = document.getElementById('container');

    for (let json of readjson) {
        // div要素を生成
        let newdiv = document.createElement('div');
        // div要素にclassを追加
        newdiv.className = 'newsdiv';
        //img要素を生成
        let image = document.createElement('img');
        //img要素のsrcを変更
        image.src = json.newsimg;
        //img要素にclassを指定
        image.className = 'newsimg';
        //imgタグを追加
        newdiv.appendChild(image);

        let textdiv = document.createElement('div');

        textdiv.className = 'newsdivinnertext';

        let newsdateandtypediv = document.createElement('div');

        newsdateandtypediv.className = 'newsdateandtypediv';

        let date = document.createElement('span');
        //img要素のsrcを変更
        date.innerHTML = dateReader(json.date);
        //img要素にclassを指定
        date.className = 'date';
        //imgタグを追加
        newsdateandtypediv.appendChild(date);

        let type = document.createElement('span');
        //img要素のsrcを変更
        type.innerHTML = typeReader(json.type);
        //img要素にclassを指定
        type.className = 'type ' + json.type;
        //imgタグを追加
        newsdateandtypediv.appendChild(type);

        let text = document.createElement('p');
        //img要素のsrcを変更
        text.innerHTML = json.text;
        //img要素にclassを指定
        text.className = 'text';

        textdiv.appendChild(newsdateandtypediv);

        textdiv.appendChild(text);

        newdiv.appendChild(textdiv);

        // 指定した要素の中の末尾に挿入
        addtoelement.appendChild(newdiv);
    }

}

function dateReader(date) {
    year = date.slice(0, 4);
    month = date.slice(4, 6);
    day = date.slice(6, 8);

    if (month.slice(0, 1) == "0") {
        month = month.slice(1);
    }

    if (day.slice(0, 1) == "0") {
        day = day.slice(1);
    }

    return year + "年" + month + "月" + day + "日"
}

function typeReader(type) {
    if (type == "site") {
        return "公式サイト"
    }
    else if (type == "puzzlelinker") {
        return "PuzzleLinker"
    }
    else if (type == "genei") {
        return "幻影昔噺"
    }
    else if (type == "degtext") {
        return "DegText"
    }
    else if (type == "store") {
        return "PescadoGamesStore(Launcher)"
    }
    else if (type == "bot") {
        return "PescadoGamesBOT"
    }
}