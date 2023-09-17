import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"

inquirer
  .prompt([
    { message:"Enter your URL",
      name:"URL"
    }
  ])
  .then((answers) => {
    var qrs=answers.URL
    var qr_png = qr.image(qrs);
    qr_png.pipe(fs.createWriteStream('img.png'))
    
    fs.writeFile("url.text", qrs, (print_on_console)=>
    {
      console.log("saved")
    })
     
    // console.log(qr_png)


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });