const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cruiseLine, shipName, departureDate } = req.body;

  let browser = null;
  
  try {
    browser = await puppeteer.launch({
      args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    
    const page = await browser.newPage();
    
    // Navigate to Perplexity
    await page.goto('https://www.perplexity.ai/', { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait for search input
    await page.waitForSelector('textarea[placeholder*="Ask anything"]', { timeout: 10000 });
    
    // Your query with ship data
    const query = `I need you to create a comprehensive Northern Lights cruise guide for ${cruiseLine} ${shipName} departing ${departureDate}. I have attached a completed report for reference. 1. Daily aurora forecasts with KP index predictions for each cruise day 2. Detailed port congestion analysis showing competing ships and passenger counts 3. Ship-specific aurora viewing deck recommendations 4. Weather conditions and impact on northern lights viewing for each day 5. Professional aurora photography guide optimized for ship conditions 6. Comprehensive daily narratives covering: Aurora viewing probability and timing, Weather conditions and aurora impact assessment, Port logistics and strategic timing vs other ships, Wildlife viewing opportunities, Photography recommendations. Please include: Executive summary with current Solar Cycle 25 assessment, Ship specifications and aurora viewing advantages, Real-time NOAA weather forecasts and marine conditions, Port-by-port congestion analysis with exact passenger counts, Aurora forecast charts showing KP index predictions, Weather impact charts for viewing probability, Ship positioning and latitude progression charts, Enhanced aurora photography masterclass, Professional success metrics and expectations. Use the same professional, authoritative tone and scientific precision. Create all charts and visual elements. Ensure each daily narrative includes specific weather impact assessments on northern lights viewing potential. Also please include a 2025 Copyright Statement on the last page – Northern Lights Navigator. The report should be 20-25 pages total with comprehensive coverage but condensed narratives.`;
    
    // Type query
    await page.type('textarea[placeholder*="Ask anything"]', query);
    await page.keyboard.press('Enter');
    
    // Wait for response
    await page.waitForSelector('[data-testid="answer"]', { timeout: 120000 });
    await page.waitForTimeout(45000);
    
    // Extract content
    const response = await page.$eval('[data-testid="answer"]', el => el.innerHTML);
    
    res.status(200).json({
      success: true,
      content: response,
      cruiseLine,
      shipName,
      departureDate
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
