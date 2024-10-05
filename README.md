# TRADEZI - A Virtual Trading Application
## An easier way to get into trading!


---

# Contents

---

1. **Abstract**
2. **Introduction**
3. **System Config**
4. **Experimental Setup**
    1. **System Design**
    2. **Front-end**
        1. **Pages** 
        2. **Components**
        3. **Styles**
        4. **Other Files**
    3. **Back-end**
        1. **User Module**
        2. **Stocks Module**
    4. **Source Code Management**
    5. **Application Build**
        1. **Front-end**
        2. **Back-end**
    6. **Testing**
    7. **Containerization**
    8. **Continuous Integration**
        1. **Front-end**
        2. **Back-end**
    9. **Continuous Deployment**
    10. **Continuous Monitoring**
        1. **Logging**
        2. **Logstash**
        3. **Elasticsearch**
        4. **Kibana**
5. **Results and Discussion**
    1. **Front-end**
    2. **Back-end**
6. **Scope for Future Work**
7. **Conclusion**
8. **References**

# Abstract

---

Investing is a way to set aside money while you are busy with life and have that money work for you so that you can fully reap the rewards of your labor in the future. The goal of investing is to put your money to work in one or more types of investment vehicles in the hopes of growing your money over time. But for beginners, investing directly into the share market with their hard-earned money might seem like a daunting task. 

With "Tradezi - A virtual trading platform", we are trying to make the process of entering the investment cycle a little easier by letting users invest in real stocks using virtual money. So with no risks attached of losing real money, users could invest the virtual money to buy stocks and build their portfolio. This would also allow them to learn the share market trends and investing strategies, all while having no risk of losing money.

In this project report, we would describe the complete DevOps pipeline that we followed to implement "Tradezi" and share the results of our implementation so far. Obviously, there would be scope for more future work but this project in its current state can be considered as a prototype.

# Introduction

---

DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development. DevOps involves a lot of different toolchains working together —

- Coding - development and review
- Building
- Testing - continuous testing
- Packaging - containerization
- Continuous integration
- Continuous deployment
- Monitoring

Our aim is towards building a trading application where people can buy and sell real stocks with real data but using virtual money. Every user will have a starting, fixed amount of funds to spend on buying stocks. This will allow the users to build their portfolio and learn various aspects of the share market without having to risk their hard-earned real money from the get-go.

We will be incorporating the above mentioned DevOps techniques for the development and deployment of our application, the details of which will be described in the following sections.

# System Config

---

**Operating system:** Ubuntu 18.04.04 Bionic Beaver.

**CPU and RAM:** 4 core processor and RAM 8 GB (preferable 16 GB)

**Language:**  JavaScript XML JSX, React web framework, Python, Flask framework

**Kernel Version:** Linux Machine 5.3.0-53-generic

**Database:** MySQL, SQLAlchemy

**Building tools:** npm

**DevOps Tools:**

- Source Control Management - GitHub
- Containerization - Docker
- Continuous Integration - Github Actions, Jenkins
- Continuous deployment - Ansible
- Monitoring - ELK Stack (Elastic Search, Logstash, Kibana)

# Experimental Setup

---

## ⇒ System Design

The entire system is developed using the concept of client-side rendering. In client side rendering the content is rendered on the browser using javascript. Here the client calls back-end API to fetch data and display it on the front-end. This technique helps in reducing the network load of sending the HTML files on each request and instead will only send necessary data in JSON format.

In our application, the back-end was developed using Flask and front-end using ReactJS. Flask is a python framework that helps building APIs. ReactJs is an open-source front-end JavaScript library for building user interfaces or UI components.

The front-end and the back-end are connected using APIs. The front-end makes request to the back-end API to serve its request. For example, for user sign_in, the front-end sends the credentials of the user to the back-end via an API where the back-end authenticates and sends authentication token to the front-end.

The entire system workflow diagram is shown below.

![System Design Diagram [[1](https://amlanscloud.com/apparchitecture/)]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc77ecbd-9b66-47c3-99e1-02cd0b2e737a/appcomponents.png)

System Design Diagram [[1](https://amlanscloud.com/apparchitecture/)]

## ⇒ Front-end

The front-end for Tradezi was developed using "ReactJS - A javascript library for building user-interfaces." With react, one can create encapsulated components which can manage their own state. And further, these components are reusable.

The structure of the React application is shown below —

```jsx
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── API.js
    ├── App.css
    ├── App.js
    ├── components
    │   ├── CandleStick.js
    │   ├── Header.js
    │   ├── Login.js
    │   ├── Overview.js
    │   ├── PortfolioStock.js
    │   ├── Routes.js
    │   ├── SidebarData.js
    │   ├── Sidebar.js
    │   ├── Stock.js
    │   └── TransactionPopUp.js
    ├── images
    │   └── AdobeStock_295042621.jpeg
    ├── index.js
    ├── pages
    │   ├── Portfolio.js
    │   └── Stocks.js
    └── styles
        ├── CandleStick.css
        ├── Header.css
        ├── Login.css
        ├── Overview.css
        ├── PortfolioStock.css
        ├── Routes.css
        ├── Sidebar.css
        ├── Stock.css
        └── TransactionPopUp.css
```

The react application is created using the command `npm create-react-app`. `npm` is the node package manager which is used to create javascript applications. `create-react-app` comes bundled with `npm`.

This creates the following files and folders — `public`, `src`, `package.json`, `package-lock.json`and the README file. The `public` folder contains the html template to render the react app. All the main code goes into the `src` folder. The `src` folder will be described in detail as follows —

### Pages

We have modeled our application as two pages —

1. Portfolio
    - This page shows the user details, fund-details, the stocks that the user currently has in their portfolio along with the ability to make transactions on those stocks.
    
    ```jsx
    // Portfolio page component
    	<div className="portfolio">
                <Header title="Portfolio" />
                <Overview userFunds={userFunds} userStockDetails={userStockDetails}/>
                <div className="portfolio-container">
                    {
                        userStocks.map((value, index) => {
                            return <PortfolioStock key={index} stockData={value} />
                        })
                    }
                </div>
            </div>
    ```
    
    - It uses the Overview and PortfolioStock components which are described in the next section.
    - API calls are made to get the stock details and the data is passed on to the appropriate components —
    
    ```jsx
    // User details API call
    const [userFunds, setUserFunds] = useState({});
        function getUserFunds(){
            return API.get(routes.user_details)
                .then(response => {
                    console.log("User Funds", response.data.funds);
                    setUserFunds(response.data.funds);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    
    // User stock details API call
        const [userStockDetails, setUserStockDetails] = useState({});
        const [userStocks, setUserStocks] = useState([]);
        function getUserStockDetails(){
            return API.get(routes.user_stock_details)
                .then(response => {
                    console.log("User Stock Details", response.data);
                    setUserStockDetails(response.data);
                    setUserStocks(response.data.stocks);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    ```
    
2. Stocks
    - This page displays all the stocks from NYSE in different pages.
    - There is a way to change page numbers are view more stocks, along with the ability to buy the given stocks.
    - API calls are made to get the raw stock data which is used to render the Stock component which will be discussed in the next section.
    
    ```jsx
    // Stocks details API call
    function getStocks(){
            //console.log("LOL");
            return API.get(routes.stocks + pageNumber)
                .then(response => {
                    console.log("Get stocks API call", response.data);
                    setStockData(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    ```
    

### Components

1. Login
    - This component deals with the landing page and the login/signup functionality for our app.
    - All the details related to the user — email, username, password, are gathered in this component and passed along to the appropriate components as props.
    
    ```jsx
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;
    ```
    
    - Functions to handle the login, signup and the errors associated with it are defined and used here.
2. Sidebar
    - This component implements the sidebar that is shown on the left side of the application once a user logs in.
    - It displays the application name, the navigation menu to the portfolio and stocks pages and a footer menu for settings and logout.
    - The API GET request is made using the route `user_details` to display the user name on the sidebar, which is defined as the react-hook `useState`.
    
    ```jsx
    function getUserDetails(){
            return API.get(routes.user_details)
                .then(response => {
                    console.log("User details", response.data);
                    setUserDetails(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    ```
    
3. Routes
    - This component uses the `react-router-dom` to create the navigation links for different sections in our application.
    - This component thus renders the links on the sidebar component.
    
    ```jsx
    <Router>
            <Sidebar handleLogout={handleLogout}/>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/portfolio" />)} />
                <Route path="/portfolio"  exact component={Portfolio} />
                <Route path="/stocks" component={Stocks} />
            </Switch>
    </Router>
    ```
    
4. Overview
    - This component is used in the portfolio section to display the user's funds details namely — funds, invested, current and balance details.
    - This component uses the react-bootstrap's card component.
    - The data is receives as props from one of its parent components.
    
    ```jsx
    	   <Card>
                      <Card.Body>
                        <Card.Title>Funds</Card.Title>
                        <Card.Text>
                            {funds}
                        </Card.Text>
                      </Card.Body>
                    </Card>
    ```
    
5. PortfolioStock
    - This component shows the stock that is currently present in a user's portfolio.
    - It displays the stock symbol, name, current price, purchase price, number of stocks bought and the balance.
    - It has a drop-down button which displays the candlestick chart of the stocks past year's history.
    - It also has a buy/sell button which allows the user to make a transaction on that stock.
    - Multiple API calls are made to obtain the relevant data for this component. This data is also passed on as props to the candlestick component.
    
    ```jsx
    // Stock history API call
    const [stockHistory, setStockHistory] = useState([]);
        function getHistory(){
            return API.get(routes.stocks_history + "symbol=" + symbol + "&years=1")
                .then(response => {
                    setStockHistory(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    
    // Stock current price API call
        const [currentPrice, setCurrentPrice] = useState(0);
        function getCurrentPrice(){
            return API.get(routes.current + symbol)
                .then(response => {
                    console.log("current", response.data.price);
                    setCurrentPrice(parseFloat(response.data.price).toFixed(2))
                })
                .catch(error => {
                    console.log(error);
                })
        }
    ```
    
6. Stock
    - This component is similar to the previous one, only thing is that this stock is not present in the user's portfolio so it doesn't have as many details.
7. CandleStick
    - This component contains the implementation for the candlestick chart that is displayed for any stock or portfolioStock.
    - It takes the stock data as a prop and converts it into OHLC (Open, high, low, close) format data as shown in the function below —
    
    ```jsx
    // Function to parse the JSON stock data into required OHLC format
        const convertToOHLC = (data) => {
            const converted = []
            var myDate = data.date;
            myDate = myDate.split("-");
            var newDate = new Date(myDate[2], myDate[0], myDate[1]);
            converted.push(newDate.getTime())
            const ohlc = []
    
            ohlc.push(data.open.toFixed(2));
            ohlc.push(data.high.toFixed(2));
            ohlc.push(data.low.toFixed(2));
            ohlc.push(data.close.toFixed(2));
            
            converted.push(ohlc);
            
            return converted;
        }
    ```
    
    - This component uses the react-bootstrap's chart component as a base. The state options and series are a bunch of configurations made such that an appropriate candlestick chart is generated. —
    
    ```jsx
    	<Chart
                className="candle-stick"
                options={state.options}
                series={state.series} 
                type="candlestick"
                height={350}
            />
    ```
    
    - The candlestick chart also comes with a tooltip which is convenient to navigate around the chart.
    
    ```jsx
    // Tooltip configuration
    	      xaxis: {
                    type: 'datetime',
                  },
                  yaxis: {
                    tooltip: {
                      enabled: true,
                    }
                  },
                  tooltip: {
                      theme: "dark"
                  }
    ```
    
8. TransactionPopUp
    - This is the pop-up component which pops up when the buy or sell button is pressed.
    - This component provides appropriate fields to the user to make transactions with the stocks.
    - The transaction API calls are made in this component —-
    
    ```jsx
    // Buy a stock API post request
    const buyStock = () => {
            var data = {
                stockSymbol : symbol,
                stockPrice : parseFloat(price),
                numOfStocks : parseInt(quantity),
                buy : 1 // for selling the stock, this is 0
            }
            API.post(routes.transaction, data)
                .then(res =>{
                    console.log(res);
                    setPopUpState(false);
                })
                .catch(err =>{
                    console.log(err);
                    setErrorMessage(err);
                })
            console.log("Buy");
        }
    ```
    

### Styles

This folder contains all the stylesheets for different components written separately for easy navigation and debugging. Extensive use of flexbox is done for seamless placement of components on the web page.

### Other files

1. index.js — ****This file contains the reactDOM renderer which renders the app as the root element in the web browser.
2. App.js — ****This file contains the actual application that has to be rendered. All the coded components eventually have to go through this file. Here the login component sets the user and the appropriate details are passed on as props.
3. API.js — This file contains the axios module code to allow us to make requests to the backend.
It contains various routes to access different types of data at various locations in the code as shown below —

```jsx
var routes = {
    sign_in: "/user/sign_in",
    sign_up: "/user/sign_up",
    user_details: "/user/details",
    user_stock_details: "user/stock_details",
    stocks: "/stocks/all?page=",
    current: "/stocks/current?symbol=",
    stocks_history: "/stocks/history?",
    transaction: "/stocks/transaction" 
};
```

## ⇒ Back-end

The back-end for the Tradezi app was developed using a micro web framework written in Python called **Flask**. Flask helps in building reliable, scalable, and maintainable web applications. With the help of Flask, we can easily build API endpoints to serve the front-end's requests. 

The structure of the Flask application is shown below.

```bash
.
├── app
│   ├── api.txt
│   ├── __init__.py
│   ├── logging.config
│   ├── server_config.py
│   ├── site.db
│   ├── stocks
│   │   ├── controller.py
│   │   ├── __init__.py
│   │   ├── model.py
│   │   └── routes.py
│   ├── test
│   │   └── test_app.py
│   ├── user
│   │   ├── auth.py
│   │   ├── controller.py
│   │   ├── firebase.py
│   │   ├── __init__.py
│   │   ├── model.py
│   │   └── routes.py
│   └── Utils.py
├── app.log
├── data
│   └── nyse.csv
├── Dockerfile
├── ELK
│   └── calculator_logstash.conf
├── Procfile
├── README.md
├── requirements.txt
└── server.py
```

 - [server.py](http://server.py) is file that needs to be executed to start the flask application.

 - directory `app` consists of server_config.py which contains all the necessary configurations and hashes for the application such as *SQLALCHEMY_DATABASE_URI, HASH_SALT, SECRET_KEY, JWT_SECRET_KEY.*

 - directory `app` also consists of 2 modules `stocks` and `user` . Both these modules consists of 3 files:

1. routes.py which contains all the API routes related to that module
2. controller.py which contains all the necessary functions/methods to be executed to handle a request
3. model.py which contains the database model for that module 

We follow MVC architecture, hence dividing each module into 3 parts helps in separating the application into 3 main logical components: routes, controller and model.

Described below is the working of the above mentioned 2 modules and its constituents.

### User Module

User module handles user related affairs such as signing in and signing out a user, provide details about the user, provide stocks bought by users etc. A detailed look is described further.

User module contains auth.py which handles the user authentication. The system is client side rendered, and hence authentication is bit different to what it is in server-side rendering. Here instead of sessions we have token. When a user logs in, an authentication token is embedded in the cookie in order to identify the user in subsequent requests. Cookie is saved by the browser and is set automatically by the browser on every request to that domain which is then decoded by the back-end to get user_id. We use **JWT**  to generate the token using the **JWT_SECRET_KEY in the** server_config.py ****as mentioned before.

```python
def generate_token(user_id):
		payload = {
		    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=2),
		    'iat': datetime.datetime.utcnow(),
		    'sub': user_id
		}
		return jwt.encode(
		    payload,
		    ServerConfig.JWT_SECRET_KEY,
		    'HS256'
		)

def decode_token(token):
		"""
		Decode token method
		"""
		re = {'data': {}, 'error': {}}
		try:
		    payload = jwt.decode(token, ServerConfig.JWT_SECRET_KEY, algorithms=["HS256"])
		    re['data'] = {'user_id': payload['sub']}
		    return re
		except jwt.ExpiredSignatureError as e1:
		    re['error'] = {'message': 'token expired, please login again'}
		    return re
		except jwt.InvalidTokenError:
		    re['error'] = {'message': 'Invalid token, please try again with a new token'}
		    return re
```

Next in the User module is the routes.py which contains all the user-related API endpoints. The list of API for the user module is shown below:

 1. Sign up route

```jsx
URL: /api/user/sign_up
METHOD: POST
PARAMS (JSON): "username", "name", "email", "password" 
AUTH-REQUIRED: YES
```

 2. Sign in route

```jsx
URL: /api/user/sign_in
METHOD: POST
PARAMS (JSON): "email", "password" 
AUTH-REQUIRED: YES
```

 3. User details route

```jsx
URL: /api/user/details
METHOD: GET
AUTH-REQUIRED: YES
```

 4. User stock details route

```jsx
URL: /api/user/stock_details
METHOD: GET
AUTH-REQUIRED: YES
```

All of the above routes require the token in the cookie header, hence the user needs to login first in-order to generate a token and access the above routes.

controller.py contains all the functions that are used by the routes to process the user's request. For example, for sign-up, the controller has a function that takes in the request parameters and creates a new user in the User table database.

model.py contains the DB columns for the User table in the database. Flask-SQLAlchemy automatically handles the SQL section.

```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String) # hashed
    email_verified = db.Column(db.Boolean, default=False)
    funds = db.Column(db.Integer, default=1000)

    sign_in_count = db.Column(db.Integer, default=0)

    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, default=datetime.utcnow)
```

### Stocks Module

Stock module handles stocks related affairs such as getting current stock price of a particular company, getting history data of a particular stock, perform and store stock transaction carries out  by a user. Detailed look on how such request are handled is further.

Like the User module, the Stock module contains routes.py that contains all the API endpoints for addressing any of the above requests. The list of API for the user module is shown below:

 1. Get current stock price of a company

```jsx
URL: /api/stocks/current?symbol={}
METHOD: GET
AUTH-REQUIRED: YES
```

2. Get current stock price of a company

```jsx
URL: /api/stocks/current?symbol={}
METHOD: GET
AUTH-REQUIRED: YES
```

3. Get historical stock price of a company

```jsx
URL: /api/stocks/history?symbol={}&yeas={}
METHOD: GET
AUTH-REQUIRED: YES
```

4. Perform a buy/sell stock transaction

```jsx
URL: /api/stocks/transaction
METHOD: POST
PARAMS (JSON): "stockSymbol", "stockPrice", "numOfStocks", "buy"
AUTH-REQUIRED: YES
```

5. Get list of companies and its current stock price

```jsx
URL: /api/stocks/all?page={}
METHOD: GET
AUTH-REQUIRED: YES
```

For preventing unauthorized access all the above API needs authentication, hence a user can only access them if they have signed in and generated the token.

controller.py contains all the functions that are used by the routes to process the user's request. TO get the stock price the controller uses Yahoo-Finance. Yahoo-Finance has a python library called **yfinance** which helps in collecting the stock price for a particular company. For example, to get the last 1-year stock data of a particular company, the code looks like this:

```python
import yfinance as yf

date_today = "{}-{}-{}".format(date.today().year, date.today().month, date.today().day)
date_start = "{}-{}-{}".format(date.today().year-1, date.today().month, date.today().day)
history = yf.download(symbol.upper(),date_start,date_today)
```

model.py contains the details about the columns of 2 DB tables; **Stock** and **Transaction.** The s**tock** table contains details about a company such as company name and stock symbol. **Transaction** table contains details of a particular transaction like the user_id, stock_id, stock_price when the stock was bought/sold, num_of_stocks bought/sold.

```python
class Stock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String, nullable=False)
    symbol = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, default=datetime.utcnow)

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    stock_id = db.Column(db.Integer, nullable=False)
    stock_price = db.Column(db.Integer, nullable=False)
    num_of_stocks = db.Column(db.Integer, nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, default=datetime.utcnow)
```

The transaction API mentioned above (/api/stock/transaction) logs all the transaction details into a particular row in the **Transaction** table. When a user buys a particular stock, the API creates a new row in the database with the appropriate details. When a user sells particular amount of stocks, the API uses the government regulated FIFO logic [[2](https://www.business-standard.com/article/pf/sell-shares-with-fifo-in-mind-110121900017_1.html#:~:text=If%20you%20are%20selling%20dematerialised%20shares%20of%20a%20company,system.)] to  remove the particular number of stocks from the user's account.

## ⇒ Source Code Management - *Git and Github*

**Git** is a distributed source control system which is a tool to manage the project's source code history. Distributed source control management systems take a peer-to-peer approach for version control of the project's source code. In this type of system, every developer has their own local file system which they can modify and commit the changes to a common repository for the project.

Whereas github ****is a web-based git file hosting service which enables developers to share their projects on. After registering as a user on github, developers can create their own repositories, view other developers repositories and work on open source projects.

For the tradezi app, the first step taken with respect to source control management was to initialize a git repository in the project folder as shown below —

```bash
$ git init
Initialized an empty Git repository in /home/advait/projects/.git/
```

Then a new repository was created on github by clicking the `new repository` button on the github home page. 

We created 2 new repositories named *Tradezi/Frontend* and *Tradezi/Backend* in the github account. 

This created repository is then added as an origin for the local initialized git repository to track the source code changes, through the following command —

```bash
$ git remote add origin https://github.com/Tradezi/Frontend.git
```

Similarly for the back-end repository.

All the changes to the source code would be added and committed to the local git repository through the following commands —

```bash
# This command will stage all the untracked files on the git repository
$ git add .

# This command will commit the staged changes onto the git repository
$ git commit -m "Message describing the changes"
```

After this, the committed changes will then be pushed onto the remote origin repository's main branch on github through the following command —

```bash
$ git push origin main
```

The github links for our application are as follows —

https://github.com/Tradezi/Frontend

https://github.com/Tradezi/Backend

## ⇒ Application Build

Back-end is running on python, hence for build we use virtual environment and requirement.txt. In order to build the application we need to setup a virtual environment and uses pip to install all the requirements as shown below.

```bash
# To generate requirement.txt
$ pip3 freeze >> requirements.txt

# Build Application
$ python3 -m venv tradezi-backend
$ source tradezi-backend/bin/activate
$ pip3 install -r requirements.txt
```

The front-end is a react app, so for running the development server one can simply put in the following command —

```jsx
$ npm install && npm start
```

And for building the site, the following command on execution builds an optimized version of the site and then it can be served locally —

```jsx
$ npm run build
$ serve build/
```

## ⇒ Testing

### Back-end

The testing of the entire application was done using python library called **Pytest.** Pytest helps in creating unit test for the application very easily. The entire system is hold together using APIs, the front-end is completely dependent on back-end APIs and hence the need to continuously test the working of APIs is very essential. Therefore using Pytest we test the APIs and check if they are working or not. Shown below are some of the unit tests.

```python
import math
import requests

def test_current_api():
    r = requests.get("http://localhost:5008/api/stocks/current?symbol=aapl")
    data = r.json()
    assert sorted(data) == sorted(['price', 'company', 'symbol'])

def test_history_api():
    r = requests.get("http://localhost:5008/api/stocks/history?symbol=aapl&years=1")
    data = r.json()
    assert type(data).__name__ == 'list'
    assert sorted(data[0]) == sorted(['date', 'close', 'open', 'high', 'low'])

def test_auth():
    r = requests.get("http://localhost:5008/api/user/details")
    data = r.json()
    assert data['error'] == 'Authentication token is not available, please login to get one'
```

The tests can be executed by command **pytest.**

```bash
$ pip3 install pytest
$ pytest
```

The results are shown below:

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1858d196-65ad-41fc-ac0c-633439b2ec28/Screenshot_from_2021-05-19_09-25-45.png

As we can see that the test passed and hence we can conclude that the API is working properly.

### Front-end

The front-end component testing was done using the **jest** testing framework.

Jest is a JavaScript Testing Framework with a focus on simplicity.

It works with projects using: [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/), [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/) and more!

We can install jest using npm —

```yaml
$ npm install jest
```

For writing the tests, we have to create a `test` folder and write all the tests in it. So if we write a test for the following function —

```jsx
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

The test for this would be written in a new file called `sum.js` —

```jsx
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

And for running the tests, we simply run the command —

```bash
$ npm test
```

## ⇒ Containerization

Containerization of an application is one of the key element for building an application successfully. With the help of container we can easily pack, ship, and run our Tradezi application as a lightweight, portable container, which can run virtually anywhere. Hence, it is important to containerize our application. We dot his with the help of tool Docker.

With the help of Docker we can easily containerize our application. In-order to do that we need to first create a Dockerfile which will contain all the necessary commands to assemble an image. As the backend is running on python we create the container with the base image as python:3.7.4-slim-buster. Dockerfile is shown below:

```docker
FROM python:3.7.4-slim-buster
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y supervisor

ADD . /usr/src/tradezi-backend
RUN pip install -r requirements.txt \
    && python manage.py db upgrade
CMD ["python","server.py"]
```

The Dockerfile for the front-end is as shown below —

```docker
FROM node

WORKDIR ./

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]
```

Once the Dockerfile is setup, the image can be build and run using the following commands:

```bash
$ docker build -t "name:tag"
$ docker images
$ docker run -i -t "name:tag"
```

The dockerhub link for our application is as follows —

https://hub.docker.com/repository/docker/advaitlonkar/tradezi

## ⇒ Continuous Integration

Continuous Integration (CI) is one of the most crucial step in the DevOps. With the help of CI, continuous building and testing of application happens autonomously and makes the code/application production ready. 

### Back-end

For continuous integration for back-end locally, we are using the open source called Jenkins tool. Jenkins tool makes CI very easy as it allows to build pipelines which contains combination of jobs, tasks, and events that are connected to each other in a sequence. Jenkins helps manage plugins and system configurations. Jenkins require a script which contains the stage by stage pipeline for the Jenkins to execute. The Jenkins file is shown below:

```bash
pipeline {
    environment{
        ImageName = ""
    }
    agent any
    stages {
        stage('Git pull') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/tradezi/backend'
            }
        }
        stage('Docker Build to Image') {
            steps {
                script{
                    ImageName = docker.build "tradezi/backend:latest"                    
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script{
                    docker.withRegistry('','dockerhub-credentials'){
                        ImageName.push()
                    }
                }
            }
        }
    }
}
```

Here we firstly pull the code from the remote GitHub repository and build the docker image. Once the docker image is pulled, the Jenkins is instructed to push the docker image to the Dockerhub. 

This CI pipeline is followed when we run the system on our local systems. For the global deployment of the backend we use platform as a service (PaaS) option, **Heroku.** Heroku provides its own continuous integration mechanism. In Heroku we can create pipeline and add the GitHub repo where it will automatically fetch code from the repo and automatically builds and tests it.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbaf6b93-a6f5-49f4-83ee-fd2152a4b140/Screenshot_from_2021-05-19_14-37-09.png

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/374466ae-3db9-47b0-ba5e-349b3c201eef/Screenshot_from_2021-05-19_14-39-42.png

### Front-end

For the continuous integration of the front-end, we are using the Actions features that github provides. Github Actions are an easy way of continuous integration by crating workflows using available templates for various projects present in the github marketplace. And once peculiar thing that distinguishes github actions from jenkins is that the code is directly pulled from github instead of making another pipeline item.

So, we create a build work flow as well as a containerization workflow using github actions.

The nodejs CI workflow is shown below —

```yaml
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

And the docker containerization and the pushing of it onto docker hub workflow is as shown below —

```yaml
name: CI to Docker hub 

on:
  push:
    branches: [ main ]

jobs:
      build:
        runs-on: ubuntu-latest
        
        steps:

          - name: Login to DockerHub

            uses: docker/login-action@v1 

            with:

              username: ${{ secrets.DOCKER_HUB_USERNAME }}

              password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}

          - name: Build and push

            id: docker_build

            uses: docker/build-push-action@v2

            with:

              context: ./

              file: ./Dockerfile

              push: true

              tags: advaitlonkar/tradezi:latest

          - name: Image digest

            run: echo ${{ steps.docker_build.outputs.digest }}
```

Once these build workflows are run on every push to the main branch, the application gets built, the docker image gets built and the image is pushed onto dockerhub which is as shown below —

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc7bc0cd-8f79-463d-9ec3-2a1ecf29ffef/dockerhub.png

For the global deployment of the front-end we use platform as a service (PaaS) option, Netlify. Netlify provides a platform where which we can deploy our application. Netlify offers its own continuous integration mechanism. 

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8369ff64-1254-429e-bcd9-55802e2c9e08/netlify.png

## ⇒ Continuous Deployment

Continuous Deployment (CD) is a software release process. It is a step further than continuous delivery. With this all the deployable code is passed to the production pipeline. CD facilitates release on demand and can automate this entire deployment process which allow organizations to focus on core business needs instead of infrastructure overhead.

For local deployment we use Ansible.

 Ansible is actually a configuration management (CM) tool which supports deployment as well. Ansible is all about automation and it is extremely easy to deploy through Ansible as it doesn’t depend on agent software and has no additional security infrastructure. Ansible uses very simple language (YAML, in the form of Ansible Playbooks) that allow you to describe your automation jobs in a way that approaches plain English. You can note down list of all hosts in an inventory file.

To setup ansible we create the inventory and playbook. File inventory contains the list of hosts and file deploy-image.yml contains task  to pull the docker image for all the hosts. File inventory and deploy-image.yml looks like

```yaml
localhost ansible_user=ronak
```

```yaml
---
- name: Pull docker image of Tradezi
  hosts: all
  tasks:
    - name: Pull image Tradezi
      docker_image:
        name: tradezi/backend
        source: pull
```

As this is completed, we append the Jenkins pipeline to automate the Ansible pull image process by adding the following stage in the Jenkins pipeline showed before

```yaml
stage('Ansible Pull Docker Image') {
            steps {
                ansiblePlaybook becomeUser: null, colorized: true, disableHostKeyChecking: true, installation: 'Ansible', 
											inventory: 'deploy/inventory', playbook: 'deploy/deploy-image.yml', sudoUser: null
            }
        }
```

For global deployment, we use Heroku to deploy the back-end and Netlify to deploy the front-end. 

Heroku provides continuous deployment options which makes CD very easy. In Heroku, once it fetches the code from the remote repository it initiates a build of the source application. The build mechanism is typically language-specific, but follows the same pattern, typically retrieving the specified dependencies, and creating any necessary assets. Heroku executes applications by running a command you specified in the Procfile, on a dyno. Procfile is shown below.

```yaml
web: gunicorn server:app
```

Gunicorn is a web server gateway interface (WSGI) that helps  the webserver handle multiple requests

Heroku gives the continuous deployment option as shown below. Hence as soon as code is pushed to the remote repository in GitHub, Heroku fetches the code, runs the CI pipeline as mentioned above, and deploys the application.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/727c823c-2084-44a0-833d-2a7bdb5d53cf/Screenshot_from_2021-05-19_14-40-58.png

And for the frontend application deployment, **Netlify** also provides the functionality to do so. Hence the CI pipeline mentioned in the previous section is run by Netlify and continuous deployment is also carried out.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f05c803-af78-4204-a900-c972f317887c/deploy.png

## ⇒ Continuous Monitoring

After deploying the application the most important part is monitoring of the application. Monitoring helps bringing in transparency of network activities and help identifying any security breach, and to mitigate the risk of cyber attacks. With monitoring performance issues can be easily detect and fixed. Hence monitoring is very important part of the pipeline. Monitoring is achieved using 3 tools which are together known as ELK stack.

• Elasticsearch is a search and analytics engine.

• Logstash is a server-side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a ”stash” like Elasticsearch.

• Kibana lets users visualize data with charts and graphs in Elasticsearch

Here logstash collects the log files generated from multiple host to a central location. Logstash then uses plugins such as grok, mutate, geoip, file, stdout and many more to structure out the unstructured data. It then passes it to the elasticsearch which helps in fast search for analytics. Kibana then uses this data to display it as some sort of visualization to make meaning out of it.

### Logging

Logging being the key element for monitoring, we use python library called **logging.** This library helps in easy formatting and logging of information and errors. This library requires a config file that contains the configurations like, log formats, filename etc. Config file is shown below:

```yaml
[loggers]
keys = root, debugLogger
[handlers]
keys = consoleHandler, debugFileHandler
[formatters]
keys = logFormatter
[logger_root]
level = DEBUG
handlers = consoleHandler
[logger_debugLogger]
level = DEBUG
handlers = consoleHandler, debugFileHandler
qualname = debugLogger
propagate = 0
[handler_consoleHandler]
class = StreamHandler
level = DEBUG
formatter = logFormatter
args = (sys.stdout,)
[handler_debugFileHandler]
class = handlers.RotatingFileHandler
level = DEBUG
formatter = logFormatter
args = ('./app.log',)
delay = False
backupcount = 10
maxbyte = 10000
[formatter_logFormatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
datefmt=
```

Methods *logging.info()* and *logging.error()* helps in logging error or info message. The generated log file is shown below:

```tsx
2021-04-27 11:44:54,475 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:45:46,465 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:46:18,421 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:46:19,681 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:47:28,465 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:47:28,804 - debugLogger - ERROR - path app/stocks/controller.py, line 145: 'BaseQuery' object has no attribute 'company_name'
2021-04-27 11:47:44,317 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:47:44,542 - debugLogger - ERROR - path app/stocks/controller.py, line 145: 'BaseQuery' object has no attribute 'company_name'
2021-04-27 11:47:46,198 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:47:46,395 - debugLogger - ERROR - path app/stocks/controller.py, line 145: 'BaseQuery' object has no attribute 'company_name'
2021-04-27 11:47:58,221 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:47:58,501 - debugLogger - ERROR - path app/stocks/controller.py, line 146: 'BaseQuery' object has no attribute 'company_name'
2021-04-27 11:48:37,788 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:48:38,142 - debugLogger - ERROR - path app/stocks/controller.py, line 146: 'NoneType' object has no attribute 'company_name'
2021-04-27 11:48:54,922 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:50:32,208 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:50:32,228 - debugLogger - ERROR - path app/stocks/controller.py, line 141: 'str' object has no attribute 'symbol'
2021-04-27 11:50:57,295 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:50:57,312 - debugLogger - ERROR - path app/stocks/controller.py, line 139: name 'company' is not defined
2021-04-27 11:51:05,378 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:51:05,398 - debugLogger - ERROR - path app/stocks/controller.py, line 139: name 'company' is not defined
2021-04-27 11:51:15,419 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:51:15,422 - debugLogger - ERROR - path app/stocks/controller.py, line 139: name 'company' is not defined
2021-04-27 11:51:24,816 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-04-27 11:51:24,816 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: gme
2021-04-27 11:51:15,422 - debugLogger - ERROR - path app/stocks/controller.py, line 139: name 'company' is not defined
2021-05-15 19:17:24,169 - debugLogger - ERROR - path app/stocks/controller.py, line 158: Object of type Response is not JSON serializable
2021-05-15 19:18:27,073 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-05-15 19:18:27,083 - debugLogger - ERROR - path app/stocks/controller.py, line 159: Object of type Response is not JSON serializable
2021-05-15 19:19:51,189 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-05-15 19:19:51,200 - debugLogger - ERROR - path app/stocks/controller.py, line 160: Object of type Response is not JSON serializable
2021-05-15 19:20:22,012 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-05-16 13:13:36,112 - debugLogger - ERROR - path app/stocks/routes.py, line 25: int() argument must be a string, a bytes-like object or a number, not 'NoneType'
2021-05-16 13:14:17,468 - debugLogger - INFO - /api/stocks/history => stock history of symbol: aapl, years: 1
2021-05-16 13:14:34,725 - debugLogger - INFO - /api/stocks/history => stock history of symbol: aapl, years: 1
2021-05-16 13:26:46,127 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-05-16 13:31:11,552 - debugLogger - INFO - /api/stocks/history => stock history of symbol: aapl, years: 1
2021-05-16 13:37:36,517 - debugLogger - INFO - /api/stocks/history => stock history of symbol: msft, years: 2
2021-05-16 13:37:52,954 - debugLogger - ERROR - path app/stocks/routes.py, line 25: int() argument must be a string, a bytes-like object or a number, not 'NoneType'
2021-05-16 13:44:08,478 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
2021-05-16 13:44:10,071 - debugLogger - INFO - /api/stocks/history => stock history of symbol: aapl, years: 1
2021-05-16 13:44:22,506 - debugLogger - INFO - /api/stocks/current => current stock price of symbol: aapl
```

### Logstash

Now that we have logs, we use logstash to collect and process the logs and send it to elasticsearch. Inorder to setup logstash we need to write the configuration file so that logstash can collect log files from all the hosts and use the plugins to structure the data accordingly. Config file is written according to the logs. According to my logfile format shown above,my config file is:

```tsx
input {
  file {
    path => "/home/ronak/Projects/Tradezi/backend/app.log"
    start_position => "beginning"
  }
}

filter {
  grok {
    match => [
      "message", "%{DATE_US:date} %{TIME:time} \- %{GREEDYDATA:thread} \- %{LOGLEVEL:level} \- %{GREEDYDATA:line}"
    ]
  }
  mutate {
    remove_field => [timestamp_string]
  }
}

output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
    index => "tradezi_elastic"
  }
  
  stdout {
    codec => rubydebug
  }
}
```

To start the logstash the command is shown below:

```bash
$ cd logstash-7.11.2
$ ./bin/logstash -f /home/ronak/Projects/Tradezi/backend/ELK/logstash.conf
```

### Elastic Search

Elasticsearch is a NoSQL database. It is based on Lucene search engine, and it is built with RESTful APIS. It offers simple deployment, maximum reliability, and easy management. It also offers advanced queries to perform detail analysis and stores all the data centrally. It is helpful for executing a quick search of the documents.

The processed logstash data is sent to elasticsearch which helps in quick filtering and searching of data for visualization.

Command to start elasticsearch is shown below:

```bash
$ cd elasticsearch-7.11.2
$ ./bin/elasticsearch
```

### Kibana

Kibana is a data visualization which completes the ELK stack. This tool is used for visualizing the Elasticsearch documents and helps developers to have a quick insight into it. Kibana dashboard offers various interactive diagrams, geospatial data, and graphs to visualize complex quires.

Command is start kibana is shown below:

```bash
$ cd kibana-7.11.2-linux-x86_64
$ ./bin/kibana
```

Kibana by default runs on port 5601. 

Kibana is an interactive tool which can be accessed on port 5601. Inorder to perform some visualizations on the logstash processed log data, we need to first register an index pattern as shown below.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/43f4ed42-112a-4a32-ab1a-32fb2c31332c/Screenshot_from_2021-05-19_17-06-45.png

Once we create a index pattern we can check the data on discover as shown below. We can see that all the logs are processed into keywords mentioned in the logstash config.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9229e53-bbb8-48fd-bbca-eca6800dbd7c/Screenshot_from_2021-05-19_17-08-14.png

Now inorder to perform visualization, we need to create a new dashboard. Here we can add keywords and visualize it in for of graph, charts etc. Shown below is the bar graph visualization of the numbers of errors and info messages in the log file.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2fbc1ffc-58ae-4dc5-93b0-9a5b7907d1a7/Screenshot_from_2021-05-19_17-09-36.png

Inorder to get a better understanding about the errors, we can diuble click on the error bar and get deeper look.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1453dc6-096b-4641-a05a-1f5330cf4f3f/Screenshot_from_2021-05-19_17-09-56.png

Now adding the keyword *line* which is nothing but the error message, gives us a better look on what error occurs the most and how to fix them inorder to provide better performance and experience.

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/472ebdcc-751f-4fb6-8eff-be7bb53f38b5/Screenshot_from_2021-05-19_17-10-49.png

# Result and Discussion

---

## ⇒ Front-end Results

![Landing Page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/acb9b063-d409-43c3-a3a8-f16164eaa259/login.png)

Landing Page

![Sidebar](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a66a4888-d52e-4acf-b0e6-7f7cfb408b19/Sidebar.png)

Sidebar

![Overview](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a00baa4c-ede3-48f7-a410-fb71274bd020/Overview.png)

Overview

![Stocks with candlestick chart and tool-tip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee658fa3-c2f9-47be-9d41-d37e613b9d44/Candlestick.png)

Stocks with candlestick chart and tool-tip

![Portfolio page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96fe967f-ceba-41a2-a96d-4b6755e787d7/Portfolio-page.png)

Portfolio page

![Stocks page 1](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54dccf4c-b358-428d-a7f1-e5d074a7d177/Stocks-page.png)

Stocks page 1

![Stocks page 4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4fe4164d-f96b-406c-b481-56fd24c03eb8/stocks-p4.png)

Stocks page 4

![Portfolio page with candlestick chart](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/099b43c8-95d1-4c9d-81ae-e8b5cbe66cd5/stocks-candle.png)

Portfolio page with candlestick chart

![Transaction pop-up for buying a stock](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a71cd3c8-29d4-4ebb-86c8-805ea746bbbd/buy-pop.png)

Transaction pop-up for buying a stock

![Transaction pop-up for selling a stock](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/968e2748-7f06-46d3-9d52-41c2e3dce102/sell-pop.png)

Transaction pop-up for selling a stock

## ⇒ Back-end API Results

1. Sign Up API
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/408bb6c5-aa73-4636-8c90-b07576b5fd7f/Screenshot_from_2021-05-18_21-00-34.png
    
2. Sign In API
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98389b2f-0777-42a6-89c2-352d4277886e/Screenshot_from_2021-05-18_21-02-57.png
    
3. User Details API
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c44862d-ac2a-46a2-8c7c-1bb8b01f8885/Screenshot_from_2021-05-18_21-01-32_(1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c44862d-ac2a-46a2-8c7c-1bb8b01f8885/Screenshot_from_2021-05-18_21-01-32_(1).png)
    
4. Get Stock Price History API
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d722ee7-4c12-48bf-8b02-1c5cae79ff43/Screenshot_from_2021-05-18_21-04-28.png
    
5. Get Current Stock Price API
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79b0cd94-b6f1-479d-bdcf-36d466f58d99/Screenshot_from_2021-05-18_21-04-46.png
    
6. Stock Transaction API
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36bc314c-8c94-449c-8cf2-eca868035f79/Screenshot_from_2021-05-18_21-06-49.png
    
7. User Stock Details API
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa8f85eb-95d0-4c73-9567-99968b52a438/Screenshot_from_2021-05-18_21-06-58.png
    

# Scope for Future

---

This project holds a great amount of value in the field of stock market and investments. With more features such as user sessions, leader board, stock suggestions, and stock market theory, it can become the ultimate guide towards equity investments. According to the data of 2020, less than 2% of the Indian population invest in the stock market whereas in the USA more than 55% of the population invests in the stock market. This tool will help people understand the behavior of the stock market and help them learn about investments. The simple UI and extremely user-friendly UX will allow even a non-technologist to explicate the insides of the stock market and in general about the role of investments in personal economic growth. 

# Conclusion

---

In the limited timeline for this project, we managed to build the application "Tradezi - An easier way to get into trading" incorporating the full DevOps pipeline. At the current stage, it is just a prototype of what we want the full-fledged application to be. The tools that we used are - Github , Github Actions, Docker, Ansible, Netlify and Heroku in various ways to achieve our DevOps pipeline.

With the established DevOps pipeline, it would be quite straightforward for us to develop it as a full-fledged application and to add more features mentioned in the previous section. We will continue to work on this project and hope to make it an end-to-end application which will serve its purpose to help people get into share market investing easily.

# Reference

---

1. Full System Architecture of my React-Flask App https://amlanscloud.com/apparchitecture/ 

2. How to Sell Stock With FIFO or LIFO | The Motley Fool [https://www.business-standard.com/article/pf/sell-shares-with-fifo-in-mind-110121900017_1.html#:~:text=If you are selling dematerialised shares of a company,system](https://www.business-standard.com/article/pf/sell-shares-with-fifo-in-mind-110121900017_1.html#:~:text=If%20you%20are%20selling%20dematerialised%20shares%20of%20a%20company,system).

