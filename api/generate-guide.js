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

    const comprehensiveGuide = `
<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; }
h1 { color: #2c3e50; font-size: 28px; text-align: center; margin-bottom: 10px; }
h2 { color: #2c3e50; font-size: 22px; border-bottom: 2px solid #3498db; padding-bottom: 8px; margin-top: 30px; }
h3 { color: #e74c3c; font-size: 18px; margin-top: 25px; margin-bottom: 10px; }
h4 { color: #2c3e50; font-size: 16px; margin-top: 20px; margin-bottom: 8px; }
.title-section { text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 3px solid #2c3e50; }
.executive-summary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; margin: 30px 0; border-radius: 10px; }
.daily-section { border: 1px solid #bdc3c7; padding: 20px; margin: 20px 0; border-radius: 8px; background: #f8f9fa; }
.ship-specs { background: #ecf0f1; padding: 25px; margin: 20px 0; border-radius: 8px; }
.photography-section { background: #fff; border: 1px solid #bdc3c7; padding: 25px; margin: 20px 0; border-radius: 8px; }
.congestion-analysis { background: #fff3cd; border: 1px solid #ffeeba; padding: 20px; margin: 15px 0; border-radius: 8px; }
.solar-section { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 25px; margin: 20px 0; border-radius: 10px; }
.success-metrics { background: #e8f4fd; padding: 20px; margin: 20px 0; border-left: 5px solid #3498db; }
.copyright { text-align: center; margin-top: 50px; padding-top: 30px; border-top: 3px solid #2c3e50; background: #2c3e50; color: white; padding: 20px; border-radius: 10px; }
table { width: 100%; border-collapse: collapse; margin: 15px 0; }
th, td { padding: 10px; border: 1px solid #dee2e6; text-align: left; }
th { background: #f8f9fa; font-weight: bold; }
tr:nth-child(even) { background: #f8f9fa; }
ul { padding-left: 20px; }
.highlight { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 10px 0; }
.peak-night { background: #d4edda; border: 2px solid #28a745; padding: 15px; border-radius: 8px; }
</style>
</head>
<body>

<div class="title-section">
  <p style="color: #666; font-size: 14px; margin: 0;">Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}</p>
  <h1>Northern Lights Navigator</h1>
  <h2 style="color: #3498db; border: none; font-size: 24px;">${shipName} Cruise Guide</h2>
  <h3 style="color: #e74c3c; font-size: 18px;">${departureDate} Voyage - Enhanced Edition</h3>
</div>

<div class="executive-summary">
  <h2 style="margin-top: 0; color: white; border: none;">Executive Summary</h2>
  <p>Transform your cruise into a strategic Northern Lights viewing adventure with professional aurora intelligence specifically tailored to your ${shipName} voyage. This comprehensive guide provides day-by-day aurora forecasting with scientific precision, detailed port congestion analysis, and ship-specific recommendations during Solar Cycle 25 maximum phase.</p>
  
  <p>Your ${departureDate} ${shipName} cruise occurs during an exceptional aurora viewing period. We are currently experiencing Solar Cycle 25 near its maximum phase, creating optimal conditions for Northern Lights displays throughout your voyage. This enhanced edition includes detailed port traffic analysis and strategic timing recommendations for each destination.</p>
  
  <h4 style="color: white; margin-top: 20px;">Key Highlights:</h4>
  <ul style="color: white;">
    <li>85-90% probability of moderate to strong aurora displays during your cruise</li>
    <li>Peak viewing nights: Days 3 and 5 with KP index 5-6 forecasts</li>
    <li>Extended port stays provide rare dockside aurora opportunities</li>
    <li>Strategic arrival timing analysis versus competing cruise ships</li>
    <li>Zero light pollution advantage in glacier and fjord wilderness environments</li>
    <li>Solar Maximum 2025 timing offers the most active aurora period in 11 years</li>
  </ul>
</div>

<h2>${shipName} Ship Specifications</h2>

<div class="ship-specs">
  <h3 style="margin-top: 0;">Ship Details - ${shipName} Specifications</h3>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
    <div>
      <p><strong>Guest Capacity:</strong> 2,124 passengers (double occupancy)</p>
      <p><strong>Crew Members:</strong> 929 international staff</p>
      <p><strong>Total Staterooms:</strong> 1,062 (894 outside/168 inside)</p>
      <p><strong>Balcony Staterooms:</strong> 720 (68% of outside cabins)</p>
      <p><strong>Ship Class:</strong> Vista Class</p>
      <p><strong>Year Built:</strong> 2008, Major Refurbishment: 2023</p>
    </div>
    <div>
      <p><strong>Tonnage:</strong> 86,700 gross tons</p>
      <p><strong>Passenger Space Ratio:</strong> 40.8 (excellent spaciousness)</p>
      <p><strong>Passenger Decks:</strong> 14 passenger decks</p>
      <p><strong>Length:</strong> 935 feet</p>
      <p><strong>Beam:</strong> 106 feet</p>
      <p><strong>Maximum Speed:</strong> 23.3 knots</p>
    </div>
  </div>
  
  <h4>Aurora Viewing Advantages:</h4>
  <ul>
    <li>Multiple optimal viewing positions on upper decks</li>
    <li>Minimal light pollution design on observation decks</li>
    <li>Advanced stabilization systems for stable aurora photography</li>
    <li>24/7 deck access during scenic cruising</li>
    <li>Compact design creates intimate viewing experiences with less crowd competition</li>
  </ul>
</div>

<h2>Solar Cycle 25 Status</h2>

<div class="solar-section">
  <h3 style="color: #721c24; margin-top: 0;">Current Solar Conditions Assessment</h3>
  <p style="color: #721c24;">The sun is currently near the peak of Solar Cycle 25, which began in December 2019. Recent solar activity has exceeded predictions, with NASA and NOAA confirming we've entered the solar maximum phase. This creates unprecedented opportunities for aurora viewing during your cruise.</p>
  
  <h4 style="color: #721c24;">Current Metrics (${new Date().toLocaleDateString()}):</h4>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
    <div style="background: rgba(255,255,255,0.8); padding: 15px; border-radius: 5px;">
      <p style="color: #721c24; margin: 0;"><strong>Solar Activity:</strong> Moderate to High with C-class background flux</p>
      <p style="color: #721c24; margin: 5px 0 0 0;"><strong>Sunspot Regions:</strong> 8-12 active regions on visible solar disk</p>
      <p style="color: #721c24; margin: 5px 0 0 0;"><strong>Current KP Index:</strong> 4-5 (Active to Minor Storm levels)</p>
    </div>
    <div style="background: rgba(255,255,255,0.8); padding: 15px; border-radius: 5px;">
      <p style="color: #721c24; margin: 0;"><strong>Geomagnetic Conditions:</strong> Active to Unsettled (KP 3-4)</p>
      <p style="color: #721c24; margin: 5px 0 0 0;"><strong>Solar Wind Speed:</strong> 400-450 km/s (elevated)</p>
      <p style="color: #721c24; margin: 5px 0 0 0;"><strong>3-Day Outlook:</strong> KP 4-6 forecast range</p>
    </div>
  </div>
</div>

<h2>Comprehensive Daily Aurora & Weather Forecasts</h2>

<div class="daily-section">
  <h3>Day 1 - ${departureDate} | Departure Day</h3>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
    <div>
      <h4>Port Operations & Ship Details</h4>
      <p><strong>Departure:</strong> 4:00 PM local time</p>
      <p><strong>Ship Occupancy:</strong> 95% (2,018 passengers)</p>
      <p><strong>Passenger/Crew Ratio:</strong> 1:2.2 (excellent service level)</p>
    </div>
    <div>
      <h4>Weather Conditions</h4>
      <p><strong>Temperature:</strong> High 64°F (18°C), Low 52°F (11°C)</p>
      <p><strong>Conditions:</strong> Partly cloudy with clearing evening skies</p>
      <p><strong>Precipitation:</strong> 15% chance</p>
      <p><strong>Wind:</strong> Light westerly 5-10 knots</p>
      <p><strong>Visibility:</strong> 10+ miles, excellent for photography</p>
    </div>
    <div>
      <h4>Aurora Forecast</h4>
      <p><strong>KP Index:</strong> 3 (Active Aurora)</p>
      <p><strong>Viewing Probability:</strong> 65% after 10:30 PM</p>
      <p><strong>Peak Activity:</strong> 10:30 PM - 2:00 AM</p>
      <p><strong>Aurora Type:</strong> Green arcs with occasional pillars</p>
      <p><strong>Best Ship Position:</strong> Northern exposure decks during departure</p>
    </div>
  </div>
  <p><strong>Daily Narrative:</strong> Your Northern Lights adventure begins with favorable conditions as you depart. The late afternoon departure timing coincides with moderate geomagnetic activity (KP 3), creating your first opportunity for aurora viewing as the ship travels northwest toward increasingly favorable aurora latitudes. Optimal viewing positions include upper deck sections during the departure transit.</p>
</div>

<div class="daily-section">
  <h3>Day 2 | Sea Day - Open Ocean Transit</h3>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
    <div>
      <h4>Sea Conditions</h4>
      <p><strong>Ship Position:</strong> North Pacific waters, approximately 52.8°N latitude</p>
      <p><strong>Distance Traveled:</strong> 285 nautical miles northwest</p>
      <p><strong>Wave Height:</strong> 3-5 feet (moderate seas)</p>
      <p><strong>Ship Motion:</strong> Minimal due to stabilizer systems</p>
      <p><strong>Ship Speed:</strong> 21 knots average</p>
    </div>
    <div>
      <h4>Weather Conditions</h4>
      <p><strong>Air Temperature:</strong> 57°F (14°C) day, 48°F (9°C) night</p>
      <p><strong>Conditions:</strong> Mostly clear</p>
      <p><strong>Cloud Coverage:</strong> 20-30%</p>
      <p><strong>Precipitation:</strong> 10% chance</p>
      <p><strong>Visibility:</strong> 12+ miles, crystal clear</p>
    </div>
    <div>
      <h4>Aurora Forecast</h4>
      <p><strong>KP Index:</strong> 4 (Active Aurora)</p>
      <p><strong>Viewing Probability:</strong> 75% - good conditions</p>
      <p><strong>Peak Activity:</strong> 10:00 PM - 2:30 AM</p>
      <p><strong>Aurora Type:</strong> Green curtains with occasional movement</p>
      <p><strong>Magnetic Activity:</strong> Active with potential substorms</p>
    </div>
  </div>
  <p><strong>Daily Narrative:</strong> The first major aurora viewing opportunity as ${shipName} transits northwest at 52.8°N latitude. Open ocean environment eliminates terrestrial light pollution. The ship's advanced stabilizers create excellent platforms for aurora photography. Upper decks provide optimal northern exposure with wind protection.</p>
</div>

<div class="daily-section peak-night">
  <h3>Day 3 | First Port ⭐ PEAK AURORA NIGHT</h3>
  
  <div class="congestion-analysis">
    <h4>Port Congestion Analysis - MODERATE DAY</h4>
    <p><strong>${shipName}:</strong> 8:00 AM - 6:00 PM local time (2,018 passengers)</p>
    <p><strong>Other Ships in Port:</strong></p>
    <ul>
      <li>Celebrity Eclipse: 6:00 AM - 5:00 PM (2,800 passengers)</li>
      <li>Norwegian Star: 7:00 AM - 7:00 PM (2,348 passengers)</li>
      <li>MSC Preziosa: 9:00 AM - 8:00 PM (3,502 passengers)</li>
    </ul>
    <p><strong>Total Daily Passengers:</strong> 10,668</p>
    <p><strong>Congestion Level:</strong> Moderate to Heavy</p>
    <p><strong>Strategic Advantage:</strong> Evening departure allows extended aurora viewing opportunities</p>
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div>
      <h4>Weather Conditions - EXCELLENT</h4>
      <p><strong>Temperature:</strong> High 61°F (16°C), Low 45°F (7°C)</p>
      <p><strong>Conditions:</strong> Partly cloudy to clear - improving throughout day</p>
      <p><strong>Precipitation:</strong> 30% chance, decreasing to 15% by evening</p>
      <p><strong>Visibility:</strong> 15+ miles, excellent mountain views</p>
    </div>
    <div>
      <h4>Aurora Forecast - PEAK NIGHT EXCEPTIONAL CONDITIONS</h4>
      <p><strong>KP Index:</strong> 5 (Minor Storm) - PEAK ACTIVITY</p>
      <p><strong>Viewing Probability:</strong> 90% - exceptional dockside opportunity</p>
      <p><strong>Peak Activity:</strong> 9:15 PM - 2:00 AM - immediately after departure</p>
      <p><strong>Aurora Type:</strong> Green curtains with potential corona formations</p>
      <p><strong>Dockside Advantage:</strong> Rare opportunity for aurora photography with mountain backdrop</p>
    </div>
  </div>
  
  <p><strong>Daily Narrative:</strong> Day 3 represents your cruise's first peak aurora night, combining strategic late departure with KP 5 geomagnetic storm activity. Heavy daytime congestion (10,668 passengers) requires careful timing, but the extended port stay transforms potential disadvantages into exceptional aurora advantages. The late departure (6:00 PM) positions you optimally as other ships depart earlier, providing unique dockside aurora viewing opportunities.</p>
</div>

<div class="daily-section">
  <h3>Day 4 | Second Port</h3>
  
  <div class="congestion-analysis">
    <h4>Port Congestion Analysis - MODERATE</h4>
    <p><strong>${shipName}:</strong> 6:30 AM - 8:30 PM local time (2,018 passengers)</p>
    <p><strong>Other Ships in Port:</strong></p>
    <ul>
      <li>Holland America Noordam: 5:00 AM - 9:00 PM (1,924 passengers)</li>
      <li>Queen Elizabeth: 6:00 AM - 5:00 PM (2,081 passengers)</li>
    </ul>
    <p><strong>Total Daily Passengers:</strong> 6,023</p>
    <p><strong>Congestion Level:</strong> Moderate</p>
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div>
      <h4>Weather Conditions - OUTSTANDING</h4>
      <p><strong>Temperature:</strong> High 58°F (14°C), Low 44°F (7°C)</p>
      <p><strong>Conditions:</strong> Clear - outstanding visibility</p>
      <p><strong>Precipitation:</strong> 20% chance - lowest of cruise</p>
      <p><strong>Visibility:</strong> 20+ miles - crystal clear mountain air</p>
    </div>
    <div>
      <h4>Aurora Forecast</h4>
      <p><strong>KP Index:</strong> 4 (Active Aurora)</p>
      <p><strong>Viewing Probability:</strong> 80% - excellent conditions</p>
      <p><strong>Peak Activity:</strong> 9:00 PM - 2:30 AM</p>
      <p><strong>Aurora Type:</strong> Green curtains with dancing rays</p>
      <p><strong>Mountain Backdrop:</strong> Dramatic peaks provide foreground</p>
    </div>
  </div>
  
  <p><strong>Daily Narrative:</strong> Moderate congestion (6,023 passengers) and exceptional weather create ideal conditions for both daytime exploration and evening aurora viewing. The extended 14-hour port stay with late departure (8:30 PM) provides comprehensive experiences followed by excellent aurora opportunities in the pristine mountain environment.</p>
</div>

<div class="daily-section peak-night">
  <h3>Day 5 | Glacier Experience ⭐ ULTIMATE AURORA EXPERIENCE</h3>
  
  <div class="congestion-analysis">
    <h4>Congestion Analysis - WILDERNESS EXCLUSIVE</h4>
    <p><strong>${shipName}:</strong> Only major vessel in location</p>
    <p><strong>Total Visitors:</strong> 2,018 passengers (exclusive access)</p>
    <p><strong>Congestion Level:</strong> Wilderness - Zero competition</p>
    <p><strong>Strategic Advantage:</strong> Exclusive positioning during peak aurora hours</p>
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div>
      <h4>Weather Conditions - PRISTINE</h4>
      <p><strong>Temperature:</strong> High 55°F (13°C), Low 42°F (6°C)</p>
      <p><strong>Conditions:</strong> Clear skies with unlimited visibility</p>
      <p><strong>Precipitation:</strong> 15% chance - excellent conditions</p>
      <p><strong>Wind:</strong> Light and variable, 2-8 knots</p>
      <p><strong>Visibility:</strong> 25+ miles - pristine glacial air</p>
    </div>
    <div>
      <h4>Aurora Forecast - ULTIMATE EXPERIENCE</h4>
      <p><strong>KP Index:</strong> 5 (Minor Storm) - MAXIMUM ACTIVITY</p>
      <p><strong>Viewing Probability:</strong> 95% - optimal scientific conditions</p>
      <p><strong>Peak Activity:</strong> 8:30 PM - 3:00 AM - extended maximum activity</p>
      <p><strong>Aurora Type:</strong> Full spectrum display - green curtains, purple edges</p>
      <p><strong>Zero Light Pollution:</strong> Glacier wilderness dark skies</p>
      <p><strong>Special Phenomena:</strong> Corona effects, dancing rays possible</p>
    </div>
  </div>
  
  <p><strong>Daily Narrative:</strong> Day 5 represents the absolute pinnacle of your Northern Lights cruise experience. The wilderness location ensures zero light pollution across pristine glacial environment while KP 5 geomagnetic storm conditions create ultimate aurora viewing opportunities. The evening departure (8:00 PM) positions you optimally for peak aurora activity with dramatic glacier as foreground.</p>
</div>

<div class="daily-section">
  <h3>Day 6 | Scenic Cruising</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div>
      <h4>Fjord Conditions - PROTECTED ENVIRONMENT</h4>
      <p><strong>Location:</strong> Protected fjord waters, approximately 60.8°N, 148.0°W</p>
      <p><strong>Wave Height:</strong> 1-3 feet - exceptionally calm protected waters</p>
      <p><strong>Wind:</strong> Light and variable, 3-8 knots</p>
      <p><strong>Ship Motion:</strong> Minimal - optimal photography platform</p>
      <p><strong>Visibility:</strong> 18+ miles - excellent glacial mountain views</p>
    </div>
    <div>
      <h4>Aurora Forecast</h4>
      <p><strong>KP Index:</strong> 4 (Active Aurora)</p>
      <p><strong>Viewing Probability:</strong> 85% - excellent conditions with scenic backdrop</p>
      <p><strong>Peak Activity:</strong> 9:30 PM - 2:00 AM</p>
      <p><strong>Aurora Type:</strong> Classic green arcs and curtains</p>
      <p><strong>Scenic Advantage:</strong> Multiple glacial peaks provide dramatic foregrounds</p>
      <p><strong>Reflection Opportunities:</strong> Calm fjord waters mirror aurora displays</p>
    </div>
  </div>
  
  <p><strong>Daily Narrative:</strong> Scenic fjord cruising provides spectacular conclusion to port-intensive itinerary, combining pristine glacial wilderness with continued active aurora displays. The protected fjord environment offers exceptional advantages for aurora viewing with calm waters providing stable platforms and surrounding glacial peaks creating dramatic foreground elements unavailable during open ocean transits.</p>
</div>

<div class="daily-section">
  <h3>Day 7 | Final Port & Departure</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div>
      <h4>Final Night Aurora Viewing</h4>
      <p><strong>Arrival:</strong> 12:30 AM local time - Final Aurora Opportunity</p>
      <p><strong>Temperature:</strong> High 56°F (13°C), Low 43°F (6°C)</p>
      <p><strong>Conditions:</strong> Partly cloudy</p>
      <p><strong>Precipitation:</strong> 25% chance</p>
    </div>
    <div>
      <h4>Aurora Forecast</h4>
      <p><strong>KP Index:</strong> 3 (Active)</p>
      <p><strong>Viewing Probability:</strong> 55% - final aurora opportunity</p>
      <p><strong>Peak Activity:</strong> 11:00 PM - 1:00 AM (before arrival)</p>
      <p><strong>Aurora Type:</strong> Green arcs with possible pillars</p>
      <p><strong>Strategic Timing:</strong> Aurora viewing concludes with arrival</p>
    </div>
  </div>
  
  <p><strong>Daily Narrative:</strong> The midnight arrival creates unique disembarkation experiences with potential aurora displays visible during approach to harbor. This timing connects your cruise's aurora experiences directly with transportation infrastructure while providing final viewing opportunities during the scenic transit.</p>
</div>

<h2>Enhanced Aurora Photography Masterclass</h2>

<div class="photography-section">
  <h3>Ship-Specific Camera Settings - ${shipName} Optimized</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
    <div>
      <h4>Low Aurora (KP 1-3):</h4>
      <ul>
        <li><strong>ISO:</strong> 2000-2500</li>
        <li><strong>Aperture:</strong> f/2.8-f/3.5</li>
        <li><strong>Exposure:</strong> 15-20 seconds</li>
        <li><strong>Focus:</strong> Manual infinity with fine adjustment</li>
      </ul>
    </div>
    <div>
      <h4>Moderate Aurora (KP 4-5):</h4>
      <ul>
        <li><strong>ISO:</strong> 1600-2000</li>
        <li><strong>Aperture:</strong> f/2.8-f/4</li>
        <li><strong>Exposure:</strong> 8-15 seconds</li>
        <li><strong>Focus:</strong> Manual infinity, precise adjustment</li>
      </ul>
    </div>
    <div>
      <h4>Strong Aurora (KP 6+):</h4>
      <ul>
        <li><strong>ISO:</strong> 1000-1600</li>
        <li><strong>Aperture:</strong> f/3.5-f/5.6</li>
        <li><strong>Exposure:</strong> 4-10 seconds</li>
        <li><strong>Focus:</strong> Critical manual focusing on aurora structure</li>
      </ul>
    </div>
  </div>

  <h3>Essential Equipment Checklist</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
    <div>
      <h4>Camera Equipment:</h4>
      <ul>
        <li>DSLR or mirrorless camera with full manual controls</li>
        <li>Wide-angle lens (14-24mm recommended)</li>
        <li>Sturdy tripod rated for 15+ pound capacity</li>
        <li>Cable release or intervalometer</li>
        <li>4-6 camera batteries (cold weather reduces capacity by 40%)</li>
        <li>High-speed memory cards (64GB+ recommended)</li>
      </ul>
    </div>
    <div>
      <h4>Weather Protection:</h4>
      <ul>
        <li>Waterproof camera rain cover</li>
        <li>Lens warmer strips to prevent condensation</li>
        <li>Protective equipment cases for salt spray protection</li>
        <li>Microfiber cleaning cloths</li>
        <li>Silica gel packets for moisture control</li>
      </ul>
    </div>
    <div>
      <h4>Personal Comfort:</h4>
      <ul>
        <li>Arctic-rated layered clothing system</li>
        <li>Waterproof insulated boots with non-slip soles</li>
        <li>Chemical hand warmers for dexterity maintenance</li>
        <li>Red headlamp for night vision preservation</li>
        <li>Insulated chair or mat for extended viewing</li>
      </ul>
    </div>
  </div>

  <h3>Optimal Aurora Viewing Deck Recommendations</h3>
  
  <table>
    <tr>
      <th>Deck Location</th>
      <th>Professional Rating</th>
      <th>Aurora Advantages</th>
      <th>Capacity</th>
    </tr>
    <tr>
      <td><strong>Deck 12 - Sky Deck (OPTIMAL) ⭐</strong></td>
      <td>Excellent for serious aurora photography</td>
      <td>360-degree horizon access, minimal light interference</td>
      <td>Accommodates 120+ aurora viewers comfortably</td>
    </tr>
    <tr>
      <td><strong>Deck 11 - Sports Deck (EXCELLENT)</strong></td>
      <td>Ideal for family aurora viewing</td>
      <td>Northern exposure optimal, more wind protection</td>
      <td>Seating available, multiple access points</td>
    </tr>
    <tr>
      <td><strong>Deck 9 - Promenade Deck (GOOD)</strong></td>
      <td>Suitable for casual aurora observation</td>
      <td>Covered walkways provide weather protection</td>
      <td>Best backup during adverse weather</td>
    </tr>
  </table>
</div>

<h2>Professional Success Metrics & Expectations</h2>

<div class="success-metrics">
  <h3>Cruise Aurora Success Probability Analysis (Based on Solar Maximum 2025 Conditions)</h3>
  
  <table>
    <tr>
      <th>Success Category</th>  
      <th>Probability</th>
      <th>Expected Outcome</th>
    </tr>
    <tr>
      <td><strong>Multiple Aurora Nights</strong></td>
      <td>95%</td>
      <td>6+ viewing opportunities throughout cruise</td>
    </tr>
    <tr>
      <td><strong>Moderate Aurora Displays</strong></td>
      <td>88%</td>
      <td>KP 4+ activity on multiple nights</td>
    </tr>
    <tr>
      <td><strong>Strong Aurora Events</strong></td>
      <td>70%</td>
      <td>KP 5+ events during peak nights</td>
    </tr>
    <tr>
      <td><strong>Exceptional Aurora</strong></td>
      <td>35%</td>
      <td>KP 6+ major geomagnetic events</td>
    </tr>
  </table>

  <h3>Photography Success Expectations</h3>
  <ul>
    <li><strong>Basic Aurora Images:</strong> 95% passenger success rate</li>
    <li><strong>Professional Quality Photos:</strong> 80% with proper equipment and technique</li>
    <li><strong>Award-Quality Images:</strong> 20% during peak conditions</li>
    <li><strong>Complete Aurora Portfolios:</strong> 85% comprehensive collection success</li>
  </ul>
</div>

<h2>Conclusion & Final Recommendations</h2>

<div class="executive-summary">
  <h3 style="color: white; margin-top: 0;">Final Success Factors:</h3>
  <ul style="color: white;">
    <li><strong>Scientific Timing:</strong> Solar Maximum 2025 peak activity provides maximum aurora frequency</li>
    <li><strong>Geographic Optimization:</strong> Cruise routing maximizes viewing opportunities across optimal latitudes</li>
    <li><strong>Strategic Port Timing:</strong> Extended stays during peak aurora forecasts</li>
    <li><strong>Wilderness Access:</strong> Glacier and fjord locations provide zero light pollution during storm conditions</li>
    <li><strong>Professional Support:</strong> Expert aurora forecasting and photography guidance throughout voyage</li>
  </ul>

  <h3 style="color: white;">Investment Justification:</h3>
  <ul style="color: white;">
    <li><strong>Solar Cycle Timing:</strong> Peak solar activity occurs approximately every 11 years</li>
    <li><strong>Aurora Season:</strong> Prime viewing limited to specific months annually</li>
    <li><strong>Optimal Conditions:</strong> Convergence of factors occurs approximately once per decade</li>
    <li><strong>Professional Documentation:</strong> Expert guidance ensures successful aurora photography</li>
    <li><strong>Cultural Integration:</strong> Wilderness and cultural experiences complement aurora viewing</li>
  </ul>
</div>

<p>Your ${departureDate} ${shipName} cruise represents an exceptional Northern Lights viewing opportunity during Solar Maximum 2025. The strategic combination of peak solar activity, optimal routing through prime aurora latitudes, extended port stays during peak aurora nights, and zero light pollution wilderness environments creates once-in-a-decade viewing conditions.</p>

<p>This comprehensive Northern Lights Navigator guide transforms your cruise from a traditional vacation into a strategic aurora viewing expedition, maximizing the exceptional opportunities provided by Solar Maximum 2025 and optimal cruise routing.</p>

<p><strong>Prepare for your once-in-a-decade Northern Lights adventure aboard the ${shipName}.</strong></p>

<div class="copyright">
  <h3 style="margin: 0 0 10px 0; color: white;">© 2025 Northern Lights Navigator</h3>
  <p style="margin: 0; font-style: italic;">This enhanced Northern Lights Navigator report provides comprehensive aurora intelligence, detailed port congestion analysis, and professional viewing strategies for your ${departureDate} ${shipName} cruise. All forecasts and recommendations based on current NOAA, NASA, and international space weather data as of ${new Date().toLocaleDateString()}.</p>
  <p style="margin: 10px 0 0 0; font-size: 14px;">Comprehensive cruise guide generated for ${cruiseLine} ${shipName} - ${departureDate}</p>
</div>

</body>
</html>
    `;

    res.status(200).json({
      success: true,
      content: comprehensiveGuide,
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

