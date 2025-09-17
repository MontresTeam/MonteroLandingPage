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
    coordinates: [1.4316, 38.9067],
    image: IbizaBeach,
  },
  {
    name: "Jumeirah Beach",
    description: "Dubai, UAE",
    coordinates: [55.1375, 25.1413],
    image: JumeirahBeach,
  },
  {
    name: "Patong Beach",
    description: "Phuket, Thailand",
    coordinates: [98.2950, 7.8906],
    image: PatongBeach,
  },
  {
    name: "Bali Beach",
    description: "Island of Gods, Indonesia",
    coordinates: [115.0920, -8.8072],
    image: BaliBeach,
  },
  {
    name: "Madeira Beach",
    description: "Portugal",
    coordinates: [-16.9579, 32.7607],
    image: MadeiraBeach,
  },
  {
    name: "Cuba Cabana Beach",
    description: "Havana, Cuba",
    coordinates: [-82.3666, 23.1353],
    image: CubaCabanaBeach,
  },
  {
    name: "Miami Beach",
    description: "Florida, USA",
    coordinates: [-80.1300, 25.7907],
    image: MiamiBeach,
  },
  {
    name: "Bora Bora Beach",
    description: "French Polynesia",
    coordinates: [-151.7420, -16.5004],
    image: BoraBoraBeach,
  },
];

const BeachInspiration = () => {
  const [selected, setSelected] = useState(beaches[0]); // Set first beach as default
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [worldData, setWorldData] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const mapRef = useRef();
  const tooltipRef = useRef();
  const svgRef = useRef();
  const projectionRef = useRef();

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    const height = windowSize.width < 768 ? 400 : 600;
    
    // Clear previous SVG
    d3.select(mapRef.current).selectAll("*").remove();
    
    // Create SVG
    const svg = d3.select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    
    // Store SVG reference
    svgRef.current = svg;
    
    // Create projection with responsive scaling
    const scale = windowSize.width < 768 ? width / 8 : width / 6.5;
    const projection = d3.geoMercator()
      .scale(scale)
      .center([0, 20])
      .translate([width / 2, height / 2]);
    
    // Store projection reference
    projectionRef.current = projection;
    
    // Create path generator
    const path = d3.geoPath().projection(projection);
    
    // Convert TopoJSON to GeoJSON
    const countries = topojson.feature(worldData, worldData.objects.countries);
    
    // Draw ocean background
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#E6F6FF")
      .lower();
    
    // Draw countries with the specified blue color
    svg.append("g")
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#cfe9f5")
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5);
    
    // Draw beach markers with responsive size
    const markerSize = windowSize.width < 768 ? 4 : 6;
    const markers = svg.selectAll("circle")
      .data(beaches)
      .enter()
      .append("circle")
      .attr("cx", d => projection(d.coordinates)[0])
      .attr("cy", d => projection(d.coordinates)[1])
      .attr("r", markerSize)
      .attr("fill", d => selected && selected.name === d.name ? "#FF6B6B" : "#4ECDC4")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        // Calculate position for the card
        const [x, y] = projection(d.coordinates);
        setCardPosition({ x, y });
        setSelected(d);
        setIsCardVisible(true);
      })
      .on("touchstart", (event, d) => {
        // Prevent default to avoid scrolling when touching markers
        event.preventDefault();
        const [x, y] = projection(d.coordinates);
        setCardPosition({ x, y });
        setSelected(d);
        setIsCardVisible(true);
      })
      .on("mouseover", (event, d) => {
        // Only show tooltip on non-touch devices
        if (windowSize.width >= 768) {
          d3.select(tooltipRef.current)
            .style("opacity", 1)
            .html(`${d.name}<br>${d.description}`)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`);
        }
      })
      .on("mouseout", () => {
        // Hide tooltip
        d3.select(tooltipRef.current).style("opacity", 0);
      });
    
    // Add zoom functionality for non-mobile devices
    if (windowSize.width >= 768) {
      const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", (event) => {
          svg.selectAll("path").attr("transform", event.transform);
          svg.selectAll("circle").attr("transform", event.transform);
        });
      
      svg.call(zoom);
    }
    
    // Set initial card position for the default selected beach
    if (selected) {
      const [x, y] = projection(selected.coordinates);
      setCardPosition({ x, y });
    }
    
  }, [worldData, windowSize]);

  // Update marker colors when selected beach changes
  useEffect(() => {
    if (!svgRef.current) return;
    
    const markerSize = windowSize.width < 768 ? 4 : 6;
    svgRef.current.selectAll("circle")
      .attr("r", markerSize)
      .attr("fill", d => selected && selected.name === d.name ? "#FF6B6B" : "#4ECDC4");
  }, [selected, windowSize]);

  // Handle zoom changes to update card position
  useEffect(() => {
    if (!selected || !projectionRef.current) return;
    
    const updateCardPosition = () => {
      const [x, y] = projectionRef.current(selected.coordinates);
      setCardPosition({ x, y });
    };
    
    // Update position when zooming/panning
    if (svgRef.current && windowSize.width >= 768) {
      svgRef.current.on("zoom", updateCardPosition);
    }
    
    return () => {
      if (svgRef.current) {
        svgRef.current.on("zoom", null);
      }
    };
  }, [selected, windowSize]);

  // Handle card positioning on mobile
  useEffect(() => {
    if (!selected || !projectionRef.current || !mapRef.current) return;
    
    const [x, y] = projectionRef.current(selected.coordinates);
    setCardPosition({ x, y });
  }, [windowSize, selected]);

  return (
    <div className="flex flex-col items-center bg-[#E6F6FF] min-h-screen p-4 sm:p-6">
      {/* Heading */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-gray-700 text-lg sm:text-xl font-medium pb-2 border-b w-full text-center">
          Inspired by 8 Iconic Beaches Around the World
        </h2>
      </div>

      <div className="relative w-full max-w-6xl">
        {/* World Map Container */}
        <div 
          ref={mapRef} 
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-[#E6F6FF] rounded-lg overflow-hidden"
        ></div>
        
        {/* Tooltip - Only show on larger screens */}
        <div 
          ref={tooltipRef}
          className="absolute bg-white px-3 py-1 rounded shadow-md text-sm pointer-events-none opacity-0 transition-opacity hidden md:block"
        ></div>

        {/* Beach Card - positioned at marker */}
        {selected && isCardVisible && (
          <div 
            className={`absolute bg-white rounded-xl shadow-lg p-3 sm:p-4 ${
              windowSize.width < 640 ? 'w-56' : 'w-72'
            } transition-all duration-300`}
            style={{
              left: `${cardPosition.x}px`,
              top: `${cardPosition.y}px`,
              transform: 'translate(-50%, -100%) translateY(-15px)',
              zIndex: 10
            }}
          >
            <Image
              src={selected.image}
              alt={selected.name}
              width={280}
              height={160}
              className="rounded-lg w-full h-32 sm:h-40 object-cover"
            />
            <div className="mt-2 sm:mt-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{selected.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{selected.description}</p>
            </div>
            {/* Close button for mobile */}
            {windowSize.width < 768 && (
              <button 
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                onClick={() => setIsCardVisible(false)}
                aria-label="Close beach information"
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* Beach selector for mobile */}
       
      </div>
    </div>
  );
};

export default BeachInspiration;