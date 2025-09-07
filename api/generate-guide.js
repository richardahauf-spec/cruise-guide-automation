econst playwright = require('playwright-aws-lambda');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cruiseLine, shipName, departureDate } = req.body;

  let browser = null;
  
  try {
    // Launch browser with playwright-aws-lambda
    browser = await playwright.launchChromium({
      headless: true
    });
    
    const page = await browser.newPage();
    
    // Navigate to Perplexity Labs
    await page.goto('https://labs.perplexity.ai/', { waitUntil: 'networkidle' });
    
    // Wait for and find the input field
    await page.waitForSelector('textarea', { timeout: 30000 });
    
    // Your exact comprehensive query that generated the reference document
    const comprehensiveQuery = `I need you to create a comprehensive Northern Lights cruise guide for ${cruiseLine} ${shipName} departing ${departureDate}. I have attached a completed report for reference. Please create an identical format and depth of analysis with:

1. Daily aurora forecasts with KP index predictions for each cruise day
2. Detailed port congestion analysis showing competing ships and passenger counts  
3. Ship-specific aurora viewing deck recommendations
4. Weather conditions and impact on northern lights viewing for each day
5. Professional aurora photography guide optimized for ship conditions
6. Comprehensive daily narratives covering:
   - Aurora viewing probability and timing
   - Weather conditions and aurora impact assessment
   - Port logistics and strategic timing vs other ships
   - Wildlife viewing opportunities
   - Photography recommendations

Please include:
- Executive summary with current Solar Cycle 25 assessment
- Ship specifications and aurora viewing advantages
- Real-time NOAA weather forecasts and marine conditions
- Port-by-port congestion analysis with exact passenger counts
- Aurora forecast charts showing KP index predictions
- Weather impact charts for viewing probability
- Ship positioning and latitude progression charts
- Enhanced aurora photography masterclass
- Professional success metrics and expectations

Use the same professional, authoritative tone and scientific precision. Create all charts and visual elements. Ensure each daily narrative includes specific weather impact assessments on northern lights viewing potential.

Also please include a 2025 Copyright Statement on the last page – Northern Lights Navigator. The report should be 20-25 pages total with comprehensive coverage but condensed narratives.

Make this as detailed and professional as the reference document with real scientific data, specific port analysis, and comprehensive cruise intelligence.`;

    // Type the comprehensive query
    await page.fill('textarea', comprehensiveQuery);
    
    // Submit the query
    await page.keyboard.press('Enter');
    
    // Wait for the response to be generated (this takes time for comprehensive content)
    await page.waitForSelector('.prose', { timeout: 180000 }); // 3 minutes timeout
    
    // Wait additional time for complete response
    await page.waitForTimeout(60000); // 1 minute additional wait
    
    // Extract the comprehensive response
    const response = await page.$eval('.prose', el => el.innerHTML);
    
    res.status(200).json({
      success: true,
      content: response,
      cruiseLine,
      shipName,
      departureDate,
      source: 'Perplexity Labs AI Generated'
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      fallback: 'Using template due to Perplexity access issue'
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
