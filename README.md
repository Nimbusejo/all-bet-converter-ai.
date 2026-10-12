# All Bet Converter AI — Free-first Build 2

A mobile-friendly website starter for a public betting-tools platform. This build is designed to start at no cost locally and can be deployed later to a free hosting tier if the provider's current terms support your needs.

## What works in this build
- Responsive dashboard for mobile and desktop.
- Bookmaker selection focused on SportyBet, 1xBet and Stake.
- Manual bet-slip shortlist and odds calculations.
- Match-analysis checklist based on information entered by the user.
- Odds-range filtering for saved selections.
- Node.js/Express API foundation with basic security headers and rate limiting.
- Health endpoint and honest status endpoints for integrations that are not connected.

## What does not work yet
- No live fixtures or live odds feed.
- No real bookmaker bet-code decoding or code creation.
- No validated AI prediction model.
- No user registration, password reset, saved accounts or subscriptions.
- No payment processing.
- The platform must not claim demo selections are live predictions.

## Run locally
1. Install Node.js 20 or newer.
2. Extract this project.
3. Open a terminal in the extracted `all_bet_converter_ai_free_build2` folder.
4. Run `npm install`.
5. Run `npm start`.
6. Open `http://localhost:3000` in a browser.

## Free-first launch path
1. Create a Git repository and upload the project files.
2. Choose a hosting provider with a free web-service tier available in your region, after checking current limits, sleeping behavior, bandwidth and terms.
3. Configure the service to run `npm start` and use the host-provided `PORT` environment variable.
4. Test `/api/health` after deployment.
5. Add a custom domain only when ready; domain registration usually costs money.
6. Do not add API keys until a data provider is selected. Keep secrets in the host's server-side environment settings, never in frontend files.

## Integration requirements
Before showing live data, select an authorized sports data/odds provider and verify its pricing, competition coverage, bookmaker coverage, redistribution permissions and update frequency. Generic odds access does not automatically permit cross-bookmaker code conversion. Code conversion needs a legitimate way to decode the source slip, match equivalent events/markets and generate/verify the destination slip.

## Security and responsible use
- Never collect bookmaker passwords.
- Keep API keys and payment secrets server-side.
- Add proper account/session security before storing user data.
- Add privacy terms, age/location restrictions and responsible-gambling information before public launch.
- Odds-derived implied probability is not an independent prediction and is not a guarantee of winning.
