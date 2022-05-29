//The web application is only available 
//during working hours (Monday to Friday,  from 9 to 17)
const express = require('express')
const app = express()
const port =5000
const middleWare = (req,res,next)=>{
  const d = new Date();
  const day = d.getDay();
  const hour = d.getHours();
((day<=5 && day>=0)&&(hour>=9 && hour<=17))?next():(res.send('server is offline'))
}
app.use(middleWare)
app.use(express.static('public'))
// app.get('/', middleWare(),function (req, res) {
//   res.end()
// })

app.listen(port,()=>console.log("server is listening on port 5000")
);