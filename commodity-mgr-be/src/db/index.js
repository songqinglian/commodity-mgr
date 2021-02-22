const mongoose = require('mongoose');
//给哪个数据库的哪个集合添加什么格式的文档


//连接数据库
const connect =() =>{
    mongoose.connect('mongodb://127.0.0.1:27017');
   //数据库打开时做
    mongoose.connection.on('open',()=>{
        console.log('连接成功');
    });
};

connect();