"use client";
import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import Image from "next/image";

// Import beach images
import IbizaBeach from "../../../public/beaches/IbizaBeach.jpg";
import BoraBoraBeach from "../../../public/beaches/BoraBoraBeach.jpg";
import BaliBeach from "../../../public/beaches/BaliBeach.jpg";
import JumeirahBeach from "../../../public/beaches/JumeirahBeach.jpg";
import PatongBeach from "../../../public/beaches/PatongBeach.jpg";
import MadeiraBeach from "../../../public/beaches/MadeiraBeach.jpg";
import CubaCabanaBeach from "../../../public/beaches/CubaCabanaBeach.jpg";
import MiamiBeach from "../../../public/beaches/MiamiBeach.jpg";

// Beach Locations with corrected coordinates
const beaches = [
  {
    name: "Ibiza Beach",
    description: "White Island, Spain",
    coordinates: [1.4316, 38.9067], // Corrected: [longitude, latitude] for Ibiza, Spain
    image: IbizaBeach,
  },
  {
    name: "Jumeirah Beach",
    description: "Dubai, UAE",
    coordinates: [55.1375, 25.1413], // Corrected: [longitude, latitude] for Dubai, UAE
    image: JumeirahBeach,
  },
  {
    name: "Patong Beach",
    description: "Phuket, Thailand",
    coordinates: [98.2950, 7.8906], // Corrected: [longitude, latitude] for Phuket, Thailand
    image: PatongBeach,
  },
  {
    name: "Bali Beach",
    description: "Island of Gods, Indonesia",
    coordinates: [115.0920, -8.8072], // Corrected: [longitude, latitude] for Bali, Indonesia
    image: BaliBeach,
  },
  {
    name: "Madeira Beach",
    description: "Portugal",
    coordinates: [-16.9579, 32.7607], // Corrected: [longitude, latitude] for Madeira, Portugal
    image: MadeiraBeach,
  },
  {
    name: "Cuba Cabana Beach",
    description: "Havana, Cuba",
    coordinates: [-82.3666, 23.1353], // Corrected: [longitude, latitude] for Havana, Cuba
    image: CubaCabanaBeach,
  },
  {
    name: "Miami Beach",
    description: "Florida, USA",
    coordinates: [-80.1300, 25.7907], // Corrected: [longitude, latitude] for Miami Beach, USA
    image: MiamiBeach,
  },
  {
    name: "Bora Bora Beach",
    description: "French Polynesia",
    coordinates: [-151.7420, -16.5004], // Corrected: [longitude, latitude] for Bora Bora
    image: BoraBoraBeach,
  },
];

const BeachInspiration = () => {
  const [selected, setSelected] = useState(beaches[0]);
  const [worldData, setWorldData] = useState(null);
  const mapRef = useRef();
  const tooltipRef = useRef();

  // Load world map data
  useEffect(() => {
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then(data => {
        setWorldData(data);
      })
      .catch(error => console.error("Error loading world data:", error));
  }, []);

  // Draw map with D3
  useEffect(() => {
    if (!worldData || !mapRef.current) return;

    const width = mapRef.current.clientWidth;
    const height = 600;
    
    // Clear previous SVG
    d3.select(mapRef.current).selectAll("*").remove();
    
    // Create SVG
    const svg = d3.select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    
    // Create projection
    const projection = d3.geoMercator()
      .scale(width / 6.5)
      .center([0, 20])
      .translate([width / 2, height / 2]);
    
    // Create path generator
    const path = d3.geoPath().projection(projection);
    
    // Convert TopoJSON to GeoJSON
    const countries = topojson.feature(worldData, worldData.objects.countries);
    
    // Draw countries with the specified blue color
    svg.append("g")
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#cfe9f5") // Light blue color for land
      .attr("stroke", "#fff") // White borders
      .attr("stroke-width", 0.5);
    
    // Draw ocean background
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#E6F6FF") // Light blue background for ocean
      .lower(); // Send to back
    
    // Redraw countries on top of ocean
    svg.append("g")
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#cfe9f5")
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5);
    
    // Draw beach markers
    svg.selectAll("circle")
      .data(beaches)
      .enter()
      .append("circle")
      .attr("cx", d => projection(d.coordinates)[0])
      .attr("cy", d => projection(d.coordinates)[1])
      .attr("r", 6)
      .attr("fill", d => selected.name === d.name ? "#FF6B6B" : "#4ECDC4") // Different colors for selected vs unselected
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        setSelected(d);
      })
      .on("mouseover", (event, d) => {
        // Show tooltip
        d3.select(tooltipRef.current)
          .style("opacity", 1)
          .html(`${d.name}<br>${d.description}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        // Hide tooltip
        d3.select(tooltipRef.current).style("opacity", 0);
      });
    
    // Add zoom functionality
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        svg.selectAll("path").attr("transform", event.transform);
        svg.selectAll("circle").attr("transform", event.transform);
      });
    
    svg.call(zoom);
    
  }, [worldData, selected]);

  return (
    <div className="flex flex-col items-center bg-[#E6F6FF] min-h-screen p-6">
      {/* Heading */}
      <h2 className="text-gray-700 text-xl font-medium mb-4 border-b pb-2 w-full text-center">
        Inspired by 8 Iconic Beaches Around the World
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* World Map Container */}
        <div ref={mapRef} className="w-full h-[600px] bg-[#E6F6FF] rounded-lg overflow-hidden"></div>
        
        {/* Tooltip */}
        <div 
          ref={tooltipRef}
          className="absolute bg-white px-3 py-1 rounded shadow-md text-sm pointer-events-none opacity-0 transition-opacity"
        ></div>

        {/* Floating Info Card */}
        {selected && (
          <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 w-72">
            <Image
              src={selected.image}
              alt={selected.name}
              width={280}
              height={160}
              className="rounded-lg w-full h-40 object-cover"
            />
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">{selected.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{selected.description}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Beach Selection Grid */}
      <div className="mt-8 w-full max-w-6xl">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Select a Beach</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {beaches.map(beach => (
            <div 
              key={beach.name}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                selected.name === beach.name ? 'bg-blue-100 border-2 border-blue-400' : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setSelected(beach)}
            >
              <Image
                src={beach.image} 
                alt={beach.name}
                width={200}
                height={96}
                className="w-full h-24 object-cover rounded-md"
              />
              <p className="text-sm font-medium mt-2">{beach.name}</p>
              <p className="text-xs text-gray-500">{beach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeachInspiration;