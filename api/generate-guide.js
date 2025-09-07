const { chromium } = require('playwright');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cruiseLine, shipName, departureDate } = req.body;
  let browser = null;

  try {
    console.log('Starting browser automation for:', { cruiseLine, shipName, departureDate });
    
    // Launch browser
    browser = await chromium.launch({
      headless: true, // Set to false for debugging
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport and user agent to appear more human
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });

    console.log('Navigating to Perplexity...');
    
    // Navigate to Perplexity
    await page.goto('https://www.perplexity.ai/', { 
      waitUntil: 'networkidle',
      timeout: 60000 
    });

    // Check if already logged in or need to login
    try {
      // Look for the search input (indicates already logged in)
      await page.waitForSelector('textarea[placeholder*="Ask anything"]', { timeout: 10000 });
      console.log('Already logged in to Perplexity');
    } catch (error) {
      console.log('Need to login to Perplexity Max');
      
      // Click login/signin button
      await page.click('button:has-text("Sign In"), a:has-text("Sign In")');
      await page.waitForTimeout(2000);
      
      // Fill login credentials (you'll need to provide these)
      await page.fill('input[type="email"]', process.env.PERPLEXITY_EMAIL);
      await page.fill('input[type="password"]', process.env.PERPLEXITY_PASSWORD);
      await page.click('button[type="submit"]');
      
      // Wait for login to complete
      await page.waitForSelector('textarea[placeholder*="Ask anything"]', { timeout: 30000 });
      console.log('Successfully logged in');
    }

    // Switch to Perplexity Max if available
    try {
      // Look for Max mode toggle/button
      await page.click('button:has-text("Max"), [data-testid="max-mode"]', { timeout: 5000 });
      console.log('Switched to Perplexity Max mode');
    } catch (error) {
      console.log('Max mode not found, continuing with regular mode');
    }

    // Your EXACT query that generated the reference document
    const exactQuery = `Create a comprehensive Northern Lights cruise intelligence report for ${cruiseLine} ${shipName} departing ${departureDate}.

Use live web search to gather current data from NOAA/NASA space weather services, official cruise line schedules, port authorities, marine weather forecasts, and scientific aurora prediction models.

Generate a professional 20-25 page report with the exact same structure and depth as advanced cruise intelligence reports, including:

1. **Executive Summary** with current Solar Cycle 25 status and key highlights (85-90% aurora probability, peak viewing nights, strategic advantages)

2. **${shipName} Ship Specifications** with detailed aurora viewing advantages, deck recommendations, and passenger capacity analysis

3. **Solar Cycle 25 Status** with current metrics, 3-day forecast, sunspot activity, KP index predictions, and geomagnetic conditions

4. **Comprehensive Daily Aurora & Weather Forecasts** for all 8 cruise days:
   - Exact port coordinates and operating hours
   - Detailed port congestion analysis with competing ships and exact passenger counts
   - Complete weather conditions with aurora viewing impact assessment
   - Scientific KP index predictions and viewing probabilities with peak activity windows
   - Strategic daily narratives with timing recommendations and ship positioning advice

5. **Enhanced Aurora Photography Masterclass** with ship-specific camera settings, equipment checklists, and optimal viewing deck recommendations

6. **Professional Success Metrics** with comprehensive probability analysis and photography success expectations

7. **Conclusion & Investment Justification** with scientific timing, geographic optimization, and strategic factors

Use scientific precision, authoritative tone, real-time data from live sources, actual ship schedules, current weather forecasts, and professional cruise intelligence methodology.

Include specific passenger counts, exact port arrival/departure times, real competitor ship analysis, detailed scientific aurora forecasting with KP indices, comprehensive weather impact assessments for aurora viewing, and strategic recommendations.

End with: © 2025 Northern Lights Navigator

Make this as comprehensive and data-driven as possible using live authoritative web sources with the same depth and quality as professional cruise intelligence reports.`;

    console.log('Submitting query to Perplexity Max...');
    
    // Find and click the textarea
    const textarea = await page.locator('textarea[placeholder*="Ask anything"], textarea[placeholder*="Ask"]').first();
    await textarea.click();
    
    // Type the exact query
    await textarea.fill(exactQuery);
    
    // Submit the query
    await page.keyboard.press('Enter');
    
    console.log('Waiting for comprehensive response...');
    
    // Wait for the response to complete (this may take 3-5 minutes for comprehensive reports)
    await page.waitForTimeout(5000); // Initial wait for response to start
    
    // Look for response completion indicators
    let responseComplete = false;
    let attempts = 0;
    const maxAttempts = 60; // 5 minutes max wait
    
    while (!responseComplete && attempts < maxAttempts) {
      try {
        // Check if response is still generating
        const isGenerating = await page.locator('[data-testid="generating"], .generating, [aria-label*="generating"]').count() > 0;
        
        if (!isGenerating) {
          // Wait a bit more to ensure response is complete
          await page.waitForTimeout(3000);
          responseComplete = true;
        } else {
          await page.waitForTimeout(5000);
          attempts++;
          console.log(`Waiting for response... attempt ${attempts}/${maxAttempts}`);
        }
      } catch (error) {
        // If we can't find generating indicators, assume it's done
        responseComplete = true;
      }
    }
    
    console.log('Response completed, extracting content...');
    
    // Extract the comprehensive response
    const responseContent = await page.locator('[data-testid="response"], .response-content, [class*="response"]').last().innerHTML();
    
    if (!responseContent || responseContent.length < 1000) {
      throw new Error('Response too short or empty - may not have completed properly');
    }
    
    console.log(`Successfully extracted response: ${responseContent.length} characters`);
    
    await browser.close();
    
    res.status(200).json({
      success: true,
      content: responseContent,
      cruiseLine,
      shipName,
      departureDate,
      method: 'Perplexity Max Browser Automation',
      contentLength: responseContent.length,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Browser automation error:', error);
    
    if (browser) {
      await browser.close();
    }
    
    res.status(500).json({
      success: false,
      error: error.message,
      fallback: 'Browser automation failed - check credentials and Perplexity access'
    });
  }
}
