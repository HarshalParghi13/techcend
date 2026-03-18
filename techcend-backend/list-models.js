require('dotenv').config();

async function checkModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  // 1. Check if the key is loading correctly
  if (!apiKey) {
    console.log("❌ ERROR: Could not find GEMINI_API_KEY in your .env file!");
    return;
  }
  
  // Trim the key just in case there are hidden spaces in your .env file
  const cleanKey = apiKey.trim();
  console.log(`🔍 Testing API Key ending in: ...${cleanKey.slice(-4)}`);

  try {
    // 2. Ask Google for the list of models your key has access to
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${cleanKey}`);
    const data = await response.json();

    if (data.error) {
      console.log("❌ Google API Rejected the Key:", data.error.message);
      return;
    }

    console.log("\n✅ SUCCESS! Your key is valid. You can use these models in your server.js:\n");
    
    // 3. Filter and display only the models that work for chat/text generation
    const chatModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
    chatModels.forEach(m => {
      // We strip out the "models/" prefix so you know exactly what to type
      console.log(`👉 ${m.name.replace('models/', '')}`);
    });
    
    console.log("\nCopy one of the names above (like 'gemini-1.5-flash') and paste it into your server.js file!");

  } catch (err) {
    console.error("❌ Network Error:", err.message);
  }
}

checkModels();