app.controller('detailCtrl', ['$scope', 'ws', '$routeParams', function ($s, ws, $routeParams) {
    console.dir($routeParams)
    $s.title = ""
    $s.content = ""
    ws.getDetail($routeParams.id, function (res) {
        $s.content = res.data.content
        $s.title = res.data.title
    })
}])