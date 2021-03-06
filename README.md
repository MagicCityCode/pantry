# PantryBoss Frontend

This project was bootstrapped with [CRA](https://github.com/facebook/create-react-app).
<br></br>
<a href="https://reactjs.org" title="React"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="70" alt="React" /></a>
<a href="https://webpack.js.org" title="Webpack"><img src="https://day-journal.com/memo/images/logo/webpack.png" width="50" alt="Webpack" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://eslint.org" title="ESLint"><img src="https://avatars1.githubusercontent.com/u/6019716?s=400&v=4" width="45" alt="ESLint" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<!-- <a href="https://facebook.github.io/jest" title="Jest"><img src="https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/ivp5rb3l5uo7vlcam5kc.png" width="40" alt="Jest" /></a> -->

[Link to project's backend/API](https://github.com/MagicCityCode/pantry-api)

## ROUGH-DRAFT PROJECT PLAN

Overall good thoughts: https://github.com/elsewhencode/project-guidelines

### STACK

- React (create-react-app) - full-stack framework
  - https://www.codeinwp.com/blog/react-best-practices/
  - https://web.dev/react/
  - https://www.robinwieruch.de/react-libraries
  - https://github.com/airbnb/javascript/tree/master/react - Adding Airbnb style guide to project
- [Infima](https://facebookincubator.github.io/infima/)/Bootstrap - interface/CSS styling
- TypeScript/JS - https://react-typescript-cheatsheet.netlify.app/
- Python - for data / image-processing
- Node + Express.js
  - Production Ready - https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
  - Node Best Practices (1) - https://github.com/goldbergyoni/nodebestpractices#readme (now that I’ve reread parts of these, this is probably the best one, but all three are good reads. FYI - some of these “best practices” are only relevant to certain sized projects. What’s best for smaller code bases isn’t best for larger and vice-versa)
  - Node Best Practices (2) - https://www.codementor.io/@mattgoldspink/nodejs-best-practices-du1086jja
  - Express Best Practices - https://sematext.com/blog/expressjs-best-practices/
  - Error Handling - http://expressjs.com/en/guide/error-handling.html
  - Some security - https://www.freecodecamp.org/news/express-js-security-tips/
  - MVC - https://github.com/gnipbao/express-mvc-framework
- PostgreSQL; maybe supplement w/ MySQL // loop in Hunter on data-modeling, db / design
  - https://owasp.org/www-project-top-ten/
  - https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
  - Indexing - https://www.liquidweb.com/kb/mysql-optimization-how-to-leverage-mysql-database-indexing/
  - Best practices - https://365datascience.com/sql-best-practices/
  - Postgres stored procedures / nuances - https://www.educba.com/postgresql-stored-procedures/
- Git
  - Commits - https://www.conventionalcommits.org/en/v1.0.0/
  - Branching - https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
- Heroku deployment // maybe host via AWS & utilize Apache Kafka -- later
  - https://devcenter.heroku.com/articles/multiple-environments
  - https://medium.com/@successengineer/how-to-setup-heroku-with-godaddy-d8e936d10849
- CircleCI - automated code deploys
- Responsively - display preview

### NOT-MVP (ADDRESS LATER)

- Docker - maintain environment stability (potentially add to MVP...TBD)
- Jest & Enzyme - testing -- Create **Test** folder w/in each component’s directory housing .test files
- Redis - future caching performance
- AWS - special db storage needs
- Redux [Toolkit] - state mgmt
- Svelte/NextJS / splitting / performance

## SRS & SPRINT PLANNING / USER STORIES

- https://relevant.software/blog/software-requirements-specification-srs-document/#Why_is_an_SRS_Document_Important
- https://www.atlassian.com/agile/scrum/sprint-planning
- https://dev.to/redfred7/enough-with-the-user-stories-already-2a8a?ref=hackernoon.com

List through which to iterate when approaching each new feature:

- Map out/plan feature release
- Create “user stories” to plan behavior of feature
- Follow our agreed-upon Git workflow
- Automate if no conflicts, automatically merge
- Launch

### MVP - Automated kitchen pantry inventory app

- Spoonacular API
- Amazon Fresh API
  - Search for food
  - Add items to cart
  - Login with amazon
  - Local inventory sync
- USDA API - https://fdc.nal.usda.gov/api-guide.html#bkmk-2
  - Potentially integrate to augment data if deemed beneficial once Spoonacular fleshed out
  - Manually enter info when purchased, & input usage amts; deplete/delete items manually when used / thrown away via offsetting, negative transaction in input/order tbl
    - Food, size, food shelf life
  - Plan meals for the next 7 days
  - See possible meals available from current inventory
- User profile
  - Current food inventory
  - Meals planned for the week
  - Take photo of food evidence
  - Email receipt
    - Option 1 - https://www.simplifiedpython.net/how-to-extract-text-from-image-in-python/
    - Option 2 - https://developer.ibm.com/languages/python/tutorials/document-scanner/
    - Option 3 - https://docs.microsoft.com/en-us/azure/cognitive-services/form-recognizer/quickstarts/python-receipts?tabs=v2-0
  - Add tests before moving on from MVP to ideas

### IDEAS (reassess prioritization of below; currently arbitrary)

- Limit food options to specific diet eg “is this keto?”
  - Allergy-checker - Spoonacular should have this data
- Health profile, calories, etc.
- Keep track of wasted food, offer ideas on how to improve
  - Avg date best by, when something deleted out but not used, assumed wasted (ie expired/spoiled)
- AMZN, Walmart, [Kroger](https://developer.kroger.com/), [Shipt](https://staging-envoy.shipt.com/#section/Overview), any delivery service connected through API
- Reminders to order food, one button click to add to cart and order
- See meals you can make with the food you have and meals that are 1/2/etc ingredients away
- Plan your meals for the week and order the necessary food with one button click, or request reminder at the store with your grocery list
  - Aisle information?
  - Notification whenever you walk into a grocery store for what food you are low on, need for meals
    - To-do list
    - Strikethrough on click
    - Delete list after leaving store
    - Siri, Google Assistant integration
    - Get paid by products to recommend theirs over competitor
    - User metadata

### DATA (STATE)

#### _Inventory will be composite, derived solely from queries / secondary/T tables; review ETL_

1. User - email, password, ...AmazonLoginStatus
2. Food - food name, purchased date, used date, amount, food type, macro type, estimated “use-by” date
3. Meals - food name(s), amount(s), instructions
4. Order - status
5. For consideration:
   - Add ability for user to set avg inv lvls want to keep in stock off which to base reorder recommendations\_
   - _Later on, allow interfacing w/ order precise status through which to forecast precise availability rather than placeholder 3-day logic_
   - _Make a grocery list pg/view that auto-populates from in-need items but also allows manual editing/appending_
   - _Add barcode/UPC scan_
   - _Delineate (but default to most common) whether each food item is stored in freezer, pantry, fridge (have this dictate exp)_
   - _Track data of wasted food (uncooked prior to expiry)_

### BEHAVIOR (APP)

1. FEATURE: Photo food input
   - AS A user, I WANT to take a photo of my receipt, SO THAT my pantry inventory is updated
2. FEATURE: Amazon account sync
   - AS A user, I WANT to send needed food to Amazon cart, SO THAT I don’t have to pick up food myself
3. FEATURE: Personal kitchen/pantry inventory/profile
   - AS A user, I WANT to see the food I have in my house, SO THAT I can eat it when needed
   - AS A user, I WANT to have my food saved, SO THAT I do not have to manually reenter every time I use the app
   - AS A user, I WANT to be notified when food is depleted/expiration, SO THAT I can restock as needed
   - AS A user, I WANT to see all depleted foods as their own menu, SO THAT I know to order more food
   - AS A user, I WANT Amazon order one click away on depleted foods menu, SO THAT it’s fast
4. FEATURE: Available/planned meals
   - AS A user, I WANT to see the meals I can make from my inventory, SO THAT I can save time, $, effort, research, etc.

### LAYOUT (INTERFACE)

- Meals for the day
  - _Click meal_ Pulls up recipes
  - Notifies and fades 2 days ahead if not enough inventory
  - FEAT: No meal planned or not enough inventory - offer possible replacement meals
- Photo inventory
  - Toggle between fruits/veggie/etc. And protein/carbs/fat
    - _Click food item_ pull up food detail
  - FEAT: Depleted food list
  - _Click “add food” circle_ pulls up prompt - “Add food to amazon cart?” _click yes_ takes user to Amazon page with food in cart
  - Common food item has higher depletion rate
- Add food

  - _Click_ Pulls up camera with receipt taking instructions
    - Option to opt out of photo
    - Photo fills out manual form with option to update themselves

- Think about how to make any manual inputs/mods as easy for user; eg scrollable options rather than blanks into which must type from scratch
