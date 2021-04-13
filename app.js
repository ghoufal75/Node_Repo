const app=require('express')();
const hbs=require('hbs');
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
    console.log(req.url)
})
app.get('/',(req,res)=>{
    res.send('<strong>Hello Guys ! </strong>')
});
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials')
app.get('/Home',(req,res)=>{
    res.render('home.hbs',{
        PageName : 'Home Page',
        NavBrand : 'Mustache',
        Copyright : 'All right reserved - 2021'
    });
})
app.listen(3000,()=>{
    console.log('App is running on port : 3000');
})