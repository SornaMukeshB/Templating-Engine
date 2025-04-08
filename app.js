const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const { engine } = require('express-handlebars')


// app.set('view engine','pug');
// app.set('view engine','ejs');
app.engine('hbs',engine({ extname: '.hbs', defaultLayout: 'main' }))

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname,'public')));

router.get('/', (req, res) => {
    // res.status(200).sendFile(path.join(__dirname,'views','index.html'))
    const courses=[
        'JAVA',
        'JavaScript',
        'SQL',
        'Spring'
    ]
    // res.status(200).render('index',{
    //     docTitle:"Welcome to pug",
    //     courses
    // });
    res.status(200).render('index',{
        docTitle:"Welcome to ejs",
        courses,
        path: 'index',
        courseExists: courses.length > 0,
        pageIndex: true
    });
})
router.get('/about', (req, res) => {
    const courses=[
        'JAVA',
        'JavaScript',
        'SQL',
        'Spring'
    ]
    // res.status(200).render('about',{
    //     docTitle:"Welcome to pug",
    //     courses
    // })
    res.status(200).render('about',{
        active: 'about',
        docTitle:"Welcome to ejs",
        courses,
        path: 'about',
        courseExists: courses.length > 0,
        pageAbout: true
    });
})

router.use((req, res, next)=> {
    //res.status(200).sendFile(path.join(__dirname,'views','404.html'))

    res.status(200).render('404',{
        docTitle:"404 Page",
        path: '404',
        page404: true
    })
})

app.use(router);

app.listen(8000,() => {
    console.log('Running on 8000')
})