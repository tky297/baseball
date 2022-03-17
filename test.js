window.addEventListener('load', function() {
    getTrainList();
});

function getTrainList() {
    var url = 'https://tetsudo.rti-giken.jp/free/delay.json'; //遅延情報のJSON
    fetch(url)
        .then(function(data) {
            return data.json(); // 読み込むデータをJSONに設定
        })
        .then(function(json) {
            for (var i = 0; i < json.length; i++) {
                var train = json[i].name;
                var company = json[i].company;

                //表形式で遅延路線を表示する
                var row = document.getElementById('train-list').insertRow();
                row.insertCell().textContent = i + 1;
                row.insertCell().textContent = train;
                row.insertCell().textContent = company;
            }
        });
}