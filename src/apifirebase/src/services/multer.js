import multer  from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      cb(null, 'src/apifirebase/src/routes/users/image')
    },
    filename: function (req, file, cb) {
      cb(null, 'user-' + Date.now()+'.jpg')
    }
  })

export const upload = multer({ 
  storage: multer.memoryStorage()  ,
  limits: {
    fileSize: 1 * 1024 * 1024 //1mb
  }
})

