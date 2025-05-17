// Initialize the map centered on Houston
const map = L.map('map').setView([29.7604, -95.3698], 10);
let selectedLayer = null; // 👈 add this at the top of your script
// Add the base map layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const demographics = {
  "Gulfton": {
    population: "41,000",
    medianIncome: "$26,000",
    education: "6% with bachelor's degree"
  },
  "Sunnyside": {
    population: "20,000",
    medianIncome: "$26,000",
    education: "Approximately 25% with bachelor's degree"
  },
  "Greenspoint": {
    population: "42,500",
    medianIncome: "$26,800",
    education: "6% with bachelor's degree"
  },
  "Montrose": {
    population: "9,400",
    medianIncome: "$58,000",
    education: "65% with bachelor's degree"
  },
  "River Oaks": {
    population: "2,700",
    medianIncome: "$120,000",
    education: "82% with bachelor's degree"
  },
  "Midtown": {
    population: "7,100",
    medianIncome: "$62,000",
    education: "55% with bachelor's degree"
  },
  "Sharpstown": {
    population: "9,800",
    medianIncome: "$33,200",
    education: "30% with bachelor's degree"
  },
  "Eastwood": {
    population: "3,200",
    medianIncome: "$42,100",
    education: "41% with bachelor's degree"
  },
  "The Heights": {
    population: "12,600",
    medianIncome: "$69,000",
    education: "66% with bachelor's degree"
  },
  "West University": {
    population: "15,000",
    medianIncome: "$145,000",
    education: "88% with bachelor's degree"
  },
  "Alief": {
    population: "17,500",
    medianIncome: "$31,000",
    education: "29% with bachelor's degree"
  },
  "Bellaire": {
    population: "18,000",
    medianIncome: "$115,000",
    education: "81% with bachelor's degree"
  },
  "Meyerland": {
    population: "10,900",
    medianIncome: "$78,000",
    education: "69% with bachelor's degree"
  },
  "Kashmere Gardens": {
    population: "7,900",
    medianIncome: "$26,400",
    education: "21% with bachelor's degree"
  },
  "Greater Third Ward": {
    population: "8,800",
    medianIncome: "$29,200",
    education: "32% with bachelor's degree"
  },
  "Acres Homes": {
    population: "15,600",
    medianIncome: "$33,800",
    education: "24% with bachelor's degree"
  },
  "Museum District": {
    population: "5,600",
    medianIncome: "$75,000",
    education: "72% with bachelor's degree"
  },
  "EaDo": {
    population: "6,200",
    medianIncome: "$39,000",
    education: "48% with bachelor's degree"
  },
  "Lawndale / Wayside": {
    population: "5,200",
    medianIncome: "$34,500",
    education: "38% with bachelor's degree"
  },
  "Fourth Ward": {
    population: "3,800",
    medianIncome: "$28,000",
    education: "45% with bachelor's degree"
  },
  
  "Iah / Airport Area": {
    population: "19,000",
    medianIncome: "$28,500",
    education: "18% with bachelor's degree"
  },
  "Kingwood Area": {
    population: "65,000",
    medianIncome: "$85,000",
    education: "48% with bachelor's degree"
  },
  "Lake Houston": {
    population: "22,000",
    medianIncome: "$76,000",
    education: "46% with bachelor's degree"
  },
  "Eldridge / West Oaks": {
    population: "32,000",
    medianIncome: "$63,000",
    education: "50% with bachelor's degree"
  },
  "Addicks Park Ten": {
    population: "16,500",
    medianIncome: "$61,000",
    education: "43% with bachelor's degree"
  },
  "Central Southwest": {
    population: "25,000",
    medianIncome: "$35,000",
    education: "26% with bachelor's degree"
  },
  "Greater Hobby Area": {
    population: "29,000",
    medianIncome: "$34,000",
    education: "22% with bachelor's degree"
  },
  "Clear Lake": {
    population: "46,000",
    medianIncome: "$79,000",
    education: "64% with bachelor's degree"
  },
  "South Belt / Ellington": {
    population: "20,500",
    medianIncome: "$48,000",
    education: "38% with bachelor's degree"
  },
  "Northside/Northline": {
    population: "38,000",
    medianIncome: "$31,000",
    education: "20% with bachelor's degree"
  },
  "Golfcrest / Bellfort / Reveille": {
    population: "21,000",
    medianIncome: "$29,500",
    education: "19% with bachelor's degree"
  },
  "Astrodome Area": {
    population: "12,000",
    medianIncome: "$40,000",
    education: "33% with bachelor's degree"
  },
  "Braeswood Place": {
    population: "14,500",
    medianIncome: "$95,000",
    education: "74% with bachelor's degree"
  },
  "Greater Uptown": {
    population: "34,000",
    medianIncome: "$90,000",
    education: "70% with bachelor's degree"
  },
  "Macgregor": {
    population: "11,000",
    medianIncome: "$35,500",
    education: "36% with bachelor's degree"
  },
  "Fort Bend / Houston": {
    population: "27,000",
    medianIncome: "$48,000",
    education: "39% with bachelor's degree"
  },
  "Brays Oaks": {
    population: "31,000",
    medianIncome: "$42,000",
    education: "35% with bachelor's degree"
  },
  "Afton Oaks / River Oaks Area": {
    population: "5,200",
    medianIncome: "$128,000",
    education: "85% with bachelor's degree"
  },
  "Denver Harbor / Port Houston": {
    population: "17,000",
    medianIncome: "$27,000",
    education: "18% with bachelor's degree"
  },
  "Washington Avenue Coalition / Memorial Park": {
    population: "10,500",
    medianIncome: "$92,000",
    education: "72% with bachelor's degree"
  },
  "Neartown - Montrose": {
    population: "14,000",
    medianIncome: "$60,000",
    education: "68% with bachelor's degree"
  },
  "University Place": {
    population: "9,800",
    medianIncome: "$85,000",
    education: "80% with bachelor's degree"
  },
  "Mid West": {
    population: "26,000",
    medianIncome: "$49,000",
    education: "44% with bachelor's degree"
  },
  "Memorial": {
    population: "7,400",
    medianIncome: "$140,000",
    education: "86% with bachelor's degree"
  },
  "Fairbanks / Northwest Crossing": {
    population: "24,000",
    medianIncome: "$41,000",
    education: "30% with bachelor's degree"
  },
  "Central Northwest": {
    population: "22,000",
    medianIncome: "$36,000",
    education: "26% with bachelor's degree"
  },
  "Greater Heights": {
    population: "25,000",
    medianIncome: "$78,000",
    education: "70% with bachelor's degree"
  },
  "Spring Branch East": {
    population: "31,000",
    medianIncome: "$44,000",
    education: "36% with bachelor's degree"
  },
  "Greenway / Upper Kirby Area": {
    population: "15,000",
    medianIncome: "$95,000",
    education: "75% with bachelor's degree"
  },
  "Medical Center Area": {
    population: "13,000",
    medianIncome: "$55,000",
    education: "82% with bachelor's degree"
  },
  "Lazy Brook / Timbergrove": {
    population: "8,500",
    medianIncome: "$82,000",
    education: "68% with bachelor's degree"
  },
  "Northside Village": {
    population: "18,000",
    medianIncome: "$31,000",
    education: "22% with bachelor's degree"
  },
  "Greater Fifth Ward": {
    population: "14,000",
    medianIncome: "$28,000",
    education: "20% with bachelor's degree"
  },
  "Magnolia Park": {
    population: "19,000",
    medianIncome: "$30,000",
    education: "21% with bachelor's degree"
  },
  "Greater Eastwood": {
    population: "11,000",
    medianIncome: "$42,000",
    education: "39% with bachelor's degree"
  },
  "Meyerland Area": {
  population: "10,900",
  medianIncome: "$78,000",
  education: "69% with bachelor's degree"
},
"Downtown": {
  population: "13,000",
  medianIncome: "$68,000",
  education: "66% with bachelor's degree"
},
"Second Ward": {
    population: "11,000",
    medianIncome: "$32,000",
    education: "28% with bachelor's degree"
  },
  "South Main": {
    population: "9,500",
    medianIncome: "$45,000",
    education: "38% with bachelor's degree"
  },
  "Westbury": {
    population: "14,000",
    medianIncome: "$54,000",
    education: "44% with bachelor's degree"
  },
  "Trinity / Houston Gardens": {
    population: "10,000",
    medianIncome: "$29,000",
    education: "22% with bachelor's degree"
  },
  "East Houston": {
    population: "13,000",
    medianIncome: "$32,000",
    education: "26% with bachelor's degree"
  },
  "Northshore": {
    population: "22,000",
    medianIncome: "$36,500",
    education: "30% with bachelor's degree"
  },
  "Greater Greenspoint": {
    population: "44,000",
    medianIncome: "$27,500",
    education: "16% with bachelor's degree"
  },
  "Clinton Park Tri-Community": {
    population: "4,200",
    medianIncome: "$25,000",
    education: "14% with bachelor's degree"
  },
  "Ost / South Union": {
    population: "12,000",
    medianIncome: "$33,000",
    education: "30% with bachelor's degree"
  },
  "Gulfgate Riverview / Pine Valley": {
    population: "16,000",
    medianIncome: "$36,000",
    education: "31% with bachelor's degree"
  }
};




fetch("https://raw.githubusercontent.com/blackmad/neighborhoods/master/houston.geojson")
  .then(response => response.json())
  .then(geojsonData => {
    
    const namesSet = new Set();

    // Step 1: Collect unique names
    geojsonData.features.forEach(feature => {
      namesSet.add(feature.properties.name);
    });
    
    // Step 2: Convert Set to Array and sort it
    const uniqueNames = Array.from(namesSet).sort();
    
    // Step 3: Populate the dropdown
    const dropdown = document.getElementById("neighborhoodSelect");
    dropdown.innerHTML = `<option value="">Select an Area</option>`;
    
    uniqueNames.forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      dropdown.appendChild(option);
    });
    




    const geojsonLayer = L.geoJSON(geojsonData, {
      style: {
        color: "#008080",
        weight: 1.5,
        fillColor: "#00cccc",
        fillOpacity: 0.5
        
      },
      
      onEachFeature: function (feature, layer) {
        

        const name = feature.properties.name;
      
        layer.on({
            mouseover: function () {
              layer.setStyle({
                weight: 5.5,
                color: "#ffffff",
                fillOpacity: 0.75,
                dashArray: ""
              });
            },
            mouseout: function () {
              if (selectedLayer !== layer) {
                layer.setStyle({
                  weight: 1.5,
                  color: "#008080",
                  fillColor: "#00cccc",
                  fillOpacity: 0.5
                });
              }
            },
          click: function () {
            if (selectedLayer) {
              selectedLayer.setStyle({
                color: "#008080",
                weight: 1.5,
                fillColor: "#00cccc",
                fillOpacity: 0.5
              });
            }
      
            layer.setStyle({
                color: "#ffffff",          // white outline
                weight: 4,                 // thicker border
                fillColor: "#ffcc00",      // bright yellow fill
                fillOpacity: 0.8           // bolder fill
              });

              document.getElementById("resetButton").addEventListener("click", function () {
                // Reset map view to Houston center
                map.setView([29.7604, -95.3698], 10);
              
                // Clear info panel text
                document.getElementById("details").innerHTML = `<strong>Click on a neighborhood to see demographics</strong>`;
              
                // Clear dropdown selection
                document.getElementById("neighborhoodSelect").value = "";
              
                // Clear highlight if any
                if (selectedLayer) {
                  selectedLayer.setStyle({
                    color: "#008080",
                    weight: 1.5,
                    fillColor: "#00cccc",
                    fillOpacity: 0.5
                  });
                  selectedLayer = null;
                }
              });
              
              
      
            selectedLayer = layer;
      
            const data = demographics[name];
            document.getElementById("neighborhoodSelect").value = name;

            document.getElementById("details").innerHTML = data
              ? `<h3>${name}</h3>
                 <p><strong>Population:</strong> ${data.population}</p>
                 <p><strong>Median Income:</strong> ${data.medianIncome}</p>
                 <p><strong>Education:</strong> ${data.education}</p>`
              : `<h3>${name}</h3><p>Demographic data not available.</p>`;
          }
          

        });
      }
      


    }).addTo(map);

    document.getElementById("neighborhoodSelect").addEventListener("change", function () {
        const selectedName = this.value;
      
        geojsonLayer.eachLayer(layer => {
          if (layer.feature.properties.name === selectedName) {
            map.fitBounds(layer.getBounds());      // 🔍 Zoom to that shape
            layer.fire("click");                   // 🟡 Trigger click (highlights + info)
          }
        });
      });
      
    
      
      document.getElementById("openGuideBtn").addEventListener("click", function () {
  document.getElementById("guidePopup").classList.remove("hidden");
});

document.getElementById("closeGuideBtn").addEventListener("click", function () {
  document.getElementById("guidePopup").classList.add("hidden");
});

// Optional: Click outside to close
document.getElementById("guidePopup").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.add("hidden");
  }
});

  
    });

  
