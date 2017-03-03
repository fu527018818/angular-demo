app.factory('ws', ['$http', function ($http) {
    var s = {}
    //获取列表数据
    s.getData = function (cb) {
        // 通过get请求获取豆瓣网上即将上映的电影信息
        $http.get('http://penkuoer.com/api/v1/book/get_books_by_page.json?page=1')
            .then(function (res) {
                cb(res.data)
            })
    }
    //根据id获取详情
    s.getDetail = function (id, cb) {
        $http.get('http://penkuoer.com/api/v1/book/get_book_detail.json?id=' + id)
            .then(function (res) {
                cb(res.data)
            })
    }
    return s
}])