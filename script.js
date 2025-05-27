// Team Configuration
const TEAMS = {
    114: {
        name: "Cleveland Guardians",
        shortName: "Guardians",
        venue: "Progressive Field",
        city: "Cleveland",
        colors: { primary: "#0c2340", secondary: "#c8102e" },
        apiParams: {
            begin_date: "20250512",
            end_date: "20251231",
            price_group: "default",
            sub_category: "default"
        }
    },
    111: {
        name: "Boston Red Sox",
        shortName: "Red Sox",
        venue: "Fenway Park",
        city: "Boston",
        colors: { primary: "#bd3039", secondary: "#0c2340" },
        apiParams: {
            begin_date: "20250327",
            end_date: "20251231",
            price_group: "Dynamic"
        }
    },
    119: {
        name: "Los Angeles Dodgers",
        shortName: "Dodgers",
        venue: "Dodger Stadium",
        city: "Los Angeles",
        colors: { primary: "#005a9c", secondary: "#ffffff" },
        apiParams: {
            begin_date: "20250323",
            end_date: "20251105",
            price_group: "Dynamic",
            sub_category: "default",
            tz: "America/Los_Angeles"
        }
    }
};

// Current selected team
let currentTeam = 114; // Default to Cleveland Guardians

// Generate API URL for a specific team
function generateApiUrl(teamId) {
    const team = TEAMS[teamId];
    const baseUrl = 'https://www.ticketing-client.com/ticketing-client/json/EventTicketPromotion.tiksrv';
    const params = new URLSearchParams({
        ticket_category: 'Tickets',
        team_id: teamId,
        home_team_id: teamId,
        recSP: '1',
        site_section: 'Default',
        offer_group: 'SGTPG',
        price_group: team.apiParams.price_group || 'default',
        begin_date: team.apiParams.begin_date,
        end_date: team.apiParams.end_date,
        grouping_name: 'Default',
        display_if_past: 'false',
        leave_empty_games: 'true',
        ensure_array: 'game',
        tixDataAlways: 'true',
        removeNoPrice: 'false',
        displayIn: 'singlegame',
        begin_date_offset: '-0',
        tz: team.apiParams.tz || 'America/New_York',
        year: '2025',
        availability: 'false'
    });
    
    // Add optional parameters
    if (team.apiParams.sub_category) {
        params.append('sub_category', team.apiParams.sub_category);
    }
    
    return `${baseUrl}?${params.toString()}`;
}

// Enhanced sample data with multiple teams
const SAMPLE_DATA = {
    114: { // Cleveland Guardians
        "events": {
            "game": [
                {
                    "home_team_id": "114",
                    "away_probable_pitcher_name": "May, Dustin",
                    "game_time_local": "2025-05-27T18:10:00",
                    "home_name_team": "Guardians",
                    "away_name_team": "Dodgers",
                    "venue_city": "Cleveland",
                    "away_name_full": "Los Angeles Dodgers",
                    "game_time_et": "20250527 06:10:00 PM",
                    "venue_name": "Progressive Field",
                    "away_name_abbrev": "LAD",
                    "ticket_link": {
                        "tlink": "https://mlb.tickets.com/?agency=MLB_MPV&orgid=27&pid=9499181"
                    },
                    "home_name_full": "Cleveland Guardians",
                    "home_name_abbrev": "CLE",
                    "game_date": "2025-05-27",
                    "promotion": {
                        "promotion_types": "Ticket Offer",
                        "thumbnail": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/o8iount4ojsyiezz6hlr.png",
                        "image_url": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/o8iount4ojsyiezz6hlr.png",
                        "description": "You won't want to miss this limited-edition Peanuts Pig Pen character bobblehead with your purchase of this Theme Night ticket for Tuesday, May 27!",
                        "offer_name": "Theme Night - Peanuts Night",
                        "tlink": "https://www.mlb.com/guardians/tickets/theme-nights#may",
                        "offer_type": "Ticket Offer"
                    }
                },
                {
                    "home_team_id": "114",
                    "away_probable_pitcher_name": "Kershaw, Clayton",
                    "game_time_local": "2025-05-28T13:10:00",
                    "home_name_team": "Guardians",
                    "away_name_team": "Dodgers",
                    "venue_city": "Cleveland",
                    "away_name_full": "Los Angeles Dodgers",
                    "game_time_et": "20250528 01:10:00 PM",
                    "venue_name": "Progressive Field",
                    "away_name_abbrev": "LAD",
                    "ticket_link": {
                        "tlink": "https://mlb.tickets.com/?agency=MLB_MPV&orgid=27&pid=9499182"
                    },
                    "home_name_full": "Cleveland Guardians",
                    "home_name_abbrev": "CLE",
                    "game_date": "2025-05-28",
                    "promotion": [
                        {
                            "promotion_types": "Food",
                            "thumbnail": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/wmcikz8qqnpzogydjta4.png",
                            "image_url": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/wmcikz8qqnpzogydjta4.png",
                            "offer_name": "Sugardale Dollar Dog Night",
                            "offer_type": "Theme Days"
                        },
                        {
                            "promotion_types": "Fireworks or Drone Show",
                            "thumbnail": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/kl7wrlqgj51mfej478yp.png",
                            "image_url": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/kl7wrlqgj51mfej478yp.png",
                            "offer_name": "Phantom Fireworks",
                            "offer_type": "Theme Days"
                        }
                    ]
                },
                {
                    "home_team_id": "114",
                    "game_time_local": "2025-09-28T15:10:00",
                    "home_name_team": "Guardians",
                    "away_name_team": "Rangers",
                    "venue_city": "Cleveland",
                    "away_name_full": "Texas Rangers",
                    "game_time_et": "20250928 03:10:00 PM",
                    "venue_name": "Progressive Field",
                    "away_name_abbrev": "TEX",
                    "ticket_link": {
                        "tlink": "https://mlb.tickets.com/?agency=MLB_MPV&orgid=27&pid=9499238"
                    },
                    "home_name_full": "Cleveland Guardians",
                    "home_name_abbrev": "CLE",
                    "game_date": "2025-09-28",
                    "promotion": {
                        "promotion_types": "Kids/Family Event",
                        "thumbnail": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/wsoeg0pfmk3c230aoyd1.png",
                        "image_url": "https://img.mlbstatic.com/mlb-images/image/upload/t_1x1/t_w372/mlb/wsoeg0pfmk3c230aoyd1.png",
                        "offer_name": "Kids Run the Bases",
                        "offer_type": "Theme Days"
                    }
                }
            ]
        }
    },
    111: { // Boston Red Sox
        "events": {
            "game": [
                {
                    "home_team_id": "111",
                    "game_time_local": "2025-06-02T19:10:00",
                    "home_name_team": "Red Sox",
                    "away_name_team": "Angels",
                    "venue_city": "Boston",
                    "away_name_full": "Los Angeles Angels",
                    "game_time_et": "20250602 07:10:00 PM",
                    "venue_name": "Fenway Park",
                    "away_name_abbrev": "LAA",
                    "ticket_link": {
                        "tlink": "https://mlb.tickets.com/?agency=MLB_MPV&orgid=23&pid=9518901"
                    },
                    "home_name_full": "Boston Red Sox",
                    "home_name_abbrev": "BOS",
                    "game_date": "2025-06-02",
                    "promotion": {
                        "promotion_types": "Theme Game Ticket Offer",
                        "thumbnail": "https://mktg.mlbstatic.com/redsox/images/promotions/2025/rookie-t-shirt-marcelo-mayer-752x752.png",
                        "image_url": "https://mktg.mlbstatic.com/redsox/images/promotions/2025/rookie-t-shirt-marcelo-mayer-752x752.png",
                        "description": "Enter code MAYER. Giveaway items included with Ticket Specials are only available to fans who purchase their ticket via the respective special offer.",
                        "offer_name": "Marcelo Mayer \"Rookie Tee\" T-shirt",
                        "tlink": "https://mlb.tickets.com/?agency=MLB_MPV&orgid=23&eventId=14830&coupon=MAYER#/event",
                        "offer_type": "Ticket Offer"
                    }
                }
            ]
        }
    },
    119: { // Los Angeles Dodgers
        "events": {
            "game": [
                {
                    "home_team_id": "119",
                    "game_time_local": "2025-04-15T19:10:00",
                    "home_name_team": "Dodgers",
                    "away_name_team": "Giants",
                    "venue_city": "Los Angeles",
                    "away_name_full": "San Francisco Giants",
                    "game_time_et": "20250415 10:10:00 PM",
                    "venue_name": "Dodger Stadium",
                    "away_name_abbrev": "SF",
                    "ticket_link": {
                        "tlink": "https://mlb.tickets.com/?agency=MLB_MPV&orgid=119&pid=9500001"
                    },
                    "home_name_full": "Los Angeles Dodgers",
                    "home_name_abbrev": "LAD",
                    "game_date": "2025-04-15",
                    "promotion": {
                        "promotion_types": "Giveaway",
                        "offer_name": "Dodger Blue Friday",
                        "offer_type": "Theme Days",
                        "description": "Wear your Dodger Blue and get special discounts!"
                    }
                }
            ]
        }
    }
};

// Global variables
let allGames = [];
let filteredGames = [];

// DOM Elements
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('errorMessage');
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const monthFilter = document.getElementById('monthFilter');
const promotionFilter = document.getElementById('promotionFilter');
const refreshBtn = document.getElementById('refreshBtn');
const teamSelector = document.getElementById('teamSelector');

// Stats elements
const totalGamesElement = document.getElementById('totalGames');
const totalPromotionsElement = document.getElementById('totalPromotions');
const upcomingGamesElement = document.getElementById('upcomingGames');

// Header elements for dynamic updates
const teamNameElement = document.querySelector('.logo h1');
const venueElement = document.querySelector('.venue');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    populateTeamSelector();
    updateTeamBranding();
    loadData();
}

function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    monthFilter.addEventListener('change', handleFilter);
    promotionFilter.addEventListener('change', handleFilter);
    refreshBtn.addEventListener('click', refreshData);
    teamSelector.addEventListener('change', handleTeamChange);
}

function populateTeamSelector() {
    teamSelector.innerHTML = '';
    Object.entries(TEAMS).forEach(([teamId, team]) => {
        const option = document.createElement('option');
        option.value = teamId;
        option.textContent = team.name;
        if (parseInt(teamId) === currentTeam) {
            option.selected = true;
        }
        teamSelector.appendChild(option);
    });
}

function handleTeamChange() {
    const newTeamId = parseInt(teamSelector.value);
    if (newTeamId !== currentTeam) {
        currentTeam = newTeamId;
        updateTeamBranding();
        loadData();
    }
}

function updateTeamBranding() {
    const team = TEAMS[currentTeam];
    
    // Update header text
    teamNameElement.textContent = team.name;
    venueElement.textContent = team.venue;
    
    // Update CSS custom properties for team colors
    document.documentElement.style.setProperty('--team-primary', team.colors.primary);
    document.documentElement.style.setProperty('--team-secondary', team.colors.secondary);
    
    // Update page title
    document.title = `${team.name} - Game Promotions & Tickets`;
}

async function loadData() {
    showLoading();
    
    const apiUrl = generateApiUrl(currentTeam);
    
    try {
        // Try to fetch from the API first
        const response = await fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        processData(data);
        hideLoading();
        
    } catch (error) {
        console.warn(`Failed to fetch from API for team ${currentTeam}, using sample data:`, error);
        showError();
        processData(SAMPLE_DATA[currentTeam] || SAMPLE_DATA[114]);
        hideLoading();
    }
}

function processData(data) {
    if (data && data.events && data.events.game) {
        allGames = data.events.game;
        filteredGames = [...allGames];
        
        updateStats();
        populateFilters();
        renderGames();
    } else {
        console.error('Invalid data structure received');
        showError();
    }
}

function updateStats() {
    const totalGames = allGames.length;
    const totalPromotions = allGames.reduce((count, game) => {
        if (game.promotion) {
            if (Array.isArray(game.promotion)) {
                return count + game.promotion.length;
            } else {
                return count + 1;
            }
        }
        return count;
    }, 0);
    
    const now = new Date();
    const upcomingGames = allGames.filter(game => {
        const gameDate = new Date(game.game_date);
        return gameDate >= now;
    }).length;
    
    totalGamesElement.textContent = totalGames;
    totalPromotionsElement.textContent = totalPromotions;
    upcomingGamesElement.textContent = upcomingGames;
}

function populateFilters() {
    // Populate month filter
    const months = [...new Set(allGames.map(game => {
        const date = new Date(game.game_date);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }))].sort();
    
    monthFilter.innerHTML = '<option value="">All Months</option>';
    for (const month of months) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthFilter.appendChild(option);
    }
    
    // Populate promotion filter
    const promotionTypes = new Set();
    for (const game of allGames) {
        if (game.promotion) {
            const promotions = Array.isArray(game.promotion) ? game.promotion : [game.promotion];
            for (const promo of promotions) {
                if (promo.promotion_types) {
                    promotionTypes.add(promo.promotion_types);
                }
            }
        }
    }
    
    promotionFilter.innerHTML = '<option value="">All Promotions</option>';
    [...promotionTypes].sort().forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        promotionFilter.appendChild(option);
    });
}

function renderGames() {
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<div class="no-games">No games found matching your criteria.</div>';
        return;
    }
    
    gamesGrid.innerHTML = filteredGames.map(game => createGameCard(game)).join('');
}

function createGameCard(game) {
    const gameDate = new Date(game.game_date);
    const formattedDate = gameDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const gameTime = new Date(game.game_time_local).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    
    const promotions = game.promotion ? 
        (Array.isArray(game.promotion) ? game.promotion : [game.promotion]) : [];
    
    const promotionsHtml = promotions.length > 0 ? 
        promotions.map(promo => createPromotionHtml(promo)).join('') :
        '<div class="no-promotions">No special promotions for this game</div>';
    
    return `
        <div class="game-card">
            <div class="game-header">
                <div class="game-venue">${game.venue_name}</div>
                <div class="game-date">${formattedDate}</div>
                <div class="game-matchup">
                    ${game.home_name_team} vs ${game.away_name_team}
                </div>
                <div class="game-time">${gameTime}</div>
            </div>
            <div class="game-content">
                <div class="promotions">
                    <h4><i class="fas fa-gift"></i> Promotions & Special Events</h4>
                    ${promotionsHtml}
                </div>
                <div class="game-actions">
                    ${game.ticket_link?.tlink ? 
                        `<a href="${game.ticket_link.tlink}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-ticket-alt"></i>
                            Buy Tickets
                        </a>` : ''
                    }
                    <button class="btn btn-secondary" onclick="shareGame('${game.game_id || game.game_date}')">
                        <i class="fas fa-share"></i>
                        Share
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createPromotionHtml(promotion) {
    const imageHtml = promotion.image_url ? 
        `<img src="${promotion.image_url}" alt="${promotion.offer_name}" class="promotion-image" onerror="this.style.display='none'">` : '';
    
    return `
        <div class="promotion-item">
            ${imageHtml}
            <div class="promotion-type">${promotion.promotion_types || promotion.offer_type || 'Special Event'}</div>
            <div class="promotion-name">${promotion.offer_name || 'Special Promotion'}</div>
            ${promotion.description ? `<div class="promotion-description">${promotion.description}</div>` : ''}
            ${promotion.tlink ? `<a href="${promotion.tlink}" target="_blank" class="promotion-link">Learn More</a>` : ''}
        </div>
    `;
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    applyFilters(searchTerm);
}

function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    applyFilters(searchTerm);
}

function applyFilters(searchTerm = '') {
    const selectedMonth = monthFilter.value;
    const selectedPromotion = promotionFilter.value;
    
    filteredGames = allGames.filter(game => {
        // Search filter
        const matchesSearch = !searchTerm || 
            game.away_name_team?.toLowerCase().includes(searchTerm) ||
            game.home_name_team?.toLowerCase().includes(searchTerm) ||
            game.away_name_full?.toLowerCase().includes(searchTerm) ||
            game.home_name_full?.toLowerCase().includes(searchTerm) ||
            (game.promotion && JSON.stringify(game.promotion).toLowerCase().includes(searchTerm));
        
        // Month filter
        const gameMonth = new Date(game.game_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const matchesMonth = !selectedMonth || gameMonth === selectedMonth;
        
        // Promotion filter
        let matchesPromotion = !selectedPromotion;
        if (selectedPromotion && game.promotion) {
            const promotions = Array.isArray(game.promotion) ? game.promotion : [game.promotion];
            matchesPromotion = promotions.some(promo => 
                promo.promotion_types === selectedPromotion || promo.offer_type === selectedPromotion
            );
        }
        
        return matchesSearch && matchesMonth && matchesPromotion;
    });
    
    renderGames();
}

function refreshData() {
    const refreshIcon = refreshBtn.querySelector('i');
    refreshIcon.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
        refreshIcon.style.transform = 'rotate(0deg)';
    }, 300);
    
    loadData();
}

function shareGame(gameId) {
    const team = TEAMS[currentTeam];
    if (navigator.share) {
        navigator.share({
            title: `${team.name} Game`,
            text: `Check out this ${team.name} game!`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Game link copied to clipboard!');
        }).catch(() => {
            alert('Unable to share. Please copy the URL manually.');
        });
    }
}

function showLoading() {
    loadingElement.style.display = 'block';
    gamesGrid.style.display = 'none';
    errorElement.style.display = 'none';
}

function hideLoading() {
    loadingElement.style.display = 'none';
    gamesGrid.style.display = 'grid';
}

function showError() {
    errorElement.style.display = 'flex';
}

// Add some utility CSS for elements created dynamically
const style = document.createElement('style');
style.textContent = `
    .no-games {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        background: white;
        border-radius: 12px;
        color: #666;
        font-size: 1.1rem;
    }
    
    .promotion-link {
        color: var(--team-secondary, #c8102e);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        display: inline-block;
    }
    
    .promotion-link:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style); 