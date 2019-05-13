const { categories, data } = require("../data/data.json")

const dataParAnnee = annee => {
  const found = data.find(d => d.annee === annee)
  if (found) {
    return found.list
  } else {
    return []
  }
}

// les titres des légendes ont été raccourcis, la section "Imprimés" a été supprimée, les chiffres internet ont été regroupés

var chart = bb.generate({
    title: {
        text: "Les dépenses des suisses pour les médias, 2006-2015\nSource: Office fédéral de la statistique"
      },
  data: {
    columns: [
    ["Dépenses des suisses", ...dataParAnnee(2006)],
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

    type: "bar"
  },

  bar: {
    padding: 3
  },

  padding: {
    top: 40,
    right: 100,
    bottom: 40,
    left: 100
  },

  grid: {
    x: {
      show: true
    },
    y: {
      show: true
    }
  },

  zoom: {
    enabled: {
      type: "drag"
    }
  },
  
  axis: {
    x: {
      type: "category",
      categories, // les categories du fichier data.json
    }
  },
  
  bindto: "#categoryAxis"
});

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2007)],
		]
	});
}, 1000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2008)],
		]
	});
}, 2000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2009)],
		]
	});
}, 3000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2010)],
		]
	});
}, 4000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2011)],
		]
	});
}, 5000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2012)],
		]
	});
}, 6000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2013)],
		]
	});
}, 7000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2014)],
		]
	});
}, 8000);

setTimeout(function() {
	chart.load({
		columns: [
			["Dépenses des suisses", ...dataParAnnee(2015)],
		]
	});
}, 9000);

setTimeout(function() {
	chart.load({
        columns: [
    ["Dépenses des suisses", ...dataParAnnee(2006)],
    ["2007", ...dataParAnnee(2007)],
    ["2008", ...dataParAnnee(2008)],
    ["2009", ...dataParAnnee(2009)],
    ["2010", ...dataParAnnee(2010)],
    ["2011", ...dataParAnnee(2011)],
    ["2012", ...dataParAnnee(2012)],
    ["2013", ...dataParAnnee(2013)],
    ["2014", ...dataParAnnee(2014)],
    ["2015", ...dataParAnnee(2015)],
    ],
    names: {
      "Dépenses des suisses": "2006"
    }

});
}, 10000);


// setTimeout(function() {
// 	chart.transform("pie");
// }, 13000);

