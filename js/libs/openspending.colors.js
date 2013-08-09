/*! openspending.colors.js - Color palettes for OpenSpending
 * ------------------------------------------------------------------------
 *
 * Copyright 2013 Open Knowledge Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Define OpenSpending object (if used as a separate module)
var OpenSpending = OpenSpending || {};
// Define Colors property
OpenSpending.Colors = OpenSpending.Colors || {};

// Default color palette for openspendingjs
OpenSpending.Colors.DefaultPalette = ["#CA221D", "#C22769", "#3F93E1", 
				      "#481B79", "#6AAC32", "#42928F",
				      "#D32645", "#CD531C", "#EDC92D",
				      "#A5B425", "#211D79", "#449256",
				      "#7A2077", "#CA221D", "#E29826",
				      "#44913D", "#2458A3", "#2458A3",
				      "#14388C"];

OpenSpending.Colors.Cofog = { '01': '#C75746', '02': '#0AB971',
			      '03': '#EC2406', '04': '#790586', 
			      '05': '#2A3A03', '06': '#D33673',		
			      '07': '#4E6D00', '08': '#938626',
			      '09': '#EDC92D', '10': '#935B3B'	
			    };

OpenSpending.Colors.DefaultPalette.getColor = function(index, skip) {
    // getColor fetches the color of the index from an wrap around version
    // of the default palette (using modulo)
    var palette = this.slice(0);

    if (skip) {
	var idx = palette.indexOf(skip.toUpperCase()); // Find the index
	if(idx !== -1) palette.splice(idx, 1); // Remove it if really found!
    }

    return palette[index % (palette.length)];
};

OpenSpending.Colors.Cofog.getColor = function(code) {
    var top_level = code.substr(0,2);
    return this[top_level] || '#424242';
};
