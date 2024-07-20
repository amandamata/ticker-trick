# Makefile for TickerTrick project

# Variables
BACKEND_DIR := ticker-trick-backend
FRONTEND_DIR := ticker-trick-frontend
ENV_FILE := .env
GO_CMD := go
NPM_CMD := npm

# Targets
.PHONY: all setup-backend setup-frontend setup run-backend run-frontend run clean

# Default target
all: setup run

# Setup backend
setup-backend:
	@echo "Setting up backend..."
	cd $(BACKEND_DIR) && $(GO_CMD) mod download
	@if [ ! -f $(BACKEND_DIR)/$(ENV_FILE) ]; then \
		cp $(BACKEND_DIR)/$(ENV_FILE).example $(BACKEND_DIR)/$(ENV_FILE); \
		echo "Please update $(BACKEND_DIR)/$(ENV_FILE) with your settings."; \
	fi

# Setup frontend
setup-frontend:
	@echo "Setting up frontend..."
	cd $(FRONTEND_DIR) && $(NPM_CMD) install

# Setup both backend and frontend
setup: setup-backend setup-frontend

# Run backend
run-backend:
	@echo "Running backend..."
	cd $(BACKEND_DIR) && $(GO_CMD) run main.go

# Run frontend
run-frontend:
	@echo "Running frontend..."
	cd $(FRONTEND_DIR) && PORT=3001 $(NPM_CMD) start

# Run both backend and frontend
run: 
	@echo "Running backend and frontend..."
	make -j 2 run-backend run-frontend

# Clean up
clean:
	@echo "Cleaning up..."
	cd $(BACKEND_DIR) && $(GO_CMD) clean
	cd $(FRONTEND_DIR) && $(NPM_CMD) clean
	rm -rf $(BACKEND_DIR)/$(ENV_FILE)

