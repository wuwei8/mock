var mongoose = require("mongoose"); //引入mongoose
mongoose.connect('mongodb://localhost/list',{ useNewUrlParser: true}); //连接到mongoDB的todo数据库
//该地址格式：mongodb://[username:password@]host:port/database[?options]
//默认port为27017 

var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connection success');
});

var ListSchema = new mongoose.Schema({
    id: String, //定义一个属性user_id，类型为String
    phone: String, //定义一个属性content，类型为String
    picUrl: String, //定义一个属性user_id，类型为String
    name: String, //定义一个属性content，类型为String
    updated: Date, //定义一个属性updated_at，类型为Date
    email:String
});

mongoose.model('user', ListSchema); //将该Schema发布为Model,user就是集合名称
mongoose.model('news', ListSchema); //将该Schema发布为Model,user就是集合名称
 
module.exports = mongoose;