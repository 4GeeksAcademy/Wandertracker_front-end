import React from "react";
//import "./App.css";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import PropTypes from "prop-types";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const SimpleMap = ({ markers }) => {
	return (
		<div>
			<ComposableMap>
				<Geographies geography={geoUrl}>
					{({ geographies }) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)}
				</Geographies>
				{markers.map((marker, index) => (
					<Marker key={index} coordinates={[marker[1], marker[0]]}>
						<g
							fill="none"
							stroke="#FF5533"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							transform="translate(-12, -24)">
							<circle cx="12" cy="10" r="3" />
							<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
						</g>
					</Marker>
				))}
			</ComposableMap>
		</div>
	);
};

SimpleMap.propTypes = {
	markers: PropTypes.array
};
