import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'

import { registerValidation, loginValidation, postCreateValidation } from './validations.js'

import checkauth from './utils/checkauth.js'

import * as UserController from './controllers/UserControllers.js'
import * as PostController from './controllers/PostController.js'
import handleValidationErrors from './utils/handleValidationErrors.js'

mongoose
.connect('mongodb+srv://admin:wwwwww@cluster1.kamwq9w.mongodb.net/?retryWrites=true&w=majority'
)

.then(() => console.log('DB OK'))
.catch(() => console.log('DB error, err'))

const app = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    }, 
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage})

app.use(express.json())
app.use('/uploads', express.static('uploads'))


app.post('/auth/login',loginValidation, handleValidationErrors, UserController.login)

app.post('/auth/register',registerValidation, handleValidationErrors, UserController.register)

app.get('/auth/me', checkauth, UserController.getMe)

app.post('/upload', checkauth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)

app.post('/posts', checkauth, postCreateValidation, handleValidationErrors, PostController.create)
app.delete('/posts/:id', checkauth, PostController.remove)
app.patch('/posts/:id', checkauth, PostController.update)



app.listen(4444, (err) => {

    if(err){
return console.log(err)
    }
    console.log('Server Ok')
})
