const express =require('express')
const path = require('path')
const blogs =   

router.get('/',  (req, res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/blogpost:', (req, res)=>{
    myBlog = blogs.filter((e) =>{
       return e.slug ==req.params.slug;
    } )

    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

modules.export =router

 // blogs.forEach(e => {
    //     console.log(e.title)
    // });