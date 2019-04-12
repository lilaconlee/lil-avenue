# Lil Avenue 

A lil version of the game [Avenue](https://boardgamegeek.com/boardgame/205045/avenue) that deals farm and road cards. You'll need your own [player sheets](http://aportagames.com/Avenue_PlayWithRahdo.pdf). Bootstrapped from the lovely [create-react-app](https://github.com/facebook/create-react-app).

Designed specifically for the dimensions of an iPad Mini, but use elsewhere at your own risk.

## Development

To get things running locally:

1. Clone directory and install dependencies: `npm install`
2. `npm run start`
3. Visit http://localhost:3000

Testing:

All tests are currently Cypress e2e tests and can be viewed in interactive mode (`npm run cypress:open`) or run entirely in the terminal (`npm run cypress:run`). Before running tests, make sure the development server is running on `localhost:3000`.

Deployment:

`master` is automatically deployed to [https://happy-mahavira-1561b8.netlify.com/](https://happy-mahavira-1561b8.netlify.com/).

## Cards

Farm cards: A, B, C, D, E, and F

Yellow scoring road cards (22):
  Four of each: 1, 2, 3, and 4 (corner roads)
  Three of each: 5 and 6 (straight roads)

Gray road cards (20):
  Three of each: 1, 2, 3, and 4 (corner roads)
  Four of each: 5 and 6 (straight roads)
