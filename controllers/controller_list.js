app.controller('listCtrl', ['$scope', 'ws', function ($s, ws) {
    $s.list = ''
    ws.getData(function (res) {
        console.log(res.data)
        $s.list = res.data
    })
}])