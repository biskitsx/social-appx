mongo:
	docker compose up -d mongo
server: mongo
	docker compose up -d server
client:
	docker compose up -d client
all: 
	docker compose up -d
# Path: Makefile
mongo-stop:
	docker compose stop mongo
server-stop:
	docker compose stop server
client-stop:
	docker compose stop client

# Path: Makefile
mongo-down:
	docker compose down mongo
server-down:
	docker compose down server
client-down:
	docker compose down client