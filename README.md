# TickerTrick

TickerTrick is a fun and interactive web application to fetch and display stock data for Brazilian companies. It consists of a Go-based backend to handle API requests and a React frontend to display the data.

## Project Structure

```plaintext
ticker-trick/
│
├── api-server/
│   ├── src/
│   ├── .env
│   └── main.go
│
├── web-client/
│   ├── src/
│   └── index.js
│
├── Makefile
└── README.md
```

## Setup

### Environment Variables
Create a .env file in the api-server directory with the following content:

```dotenv
TOKEN=yourtoken
ENVIROMENT=DEV
PORT=3000
FRONT_URL="http://localhost:3001"
PRD_DATASET_URL="https://brapi.dev/"
DEV_DATASET_URL="http://localhost:3002/"
```

Replace `yourtoken` with your actual API token. If you are using Docker Compose(bellow) or `make run-all`, it is not necessary to change the API key.

### Using Makefile
A Makefile is provided to automate the setup and running of the project.

#### Commands
1. Setup Backend and Frontend:
This command will download the Go dependencies for the backend and install the npm packages for the frontend.
```sh
make setup
```
2. Run all including mock server
```sh
make run-all
```
3. Run Backend:
This command will start the backend server:
```sh
make run-backend
```
4. Run Frontend:
This command will start the frontend development server:
```sh
make run-frontend
```
5. Run Backend and Frontend Together:
This command will start both the backend and frontend servers concurrently.
```sh
make run
```

### Docker Compose
To simplify the setup and execution of the local development environment, a Docker Compose configuration is provided. This allows you to easily start the dataset mock, and there is no need to obtain an API key from brapi.dev.

Running the Environment

You can run `make run-all`  (this will automatically download and start the mock server) or

Navigate to the project's root directory.
Run docker-compose up -d to start the services in the background:
```sh
docker compose -f setup/docker-compose.yaml up -d
```
To stop the services, use docker-compose down:
```sh
docker compose -f setup/docker-compose.yaml down
```

### Usage
1. Launch the Application:
Use the make run command to start both the backend and frontend. Open your browser and navigate to http://localhost:3001 to see the application in action.

2. Fetch Stock Data:
Enter the stock ticker symbol in the input field and click the button to fetch the latest stock data.

### Development
#### Backend
The backend is built with Go and is responsible for fetching stock data from the BRAPI API.

#### Frontend
The frontend is built with React and displays the stock data in an interactive chart.
