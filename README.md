# MLB Team Promotion Visualizer

A modern, responsive web application that visualizes MLB baseball game data for multiple teams, including promotions, ticket information, and game schedules from the official MLB ticketing API.

## Features

### 🎯 Core Functionality
- **Multi-Team Support**: Switch between Cleveland Guardians, Boston Red Sox, and Los Angeles Dodgers
- **Real-time Data**: Fetches live data from each team's ticketing API
- **Fallback Data**: Uses sample data when API is unavailable (CORS restrictions)
- **Game Cards**: Beautiful, interactive cards displaying game information
- **Promotion Details**: Comprehensive promotion information with images and descriptions
- **Ticket Links**: Direct links to purchase tickets for each game

### 🔍 Interactive Features
- **Team Selector**: Easy switching between supported MLB teams
- **Search**: Search games by team names, promotions, or other criteria
- **Filtering**: Filter by month and promotion type
- **Statistics**: Live stats showing total games, promotions, and upcoming games
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🎨 Design
- **Dynamic Team Branding**: Automatically updates colors and branding based on selected team
  - **Cleveland Guardians**: Navy blue (#0c2340) and red (#c8102e)
  - **Boston Red Sox**: Red (#bd3039) and navy (#0c2340)
  - **Los Angeles Dodgers**: Blue (#005a9c) and white (#ffffff)
- **Modern UI**: Clean, card-based layout with smooth animations
- **Team-Specific Theming**: Venue names and colors update dynamically
- **Accessibility**: Proper contrast ratios and semantic HTML

## Supported Teams

### Cleveland Guardians (Team ID: 114)
- **Venue**: Progressive Field, Cleveland
- **API Endpoint**: [Cleveland Guardians API](https://www.ticketing-client.com/ticketing-client/json/EventTicketPromotion.tiksrv?ticket_category=Tickets&team_id=114&home_team_id=114&recSP=1&site_section=Default&offer_group=SGTPG&price_group=default&begin_date=20250512&end_date=20251231&grouping_name=Default&display_if_past=false&leave_empty_games=true&ensure_array=game&ensure_array=non_game&tixDataAlways=true&removeNoPrice=false&displayIn=singlegame&begin_date_offset=-0&tz=America%2FNew_York&year=2025&sub_category=default&availability=false)

### Boston Red Sox (Team ID: 111)
- **Venue**: Fenway Park, Boston
- **API Endpoint**: [Boston Red Sox API](https://www.ticketing-client.com/ticketing-client/json/EventTicketPromotion.tiksrv?ticket_category=Tickets&team_id=111&home_team_id=111&recSP=1&site_section=Default&offer_group=SGTPG&price_group=Dynamic&begin_date=20250327&end_date=20251231&grouping_name=Default&display_if_past=false&leave_empty_games=true&ensure_array=game&ensure_array=non_game&tixDataAlways=true&removeNoPrice=false&displayIn=singlegame&year=2025&begin_date_offset=-0&tz=America%2FNew_York&availability=false)

### Los Angeles Dodgers (Team ID: 119)
- **Venue**: Dodger Stadium, Los Angeles
- **API Endpoint**: [Los Angeles Dodgers API](https://www.ticketing-client.com/ticketing-client/json/EventTicketPromotion.tiksrv?ticket_category=Tickets&team_id=119&home_team_id=119&recSP=1&site_section=Default&offer_group=SGTPG&price_group=Dynamic&begin_date=20250323&end_date=20251105&grouping_name=Default&display_if_past=false&leave_empty_games=false&ensure_array=game&ensure_array=non_game&tixDataAlways=true&removeNoPrice=false&displayIn=singlegame&year=2025&sub_category=default&begin_date_offset=-0&tz=America%2FLos_Angeles&availability=false)

## File Structure

```
├── index.html          # Main HTML structure with team selector
├── styles.css          # CSS with dynamic team theming
├── script.js           # JavaScript with multi-team support
└── README.md          # This documentation
```

## Getting Started

### Option 1: Simple File Opening
1. Download all files to a local directory
2. Open `index.html` in any modern web browser
3. The application will load and attempt to fetch live data

### Option 2: Local Server (Recommended)
For better CORS handling and development:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## How to Use

1. **Select a Team**: Use the team dropdown in the controls section
2. **Browse Games**: View upcoming games and promotions for the selected team
3. **Search & Filter**: Use the search box and filters to find specific games
4. **Buy Tickets**: Click "Buy Tickets" to go directly to the team's ticketing page
5. **Share Games**: Use the share button to share specific games

## Data Structure

The application expects data in this format for each team:

```json
{
  "events": {
    "game": [
      {
        "home_team_id": "114",
        "away_name_team": "Dodgers",
        "game_date": "2025-05-27",
        "game_time_local": "2025-05-27T18:10:00",
        "venue_name": "Progressive Field",
        "ticket_link": {
          "tlink": "https://mlb.tickets.com/..."
        },
        "promotion": {
          "offer_name": "Theme Night - Peanuts Night",
          "promotion_types": "Ticket Offer",
          "description": "Limited-edition bobblehead...",
          "image_url": "https://img.mlbstatic.com/..."
        }
      }
    ]
  }
}
```

## Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## Features Breakdown

### Team Selector
- **Dynamic Switching**: Instantly switch between supported teams
- **Automatic Theming**: Colors, venue names, and branding update automatically
- **Persistent Selection**: Selected team is maintained during the session

### Game Cards
Each game is displayed in a card containing:
- **Header**: Date, time, matchup, venue (with team-specific styling)
- **Promotions**: Special events, giveaways, theme nights
- **Actions**: Ticket purchase links and sharing options

### Search & Filtering
- **Text Search**: Search across team names and promotion details
- **Month Filter**: Filter games by specific months
- **Promotion Filter**: Filter by promotion types (Food, Fireworks, Kids Events, etc.)

### Statistics Dashboard
- **Total Games**: Count of all games in the dataset for selected team
- **Total Promotions**: Sum of all promotional events for selected team
- **Upcoming Games**: Games scheduled for future dates for selected team

## Customization

### Adding New Teams
To add support for additional MLB teams:

1. **Update TEAMS configuration** in `script.js`:
```javascript
const TEAMS = {
    // ... existing teams
    120: {
        name: "New Team Name",
        shortName: "Team",
        venue: "Stadium Name",
        city: "City",
        colors: { primary: "#color1", secondary: "#color2" },
        apiParams: {
            begin_date: "20250323",
            end_date: "20251105",
            price_group: "Dynamic"
        }
    }
};
```

2. **Add sample data** for the new team in the `SAMPLE_DATA` object

### Team Colors
The application uses CSS custom properties for dynamic theming:
- `--team-primary`: Main team color
- `--team-secondary`: Accent team color

These are automatically updated when switching teams.

## Error Handling

The application includes robust error handling:
- **CORS Issues**: Automatically falls back to sample data for each team
- **Network Errors**: Displays user-friendly error messages
- **Invalid Data**: Gracefully handles malformed API responses
- **Image Loading**: Hides broken promotion images

## Performance

- **Lazy Loading**: Images load only when needed
- **Efficient Filtering**: Client-side filtering for instant results
- **Minimal Dependencies**: Only uses external CDNs for fonts and icons
- **Dynamic API URLs**: Generates appropriate API endpoints for each team

## Development

### Adding New Features
1. **New Teams**: Add entries to the `TEAMS` configuration object
2. **Additional Data**: Extend the `createGameCard()` function
3. **Styling**: Modify CSS custom properties for team-specific theming

### API Integration
The application dynamically generates API URLs based on team configuration and includes team-specific parameters like timezone and date ranges.

## License

This project is for educational and demonstration purposes. MLB team names, logos, and trademarks are property of their respective organizations.

## Support

For issues or questions about this visualization tool, please check the browser console for error messages and ensure you have a stable internet connection for API data fetching. 