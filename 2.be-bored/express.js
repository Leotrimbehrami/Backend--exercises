import express from 'express';
import axios from 'axios';

const PARTICIPANTS = 5;
const PORT = 3002;

const app = express();

app.get('/', async (req, res) => {
  try {
    console.log("--------TRY------");
    const axiosResponse = await axios.get(
      `https://www.boredapi.com/api/activity?participants=${PARTICIPANTS}`
    );
    console.log('axiosResponse.data:', axiosResponse.data );
    const activity = axiosResponse.data.activity;

    const htmlString = `<h1>Was tun heute?</h1>
    <p> Wie wäre es mit folgendem: ${activity} </p>`;

    res.send(htmlString);

  } catch (error) {
    console.log("------CATCH-----");
    console.log("Error: ", error.message);

    console.log("Etwas ist schiefgelaufen: ", error.message);
    res.send("Da ist was schiefgelaufen: ", error.message);
    return;
  }
});

// mit bonus
app.get('/bonus', async(req,res) => {

  try{
    console.log("----TRY----")
    const axiosResponse = await axios.get(
      `https://www.booooredapi.com/api/activity?participants=${PARTICIPANTS}`
  )

    console.log("axiosResponse.data:", axiosResponse.data);
    const activity = axiosResponse.data.activity;

    // die Antwort der API beinhaltet die Eigenschaft "error"
    if(axiosResponse.data.error){
      res.send(`<p> Es gab ein Problem: ${axiosResponse.data.error} </p>`)
    } else {
      const htmlString = `<h1>Was tun heute?</h1>
      <p> Wie wäre es mit folgendem: ${activity} </p>`
      
      res.send(htmlString)
    }
  } catch(error) {
    console.log("---CATCH---")
    console.log("Fehler aufgetreten: ", error.message)

    // ganz einfaches Error HAndling
        // console.error("Da ist was schiefgelaufen (error.message):", error.message);
        // res.send("Da ist was schiefgelaufen (error.message):", error.message);
        // return;

        // 1. Wenn Antwort vom Server erhalten

        if( error.response) {
          console.log(error.response.data)
          res.send(`<h1>Was tun heute?</h1>
          <p> Es ist ein Fehler aufgetreten: ${error.response.data} </p>`)
        }

        // 2.Keine Antwort erhalten
        else {
          console.error("Keine Antwort erhalten.");
          res.send(`<h1>Was tun heute?</h1>
          <p> Es ist ein Fehler aufgetreten: Keine Antwort vom Server </p>`)
        }
  }
})

app.listen(PORT, () => {
  console.log(`Server auf Port ${PORT}`);
});
