.PHONY: image

APP_NAME = $(shell node -e "pkg = require('./package'); console.log(pkg.name)")
APP_VERSION = $(shell node -e "pkg = require('./package'); console.log(pkg.version)")

image:
	docker build -t ${APP_NAME}:${APP_VERSION} .
