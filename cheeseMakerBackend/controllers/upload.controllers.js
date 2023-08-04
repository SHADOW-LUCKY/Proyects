const path = require('path');
const { response } = require('express');

const uploadFile = async(req, res = response) => {

    //console.log(req.files);

    if (!req.files || Object.keys(req.files).length === 0 ||!req.files.file) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      const {file} = req.files;
      const uploadPath = path.join (__dirname, '../uploads/', file.name);
    
      // Use the mv() method to place the file somewhere on your server
      file.mv(uploadPath, (err) =>{
        if (err){
            return res.status(500).send(err);
        }
          
        res.json({ msg:'File uploaded!' + uploadPath});
      });

}


module.exports = {
    uploadFile
}