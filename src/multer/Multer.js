import path from 'path';
import multer from 'multer';
import fs from 'fs';
const items={};

items.fileSize=(bytes,decimal)=>{
    if(bytes==0){
        return '0 bytes';
    }
    const dm=decimal||2;
    const sizes=['Bytes','KB','MB','GB','TB','PB','EB','YB','ZB'];
    const index=Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000,index)). toFixed(dm))+' '+sizes[index];
}
items.storage=multer.diskStorage({
    destination:function(req,file,callback){
        var dir='./src/images/';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
      callback(null,dir);
    },
    filename:function(req,file,callback){
       return callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    },
});
items.update=multer({storage:items.storage, fileFilter: function(req,file,callback){
    if (!file.originalname.match(/\.(jpeg|jpg|png|gif|doc|pdf|mp4|php|docx|xlsx|csv)$/)) { 
        return callback('Please upload a file');
     }
    return callback(null, true);
}});
module.exports=items;

