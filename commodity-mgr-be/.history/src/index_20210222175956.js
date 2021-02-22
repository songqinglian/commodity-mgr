const Koa = require('koa');

const app = new Koa();

//context => ctx
app.use((ctx)=>{


});

app.listen(4000,()=>{

    console.log('启动成功');


});