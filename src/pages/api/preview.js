export default function handler(req,res){
    if(req.query.token !== 'hansol' || req.query.post ){
        return res.status(401).json({message: 'Invaild token..'})
    }

    res.setPreviewData({})
    res.redirect(`/posts/${req.query.post}`)
}