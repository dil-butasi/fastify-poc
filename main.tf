#
# Execute with:
# aws-vault exec dil-all-sandbox -- terraform init 
# aws-vault exec dil-all-sandbox -- terraform apply 
#
# Login with:
# docker login --username AWS --password $(aws-vault exec dil-all-sandbox -- aws ecr get-login-password --region us-west-2) 527731490107.dkr.ecr.us-west-2.amazonaws.com
#
# Package and push:
# make package
# make push
#


provider "aws" {
  region = "us-west-2"
}

resource "aws_ecr_repository" "main" {
  name = "stardust-fastify-poc"
  //image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }
}
