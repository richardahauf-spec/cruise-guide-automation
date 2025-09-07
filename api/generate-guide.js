export default async function handler(req, res) {
  console.log('Function started');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cruiseLine, shipName, departureDate } = req.body;
    console.log('Processing:', { cruiseLine, shipName, departureDate });

    // Simulate a comprehensive cruise guide
    const testContent = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #2c3e50; text-align: center;">Northern Lights Cruise Guide</h1>
      <h2 style="color: #3498db;">${cruiseLine} - ${shipName}</h2>
      <h3 style="color: #e74c3c;">Departure: ${departureDate}</h3>
      
      <div style="background: #ecf0f1; padding: 20px; margin: 20px 0; border-radius: 5px;">
        <h4>Executive Summary</h4>
        <p>Your ${cruiseLine} ${shipName} cruise departing ${departureDate} presents excellent opportunities for Northern Lights viewing during Solar Cycle 25's active phase.</p>
      </div>
      
      <h4>Daily Aurora Forecasts</h4>
      <ul>
        <li><strong>Day 1:</strong> Departure - Aurora briefing and equipment check</li>
        <li><strong>Day 2:</strong> KP Index 4-5 predicted - Good viewing probability</li>
        <li><strong>Day 3:</strong> KP Index 6+ expected - Excellent aurora activity</li>
        <li><strong>Day 4:</strong> Clear skies forecast - Prime photography conditions</li>
        <li><strong>Day 5:</strong> Moderate activity - Optimal deck positioning</li>
      </ul>
      
      <h4>Ship-Specific Viewing Recommendations</h4>
      <p>Deck 12 Port Side offers optimal viewing with minimal light pollution. Recommended viewing times: 10:30 PM - 2:30 AM local time.</p>
      
      <h4>Photography Guide</h4>
      <ul>
        <li>Camera Settings: ISO 1600-3200, f/2.8, 15-25 second exposures</li>
        <li>Bring tripod and extra batteries (cold weather drains power)</li>
        <li>Use manual focus set to infinity</li>
      </ul>
      
      <h4>Weather Impact Assessment</h4>
      <p>Current NOAA forecasts indicate favorable conditions with 70% clear sky probability for aurora viewing windows.</p>
      
      <div style="background: #d5dbdb; padding: 15px; margin: 20px 0; text-align: center;">
        <p><strong>© 2025 Northern Lights Navigator</strong></p>
        <p>Professional Aurora Cruise Intelligence</p>
      </div>
    </div>
    `;

    console.log('Sending response');
    res.status(200).json({
      success: true,
      content: testContent,
      cruiseLine,
      shipName,
      departureDate
    });
    
  } catch (error) {
    console.error('Function error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
