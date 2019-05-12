const { categories, data } = require("../data/data.json")

const dataParAnnee = annee => {
  const found = data.find(d => d.annee === annee)
  if (found) {
    return found.list
  } else {
    return []
  }
}

setTimeout(function() {
    chart.load({
        data: {
        columns: [
        ["Dépenses des suisses", ...dataParAnnee(2015)],
        /*["2007", ...dataParAnnee(2007)],
        ["2008", ...dataParAnnee(2008)],
        ["2009", ...dataParAnnee(2009)],
        ["2010", ...dataParAnnee(2010)],
        ["2011", ...dataParAnnee(2011)],
        ["2012", ...dataParAnnee(2012)],
        ["2013", ...dataParAnnee(2013)],
        ["2014", ...dataParAnnee(2014)],
        ["2015", ...dataParAnnee(2015)],*/
    ],
    type: "donut"
  },
});
chart.transform("pie");
}, 11000);