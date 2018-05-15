const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.listen(8000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Curriculums = [],
 Id = 1;

app.get('/api/curriculums', (req,res) => { // get :: ดึงค่าหลักสูตร
 res.send(Curriculums);
 console.log('Get Curriculums');

});

app.post('/api/curriculums', (req,res) => { // Post :: เพิ่มหลักสูตร
  var name = req.body.name;
  
  Curriculums.push({
    id:Id++,
    name: name
  });
  res.send(Curriculums);
  console.log('New Curriculum is : \n',name); // แสดงหลักสูตรที่เพิ่มบน cmd 
}); 

app.delete('/api/curriculums/:curriculums_id', (req,res) => { // Delete :: ลบหลักสูตร
  var id = req.params.curriculums_id,
  tmp = [];

  Curriculums.map(Curriculums => { 
   if (Curriculums.id != id){
    tmp.push(Curriculums);
	}
 });
 Curriculums = tmp;
 res.send(Curriculums);
 console.log('The curriculum that have been removed is \n',id); // แสดงหลักสูตรที่ลบบน cmd (แสดงเป็นลำดับที่เข้ามา)
});

console.log('\nServer running...\n\n');