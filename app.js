// goku image API -------------------
async function catchGoku() {
      const response = await fetch("goku.jpg");
      const response2 = await fetch('goku2.jpg')
      const blob = await response.blob();
      document.getElementById("goku").src = URL.createObjectURL(blob);
}

catchGoku().then(response => {
      console.log('yay')
})
      .catch(error => {
            console.log('WTFFFF!')
            console.error(error)
      })


// csv getting data from table tabular data -----------
// Data From: https://data.giss.nasa.gov/gistemp/
// Mean From: https//earthobservatory.nasa.gov/world-of

async function getData() {
      const response = await fetch("ZonAnn.Ts+dSST.csv");
      const data = await response.text();

      const table = data.split("\n").slice(1); // indicates a new line/ line break
      table.forEach(row => {
            const columis = row.split(","); // for each row split by commas
            const year = columis[0];
            const temp = columis[1];
            console.log(`Year: ${year}, Avg temp: ${temp}`);
      });
}
          // 1. we want to splt up all the rows using split() each row split into columins
          // line breake it the separator (delimator)
          //2. slice () to remove first row/ makes copy of an array
          //3. split rows into fields - foreach is a higher order function that allows me to apply someinthing to every element of the array