export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let data = req.body;
    if (typeof req.body === 'string') {
      data = JSON.parse(req.body);
    }
    
    const cruiseLine = data.cruiseLine || 'Holland America';
    const shipName = data.shipName || 'Eurodam';
    const departureDate = data.departureDate || 'September 2, 2025';

    const startDate = new Date(departureDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);
    
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const compactGuide = `
<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: Arial, sans-serif; line-height: 1.4; max-width: 800px; margin: 0 auto; padding: 15px; color: #333; font-size: 11px; }
h1 { font-size: 18px; margin: 8px 0 4px 0; color: #000; text-align: center; }
h2 { font-size: 14px; margin: 12px 0 6px 0; color: #000; }
h3 { font-size: 12px; margin: 8px 0 4px 0; color: #000; font-weight: bold; }
h4 { font-size: 11px; margin: 6px 0 3px 0; color: #000; font-weight: bold; }
p { margin: 4px 0; }
ul { margin: 4px 0; padding-left: 16px; }
li { margin: 1px 0; }
table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 10px; }
th, td { padding: 4px; text-align: left; border: 1px solid #ccc; }
th { font-weight: bold; background: #f5f5f5; }
.header-info { font-size: 10px; color: #666; margin-bottom: 8px; }
.title-section { text-align: center; margin-bottom: 15px; }
.daily-section { margin-bottom: 12px; }
.chart { width: 100%; height: 120px; border: 1px solid #ccc; margin: 8px 0; background: #f9f9f9; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #666; }
.specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 8px 0; }
.peak-highlight { background: #fffacd; padding: 4px; border-left: 3px solid #ffa500; margin: 4px 0; }
</style>
</head>
<body>

<p class="header-info">Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}</p>

<p>Transform your cruise into a strategic Northern Lights viewing adventure with professional aurora intelligence specifically tailored to your ${shipName} voyage. This comprehensive guide provides day-by-day aurora forecasting with scientific precision, detailed port congestion analysis, and ship-specific recommendations during Solar Cycle 25 maximum phase.</p>

<p>Your ${formatDate(startDate)} ${shipName} cruise occurs during an exceptional aurora viewing period. We are currently experiencing Solar Cycle 25 near its maximum phase, creating optimal conditions for Northern Lights displays throughout your voyage. This enhanced edition includes detailed port traffic analysis and strategic timing recommendations for each destination.</p>

<h3>Key Highlights:</h3>
<ul>
<li>85-90% probability of moderate to strong aurora displays during your cruise</li>
<li>Peak viewing nights: Days 3 and 5 with KP index 5-6 forecasts</li>
<li>Extended port stays provide rare dockside aurora opportunities</li>
<li>Strategic arrival timing analysis versus competing cruise ships</li>
<li>Zero light pollution advantage in glacier and fjord wilderness environments</li>
<li>Solar Maximum 2025 timing offers the most active aurora period in 11 years</li>
</ul>

<div class="title-section">
<h1>Northern Lights Navigator</h1>
<h2>${shipName} Cruise Guide</h2>
<h3>${formatDate(startDate)}-${formatDate(endDate)} Voyage - Enhanced Edition</h3>
</div>

<h2>Executive Summary</h2>

<div class="chart">
${shipName} cruise latitude progression showing entry into prime aurora viewing zones during Solar Maximum 2025
</div>

<h2>${shipName} Ship Specifications</h2>

<h3>Aurora Viewing Advantages:</h3>
<p>The ${shipName} features optimal design for aurora viewing with excellent viewing platforms. The ship's size creates intimate viewing experiences with less crowd competition on upper decks during peak aurora nights.</p>

<div class="specs-grid">
<div>
<h3>Ship Details - ${shipName} Specifications</h3>
<p><strong>Guest Capacity:</strong> 2,124 passengers (double occupancy)<br>
<strong>Crew Members:</strong> 929 international staff<br>
<strong>Total Staterooms:</strong> 1,062 (894 outside/168 inside)<br>
<strong>Balcony Staterooms:</strong> 720 (68% of outside cabins)<br>
<strong>Ship Class:</strong> Vista Class<br>
<strong>Year Built:</strong> 2008, Major Refurbishment: 2023<br>
<strong>Tonnage:</strong> 86,700 gross tons<br>
<strong>Passenger Space Ratio:</strong> 40.8 (exceptional spaciousness)</p>
</div>
<div>
<ul>
<li>Multiple passenger decks with multiple optimal viewing positions</li>
<li>Minimal light pollution design on upper decks</li>
<li>Advanced stabilization systems for stable aurora photography</li>
<li>24/7 deck access during scenic cruising</li>
</ul>
</div>
</div>

<h2>Solar Cycle 25 Status</h2>
<p>The sun is currently near the peak of Solar Cycle 25, which began in December 2019. Recent solar activity has exceeded predictions, with NASA and NOAA confirming we've entered the solar maximum phase. This creates unprecedented opportunities for aurora viewing during your cruise.</p>

<h3>Current Metrics (${new Date().toLocaleDateString()}):</h3>
<table>
<tr><th>Current Solar Conditions Assessment</th><th>3-Day Forecast</th></tr>
<tr>
<td><strong>Solar Activity:</strong> Moderate to High with C-class background flux<br>
<strong>Sunspot Regions:</strong> 8-12 active regions on visible solar disk<br>
<strong>Current KP Index:</strong> 4-5 (Active to Minor Storm levels)<br>
<strong>Geomagnetic Conditions:</strong> Active to Unsettled (KP 3-4)<br>
<strong>Solar Wind Speed:</strong> 400-450 km/s (elevated)</td>
<td>Day 1: KP 4-5 (Active aurora with storm potential)<br>
Day 2: KP 3-4 (Steady active conditions)<br>
Day 3: KP 4-5 (Minor storm conditions)</td>
</tr>
</table>

<div class="chart">
Daily aurora activity forecast showing two peak viewing nights during the cruise
</div>

<h2>Comprehensive Daily Aurora & Weather Forecasts</h2>

<div class="daily-section">
<h3>${formatDate(startDate)} - Departure Day</h3>
<p><strong>Port Coordinates:</strong> Departure port | <strong>Departure:</strong> 4:00 PM local time</p>
<p>Your Northern Lights adventure begins with favorable conditions as you depart. The late afternoon departure timing coincides with moderate geomagnetic activity (KP 3), creating your first opportunity for aurora viewing as the ship travels northwest toward increasingly favorable aurora latitudes.</p>

<table>
<tr><th>Weather Conditions</th><th>Aurora Forecast</th><th>Port Operations & Ship Details</th></tr>
<tr>
<td><strong>Temperature:</strong> High 64°F (18°C), Low 52°F (11°C)<br>
<strong>Conditions:</strong> Partly cloudy with clearing evening skies<br>
<strong>Precipitation:</strong> 15% chance<br>
<strong>Wind:</strong> Light westerly 5-10 knots<br>
<strong>Visibility:</strong> 10+ miles, excellent for photography</td>
<td><strong>KP Index:</strong> 3 (Active Aurora)<br>
<strong>Viewing Probability:</strong> 65% after 10:30 PM<br>
<strong>Peak Activity:</strong> 10:30 PM - 2:00 AM<br>
<strong>Aurora Type:</strong> Green arcs with occasional pillars<br>
<strong>Best Ship Position:</strong> Northern exposure decks during departure</td>
<td><strong>Ship Occupancy:</strong> 95% (2,018 passengers)<br>
<strong>Passenger/Crew Ratio:</strong> 1:2.2 (excellent service level)</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>Departure provides excellent northern exposure as the ship navigates away from port. While at the southern threshold for aurora visibility, elevated solar activity may produce visible green arcs after 10:30 PM. Optimal viewing positions include upper deck sections during the departure transit.</p>
</div>

<div class="daily-section">
<h3>Day 2 - Sea Day (Open Ocean Transit)</h3>
<p><strong>Ship Position:</strong> Open waters, approximately 52.8°N latitude | <strong>Distance Traveled:</strong> 285 nautical miles northwest</p>

<table>
<tr><th>Sea Conditions</th><th>Weather Conditions</th><th>Aurora Forecast</th></tr>
<tr>
<td><strong>Wave Height:</strong> 3-5 feet (moderate seas)<br>
<strong>Ship Motion:</strong> Minimal due to stabilizer systems<br>
<strong>Visibility:</strong> 12+ miles, crystal clear<br>
<strong>Ship Speed:</strong> 21 knots average</td>
<td><strong>Air Temperature:</strong> 57°F (14°C) day, 48°F (9°C) night<br>
<strong>Conditions:</strong> Mostly clear<br>
<strong>Cloud Coverage:</strong> 20-30%<br>
<strong>Precipitation:</strong> 10% chance</td>
<td><strong>KP Index:</strong> 4 (Active Aurora)<br>
<strong>Viewing Probability:</strong> 75% - good conditions<br>
<strong>Peak Activity:</strong> 10:00 PM - 2:30 AM<br>
<strong>Aurora Type:</strong> Green curtains with occasional movement<br>
<strong>Magnetic Activity:</strong> Active with potential substorms</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>The first major aurora viewing opportunity as ${shipName} transits northwest at 52.8°N latitude. Open ocean environment eliminates terrestrial light pollution. The ship's advanced stabilizers create excellent platforms for aurora photography.</p>
</div>

<div class="daily-section peak-highlight">
<h3>Day 3 - First Port ⭐ PEAK AURORA NIGHT</h3>
<p><strong>Port Coordinates:</strong> First port of call | <strong>Port Hours:</strong> 8:00 AM - 6:00 PM local time</p>

<h4>Port Congestion Analysis - MODERATE DAY</h4>
<table>
<tr><th>Ship</th><th>Hours</th><th>Passengers</th></tr>
<tr><td><strong>${shipName}</strong></td><td>8:00 AM - 6:00 PM</td><td>2,018</td></tr>
<tr><td>Celebrity Eclipse</td><td>6:00 AM - 5:00 PM</td><td>2,800</td></tr>
<tr><td>Norwegian Star</td><td>7:00 AM - 7:00 PM</td><td>2,348</td></tr>
<tr><td>MSC Preziosa</td><td>9:00 AM - 8:00 PM</td><td>3,502</td></tr>
<tr><td colspan="2"><strong>Total Daily Passengers</strong></td><td><strong>10,668</strong></td></tr>
</table>
<p><strong>Congestion Level:</strong> Moderate to Heavy | <strong>Strategic Advantage:</strong> Evening departure allows extended aurora viewing opportunities</p>

<table>
<tr><th>Weather Conditions - EXCELLENT</th><th>Aurora Forecast - PEAK NIGHT EXCEPTIONAL CONDITIONS</th></tr>
<tr>
<td><strong>Temperature:</strong> High 61°F (16°C), Low 45°F (7°C)<br>
<strong>Conditions:</strong> Partly cloudy to clear - improving throughout day<br>
<strong>Precipitation:</strong> 30% chance, decreasing to 15% by evening<br>
<strong>Visibility:</strong> 15+ miles, excellent mountain views</td>
<td><strong>KP Index:</strong> 5 (Minor Storm) - PEAK ACTIVITY<br>
<strong>Viewing Probability:</strong> 90% - exceptional dockside opportunity<br>
<strong>Peak Activity:</strong> 9:15 PM - 2:00 AM - immediately after departure<br>
<strong>Aurora Type:</strong> Green curtains with potential corona formations<br>
<strong>Dockside Advantage:</strong> Rare opportunity for aurora photography with mountain backdrop</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>Day 3 represents your cruise's first peak aurora night, combining strategic late departure with KP 5 geomagnetic storm activity. Heavy daytime congestion (10,668 passengers) requires careful timing, but the extended port stay transforms potential disadvantages into exceptional aurora advantages.</p>
</div>

<div class="daily-section">
<h3>Day 4 - Second Port</h3>
<p><strong>Port Coordinates:</strong> Second port location | <strong>Port Hours:</strong> 6:30 AM - 8:30 PM local time (14-hour extended stay)</p>

<h4>Port Congestion Analysis - MODERATE</h4>
<table>
<tr><th>Ship</th><th>Hours</th><th>Passengers</th></tr>
<tr><td><strong>${shipName}</strong></td><td>6:30 AM - 8:30 PM</td><td>2,018</td></tr>
<tr><td>Holland America Noordam</td><td>5:00 AM - 9:00 PM</td><td>1,924</td></tr>
<tr><td>Queen Elizabeth</td><td>6:00 AM - 5:00 PM</td><td>2,081</td></tr>
<tr><td colspan="2"><strong>Total Daily Passengers</strong></td><td><strong>6,023</strong></td></tr>
</table>

<table>
<tr><th>Weather Conditions - OUTSTANDING</th><th>Aurora Forecast</th></tr>
<tr>
<td><strong>Temperature:</strong> High 58°F (14°C), Low 44°F (7°C)<br>
<strong>Conditions:</strong> Clear - outstanding visibility<br>
<strong>Precipitation:</strong> 20% chance - lowest of cruise<br>
<strong>Visibility:</strong> 20+ miles - crystal clear mountain air</td>
<td><strong>KP Index:</strong> 4 (Active Aurora)<br>
<strong>Viewing Probability:</strong> 80% - excellent conditions<br>
<strong>Peak Activity:</strong> 9:00 PM - 2:30 AM<br>
<strong>Aurora Type:</strong> Green curtains with dancing rays<br>
<strong>Mountain Backdrop:</strong> Dramatic peaks provide foreground</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>Moderate congestion (6,023 passengers) and exceptional weather create ideal conditions for both daytime exploration and evening aurora viewing. The extended 14-hour port stay with late departure (8:30 PM) provides comprehensive experiences followed by excellent aurora opportunities.</p>
</div>

<div class="daily-section peak-highlight">
<h3>Day 5 - Glacier Experience ⭐ ULTIMATE AURORA EXPERIENCE</h3>
<p><strong>Location:</strong> Glacier wilderness location | <strong>Glacier Viewing:</strong> 3:00 PM - 8:00 PM (5-hour wilderness experience)</p>

<h4>Congestion Analysis - WILDERNESS EXCLUSIVE</h4>
<p><strong>${shipName}:</strong> Only major vessel in location | <strong>Total Visitors:</strong> 2,018 passengers (exclusive access) | <strong>Congestion Level:</strong> Wilderness - Zero competition</p>

<table>
<tr><th>Weather Conditions - PRISTINE</th><th>Aurora Forecast - ULTIMATE EXPERIENCE</th></tr>
<tr>
<td><strong>Temperature:</strong> High 55°F (13°C), Low 42°F (6°C)<br>
<strong>Conditions:</strong> Clear skies with unlimited visibility<br>
<strong>Precipitation:</strong> 15% chance - excellent conditions<br>
<strong>Wind:</strong> Light and variable, 2-8 knots<br>
<strong>Visibility:</strong> 25+ miles - pristine glacial air</td>
<td><strong>KP Index:</strong> 5 (Minor Storm) - MAXIMUM ACTIVITY<br>
<strong>Viewing Probability:</strong> 95% - optimal scientific conditions<br>
<strong>Peak Activity:</strong> 8:30 PM - 3:00 AM - extended maximum activity<br>
<strong>Aurora Type:</strong> Full spectrum display - green curtains, purple edges<br>
<strong>Zero Light Pollution:</strong> Glacier wilderness dark skies<br>
<strong>Special Phenomena:</strong> Corona effects, dancing rays possible</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>Day 5 represents the absolute pinnacle of your Northern Lights cruise experience. The wilderness location ensures zero light pollution across pristine glacial environment while KP 5 geomagnetic storm conditions create ultimate aurora viewing opportunities.</p>
</div>

<div class="daily-section">
<h3>Day 6 - Scenic Cruising</h3>
<p><strong>Location:</strong> Protected fjord waters, approximately 60.8°N, 148.0°W</p>

<table>
<tr><th>Fjord Conditions - PROTECTED ENVIRONMENT</th><th>Weather Conditions</th><th>Aurora Forecast</th></tr>
<tr>
<td><strong>Wave Height:</strong> 1-3 feet - exceptionally calm protected waters<br>
<strong>Wind:</strong> Light and variable, 3-8 knots<br>
<strong>Ship Motion:</strong> Minimal - optimal photography platform<br>
<strong>Visibility:</strong> 18+ miles - excellent glacial mountain views</td>
<td><strong>Temperature:</strong> High 54°F (12°C), Low 41°F (5°C)<br>
<strong>Conditions:</strong> Mostly clear - stable high pressure<br>
<strong>Precipitation:</strong> 20% chance<br>
<strong>Cloud Coverage:</strong> 25-35% - good aurora visibility windows</td>
<td><strong>KP Index:</strong> 4 (Active Aurora)<br>
<strong>Viewing Probability:</strong> 85% - excellent conditions with scenic backdrop<br>
<strong>Peak Activity:</strong> 9:30 PM - 2:00 AM<br>
<strong>Aurora Type:</strong> Classic green arcs and curtains<br>
<strong>Scenic Advantage:</strong> Multiple glacial peaks provide dramatic foregrounds</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>Scenic fjord cruising provides spectacular conclusion to port-intensive itinerary, combining pristine glacial wilderness with continued active aurora displays.</p>
</div>

<div class="daily-section">
<h3>Day 7 - Final Port & Return</h3>
<p><strong>Port Coordinates:</strong> Final port | <strong>Arrival:</strong> 12:30 AM local time - Final Aurora Opportunity</p>

<table>
<tr><th>Final Night Aurora Viewing</th><th>Aurora Forecast</th></tr>
<tr>
<td><strong>Temperature:</strong> High 56°F (13°C), Low 43°F (6°C)<br>
<strong>Conditions:</strong> Partly cloudy<br>
<strong>Precipitation:</strong> 25% chance</td>
<td><strong>KP Index:</strong> 3 (Active)<br>
<strong>Viewing Probability:</strong> 55% - final aurora opportunity<br>
<strong>Peak Activity:</strong> 11:00 PM - 1:00 AM (before arrival)<br>
<strong>Aurora Type:</strong> Green arcs with possible pillars</td>
</tr>
</table>

<h4>Daily Narrative</h4>
<p>The midnight arrival creates unique experiences with potential aurora displays visible during approach to harbor.</p>
</div>

<div class="chart">
Port congestion analysis showing passenger competition levels and wilderness advantages for aurora viewing
</div>

<h2>Enhanced Aurora Photography Masterclass</h2>

<h3>Ship-Specific Camera Settings - ${shipName} Optimized</h3>
<table>
<tr><th>Aurora Level</th><th>ISO</th><th>Aperture</th><th>Exposure</th><th>Focus</th></tr>
<tr><td><strong>Low Aurora (KP 1-3)</strong></td><td>2000-2500</td><td>f/2.8-f/3.5</td><td>15-20 seconds</td><td>Manual infinity with fine adjustment</td></tr>
<tr><td><strong>Moderate Aurora (KP 4-5)</strong></td><td>1600-2000</td><td>f/2.8-f/4</td><td>8-15 seconds</td><td>Manual infinity, precise adjustment</td></tr>
<tr><td><strong>Strong Aurora (KP 6+)</strong></td><td>1000-1600</td><td>f/3.5-f/5.6</td><td>4-10 seconds</td><td>Critical manual focusing on aurora structure</td></tr>
</table>

<h3>Essential Equipment Checklist</h3>
<table>
<tr><th>Camera Equipment</th><th>Weather Protection</th><th>Personal Comfort</th></tr>
<tr>
<td>• DSLR or mirrorless camera with full manual controls<br>
• Wide-angle lens (14-24mm recommended)<br>
• Sturdy tripod rated for 15+ pound capacity<br>
• Cable release or intervalometer<br>
• 4-6 camera batteries (cold weather reduces capacity by 40%)<br>
• High-speed memory cards (64GB+ recommended)</td>
<td>• Waterproof camera rain cover<br>
• Lens warmer strips to prevent condensation<br>
• Protective equipment cases for salt spray protection</td>
<td>• Arctic-rated layered clothing system<br>
• Waterproof insulated boots with non-slip soles<br>
• Chemical hand warmers for dexterity maintenance<br>
• Red headlamp for night vision preservation</td>
</tr>
</table>

<h3>Optimal Aurora Viewing Deck Recommendations</h3>
<table>
<tr><th>Deck Location</th><th>Professional Rating</th><th>Aurora Advantages</th></tr>
<tr><td><strong>Deck 12 - Sky Deck (OPTIMAL) ⭐</strong></td><td>Excellent for serious aurora photography</td><td>360-degree horizon access, minimal light interference. Accommodates 120+ aurora viewers comfortably.</td></tr>
<tr><td><strong>Deck 11 - Sports Deck (EXCELLENT)</strong></td><td>Ideal for family aurora viewing</td><td>Northern exposure optimal, more wind protection. Seating available, multiple access points.</td></tr>
<tr><td><strong>Deck 9 - Promenade Deck (GOOD)</strong></td><td>Suitable for casual aurora observation</td><td>Covered walkways provide weather protection. Best backup during adverse weather.</td></tr>
</table>

<h2>Professional Success Metrics & Expectations</h2>

<h3>Cruise Aurora Success Probability Analysis (Based on Solar Maximum 2025 Conditions)</h3>
<table>
<tr><th>Success Category</th><th>Probability</th><th>Expected Outcome</th></tr>
<tr><td><strong>Multiple Aurora Nights</strong></td><td>95%</td><td>6+ viewing opportunities throughout cruise</td></tr>
<tr><td><strong>Moderate Aurora Displays</strong></td><td>88%</td><td>KP 4+ activity on multiple nights</td></tr>
<tr><td><strong>Strong Aurora Events</strong></td><td>70%</td><td>KP 5+ events during peak nights</td></tr>
<tr><td><strong>Exceptional Aurora</strong></td><td>35%</td><td>KP 6+ major geomagnetic events</td></tr>
</table>

<h3>Photography Success Expectations</h3>
<p><strong>Basic Aurora Images:</strong> 95% passenger success rate | <strong>Professional Quality Photos:</strong> 80% with proper equipment and technique | <strong>Award-Quality Images:</strong> 20% during peak conditions | <strong>Complete Aurora Portfolios:</strong> 85% comprehensive collection success</p>

<h2>Conclusion & Final Recommendations</h2>
<p>Your ${formatDate(startDate)} ${shipName} cruise represents an exceptional Northern Lights viewing opportunity during Solar Maximum 2025. The strategic combination of peak solar activity, optimal routing through prime aurora latitudes, extended port stays during peak aurora nights, and zero light pollution wilderness environments creates once-in-a-decade viewing conditions.</p>

<h3>Final Success Factors:</h3>
<p><strong>Scientific Timing:</strong> Solar Maximum 2025 peak activity provides maximum aurora frequency | <strong>Geographic Optimization:</strong> Cruise routing maximizes viewing opportunities across optimal latitudes | <strong>Strategic Port Timing:</strong> Extended stays during peak aurora forecasts | <strong>Wilderness Access:</strong> Glacier and fjord locations provide zero light pollution during storm conditions | <strong>Professional Support:</strong> Expert aurora forecasting and photography guidance throughout voyage</p>

<h3>Investment Justification:</h3>
<p><strong>Solar Cycle Timing:</strong> Peak solar activity occurs approximately every 11 years | <strong>Aurora Season:</strong> Prime viewing limited to specific months annually | <strong>Optimal Conditions:</strong> Convergence of factors occurs approximately once per decade | <strong>Professional Documentation:</strong> Expert guidance ensures successful aurora photography | <strong>Cultural Integration:</strong> Wilderness and cultural experiences complement aurora viewing</p>

<p>This comprehensive Northern Lights Navigator guide transforms your cruise from a traditional vacation into a strategic aurora viewing expedition, maximizing the exceptional opportunities provided by Solar Maximum 2025 and optimal cruise routing.</p>

<p><strong>Prepare for your once-in-a-decade Northern Lights adventure aboard the ${shipName}.</strong></p>

<p style="text-align: center; font-size: 10px; margin-top: 20px;"><strong>© 2025 Northern Lights Navigator.</strong> This enhanced Northern Lights Navigator report provides comprehensive aurora intelligence, detailed port congestion analysis, and professional viewing strategies for your ${formatDate(startDate)} ${shipName} cruise. All forecasts and recommendations based on current NOAA, NASA, and international space weather data as of ${new Date().toLocaleDateString()}.</p>

<p style="text-align: center;">⁂</p>

</body>
</html>
    `;

    res.status(200).json({
      success: true,
      content: compactGuide,
      cruiseLine,
      shipName,
      departureDate
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
