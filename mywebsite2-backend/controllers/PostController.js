import PostModel from "../models/Post.js"

export const getAll = async (req, res) =>{
    try {
        const posts = await PostModel.find().populate('user').exec()

        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).json({
        message: 'Не вдалось получити статті'
    })
    }
}


export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        const doc = await PostModel.findOneAndUpdate(
            { _id: postId },
            { $inc: { viewsCount: 1 } },
            { returnDocument: 'after' }
        );

        if (!doc) {
            return res.status(404).json({
                message: 'Стаття не знайдена',
            })
        }

        res.json(doc)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не вдалося отримати статтю',
        })
    }
}

export const remove = async (req, res) => {
    try {
        const postId = req.params.id

        const doc = await PostModel.findOneAndDelete({ _id: postId })

        if (!doc) {
            return res.status(404).json({
                message: 'Стаття не знайдена'
            })
        }

        res.json({
            success: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не вдалося видалити статтю'
        })
    }
}

export const create = async (req, res) => {
   try {
    const doc = new PostModel({
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        user: req.userId
    })

    const post = await doc.save()

    res.json(post)
   } catch (err) {
    console.log(err)
    res.status(500).json({
        message: 'Не вдалось створити статтю'
    })
   } 
}

export const update = async (req, res) => {
    try {
        const postId = req.params.id

        await PostModel.updateOne({
            _id: postId
        }, {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        user: req.userId
        
        })
        res.json({
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
        message: 'Не вдалось обновити статтю'
    })
    }
}
