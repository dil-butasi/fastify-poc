build:
	npm run build

package:
	docker build . -t stardust-fastify-poc:latest
	docker tag stardust-fastify-poc:latest 527731490107.dkr.ecr.us-west-2.amazonaws.com/stardust-fastify-poc:latest

push:
	docker push 527731490107.dkr.ecr.us-west-2.amazonaws.com/stardust-fastify-poc:latest
